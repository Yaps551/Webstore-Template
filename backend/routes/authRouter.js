const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// POST /auth/login
router.post('/login', authController.postLogin);

// GET /auth/logout
router.get('/logout', authController.postLogout);

// POST /auth/signup
router.post('/signup', authController.postSignup);

module.exports = router;