const todoModel = require("./todo.model");

const create = (payload) => {
  return todoModel.create(payload);
};

const list = async () => {
  return await todoModel.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo",
        as: "subtasks",
      },
    },
    {
      $project: {
        title: 1,
        status: 1,
        subtasks: 1,
      },
    },
  ]);
};

const updateStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("Status is missing..."); // Corrected "newError" to "new Error"
  return await todoModel.findOneAndUpdate(
    { _id: id },
    { status },
    { new: true }
  );
};

module.exports = { create, list, updateStatus };
