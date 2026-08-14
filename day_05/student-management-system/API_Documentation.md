# Student Management System — API Documentation

Base URL: `http://localhost:5000/api/students`

All responses are JSON and follow this shape:
```json
{ "success": true, "data": { ... } }
```

---

## 1. Create a Student
**POST** `/api/students`

**Body (JSON):**
```json
{
  "name": "Ayesha Khan",
  "email": "ayesha.khan@example.com",
  "age": 21,
  "gender": "Female",
  "course": "Computer Science",
  "semester": 4
}
```

**Response: 201 Created**
```json
{
  "success": true,
  "data": {
    "_id": "66b1f0c2e4a1a2b3c4d5e6f7",
    "name": "Ayesha Khan",
    "email": "ayesha.khan@example.com",
    "age": 21,
    "gender": "Female",
    "course": "Computer Science",
    "semester": 4,
    "isActive": true,
    "enrollmentDate": "2026-08-10T00:00:00.000Z",
    "createdAt": "2026-08-10T00:00:00.000Z",
    "updatedAt": "2026-08-10T00:00:00.000Z"
  }
}
```

---

## 2. Get All Students
**GET** `/api/students`

**Optional query params:**
| Param | Type | Description |
|---|---|---|
| `course` | string | Filter by course |
| `gender` | string | Filter by gender |
| `isActive` | boolean | Filter by active status |
| `page` | number | Page number (default 1) |
| `limit` | number | Results per page (default 10) |

**Example:** `GET /api/students?course=Computer Science&page=1&limit=5`

**Response: 200 OK**
```json
{
  "success": true,
  "count": 5,
  "total": 23,
  "page": 1,
  "pages": 5,
  "data": [ { "...student objects" } ]
}
```

---

## 3. Get Single Student
**GET** `/api/students/:id`

**Response: 200 OK** — student object
**Response: 404 Not Found** if the ID doesn't exist

---

## 4. Update a Student
**PUT** `/api/students/:id`

**Body (JSON):** any subset of student fields to update
```json
{ "semester": 5, "isActive": true }
```

**Response: 200 OK** — updated student object

---

## 5. Delete a Student
**DELETE** `/api/students/:id`

**Response: 200 OK**
```json
{ "success": true, "message": "Student deleted successfully", "data": { "...deleted student" } }
```

---

## Error Responses
| Status | Meaning |
|---|---|
| 400 | Validation error (bad/missing fields) |
| 404 | Resource not found |
| 500 | Server error |

```json
{ "success": false, "message": "Description of the error" }
```
