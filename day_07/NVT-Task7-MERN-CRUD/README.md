# Task 7 — Full-Stack CRUD Application Using MERN Stack

**Novexa Technologies — Full Stack Development Internship**

A complete Task Management System built with **MongoDB, Express.js, React.js, and Node.js** (MERN). Users can create, read, update, and delete tasks, each with a status, priority, and due date.

---

## 📁 Project Structure

```
NVT-Task7-MERN-CRUD/
├── Backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js   # CRUD logic + validation/error handling
│   ├── models/
│   │   └── Task.js             # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js       # REST API routes
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Express app entry point
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx    # Add / Edit form
│   │   │   ├── TaskItem.jsx    # Single task card
│   │   │   └── TaskList.jsx    # Task list, search & filter
│   │   ├── api.js              # Axios API layer
│   │   ├── App.jsx             # Routes
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── API_Documentation.md
└── README.md
```

---

## 🛠️ Tech Stack

- **MongoDB** — database (Atlas or local)
- **Express.js** — REST API framework
- **React.js** (via Vite) — frontend UI
- **Node.js** — backend runtime
- **Axios** — HTTP client
- **React Router** — client-side routing

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) and npm installed
- A MongoDB database — either [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier) or MongoDB Community Edition installed locally

### 1. Backend Setup

```bash
cd Backend
npm install
cp .env.example .env
# edit .env and set MONGO_URI to your MongoDB connection string
npm run dev        # starts on http://localhost:5000 (uses nodemon)
# or: npm start
```

### 2. Frontend Setup

Open a **second terminal**:

```bash
cd Frontend
npm install
cp .env.example .env
# defaults already point to http://localhost:5000/api/tasks
npm run dev         # starts on http://localhost:3000
```

Then open **http://localhost:3000** in your browser.

---

## ✨ Features

- Create, view, update, and delete tasks
- Each task has: title, description, status (Pending / In Progress / Completed), priority (Low / Medium / High), and an optional due date
- Filter tasks by status and search by title
- Server-side validation (title length, allowed status/priority values) with clear error messages
- Clean REST API following standard HTTP status codes (`200`, `201`, `400`, `404`, `500`)
- Responsive UI that works on mobile and desktop

---

## 🔌 REST API Overview

| Method | Endpoint          | Description        |
|--------|-------------------|---------------------|
| POST   | `/api/tasks`      | Create a new task   |
| GET    | `/api/tasks`      | Get all tasks (supports `?status=` and `?search=`) |
| GET    | `/api/tasks/:id`  | Get a single task   |
| PUT    | `/api/tasks/:id`  | Update a task       |
| DELETE | `/api/tasks/:id`  | Delete a task       |

Full request/response examples are in [`API_Documentation.md`](./API_Documentation.md).

---

## 🧠 Interview Questions Related to This Task

**What is the MERN Stack?**
MERN is a JavaScript full-stack combination — **M**ongoDB (NoSQL database), **E**xpress.js (backend web framework), **R**eact.js (frontend UI library), and **N**ode.js (JavaScript runtime for the server). Because all layers use JavaScript, developers can work across the entire stack with one language.

**What is React.js?**
A JavaScript library for building user interfaces out of reusable, declarative components. It uses a component-based architecture and a virtual DOM to efficiently update the UI when data changes.

**What is Express.js?**
A minimal, unopinionated web framework for Node.js used to build REST APIs and web servers. It provides routing, middleware support, and simplifies handling HTTP requests/responses (used here for all `/api/tasks` routes).

**What is Axios?**
A promise-based HTTP client for the browser and Node.js. It's used in this project's frontend (`src/api.js`) to send requests (GET, POST, PUT, DELETE) to the Express backend and handle responses/errors more conveniently than the native `fetch` API.

**What is React Router?**
A routing library for React that enables client-side navigation between views (e.g., the task list, add-task form, and edit-task form in this app) without full page reloads, keeping the UI in sync with the URL.

**What is the Virtual DOM?**
An in-memory, lightweight representation of the real DOM that React uses to determine the minimal set of changes needed after a state update. React compares ("diffs") the new virtual DOM tree with the previous one and only applies the necessary changes to the real DOM, which improves performance over direct DOM manipulation.

---

## 📤 Submission

This project fulfills the deliverables for **Task 7: Full-Stack CRUD Application Using MERN Stack**:
- ✅ Full-Stack MERN Application
- ✅ Frontend (React.js)
- ✅ Backend (Node.js & Express.js)
- ✅ MongoDB Database (schema + connection)
- ✅ API Documentation (`API_Documentation.md`)
- ✅ This README

> Note: `node_modules/` is not included in this package — run `npm install` in both `Backend/` and `Frontend/` as described above before running the project. When pushing to GitHub, keep the two-folder structure and this README at the repo root.
