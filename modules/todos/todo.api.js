const router = require("express").Router();
const todoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "sucessful" });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.getData();
    res.json({ data: result, msg: "Sucessful" });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.upateDataByID(id, res.body);
    res.json({ data: result, msg: "Sucessful" });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.deleteDataByID(id);
    res.json({ data: result, msg: "Sucessful" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
