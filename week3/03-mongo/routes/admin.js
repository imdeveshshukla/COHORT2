const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin,Course} = require("../db/index")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.user;
    const pass = req.headers.pass;
    try{
        database.Admin.create({
            username:username,
            password:pass
        });
        res.status(201).json({ message: 'Admin created successfully' });
    }
    catch(err){
        res.status(404).send({
            msg:"Some Error Occured"
        })
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

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json(courses); 
});

module.exports = router;