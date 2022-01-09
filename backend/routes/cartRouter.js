const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');
const { authenticateToken } = require('../middleware/isAuth');

// GET /cart/myCart
router.get('/myCart', authenticateToken, cartController.getCart);

module.exports = router;