const express = require("express");
const { stationRouter } = require("./station.routers");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);

module.exports = {
  rootRouter,
};
