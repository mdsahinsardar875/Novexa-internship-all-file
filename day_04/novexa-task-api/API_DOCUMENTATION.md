# 📘 API Documentation — Novexa Task Manager API

Base URL (local): `http://localhost:5000`

All responses are JSON and follow this shape:

```json
{
  "success": true,
  "data": { ... }
}
```

or, on error:

```json
{
  "success": false,
  "message": "Explanation of what went wrong"
}
```

---

## 1. Get All Tasks

**`GET /api/tasks`**

Optional query params:
- `status` — `todo` | `in-progress` | `done`
- `priority` — `low` | `medium` | `high`

**Example:** `GET /api/tasks?status=todo`

**Response `200 OK`**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 4,
      "title": "Add input validation",
      "description": "Validate request bodies before writing to the dataset.",
      "status": "todo",
      "priority": "medium",
      "color": "#6A4C93",
      "createdAt": "2026-08-04T08:45:00Z"
    }
  ]
}
```

---

## 2. Get Task by ID

**`GET /api/tasks/:id`**

**Response `200 OK`** — single task object
**Response `404 Not Found`** — `{ "success": false, "message": "Task with id 99 not found" }`

---

## 3. Create a Task

**`POST /api/tasks`**

**Body**
```json
{
  "title": "Write unit tests",
  "description": "Cover the controller functions",
  "status": "todo",
  "priority": "high"
}
```
Only `title` is required; `description` defaults to `""`, `status` defaults to `"todo"`, `priority` defaults to `"medium"`.

**Response `201 Created`** — the newly created task, including its generated `id`, `color`, and `createdAt`.
**Response `400 Bad Request`** — if `title` is missing, or `status`/`priority` isn't one of the allowed values.

---

## 4. Update a Task

**`PUT /api/tasks/:id`**

**Body** (any subset of fields)
```json
{
  "status": "done"
}
```

**Response `200 OK`** — the updated task
**Response `404 Not Found`** — if the id doesn't exist
**Response `400 Bad Request`** — if `status`/`priority` isn't valid

---

## 5. Delete a Task

**`DELETE /api/tasks/:id`**

**Response `200 OK`** — `{ "success": true, "message": "Task 3 deleted successfully" }`
**Response `404 Not Found`** — if the id doesn't exist

---

## HTTP Status Codes Used

| Code | Meaning                  | Used when                               |
|------|---------------------------|-------------------------------------------|
| 200  | OK                        | Successful GET / PUT / DELETE            |
| 201  | Created                   | Successful POST                          |
| 400  | Bad Request               | Missing/invalid fields                   |
| 404  | Not Found                 | Task id or route doesn't exist           |
| 500  | Internal Server Error     | Unexpected server-side failure           |

---

## 🎓 Interview Q&A Reference

**What is REST API?**
An architectural style for building web services that uses standard HTTP methods to operate on "resources" (like `/tasks`), identified by URLs, and communicates state in a stateless way — typically using JSON.

**REST vs SOAP?**
REST is a lightweight architectural style that typically uses JSON over HTTP; SOAP is a stricter, XML-based protocol with a formal contract (WSDL). REST is generally faster and easier to consume; SOAP offers built-in standards for security and transactions, often used in enterprise/legacy systems.

**What is Express.js?**
A minimal, unopinionated web framework for Node.js that simplifies routing, middleware handling, and building HTTP servers/APIs.

**What are HTTP methods?**
- `GET` — retrieve a resource
- `POST` — create a resource
- `PUT` — update/replace a resource
- `DELETE` — remove a resource

**What are HTTP status codes?**
Three-digit codes returned by a server indicating the outcome of a request — 2xx for success, 4xx for client errors, 5xx for server errors.
