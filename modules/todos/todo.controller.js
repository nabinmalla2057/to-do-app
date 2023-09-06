const Todo = require("./todo.model");

async function createTodo(data) {
  try {
    const newTodo = await Todo.create(data);
    return newTodo;
  } catch (error) {
    throw error;
  }
}

async function getTodoById(id) {
  try {
    const todo = await Todo.findById(id);
    return todo;
  } catch (error) {
    throw error;
  }
}

async function updateTodoById(id, data) {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true }); // Assuming you have an findByIdAndUpdate method in your Todo model
    return updatedTodo;
  } catch (error) {
    throw error;
  }
}

async function removeTodoById(id) {
  try {
    await Todo.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createTodo,
  listTodos,
  getTodoById,
  updateTodoById,
  removeTodoById,
};
