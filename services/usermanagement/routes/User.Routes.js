const express = require("express");
const userController = require("../controllers/User.Controller"); 

const router = express.Router();


router.get("/", userController.getUsers);

router.get("/:id",userController.getUser);

router.post("/",userController.saveUser);

router.put("/",userController.updateUser);

module.exports = router;
