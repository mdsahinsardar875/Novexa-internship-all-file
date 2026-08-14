require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Category = require("../models/Category");
const Product = require("../models/Product");

const categories = [
  { name: "Electronics", icon: "💻", color: "#6366F1", description: "Gadgets and devices" },
  { name: "Fashion", icon: "👗", color: "#EC4899", description: "Clothing and accessories" },
  { name: "Home & Living", icon: "🛋️", color: "#F59E0B", description: "Furniture and decor" },
  { name: "Sports", icon: "⚽", color: "#10B981", description: "Sports and fitness gear" },
  { name: "Books", icon: "📚", color: "#3B82F6", description: "Books and stationery" },
];

const productNames = {
  Electronics: [
    ["Wireless Bluetooth Headphones", 59.99],
    ["4K Smart LED TV 43-inch", 349.99],
    ["Mechanical Gaming Keyboard", 79.99],
    ["Portable Power Bank 20000mAh", 29.99],
    ["Smartwatch Fitness Tracker", 89.99],
  ],
  Fashion: [
    ["Men's Denim Jacket", 45.5],
    ["Women's Summer Floral Dress", 34.99],
    ["Running Sneakers", 65.0],
    ["Leather Crossbody Bag", 52.75],
    ["Classic Aviator Sunglasses", 19.99],
  ],
  "Home & Living": [
    ["Scandinavian Accent Chair", 149.0],
    ["Ceramic Table Lamp", 39.99],
    ["Memory Foam Pillow Set", 25.5],
    ["Non-Stick Cookware Set", 89.0],
    ["Wall Art Canvas Print", 22.0],
  ],
  Sports: [
    ["Yoga Mat with Carry Strap", 18.99],
    ["Adjustable Dumbbell Set", 120.0],
    ["Football - Official Size", 24.99],
    ["Cycling Helmet", 34.5],
    ["Resistance Bands Set", 15.99],
  ],
  Books: [
    ["Atomic Habits", 14.99],
    ["The Pragmatic Programmer", 32.5],
    ["Spiral Notebook Pack (3-Pack)", 8.99],
    ["Fountain Pen Gift Set", 21.0],
    ["Sci-Fi Short Story Anthology", 12.5],
  ],
};

const images = {
  Electronics: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=500",
  Fashion: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  "Home & Living": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
  Sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
  Books: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
};

const seed = async () => {
  await connectDB();

  console.log("🗑️  Clearing existing data...");
  await Product.deleteMany();
  await Category.deleteMany();

  console.log("🌱 Seeding categories...");
  const createdCategories = await Category.insertMany(categories);

  console.log("🌱 Seeding products...");
  const products = [];
  for (const cat of createdCategories) {
    const items = productNames[cat.name] || [];
    items.forEach(([name, price], idx) => {
      products.push({
        name,
        price,
        description: `${name} — premium quality from the ${cat.name} collection.`,
        quantity: Math.floor(Math.random() * 40) + 5,
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 - 5.0
        image: images[cat.name],
        category: cat._id,
      });
    });
  }

  await Product.insertMany(products);

  console.log(`✅ Seeded ${createdCategories.length} categories and ${products.length} products.`);
  mongoose.connection.close();
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
