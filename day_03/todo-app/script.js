// ---------- Storage ----------
const STORAGE_KEY = 'ledger.tasks.v1';

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load tasks from Local Storage:', e);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks to Local Storage:', e);
  }
}

// ---------- State ----------
let tasks = loadTasks();
let currentFilter = 'all';
let editingId = null;

// ---------- Elements ----------
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskPriority = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const tally = document.getElementById('tally');
const filterTabs = document.getElementById('filterTabs');
const clearDoneBtn = document.getElementById('clearDone');
const todayDateEl = document.getElementById('todayDate');

const editDialog = document.getElementById('editDialog');
const editForm = document.getElementById('editForm');
const editInput = document.getElementById('editInput');
const editPriority = document.getElementById('editPriority');
const cancelEditBtn = document.getElementById('cancelEdit');

// ---------- Helpers ----------
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) +
    ' · ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ---------- CRUD ----------
function addTask(text, priority) {
  tasks.unshift({
    id: uid(),
    text: text.trim(),
    priority,
    done: false,
    createdAt: new Date().toISOString(),
  });
  persist();
}

function updateTask(id, updates) {
  tasks = tasks.map(t => (t.id === id ? { ...t, ...updates } : t));
  persist();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  persist();
}

function clearDone() {
  tasks = tasks.filter(t => !t.done);
  persist();
}

function persist() {
  saveTasks(tasks);
  render();
}

// ---------- Render ----------
function render() {
  const filtered = tasks.filter(t => {
    if (currentFilter === 'open') return !t.done;
    if (currentFilter === 'done') return t.done;
    return true;
  });

  taskList.innerHTML = '';

  filtered.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.dataset.id = task.id;

    li.innerHTML = `
      <span class="task-index">${String(index + 1).padStart(2, '0')}</span>
      <input type="checkbox" class="task-check" ${task.done ? 'checked' : ''} aria-label="Mark ${task.done ? 'open' : 'settled'}" />
      <div class="task-main">
        <div class="task-text">${escapeHtml(task.text)}</div>
        <div class="task-meta">
          <span class="priority-tag ${task.priority}">${task.priority}</span>
          <span class="task-date">${formatDate(task.createdAt)}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="icon-btn edit-btn" title="Edit">Edit</button>
        <button class="icon-btn danger delete-btn" title="Delete">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  const openCount = tasks.filter(t => !t.done).length;
  const doneCount = tasks.filter(t => t.done).length;
  tally.textContent = `${openCount} open · ${doneCount} settled`;

  emptyState.classList.toggle('visible', filtered.length === 0);
  emptyState.querySelector('.empty-title').textContent =
    tasks.length === 0 ? 'The ledger is blank.' : 'Nothing matches this view.';
  emptyState.querySelector('.empty-copy').textContent =
    tasks.length === 0
      ? "Add your first entry above to open today's page."
      : 'Try a different filter.';
}

// ---------- Events ----------
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  addTask(text, taskPriority.value);
  taskInput.value = '';
  taskInput.focus();
});

taskList.addEventListener('click', (e) => {
  const li = e.target.closest('.task-item');
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.classList.contains('delete-btn')) {
    deleteTask(id);
  } else if (e.target.classList.contains('edit-btn')) {
    openEditDialog(id);
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('task-check')) {
    const li = e.target.closest('.task-item');
    const id = li.dataset.id;
    updateTask(id, { done: e.target.checked });
  }
});

filterTabs.addEventListener('click', (e) => {
  if (!e.target.classList.contains('tab')) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  currentFilter = e.target.dataset.filter;
  render();
});

clearDoneBtn.addEventListener('click', () => {
  if (tasks.some(t => t.done)) clearDone();
});

// ---------- Edit dialog ----------
function openEditDialog(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  editingId = id;
  editInput.value = task.text;
  editPriority.value = task.priority;
  editDialog.hidden = false;
  editInput.focus();
}

function closeEditDialog() {
  editDialog.hidden = true;
  editingId = null;
}

editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = editInput.value.trim();
  if (!text || !editingId) return;
  updateTask(editingId, { text, priority: editPriority.value });
  closeEditDialog();
});

cancelEditBtn.addEventListener('click', closeEditDialog);

editDialog.addEventListener('click', (e) => {
  if (e.target === editDialog) closeEditDialog();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !editDialog.hidden) closeEditDialog();
});

// ---------- Init ----------
todayDateEl.textContent = new Date().toLocaleDateString(undefined, {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

render();
