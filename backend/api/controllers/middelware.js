const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.auth = (req,res,next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send("access denied");
    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    }
    catch (ex) {
        res.status(400).send("invalid token");
    }
}

module.exports.admin = (req,res,next) => {
    if(req.user.type == 'admin') {
        next();
    } 
    return res.status(401).send("access denied");
}

