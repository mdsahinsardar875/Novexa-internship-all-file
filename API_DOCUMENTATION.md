# 📄 NovexaShop API Documentation

**Base URL:** `http://localhost:5000/api`

All responses follow this shape:

```json
{
  "success": true,
  "count": 10,
  "data": { }
}
```

Errors:

```json
{
  "success": false,
  "message": "Description of the error"
}
```

---

## 🗂️ Categories

### Get all categories
`GET /api/categories`

**Response 200**
```json
{
  "success": true,
  "count": 5,
  "data": [
    { "_id": "665f1...", "name": "Electronics", "icon": "💻", "color": "#6366F1", "description": "Gadgets and devices" }
  ]
}
```

### Get single category
`GET /api/categories/:id`

### Create category
`POST /api/categories`
```json
{ "name": "Electronics", "icon": "💻", "color": "#6366F1", "description": "Gadgets and devices" }
```

### Update category
`PUT /api/categories/:id`

### Delete category
`DELETE /api/categories/:id`

---

## 📦 Products

### Get all products
`GET /api/products`

**Query params (all optional):**
| Param      | Description                                      |
|------------|---------------------------------------------------|
| `category` | Filter by category ObjectId                       |
| `search`   | Case-insensitive search on product name            |
| `sort`     | `price_asc` \| `price_desc` \| `rating`            |

Example: `GET /api/products?category=665f1...&sort=price_asc&search=phone`

### Get single product
`GET /api/products/:id`

### Create product
`POST /api/products`
```json
{
  "name": "Wireless Bluetooth Headphones",
  "description": "Noise-cancelling over-ear headphones",
  "price": 59.99,
  "quantity": 25,
  "rating": 4.5,
  "image": "https://example.com/img.jpg",
  "category": "665f1..."
}
```

### Update product
`PUT /api/products/:id`

### Delete product
`DELETE /api/products/:id`

---

## 🧾 Orders

### Get all orders
`GET /api/orders`

### Get single order
`GET /api/orders/:id`

### Create order (checkout)
`POST /api/orders`

Validates stock availability, decrements product quantity, and calculates the total automatically.

```json
{
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "shippingAddress": "123 Main St, Springfield, USA",
  "items": [
    { "product": "665f1...", "quantity": 2 },
    { "product": "665f2...", "quantity": 1 }
  ]
}
```

**Response 201**
```json
{
  "success": true,
  "data": {
    "_id": "665f3...",
    "customerName": "Jane Doe",
    "customerEmail": "jane@example.com",
    "shippingAddress": "123 Main St, Springfield, USA",
    "items": [
      { "product": "665f1...", "name": "Wireless Bluetooth Headphones", "price": 59.99, "quantity": 2 }
    ],
    "totalAmount": 119.98,
    "status": "Pending",
    "createdAt": "2026-08-14T10:00:00.000Z"
  }
}
```

### Update order status
`PUT /api/orders/:id`
```json
{ "status": "Shipped" }
```
Valid statuses: `Pending`, `Processing`, `Shipped`, `Delivered`, `Cancelled`

### Delete order
`DELETE /api/orders/:id`

---

## 🔐 Status Codes

| Code | Meaning                        |
|------|---------------------------------|
| 200  | Success                        |
| 201  | Resource created                |
| 400  | Bad request / validation error  |
| 404  | Resource not found              |
| 500  | Server error                    |
