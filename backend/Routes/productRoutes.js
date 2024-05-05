const express = require("express");

const router = express.Router();

const {
  getProducts,
  getCategories,
  postCategories,
  getSingleProduct,
} = require("../Controllers/productController");

router.get("/products", getProducts);

module.exports = router;
