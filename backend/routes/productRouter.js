const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const { authenticateToken } = require('../middleware/isAuth');


// GET /product/products
router.get('/products', authenticateToken, productController.getProducts);

// GET /product/:productId
router.get('/:productId', productController.getProduct);

// POST /product/create
router.post('/create', productController.createProduct);

module.exports = router;