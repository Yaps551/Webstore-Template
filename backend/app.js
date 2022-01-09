const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const productRouter = require('./routes/productRouter');
const authRouter = require('./routes/authRouter');
const cartRouter = require('./routes/cartRouter');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

const port = process.env.PORT;

// Cors options
var corsOptions = {
    origin: `http://localhost:${process.env.APP_PORT}`,
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
};

// Cors options middleware
app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Parse cookies
app.use(cookieParser(process.env.COOKIE_PARSER_KEY));

// Test route
app.get('/', (req, res, next) => {
    res.json({message: "Welcome to the API"});
});

// Routes
app.use('/product', productRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);

// Model associations
User.hasOne(Cart);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
.sync({force: true})
.then(() => {
    return User.findOne({ where: {
        role: 'Admin'
    }});
})
.then(user => {
    if (!user) {
        return bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 12)
        .then(hashedPassword => {
            return User.create({
                email: process.env.DEFAULT_ADMIN_EMAIL,
                password: hashedPassword,
                role: 'Admin'
            });
        })
    }

    return user;
})
.then(user => {
    if (Cart.findOne({ where: {
        userId: user.dataValues._id
    }}).then(() => {
        return user.createCart()
    }))

    return;
})
.then(() => {
    app.listen(port, () => {
        console.log(`API server running on port: ${port}`);
    });
})
.catch(err => {
    console.log(err);
});
