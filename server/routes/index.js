const express = require("express");
const router = express.Router();

const { sendMessage } = require("../controllers/openAi/index");

router.post("/message", sendMessage);

module.exports = router