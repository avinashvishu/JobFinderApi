const express = require("express");
const { createUser, LoginUser } = require("../Controller/userController");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", LoginUser);

module.exports = router;
