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
router.get("/", async (req, res, next) => {
  try {
    const subtasks = await subtaskcontroller.getSubtaskById(req.params.id);
    if (!subtask) {
      return res.status(404).json({ message: "Subtask not found" });
    }
    res.json(subtask);
  } catch (error) {
    next();
  }
});

//updateById
router.get("/", async (req, res, next) => {
  try {
    const updatedSubtask = await subtaskcontroller.updateSubtaskById(
      req.params.id,
      req.body
    );
    res.json(updatedSubtask);
  } catch (error) {
    next(error);
  }
});

//updateStatus
router.get("/", async (req, res, next) => {
  try {
    const updatedStatus = await subtaskcontroller.updateSubtaskStatusById(
      req.params.id,
      req.body.status
    );
    res.json(updatedStatus);
  } catch (error) {
    next(error);
  }
});

//removeById
router.get("/", async (req, res, next) => {
  try {
    await subtaskcontroller.removeSubtaskById(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
