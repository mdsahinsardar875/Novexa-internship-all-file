# 🚀 Novexa Task Manager REST API

A RESTful API built with **Node.js** and **Express.js** as part of Novexa Technologies' Full Stack Development internship — **Task 4: RESTful API Development with Node.js and Express.js**.

The API manages an in-memory collection of **Tasks**, each with a title, description, status, and priority, and supports full **CRUD** (Create, Read, Update, Delete) operations.

---

## 📁 Project Structure

```
novexa-task-api/
├── server.js                 # App entry point
├── package.json
├── routes/
│   └── tasks.js               # Route definitions
├── controllers/
│   └── taskController.js      # Request handlers / business logic
├── data/
│   └── tasks.js                # In-memory dataset + data-access helpers
├── postman/
│   └── Novexa-Task-API.postman_collection.json
├── API_DOCUMENTATION.md
└── README.md
```

---

## 🛠️ Tools Used

- Node.js
- Express.js
- Postman (for testing)
- Visual Studio Code
- Git & GitHub

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd novexa-task-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start        # plain node
   # or
   npm run dev       # nodemon, auto-restarts on file changes
   ```

4. The API will be available at:
   ```
   http://localhost:5000
   ```

---

## 📡 API Endpoints

| Method | Endpoint            | Description                              |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/tasks`          | Get all tasks (supports `?status=` & `?priority=` filters) |
| GET    | `/api/tasks/:id`      | Get a single task by id                  |
| POST   | `/api/tasks`           | Create a new task                        |
| PUT    | `/api/tasks/:id`      | Update an existing task                  |
| DELETE | `/api/tasks/:id`      | Delete a task                            |

Full request/response examples are in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md).

---

## 🧪 Testing with Postman

Import `postman/Novexa-Task-API.postman_collection.json` into Postman — it contains a ready-to-run request for every endpoint, including sample bodies for POST/PUT.

---

## ✅ What This Project Demonstrates

- Fundamentals of RESTful API design
- Building backend services with Node.js & Express.js
- Performing CRUD operations through clean API endpoints
- Input validation and proper HTTP status codes
- Testing APIs with Postman

---

## 🎓 Interview Questions Covered

- What is a REST API?
- What is the difference between REST and SOAP?
- What is Express.js?
- What are HTTP methods (GET, POST, PUT, DELETE)?
- What are HTTP status codes?

(See `API_DOCUMENTATION.md` for short answers to each.)

---

Built with 💻 for Novexa Technologies — Full Stack Development Internship.
