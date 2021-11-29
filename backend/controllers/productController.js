const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
        res.status(200).json({message: 'Fetched products successfully', products: products});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Product.findByPk(prodId)
    .then(product => {
        if (!product) {
            const error = new Error('Could not find product');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({message: 'Fetched product successfully', product: product});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;

    Product.create({
        name: name,
        description: description
    }).then(() => {
        res.status(201).json({
            message: 'Product created successfully.'
        });
    })
    .catch(err => {
        console.log(err);
    });
}