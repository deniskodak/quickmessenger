require("dotenv").config();
const dbo = require('../db')
const app = require("../app.js");
const { PORT = 3000 } = process.env;

dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

module.exports = app;
