const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// GET /product/products
router.get('/products', productController.getProducts);

// GET /product/:productId
router.get('/:productId', productController.getProduct);

// POST /product/create
router.post('/create', productController.createProduct);

module.exports = router;