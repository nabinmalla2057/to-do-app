const model = require("/.subtaskmodule");

const create = async (payload) => {
  return await Model.create(payload);
};
const list = async () => {
  return await Model.find();
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const updateById = async (id, payload) => {
  return await Model.findOneandUpdate({ _id: id }, payload, { new: true });
};

const updateStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("Status is required");
  return await model.findOneandUpdate({ _id: id }, { satus }, payload, {
    new: true,
  });
};

const removeById = async (id) => {
  return await Model.deleteOne({});
};

module.exports = {
  create,
  list,
  getById,
  updateById,
  updateStatus,
  removeById,
};
