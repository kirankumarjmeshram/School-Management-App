const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin.model");
const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

// @desc    Register new admin
// @route   POST /api/admins
// @access  Public
router.post( '/', asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if Admin exists
  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create Admin
  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
}));

// @desc    Authenticate a admin
// @route   POST /api/admins/login
// @access  Public
router.post( '/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for Admin email
  const admin = await Admin.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
}));

// @desc    Get admin data
// @route   GET /api/admins/me
// @access  Private
router.get( '/me',protect , asyncHandler(async (req, res) => {
  res.status(200).json(req.admin);
}));

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "30d",
  });
};

module.exports = router
