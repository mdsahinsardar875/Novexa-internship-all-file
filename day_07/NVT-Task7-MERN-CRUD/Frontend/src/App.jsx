import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Task Management System</h1>
        <p>Novexa Technologies — MERN Stack CRUD Application</p>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>Task 7 — Full-Stack CRUD Application Using MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;
