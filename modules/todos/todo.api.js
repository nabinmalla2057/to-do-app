const router = require("express").Router();
const todoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing..."); // Fixed the typo here
    const result = await todoController.create({ title });
    res.json({ data: result, msg: "success" });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list(); // Corrected function name
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.updateById(id, req.body); // Corrected function name
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.updateStatus(id, req.body);
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.removeById(id); // Corrected function name
    res.json({ data: result, msg: "Successful" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
