const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getProfile, getAdminData } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private routes (any authenticated user)
router.get("/profile", protect, getProfile);

// Private + role-restricted route (admin only)
router.get("/admin", protect, authorize("admin"), getAdminData);

module.exports = router;
