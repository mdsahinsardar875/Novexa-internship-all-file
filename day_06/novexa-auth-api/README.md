# Novexa Technologies — Task 6: User Authentication and Authorization System

A secure backend API for user registration, login, and role-based access control, built with Node.js, Express, MongoDB (Mongoose), bcrypt.js, and JWT.

## Tools Used
- Node.js
- Express.js
- MongoDB Atlas / MongoDB Community Edition
- Mongoose
- bcrypt.js (password hashing)
- jsonwebtoken (JWT auth)

## Project Structure
```
novexa-auth-api/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/
│   └── authController.js    # register, login, profile, admin logic
├── middleware/
│   ├── authMiddleware.js    # JWT verification (protect)
│   └── roleMiddleware.js    # role-based access control (authorize)
├── models/
│   └── User.js              # Mongoose User schema (name, email, password, role)
├── routes/
│   └── authRoutes.js        # /api/auth routes
├── server.js                 # app entry point
├── package.json
├── .env.example
├── API_DOCUMENTATION.md
└── Novexa_Auth_API.postman_collection.json
```

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/novexa_auth_db
   JWT_SECRET=your_long_random_secret
   JWT_EXPIRES_IN=1d
   ```
   For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

3. **Run the server**
   ```bash
   npm start
   # or, for auto-reload during development
   npm run dev
   ```
   Server runs at `http://localhost:5000`.

4. **Test the API**
   Import `Novexa_Auth_API.postman_collection.json` into Postman, or use the endpoints below.

## Endpoints

| Method | Endpoint             | Access          | Description                     |
|--------|-----------------------|-----------------|----------------------------------|
| POST   | `/api/auth/register`  | Public          | Register a new user (hashed pw) |
| POST   | `/api/auth/login`     | Public          | Login, returns JWT              |
| GET    | `/api/auth/profile`   | Private         | Get logged-in user's profile    |
| GET    | `/api/auth/admin`     | Private (admin) | Admin-only protected resource   |

See `API_DOCUMENTATION.md` for full request/response examples.

## How It Works

- **Password Hashing:** `User` model hashes the password with `bcrypt.js` in a Mongoose `pre("save")` hook, so plaintext passwords are never stored.
- **JWT Authentication:** On successful login/registration, a JWT signed with `JWT_SECRET` is returned. It carries the user's ID and expires per `JWT_EXPIRES_IN`.
- **Route Protection:** `authMiddleware.protect` reads the `Authorization: Bearer <token>` header, verifies it, and loads the user onto `req.user`.
- **Authorization (RBAC):** `roleMiddleware.authorize("admin")` checks `req.user.role`, returning `403` if the role isn't permitted.

## Interview Questions Related to This Task

**What is Authentication?**
The process of verifying *who* a user is — typically by validating credentials like email/password. In this project, login checks the submitted password against the stored bcrypt hash.

**What is Authorization?**
The process of determining *what* an authenticated user is allowed to do. In this project, the `role` field (`user`/`admin`) and `authorize()` middleware control access to specific routes.

**What is JWT?**
JSON Web Token — a compact, signed token format used to represent claims (like user ID) between parties. It has three parts: header, payload, and signature, and lets the server verify a request's identity without a database lookup on every call.

**Why should passwords be hashed?**
Hashing is a one-way transformation, so even if the database is compromised, attackers can't recover the original passwords. Hashing (with salting, as bcrypt does) also protects against rainbow-table attacks.

**What is bcrypt.js?**
A library that implements the bcrypt hashing algorithm, which automatically salts passwords and is deliberately slow (configurable "cost factor") to resist brute-force attacks.

## Deliverables Checklist
- [x] Authentication API Project
- [x] Source Code
- [x] MongoDB Database (via Mongoose model, connects to Atlas or local instance)
- [x] Postman Collection (JSON)
- [x] API Documentation (Markdown)
- [x] README.md
