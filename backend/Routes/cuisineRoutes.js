const express = require("express");

const router = express.Router();

const {
  getcuisinefood,
  getCategories,
  postCategories,
  getSingleProduct,
} = require("../controllers/cuisineController");

router.get("/cuisinefood", getcuisinefood);

module.exports = router;
