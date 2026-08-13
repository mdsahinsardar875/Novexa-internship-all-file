// In-memory dataset — resets whenever the server restarts.
// Each task has an id, title, description, status, priority and a color tag
// (used purely for the front-end preview to keep the board colourful).

let tasks = [
  {
    id: 1,
    title: "Design database schema",
    description: "Plan out the tables/collections needed for the task manager.",
    status: "done",
    priority: "high",
    color: "#FF6B6B",
    createdAt: "2026-08-01T09:00:00Z"
  },
  {
    id: 2,
    title: "Build Express server",
    description: "Set up server.js with middleware and route mounting.",
    status: "in-progress",
    priority: "high",
    color: "#4ECDC4",
    createdAt: "2026-08-02T10:30:00Z"
  },
  {
    id: 3,
    title: "Write Postman collection",
    description: "Document every endpoint with example requests.",
    status: "in-progress",
    priority: "medium",
    color: "#FFD166",
    createdAt: "2026-08-03T14:15:00Z"
  },
  {
    id: 4,
    title: "Add input validation",
    description: "Validate request bodies before writing to the dataset.",
    status: "todo",
    priority: "medium",
    color: "#6A4C93",
    createdAt: "2026-08-04T08:45:00Z"
  },
  {
    id: 5,
    title: "Deploy to GitHub",
    description: "Push source code, README and screenshots to a repo.",
    status: "todo",
    priority: "low",
    color: "#1B9AAA",
    createdAt: "2026-08-05T16:20:00Z"
  }
];

let nextId = 6;

module.exports = {
  getAll: () => tasks,
  getById: (id) => tasks.find((t) => t.id === id),
  add: (task) => {
    const newTask = { id: nextId++, createdAt: new Date().toISOString(), ...task };
    tasks.push(newTask);
    return newTask;
  },
  update: (id, updates) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...updates, id };
    return tasks[index];
  },
  remove: (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  }
};
