const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const app = express();

//setting app to use express.json() to parse json data
app.use(express.json());

//setting static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use(express.static(publicPathDirectory));

//use router
app.use("/api/v1", rootRouter);

//listen connect
app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
