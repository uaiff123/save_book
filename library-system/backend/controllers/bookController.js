const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.listBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ order: [["id", "DESC"]] });
    res.json(books);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
