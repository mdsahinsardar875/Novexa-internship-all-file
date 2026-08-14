const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "🛍️",
    },
    color: {
      type: String,
      default: "#8B5CF6",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
