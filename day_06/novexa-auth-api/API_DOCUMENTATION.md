# Novexa Auth API — API Documentation

Base URL: `http://localhost:5000/api/auth`

All request/response bodies are JSON. Protected routes require:
`Authorization: Bearer <token>`

---

## 1. Register User
**POST** `/register`
**Access:** Public

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

**Success (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": { "id": "...", "name": "John Doe", "email": "john@example.com", "role": "user" },
    "token": "eyJhbGciOi..."
  }
}
```

**Errors:** `400` missing fields, `409` email already exists

---

## 2. Login User
**POST** `/login`
**Access:** Public

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success (200):** same shape as register, with a fresh token.

**Errors:** `400` missing fields, `401` invalid credentials

---

## 3. Get Profile
**GET** `/profile`
**Access:** Private (any authenticated user)
**Header:** `Authorization: Bearer <token>`

**Success (200):**
```json
{
  "success": true,
  "data": { "id": "...", "name": "John Doe", "email": "john@example.com", "role": "user", "createdAt": "..." }
}
```

**Errors:** `401` no/invalid/expired token

---

## 4. Admin-Only Route
**GET** `/admin`
**Access:** Private, role = `admin` only
**Header:** `Authorization: Bearer <token>`

**Success (200):**
```json
{ "success": true, "message": "Welcome Admin John Doe, you have access to this protected route." }
```

**Errors:** `401` not authenticated, `403` authenticated but not an admin

---

## Auth Flow Summary
1. User registers → password is hashed with bcrypt.js before saving.
2. User logs in → password compared with `bcrypt.compare`, JWT issued on success.
3. Client stores the JWT and sends it as `Authorization: Bearer <token>` on protected requests.
4. `authMiddleware.protect` verifies the token and attaches the user to `req.user`.
5. `roleMiddleware.authorize("admin")` checks `req.user.role` for role-restricted routes.
