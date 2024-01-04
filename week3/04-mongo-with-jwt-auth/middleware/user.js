const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../secret/secret');
function userMiddleware(req, res, next) {

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.auth;
    const words = token.split(" ")//Bearer token
    const jwtToken = words[1]; 
    const userDecode = jwt.verify(jwtToken,JWT_SECRET);
    if(userDecode.username)
        next()
    else{
        res.status(403).json({
            msg:"You are not authenticated to go there"
        });
    }
}

module.exports = userMiddleware;