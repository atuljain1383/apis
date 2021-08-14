const express = require("express");
const orderController = require("../controllers/Order.Controller"); 

const router = express.Router();


router.get("/", orderController.getAll)

router.get("/:id",orderController.getOrder)

router.post("/",orderController.CreateOrder)

router.put("/",orderController.updateOrder)

module.exports = router;
