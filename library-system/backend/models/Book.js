const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  authors: { type: DataTypes.STRING, allowNull: true },
  isbn: { type: DataTypes.STRING, allowNull: true },
  copies: { type: DataTypes.INTEGER, defaultValue: 1 }
});

module.exports = Book;
