const express = require('express');
const router = express.Router();
const controller = require('./controllers');
const middelware = require('./middelware');

router.get('/', (req,res)=>{
    res.send("API WORKS")
})

router.post('/add-user', controller.addUser);
router.get('/all-courses', controller.getAllCourses);
router.get('/search/:keyword', controller.getSearchCourses); 
router.get('/course/:id', controller.getCourse);
router.get('/instructor-courses', controller.getInstructorCourses);
router.get('/get-register-course/:id', controller.getRegisterCourse);
router.get('/get-quiz/:id', controller.getQuiz);
router.post('/save-quiz/:courseID/:id', controller.saveQuiz);
router.post('/save-progress', controller.saveProgress);
///////mahmoud yassin //////
router.post('/rate-instructor/:id', controller.addInstructorRate);
router.post('/rate-course/:id', controller.addCourseRate);
router.get('/reviews-ratings/:id', controller.getReviewsAndRatings);
router.post('/change-password/:id', controller.ChangePassword);
router.post('/change-email-biography/:id', controller.changeEmailorBiography);
//////////////////////////////////////////////




module.exports = router;