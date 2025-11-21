const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/borrowController");

router.post("/create", ctrl.createLog);
router.get("/all", ctrl.getLogs);

module.exports = router;
