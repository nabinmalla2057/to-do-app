const { Schema, model } = require("mongooose");
const todoschema = new Schema({
  title: { type: String, required: true },
  status: {
    type: string,
    enum: ["pending", "completed"],
  },
});
