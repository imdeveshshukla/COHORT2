const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db/index");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../secret/secret")
// Admin Routes
var token=0;
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.user;
    const pass = req.body.pass;
    console.log(req.body);
    await Admin.create({
        username:user,
        password:pass
    });

    res.json({
        msg : "Admin Created"
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const user = req.body.user;
    const pass = req.body.pass;
    try{
        const userValid = await Admin.findOne({
            username:user,
            password:pass
        });
        
        if(userValid)
        {
            token = jwt.sign({
                user
            },JWT_SECRET);
            res.json({
                msg:"You are Signed In",
                Your_token : token
            });
        }
        else
        {
            res.status(411).json({
                msg : "Incorrect Email and Pass",
                username: user,
                password:pass
            });
        }
    }
    catch(er){
        console.log("error "+er);
        res.json({
            error:er
        });
    }

    
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const desc = req.body.desc;
    const price = req.body.price;
    const imgLink = req.body.img;
    Course.create({title,desc,price,imgLink}).then(function(val){
        res.status(201).json({
            message:"Course Created",
            id:val._id
        })
    }).
    catch(function(){
        res.status(404).json({
            msg : "SOme Error Occured"
        });
    });
    
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json(courses); 
});

module.exports = router;