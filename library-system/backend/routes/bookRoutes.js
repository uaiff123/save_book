const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/bookController");

router.post("/", ctrl.createBook);
router.get("/", ctrl.listBooks);

module.exports = router;
