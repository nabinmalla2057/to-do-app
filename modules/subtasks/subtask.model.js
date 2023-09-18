const { Schema, model, Types } = require("mongoose");
const commonSchema = require("../commons/commonschema");

const subtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    required: true,
    default: "pending",
  },
  todo: {
    type: Types.ObjectId,
    ref: "Todo",
  },
  ...commonSchema,
});

module.exports = model("Subtask", subtaskSchema);
