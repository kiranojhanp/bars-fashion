// import express from "express";
const express = require("express");

const router = express.Router();
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUserById,
} = require("../controllers/userController.js");
const { protect, admin } = require("../middlewares/authMiddleware.js");

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/").get(protect, admin, getUsers);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById)
  .delete(protect, admin, deleteUser);

module.exports = router;
