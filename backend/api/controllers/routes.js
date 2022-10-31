const express = require('express');
const router = express.Router();
const controller = require('./controllers');
const middelware = require('./middelware');

router.get('/', (req,res)=>{
    res.send("API WORKS")
});



router.post('/add-user', controller.addUser);
router.post('/add-course', controller.addCourse);
router.get('/all-courses', controller.getAllCourses);
router.get('/search/:keyword', controller.getSearchCourses); 
router.get('/course/:id', controller.getCourse);
router.get('/instructor-courses', controller.getInstructorCourses);




module.exports = router;