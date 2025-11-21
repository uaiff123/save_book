const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
const Book = require("./Book");

const Borrow = sequelize.define("Borrow", {
  timeIn: { type: DataTypes.STRING, allowNull: true },
  timeOut: { type: DataTypes.STRING, allowNull: true },
  bookName: { type: DataTypes.STRING, allowNull: true },
  libraryName: { type: DataTypes.STRING, allowNull: true }
});

// Relations
User.hasMany(Borrow);
Borrow.belongsTo(User);

Book.hasMany(Borrow);
Borrow.belongsTo(Book);

module.exports = Borrow;
