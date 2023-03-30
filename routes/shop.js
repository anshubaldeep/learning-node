const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndexPage);
router.get('/products', shopController.getProductsPage);
// router.get('/products/:productId', productsController.getProductDetailPage);
router.get('/cart', shopController.getCartPage);
router.post('/checkout', shopController.getCheckoutPage);
router.get('/orders', shopController.getOrdersPage);

module.exports = router;
