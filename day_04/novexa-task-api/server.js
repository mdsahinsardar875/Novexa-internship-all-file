const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route — quick sanity check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Novexa Task Manager REST API is running",
    endpoints: {
      "GET /api/tasks": "Get all tasks (supports ?status= and ?priority= filters)",
      "GET /api/tasks/:id": "Get a single task by id",
      "POST /api/tasks": "Create a new task",
      "PUT /api/tasks/:id": "Update an existing task",
      "DELETE /api/tasks/:id": "Delete a task"
    }
  });
});

// Mount task routes
app.use("/api/tasks", taskRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong on the server" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
