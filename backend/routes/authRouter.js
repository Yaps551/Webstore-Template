const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// POST /auth/login
router.post('/login', authController.postLogin);

// POST /auth/signup
router.post('/signup', authController.postSignup);

module.exports = router;