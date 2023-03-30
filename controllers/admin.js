const Product = require('../models/product');

exports.addProductPage = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.addProduct = (req, res, next) => {
    const title = req.body.title;
    const url = req.body.url;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, url, price, description);
    product.save();
    res.redirect('/');
  };

exports.getProductsAdminPage = (req, res, next) => {
    Product.getProducts(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
}