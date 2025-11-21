const Borrow = require("../models/Borrow");
const { Sequelize } = require("sequelize");
const sequelize = require("../db");

exports.dailyCounts = async (req, res) => {
  try {
    // group by date from createdAt
    const [results] = await sequelize.query(`
      SELECT date(createdAt) as day, COUNT(id) as total
      FROM Borrows
      GROUP BY date(createdAt)
      ORDER BY day ASC;
    `);
    res.json(results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
