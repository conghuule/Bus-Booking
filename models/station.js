const { DataTypes } = require("sequelize");

const createStation = (sequelize) => {
  return sequelize.define("Stations", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
