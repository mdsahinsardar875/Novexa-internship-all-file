import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask } from "../api";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append("status", statusFilter);
      if (search) params.append("search", search);
      const query = params.toString() ? `?${params.toString()}` : "";
      const res = await getTasks(query);
      setTasks(res.data.data);
    } catch (err) {
      setError("Failed to load tasks. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      alert("Failed to delete task.");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchTasks();
  };

  return (
    <div className="task-list-container">
      <div className="toolbar">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <Link to="/add" className="btn btn-primary">
          + Add Task
        </Link>
      </div>

      {loading && <p className="info-text">Loading tasks...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && tasks.length === 0 && (
        <p className="info-text">No tasks found. Create your first task!</p>
      )}

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
