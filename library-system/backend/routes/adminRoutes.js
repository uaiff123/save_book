const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/adminController");

router.post("/delete", ctrl.deleteLog);
router.post("/update", ctrl.updateLog);

module.exports = router;
