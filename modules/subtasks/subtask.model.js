const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonschema");
const ObjectId = Schema.Types;

const subtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["[pending", "completed"],
    required: true,
    default: "pending",
  },
  todo: {
    type: ObjectId,
    ref: "Todo",
  },
  ...commonSchema,
});

module.exports = model("subtask", subtaskSchema);
