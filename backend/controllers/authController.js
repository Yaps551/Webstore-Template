const User = require("../models/user");

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


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
            res.status(409).json({
                message: 'Email already in use'
            });
        }
        else {  
            const user = new User({
                email: email,
                password: password
            });

            return user.save();
        }
    })
    .then(result => {
        res.status(201).json({
            message: 'Signed up succesfully'
        });
    })
    .catch(err => {
        console.log(err);
    });
};