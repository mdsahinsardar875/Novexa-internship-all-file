import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, createTask, updateTask } from "../api";

const initialState = {
  title: "",
  description: "",
  status: "Pending",
  priority: "Medium",
  dueDate: "",
};

function TaskForm() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      getTask(id)
        .then((res) => {
          const task = res.data.data;
          setForm({
            title: task.title || "",
            description: task.description || "",
            status: task.status || "Pending",
            priority: task.priority || "Medium",
            dueDate: task.dueDate ? task.dueDate.substring(0, 10) : "",
          });
        })
        .catch(() => setError("Failed to load task details."))
        .finally(() => setLoading(false));
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.title.trim().length < 3) {
      setError("Title must be at least 3 characters long.");
      return;
    }

    try {
      const payload = { ...form };
      if (!payload.dueDate) delete payload.dueDate;

      if (isEditMode) {
        await updateTask(id, payload);
      } else {
        await createTask(payload);
      }
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  if (loading) return <p className="info-text">Loading...</p>;

  return (
    <div className="form-container">
      <h2>{isEditMode ? "Edit Task" : "Add New Task"}</h2>
      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Title *
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={100}
            placeholder="e.g. Finish project report"
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={500}
            rows={4}
            placeholder="Optional details about the task"
          />
        </label>

        <div className="form-row">
          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>

          <label>
            Priority
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label>
            Due Date
            <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditMode ? "Update Task" : "Create Task"}
          </button>
          <button type="button" className="btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
