require("dotenv").config();
const mongoose = require("mongoose");
const todoController = "../modules/todos/todo.Controller";
const subtaskcontroller = "../modules/subtasks/subtask.Controller";

mongoose.connect(process.env.DB_URL);

const setup = {
  initialize: async () => {
    await mongoose.connection.dropDatabase();
    console.log("DB reset");

    const todo1 = await todoController.cretae({ title: "Buy a new clothes" });
    const todo2 = await todoController.cretae({ title: "Buy a new shoes" });
    console.log("-----TODOS setuo complete-----");

    const sub1 = await subtaskcontroller.create({
      title: "GO to supermarket",
      todo: todo1._id,
    });

    const sub2 = await subtaskcontroller.create({
      title: "Check your shoe size",
      todo: todo2._id,
    });

    console.log("-----DONE-----");
  },
};

setup.initialize();
