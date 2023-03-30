const Product = require('../models/product');

exports.getProductsPage = (req, res, next) => {
  Product.getProducts(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    });
  });
};


exports.getIndexPage = (req, res, next) => {
    Product.getProducts(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    });
  };


exports.getCartPage = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
}

exports.getCheckoutPage = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
}

exports.getOrdersPage = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
}