const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonschema");
const subtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["[pending", "completed"],
    required: true,
    default: "pending",
  },
  ...commonSchema,
});

module.exports = model("subtask", subtaskSchema);
