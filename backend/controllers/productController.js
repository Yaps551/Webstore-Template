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

exports.postProduct = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    const newProduct = {
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price ? price : null
    }

    Product.create(newProduct)
    .then(result => {
        res.status(201).json({
            message: 'Product created successfully.',
            product: result.dataValues
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.putProduct = (req, res, next) => {
    const prodId = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    Product.findByPk(prodId)
    .then(product => {
        if (!product) return res.status(404).json({message: 'Product not found'});

        product.name = name ? name : product.name;
        product.description = description ? description : product.description;
        product.imageUrl = imageUrl ? imageUrl : product.imageUrl;
        product.price = price ? price : product.price;

        return product.save()
    })
    .then(() => {
        res.status(200).json({
            message: 'Product updated successfully'
        });
    })
    .catch(err => console.log(err));
}

exports.deleteProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Product.findByPk(prodId)
    .then(product => {
        return product.destroy();
    })
    .then(() => {
        res.status(200).json({
            message: 'Product deleted successfully'
        })
    })
    .catch(err => console.log(err));
}