const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: String, //{ type: String, required: true },
  status: {
    type: String,
    enum: ["[pending", "completed"],
    required: true,
    default: "pending",
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model("todo", todoSchema);
