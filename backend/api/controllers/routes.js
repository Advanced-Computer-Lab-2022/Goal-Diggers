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
//////////3bto/////////
router.post('/add-quiz', controller.addQuiz);
router.post('/add-course', controller.addCourse);
/////////////////
router.get('/getNumberOFTrainees',controller.getNumberOFTrainees)
router.get('/getMyCourses/:id',controller.getMyCourses)
router.get('/getCourseReviewsAndRatings/:id',controller.getCourseReviewsAndRatings)
router.get('/instructor/:id', controller.getInstructor);
router.get('/getnumberofusers', controller.getnumusers);
router.get('/getmostviewedcourses', controller.getmostviewedcourses);
router.get('/inprogress-courses', controller.getInProgressCourses);
router.get('/completed-courses', controller.getCompletedCourses);

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.get('/logout', controller.Logout);
router.get('/loggedin', controller.LoggedIn);

// ss

router.get("/courses-requests-pending", controller.getCoursesRequestsPending);
router.get("/courses-problems-pending", controller.getCoursesProblemsPending);
router.get("/courses-problems-resolved", controller.getCoursesProblemsResolved);
router.get("/courses-problems-unseen", controller.getCoursesProblemsUnseen);
router.post("/mark-pending/:id", controller.MarkAsPending);
router.post("/mark-resolved/:id", controller.MarkAsResolved);
router.post("/admin-grant-access", controller.AdminGrantAccess);
router.post("/admin-revoke-access", controller.AdminRevokeAccess);

router.post("/refund", controller.AdminRefundCourse);
router.post("/reject-refund", controller.RejectRefund);
router.get("/refund-requests", controller.getRefundRequests);

module.exports = router;