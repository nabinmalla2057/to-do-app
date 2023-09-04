const router = require("express").Router();
const subtaskcontroller = require("./subtaskmodule");

//Create
router.post("/", async (req, res, next) => {
  try {
    const newSubtask = await subtaskcontroller.createSubtask(req.body);
    res.status(201).json(newSubtask);
  } catch (error) {
    next(error);
  }
});

//List
router.get("/", async (req, res, next) => {
  try {
    const subtasks = await subtaskcontroller.listSubtasks();
    res.json(subtasks);
  } catch (error) {
    next(error);
  }
});

//getById
router.get("/", async (req, res, next) => {});

//updateById
router.get("/", async (req, res, next) => {});

//updateStatus
router.get("/", async (req, res, next) => {});

//removeById
router.get("/", async (req, res, next) => {});

module.exports = router;
