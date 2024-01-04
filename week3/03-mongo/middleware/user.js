const { User } = require("../db/index")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user = req.headers.user;
    const pass = req.headers.pass;
    // console.log(user+"\n"+pass);
    User.findOne({
        username:user,
        password:pass
    })
    .then(function(val){
        if(val)
        {
            next()
        }
        else{
            console.log("Error");
            res.status(404).json({
                msg : "Wrong Credential",
                Username : user,
                Password : pass
            });
        }
    })
    .catch(function(e){
        console.log(e);
    })
}

module.exports = userMiddleware;