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
    User.updateOne({user},{
        "$push" :{
            PurchasedCourse:cId
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    res.send("Courses");
});


module.exports = router;
