const Tasks = require("../data/tasks");

const VALID_STATUS = ["todo", "in-progress", "done"];
const VALID_PRIORITY = ["low", "medium", "high"];
const PALETTE = ["#FF6B6B", "#4ECDC4", "#FFD166", "#6A4C93", "#1B9AAA", "#F72585"];

// GET /api/tasks
exports.getAllTasks = (req, res) => {
  const { status, priority } = req.query;
  let results = Tasks.getAll();

  if (status) results = results.filter((t) => t.status === status);
  if (priority) results = results.filter((t) => t.priority === priority);

  res.status(200).json({ success: true, count: results.length, data: results });
};

// GET /api/tasks/:id
exports.getTaskById = (req, res) => {
  const task = Tasks.getById(Number(req.params.id));
  if (!task) {
    return res.status(404).json({ success: false, message: `Task with id ${req.params.id} not found` });
  }
  res.status(200).json({ success: true, data: task });
};

// POST /api/tasks
exports.createTask = (req, res) => {
  const { title, description, status = "todo", priority = "medium" } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ success: false, message: "Field 'title' is required and must be a string" });
  }
  if (status && !VALID_STATUS.includes(status)) {
    return res.status(400).json({ success: false, message: `'status' must be one of: ${VALID_STATUS.join(", ")}` });
  }
  if (priority && !VALID_PRIORITY.includes(priority)) {
    return res.status(400).json({ success: false, message: `'priority' must be one of: ${VALID_PRIORITY.join(", ")}` });
  }

  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const newTask = Tasks.add({ title, description: description || "", status, priority, color });
  res.status(201).json({ success: true, data: newTask });
};

// PUT /api/tasks/:id
exports.updateTask = (req, res) => {
  const id = Number(req.params.id);
  const existing = Tasks.getById(id);
  if (!existing) {
    return res.status(404).json({ success: false, message: `Task with id ${id} not found` });
  }

  const { status, priority } = req.body;
  if (status && !VALID_STATUS.includes(status)) {
    return res.status(400).json({ success: false, message: `'status' must be one of: ${VALID_STATUS.join(", ")}` });
  }
  if (priority && !VALID_PRIORITY.includes(priority)) {
    return res.status(400).json({ success: false, message: `'priority' must be one of: ${VALID_PRIORITY.join(", ")}` });
  }

  const updated = Tasks.update(id, req.body);
  res.status(200).json({ success: true, data: updated });
};

// DELETE /api/tasks/:id
exports.deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const removed = Tasks.remove(id);
  if (!removed) {
    return res.status(404).json({ success: false, message: `Task with id ${id} not found` });
  }
  res.status(200).json({ success: true, message: `Task ${id} deleted successfully` });
};
