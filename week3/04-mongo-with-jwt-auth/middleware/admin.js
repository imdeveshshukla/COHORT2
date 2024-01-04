// Middleware for handling auth
const {JWT_SECRET} = require("../secret/secret");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.auth;
        const words = token.split(" ")//Bearer token
        const jwtToken = words[1]; 
        const userDecode = jwt.verify(jwtToken,JWT_SECRET);
        if(userDecode.user)
        {
            res.user = userDecode.user; // so this data will pass to next middlware
            next()
        }
        else{
            res.status(403).json({
                msg:"You are not authenticated to go there",
                user:userDecode
            });
        }
    }
    catch(err){
        res.status(403).json({
            msg:"You are not authenticated to go there",
            error:err
        });
    }

}

module.exports = adminMiddleware;