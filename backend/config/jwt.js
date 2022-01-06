const jwt = require('jsonwebtoken');

exports.generateAccessToken = (payload) => {
    return jwt.sign({ userInfo: payload }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15s' });
}