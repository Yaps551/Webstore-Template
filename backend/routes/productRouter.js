const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const { authenticateToken, isAdmin } = require('../middleware/isAuth');


// GET /product/products
router.get('/products', productController.getProducts);

// GET /product/:productId
router.get('/:productId', productController.getProduct);

// POST /product/create
router.post('/create', isAdmin, productController.postProduct);

// PUT /product/update
router.put('/update', isAdmin, productController.putProduct);

// DELETE /product/:productId
router.delete('/:productId', isAdmin, productController.deleteProduct);

module.exports = router;