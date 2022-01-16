 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');

 const jwtGenerator = require('../config/jwt');
 
 const User = require('../models/user');

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;

    User.findOne({
        where: {
            email: email
        }
    })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        loadedUser = user;
        return bcrypt.compare(password, user.password)
        .then(isEqual => {
            if (!isEqual) {
                return res.status(401);
            }
            // Generate token
            const token = jwtGenerator.generateAccessToken({
                email: loadedUser.email,
                userId: loadedUser._id.toString(),
                role: loadedUser.role
            });

            // Set cookies
            res.cookie("Token", token, {
                secure: false, // FIXME set to true for HTTPS
                httpOnly: true,
                signed: true,
                maxAge: process.env.TOKEN_EXPIRATION_TIME * 1000,
                sameSite: 'lax'
            });
            res.cookie("IsLoggedIn", true, {
                secure: false,
                signed: true,
                maxAge: process.env.TOKEN_EXPIRATION_TIME * 1000,
                sameSite: 'lax'
            });

            if (loadedUser.dataValues.role == "Admin") {
                res.cookie("IsAdmin", true, {
                    secure: false,
                    signed: true,
                    maxAge: process.env.TOKEN_EXPIRATION_TIME * 1000,
                    sameSite: 'lax'
                });
            }

            return res.status(200).json({ message: "Logged in successfully" });
        })
        .catch(err => {
            return res.status(401).json({ message: 'Invalid credentials' });
        });
    })
    .catch(err => {
        const error = new Error('Internal server error');
        error.httpStatusCode = 500;
        return next(error);
    })
};

exports.postLogout = (req, res, next) => {
    const token = req.signedCookies.Token;
    const loggedIn = req.signedCookies.IsLoggedIn;
    const admin = req.signedCookies.IsAdmin;

    if (token || loggedIn || admin) {
        res.clearCookie("Token");
        res.clearCookie("IsLoggedIn");
        res.clearCookie("IsAdmin");

        return res.status(200).json({ message: "Logged out successfully" });
    } else {
        return res.status(404).json({ message: "User not logged in" });
    }
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        where: {
            email: email
        }
    })
    .then(existingUser => {
        if (existingUser) {
            return res.status(409).json({
                message: 'Email already in use'
            });
        }
        // Hash password
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword
            });

            return user.save()
        })
        .then(user => {
            user.createCart();
        })
        .then(() => {
            res.status(201).json({
                message: 'Signed up succesfully'
            });
        });
    })
    .catch(err => {
        const error = new Error('Internal server error');
        error.httpStatusCode = 500;
        next(error);
    });
};

exports.getRole = (req,res, next) => {
    return res.json({ role: req.user.role });
}