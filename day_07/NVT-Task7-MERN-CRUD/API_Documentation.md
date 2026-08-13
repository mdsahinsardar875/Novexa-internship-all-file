# API Documentation — Task Management System

Base URL (local development): `http://localhost:5000/api/tasks`

All request/response bodies are JSON. All responses follow this shape:

```json
{
  "success": true,
  "data": { ... }
}
```

On error:

```json
{
  "success": false,
  "message": "Description of what went wrong"
}
```

---

## Task Object

| Field       | Type    | Required | Notes                                                          |
|-------------|---------|----------|------------------------------------------------------------------|
| `_id`       | String  | auto     | MongoDB ObjectId                                                |
| `title`     | String  | Yes      | 3–100 characters                                                |
| `description` | String | No     | Up to 500 characters                                            |
| `status`    | String  | No       | `Pending` \| `In Progress` \| `Completed` (default: `Pending`)   |
| `priority`  | String  | No       | `Low` \| `Medium` \| `High` (default: `Medium`)                 |
| `dueDate`   | Date    | No       | ISO date string                                                 |
| `createdAt` | Date    | auto     | Set automatically                                                |
| `updatedAt` | Date    | auto     | Set automatically                                                |

---

## Endpoints

### 1. Create a Task
`POST /api/tasks`

**Request body:**
```json
{
  "title": "Finish project report",
  "description": "Compile the Q3 summary and charts",
  "status": "Pending",
  "priority": "High",
  "dueDate": "2026-08-20"
}
```

**Response `201 Created`:**
```json
{
  "success": true,
  "data": {
    "_id": "66c1f2...",
    "title": "Finish project report",
    "description": "Compile the Q3 summary and charts",
    "status": "Pending",
    "priority": "High",
    "dueDate": "2026-08-20T00:00:00.000Z",
    "createdAt": "2026-08-13T10:00:00.000Z",
    "updatedAt": "2026-08-13T10:00:00.000Z"
  }
}
```

**Validation error `400 Bad Request`:**
```json
{ "success": false, "message": "Title must be at least 3 characters long" }
```

---

### 2. Get All Tasks
`GET /api/tasks`

**Optional query parameters:**
| Param    | Example                | Description                          |
|----------|-------------------------|---------------------------------------|
| `status` | `?status=Completed`     | Filter tasks by exact status          |
| `search` | `?search=report`        | Case-insensitive search on title      |

**Response `200 OK`:**
```json
{
  "success": true,
  "count": 2,
  "data": [ { "...task 1..." }, { "...task 2..." } ]
}
```

---

### 3. Get a Single Task
`GET /api/tasks/:id`

**Response `200 OK`:** returns the task object.
**Response `404 Not Found`:** if no task matches the id.
**Response `400 Bad Request`:** if `:id` is not a valid MongoDB ObjectId.

---

### 4. Update a Task
`PUT /api/tasks/:id`

**Request body:** any subset of task fields to update.
```json
{ "status": "Completed" }
```

**Response `200 OK`:** returns the updated task.
**Response `404 Not Found` / `400 Bad Request`:** same as above.

---

### 5. Delete a Task
`DELETE /api/tasks/:id`

**Response `200 OK`:**
```json
{ "success": true, "message": "Task deleted successfully", "data": { "...deleted task..." } }
```

**Response `404 Not Found`:** if no task matches the id.

---

## Error Handling Summary

| Status Code | Meaning                                             |
|-------------|------------------------------------------------------|
| `400`       | Validation error or invalid ID format                |
| `404`       | Task / route not found                                |
| `500`       | Unexpected server error                               |

---

## Testing the API

You can test these endpoints with `curl`, Postman, or Thunder Client:

```bash
# Create
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn MERN stack","priority":"High"}'

# Get all
curl http://localhost:5000/api/tasks

# Update
curl -X PUT http://localhost:5000/api/tasks/<id> \
  -H "Content-Type: application/json" \
  -d '{"status":"Completed"}'

# Delete
curl -X DELETE http://localhost:5000/api/tasks/<id>
```
