const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const { authenticateToken, isAdmin } = require('../middleware/isAuth');


// GET /product/products
router.get('/products', isAdmin, productController.getProducts);

// GET /product/:productId
router.get('/:productId', productController.getProduct);

// POST /product/create
router.post('/create', authenticateToken, productController.postProduct);

// PUT /product/update
router.put('/update', authenticateToken, productController.putProduct);

// DELETE /product/:productId
router.delete('/:productId', productController.deleteProduct);

module.exports = router;