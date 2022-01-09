const Cart = require("../models/cart");

exports.getCart = (req, res, next) => {
    Cart.findOne({ where: {
        userId: req.user.userId
    }})
    .then(cart => {
        return res.status(200).json({ message: "Cart fetched successfully", cart: cart });
    })
    .catch(err => {
        return res(404).json({ message: "Could not fetch cart" });
    });
}