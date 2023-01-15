const express = require("express");
const router = express.Router();

const { sendMessage } = require("../controllers/openAi");

router.post("/message", sendMessage);

module.exports = router