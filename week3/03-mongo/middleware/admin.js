// Middleware for handling auth
const {Admin} = require("../db/index")

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = req.headers.user;
    const pass = req.headers.pass;
    const data = {
        username:user,
        password:pass
    };
    const isExist = await Admin.findOne(data);
    if(isExist)
    {
        next();
    }
    else 
    {
        res.status(403).json({
            msg: "User Does NOt exist",
            Username:user,
            password:pass
        });
    }

}

module.exports = adminMiddleware;