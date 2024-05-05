const express = require("express");

const router = express.Router();

const {
  getcuisinefood,
  getCategories,
  postCategories,
  getSingleProduct,
} = require("../Controllers/cuisineController");

router.get("/cuisinefood", getcuisinefood);

module.exports = router;
