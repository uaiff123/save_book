const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/statsController");

router.get("/daily", ctrl.dailyCounts);

module.exports = router;
