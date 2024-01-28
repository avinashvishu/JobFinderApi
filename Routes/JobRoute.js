const express = require("express");
const { createJob } = require("../Controller/jobController");
const router = express.Router();

router.post("/create", createJob);

module.exports = router;
