const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.static("public"));

const router = require("./routes/index");

app.use("/v1/openAi", router);
app.use("/v1/message", (req, res) => {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Methods", 'GET, HEAD, OPTIONS, POST, PUT, DELETE')
  res.header("Access-Control-Allow-Headers", 'Origin, Content-type, Accept, Authorization, X-Requested-With')

  res.status(200).json({
    message: 'hello world'
  })
})
app.use((_, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((error, _, res, __) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});
module.exports = app;
