# 🛍️ NovexaShop — E-Commerce Web Application (MERN Stack)

**Novexa Technologies — Full Stack Development Task 8**

A complete, production-style e-commerce web application built with **MongoDB, Express.js, React.js, and Node.js**. Includes product catalog browsing, category filters, a shopping cart, checkout with stock validation, and order tracking — wrapped in a bold, colorful, gradient-driven UI.

![MERN](https://img.shields.io/badge/Stack-MERN-7C3AED?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-EC4899?style=for-the-badge)

---

## ✨ Features

- 🛒 Product catalog with search, category filters, and sorting (price / rating)
- 🎨 Colorful, gradient-based, mobile-responsive UI (React + TailwindCSS)
- 📦 Product detail pages with live stock and star ratings
- 🧺 Persistent shopping cart (localStorage + React Context)
- 💳 Checkout flow that validates stock and auto-decrements inventory
- 📋 Order history with live status badges (Pending → Delivered)
- 🔌 Full REST API for Products, Categories, and Orders
- 🌱 One-command database seeding with realistic sample data

---

## 🗂️ Project Structure

```
ecommerce-mern/
├── backend/
│   ├── config/db.js              # MongoDB connection
│   ├── models/                   # Product, Category, Order schemas
│   ├── controllers/              # Business logic
│   ├── routes/                   # Express REST routes
│   ├── seed/seedData.js          # Sample data seeder
│   ├── server.js                 # App entry point
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/           # Navbar, ProductCard, CategoryPill, StarRating, Footer
│   │   ├── pages/                # Home, ProductDetail, Cart, Checkout, Orders
│   │   ├── context/CartContext.jsx
│   │   ├── api/axios.js
│   │   ├── App.jsx / main.jsx
│   └── index.html
├── API_DOCUMENTATION.md
└── README.md
```

---

## ⚙️ Tools & Tech

| Layer      | Technology                          |
|------------|--------------------------------------|
| Database   | MongoDB Atlas / MongoDB Community    |
| Backend    | Node.js, Express.js, Mongoose        |
| Frontend   | React.js (Vite), TailwindCSS, React Router, Axios |
| State      | React Context API + localStorage     |
| Extras     | react-hot-toast, lucide-react icons  |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js ≥ 18
- MongoDB running locally **or** a MongoDB Atlas connection string

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env      # then edit MONGO_URI in .env
npm run seed               # populate sample categories & products
npm run dev                 # starts on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev                 # starts on http://localhost:5173
```

The frontend dev server proxies `/api` requests to `http://localhost:5000` (see `vite.config.js`), so no CORS configuration is needed in development.

### 4. Build for production
```bash
cd frontend
npm run build                # outputs static files to frontend/dist
```

---

## 🔌 REST API Overview

| Resource   | Endpoints                                                        |
|------------|--------------------------------------------------------------------|
| Products   | `GET/POST /api/products`, `GET/PUT/DELETE /api/products/:id`      |
| Categories | `GET/POST /api/categories`, `GET/PUT/DELETE /api/categories/:id`  |
| Orders     | `GET/POST /api/orders`, `GET/PUT/DELETE /api/orders/:id`          |

Full request/response examples are in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md).

---

## 🧠 State Management

Cart state is handled globally through **React Context API** (`CartContext.jsx`) and persisted to `localStorage`, so the cart survives page refreshes. Product/category/order data is fetched from the API with **Axios** and kept in local component state via `useState`/`useEffect`.

---

## 🎓 Interview Prep — Concepts Used in This Project

- **What is the MERN Stack?** MongoDB + Express.js + React.js + Node.js — a JavaScript-only stack for building full-stack web apps.
- **What is Redux Toolkit?** A library that simplifies Redux state management with less boilerplate (this project uses Context API instead, a lighter alternative suited to its scope).
- **What is the Context API?** React's built-in way to share state across components without prop-drilling — used here for the cart.
- **How does state management work in React?** Components hold local state via `useState`/`useReducer`; shared/global state is lifted into Context (or Redux for larger apps) and consumed by any nested component.
- **What is Axios used for?** A promise-based HTTP client used here to call the Express REST API from React.

---

## 📤 Deliverables Checklist

- [x] Full-Stack E-Commerce Web Application
- [x] Frontend (React.js)
- [x] Backend (Node.js & Express.js)
- [x] MongoDB Database (schemas + seed script)
- [x] API Documentation (this repo — `API_DOCUMENTATION.md`)
- [x] GitHub-ready repository (frontend, backend, README.md)

---

Built for **Novexa Technologies — Task 8: E-Commerce Web Application (MERN Stack)**.
