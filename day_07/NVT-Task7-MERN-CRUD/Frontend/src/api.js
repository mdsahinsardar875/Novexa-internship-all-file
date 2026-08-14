import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getTasks = (query = "") => api.get(`/${query}`);
export const getTask = (id) => api.get(`/${id}`);
export const createTask = (data) => api.post("/", data);
export const updateTask = (id, data) => api.put(`/${id}`, data);
export const deleteTask = (id) => api.delete(`/${id}`);

export default api;
