const { Product } = require("../models/Product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.getAllProduct = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};

module.exports.getProduct = (request, response) => {
  // Product.findById(request.params.id)
  Product.findById(request.params.id)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.updateProduct = (request, response) => {
  Product.findByIdAndUpdate(request.params.id, request.body)
    .then((updatedProduct) => {
      response.json(updatedProduct);
    })
    .catch((err) => response.json(err));
};

module.exports.deleteProduct = (request, response) => {
  Product.findByIdAndDelete(request.params.id)
    .then((product) => {
      response.json(product);
    })
    .catch((err) => response.json(err));
};
