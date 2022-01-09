const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getCart = (req, res, next) => {
    findCart(req)
    .then(cart => {
        cart.getProducts()
        .then(products => {
            return res.status(200).json({ message: "Cart fetched successfully", products: products });
        })
        .catch(err => {
            return res(404).json({ message: "Could not fetch cart items" });
        })
    })
    .catch(err => {
        return res(404).json({ message: "Could not fetch cart" });
    });
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let userCart;

    findCart(req)
    .then(cart => {
        userCart = cart;

        return cart.getProducts({ where: {
            id: prodId
        }})
        .then(products => {
            if (products.length > 0) {
                const product = products[0];
            }

            let newQuantity = 1;
            if (product) {
                // Increment quantity
            }

            return Product.findByPk(prodId)
            .then(product => {
                return userCart.addProduct(product, { through: { newQuantity} });
            })
            .catch(err => {
                return res.status(404).json({ message: "Could not find product", error: err.message});
            })
        })
        .catch(err => {
            return res.status(404).json({ message: "Could not fetch cart products"});
        })
    })
    .catch(err => {
        return res.status(404).json({ message: "Could not fetch user cart" });
    })
}

findCart = async (req) => {
    return Cart.findOne({ where: {
        userId: req.user.userId
    }})
    .then(cart => {
        return cart;
    })
}