const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const isAuth = require('../middleware/isAuth');


// GET /product/products
router.get('/products', isAuth.authenticateToken, productController.getProducts);

// GET /product/:productId
router.get('/:productId', productController.getProduct);

// POST /product/create
router.post('/create', productController.createProduct);

module.exports = router;