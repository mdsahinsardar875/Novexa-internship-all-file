# Student Management System — Node.js + Express + MongoDB

**Task 5: Database Integration with MongoDB and Express.js**

A REST API backend for managing student records, built with Node.js, Express.js, MongoDB, and Mongoose. Supports full CRUD operations (Create, Read, Update, Delete).

## Tools Used
- Node.js
- Express.js
- MongoDB (Community Edition or Atlas Free Tier)
- Mongoose
- dotenv
- nodemon

## Project Structure
```
student-management-system/
├── config/
│   └── db.js                  # MongoDB connection
├── controllers/
│   └── studentController.js   # CRUD logic
├── middleware/
│   └── errorHandler.js        # 404 + error handling
├── models/
│   └── Student.js             # Mongoose schema
├── routes/
│   └── studentRoutes.js       # API routes
├── .env.example                # Environment variable template
├── .gitignore
├── API_Documentation.md        # Full API docs
├── postman_collection.json     # Postman collection for testing
├── package.json
└── server.js                   # App entry point
```

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Set `MONGO_URI` to your local MongoDB instance or MongoDB Atlas connection string

3. **Run MongoDB**
   - Local: make sure `mongod` is running
   - Atlas: no local setup needed, just use your Atlas URI in `.env`

4. **Start the server**
   ```bash
   npm run dev     # with nodemon (auto-restart)
   # or
   npm start       # plain node
   ```

5. Server runs at: `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/students` | Create a new student |
| GET | `/api/students` | Get all students (supports filters + pagination) |
| GET | `/api/students/:id` | Get a single student by ID |
| PUT | `/api/students/:id` | Update a student by ID |
| DELETE | `/api/students/:id` | Delete a student by ID |

See [API_Documentation.md](./API_Documentation.md) for full request/response examples.

## Testing
Import `postman_collection.json` into Postman to test all endpoints immediately.

## Student Schema
| Field | Type | Notes |
|---|---|---|
| name | String | required |
| email | String | required, unique |
| age | Number | required |
| gender | String | Male / Female / Other |
| course | String | required |
| semester | Number | 1–12, default 1 |
| enrollmentDate | Date | defaults to now |
| isActive | Boolean | default true |

## What This Project Demonstrates
- How databases integrate with backend applications
- MongoDB document-based database concepts
- CRUD operations using Mongoose
- A complete backend connected to a database
- Practical experience in database-driven application development
