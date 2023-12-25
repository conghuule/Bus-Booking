"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate(models) {}
  }

  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
