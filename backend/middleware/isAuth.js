const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {

    const token = req.cookies.Token;

    if (token == null) return res.status(401).json( { message: 'Access token is missing' });

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Access token invalid' });

        req.user = user;
        next();
    });
}