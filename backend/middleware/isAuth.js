const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {

    const token = req.signedCookies.Token;

    if (token == null) return res.status(401).json( { message: 'Access token is missing' });

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Access token invalid' });

        req.role = user.userInfo.role;
        
        next();
    });
}

exports.isAdmin = (req, res, next) => {
    
    const role = req.role;

    if (!role) return res.status(401).json({ message: 'User has no role' });

    if (!(role == "Admin")) return res.status(403).json({ message: 'User does not have permission' });

    next();
}