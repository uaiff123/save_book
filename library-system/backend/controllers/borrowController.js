const Borrow = require("../models/Borrow");
const User = require("../models/User");
const Book = require("../models/Book");

exports.createLog = async (req, res) => {
  try {
    // Ensure user exists or create quick user
    const { fullname, studentId, year, major, timeIn, timeOut, book, library } = req.body;
    let user = null;
    if (studentId) {
      user = await User.findOne({ where: { studentId } });
    }
    if (!user) {
      user = await User.create({ fullname, studentId, year, major });
    }

    // Optionally attach to a book (by title)
    let bookInstance = null;
    if (book) {
      bookInstance = await Book.findOne({ where: { title: book } });
      if (!bookInstance) bookInstance = await Book.create({ title: book });
    }

    const b = await Borrow.create({
      timeIn,
      timeOut,
      bookName: book || null,
      libraryName: library || null,
      UserId: user.id,
      BookId: bookInstance ? bookInstance.id : null
    });

    res.status(201).json(b);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await Borrow.findAll({ include: [User, Book], order: [["id", "DESC"]] });
    res.json(logs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
