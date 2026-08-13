import React from "react";
import { Link } from "react-router-dom";

const statusColors = {
  Pending: "#e67e22",
  "In Progress": "#2980b9",
  Completed: "#27ae60",
};

const priorityColors = {
  Low: "#95a5a6",
  Medium: "#f39c12",
  High: "#e74c3c",
};

function TaskItem({ task, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <span
          className="badge"
          style={{ backgroundColor: statusColors[task.status] || "#7f8c8d" }}
        >
          {task.status}
        </span>
      </div>

      {task.description && <p className="task-description">{task.description}</p>}

      <div className="task-meta">
        <span
          className="badge priority-badge"
          style={{ backgroundColor: priorityColors[task.priority] || "#7f8c8d" }}
        >
          {task.priority} priority
        </span>
        {task.dueDate && (
          <span className="due-date">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>

      <div className="task-actions">
        <Link to={`/edit/${task._id}`} className="btn btn-edit">
          Edit
        </Link>
        <button className="btn btn-delete" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
