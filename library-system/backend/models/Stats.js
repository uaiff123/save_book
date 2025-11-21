const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Stats = sequelize.define("Stats", {
  key: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.STRING, allowNull: true }
});

module.exports = Stats;
