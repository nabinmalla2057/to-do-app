const Model = require("./subtask.model");

const createSubtask = async (payload) => {
  return await Model.create(payload);
};

const listSubtasks = async () => {
  return await Model.find();
};

const getSubtaskById = async (id) => {
  return await Model.findOne({ _id: id });
};

const updateSubtaskById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const updateSubtaskStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("Status is required");
  return await Model.findOneAndUpdate({ _id: id }, { status }, payload, {
    new: true,
  });
};

const removeSubtaskById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = {
  createSubtask,
  listSubtasks,
  getSubtaskById,
  updateSubtaskById,
  updateSubtaskStatus,
  removeSubtaskById,
};
