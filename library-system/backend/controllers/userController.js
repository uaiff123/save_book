const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ order: [["id", "DESC"]] });
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
