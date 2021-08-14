const express = require("express");
const userRouter = require("./Order.Routes");

const app = express();

app.use("/order/", userRouter);

module.exports = app;
