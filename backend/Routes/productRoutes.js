const express = require("express");

const router = express.Router();

const {
  getProducts,
  getCategories,
  postCategories,
  getSingleProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);

module.exports = router;
