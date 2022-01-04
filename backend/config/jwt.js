const jwt = require('jsonwebtoken');

exports.generateAccessToken = (payload) => {
    return jwt.sign({ user: payload }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1h' });
}