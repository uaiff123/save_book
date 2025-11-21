
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));








const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");

// import routes
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");
const statsRoutes = require("./routes/statsRoutes");
const adminRoutes = require("./routes/adminRoutes");

// models (to ensure associations/registration)
require("./models/User");
require("./models/Book");
require("./models/Borrow");
require("./models/Stats");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/uselog", borrowRoutes);
app.use("/api/report", statsRoutes);
app.use("/api/admin", adminRoutes);

// static serve frontend (optional)
app.use("/", express.static(__dirname + "/../frontend"));

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync({ alter: true }); // sync models
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (e) {
    console.error(e);
  }
})();




