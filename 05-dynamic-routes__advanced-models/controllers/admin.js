const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    product: {},
  });
};

exports.postAddProduct = (req, res, next) => {
  const id = null;
  const { title, imageUrl, price, description } = req.body;

  req.user
    .createProduct({ title, imageUrl, price, description })
    .then((result) => {
      console.log('Added product to Database');
      res.redirect('/admin/products');
    })
    .catch((er) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }

  const prodId = req.params.productId;
  if (!prodId) {
    return res.redirect('/');
  }

  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: products[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const { id, title, price, imageUrl, description } = req.body;

  Product.update({ title, price, imageUrl, description }, { where: { id } })
    .then(() => res.redirect('/admin/products'))
    .catch((err) => console.log(err));
  // new Product(id, title, imageUrl, description, price).save();
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({ where: { id: prodId } })
    .then(() => res.redirect('/admin/products'))
    .catch((err) => console.log(err));
};
