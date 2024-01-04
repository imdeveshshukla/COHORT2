const express = require("express");
const userMiddleware = require("../middleware/user");
const router = express.Router();
const {User,Course} = require("../db/index");

const { errorMonitor } = require("supertest/lib/test");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const user = req.headers.user;
    const pass = req.headers.pass;

    const creation = await User.create({
        username:user,
        password:pass
    });
    res.status(201).json({
        msg : "User Created",
        Creation : creation
    });

});

router.get('/courses' ,async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        msg : "Courses",
        courses
    });

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const cId = req.params.courseId;
    const user = req.headers.user;
    // console.log(user+""+cId);
    User.updateOne({
        username:user
    },{
        $push :{
            PurchasedCourse:cId
        }
    })
    .then(function(val){
        res.json({
            msg:"Purchased Course"
        })
    })
    .catch(function(err){
        console.log(err);
        res.json({
            msg:"Some Error Occured",
            Error:err
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.user
    });
    const courses = user.PurchasedCourse;
    const purcCourse = await Course.find({
        _id:courses
    });
    res.json({
        course:purcCourse
    });
    
});


module.exports = router;
