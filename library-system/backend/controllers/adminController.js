const Borrow = require("../models/Borrow");
const User = require("../models/User");
const Book = require("../models/Book");

exports.deleteLog = async (req, res) => {
  try {
    const { id } = req.body;
    await Borrow.destroy({ where: { id } });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateLog = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    await Borrow.update(data, { where: { id } });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
