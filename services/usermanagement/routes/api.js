const express = require("express");
const userRouter = require("./User.Routes");

const app = express();

app.use("/user/", userRouter);

module.exports = app;
