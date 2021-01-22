// import express from "express";
const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController.js");

const { protect, admin } = require("../middlewares/authMiddleware.js");

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.get("/top", getTopProducts);

router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route("/:id/review").post(protect, createProductReview);


module.exports = router;
