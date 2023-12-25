const { Station } = require("../models");
const { Op } = require("sequelize");

const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  console.log(req.body);
  const newStation = await Station.create({
    name,
    address,
    province,
  });
  res.status(201).send(newStation);
};

const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const stationsList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(stationsList);
    } else {
      const stations = await Station.findAll();
      res.status(200).send(stations);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getStationById = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(station);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    station.name = name;
    station.address = address;
    station.province = province;

    await station.save();

    res.status(200).send(station);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.destroy({
      where: {
        id,
      },
    });

    res.status(200).send("Delete success");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getStationById,
  updateStation,
  deleteStation,
};
