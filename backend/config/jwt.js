const jwt = require('jsonwebtoken');

exports.generateAccessToken = (payload) => {
    return jwt.sign({ user: payload }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1h' });
}

exports.generateRefreshToken = (payload) => {
    return jwt.sign({ user: payload }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '1d' });
}