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
    let productToAdd;
    let userCart;
    let newQuantity = 1;

    // Check if product exists
    Product.findByPk(prodId)
    .then(product => {
        if (!product) {
            return res.status(404).json({ message: 'Product with this id does not exist' });
        }

        findCart(req)
        .then(cart => {
            userCart = cart;
    
            return cart.getProducts({ where: { _id: prodId } });
        })
        .then(products => {
            let product;
            if (products.length > 0) {
                product = products[0];
            }
            
            // Increment quantity if product already exists as cart item
            if (product) {
                const oldQuantity = product.cartItem.quantity;
                newQuantity = oldQuantity + 1;
    
                return product;
            }
            return productToAdd;
        })
        .then(product => {
            return userCart.addProduct(product, { through: { quantity: newQuantity } });
        })
        .then(result => {
            res.status(200).json({ message: 'Successfully added product to cart' });
        })
    })
    .catch(err =>  {
        return res.status(404).json({ message: err.message });
    });
}

findCart = async (req) => {
    return Cart.findOne({ where: {
        userId: req.user.userId
    }})
    .then(cart => {
        return cart;
    })
}