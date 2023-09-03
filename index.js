require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const app = express();
const indexRouter = require("./routes");
const PORT = +process.env.PORT || 3333;

mongoose.connect("mongodb://127.0.0.1:27017/todoapp").then(() => {
  console.log("Database Connected..");
});

app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err.toString() || "Something went wrong..";
  res.status(500).json({ data: "", msg: err });
});

// const indexRouter = require("./routes");
// const PORT = +process.env.PORT;

app.listen(PORT, () => {
  console.log("App is running on port 3333");
});
