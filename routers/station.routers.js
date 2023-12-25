const express = require("express");
const {
  createStation,
  getAllStation,
  getStationById,
  updateStation,
  deleteStation,
} = require("../controllers/station.controllers");
const stationRouter = express.Router();

stationRouter.post("/", createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getStationById);
stationRouter.put("/:id", updateStation);
stationRouter.delete("/:id", deleteStation);

module.exports = {
  stationRouter,
};
