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
router.get('/courses-requests-pending', controller.getCoursesRequestsPending);
router.get('/courses-requests-approved', controller.getCoursesRequestsApproved);
router.get('/courses-requests-rejected', controller.getCoursesRequestsRejected);
router.get('/courses-problems-pending', controller.getCoursesProblemsPending);
router.get('/courses-problems-resolved', controller.getCoursesProblemsResolved);
router.get('/courses-problems-unseen', controller.getCoursesProblemsUnseen);
router.post('/mark-pending',controller.MarkAsPending);
router.post('/mark-resolved',controller.MarkAsResolved);
router.post('/admin-add-promotion', controller.AdminAddPromotions);
router.post('/admin-grant-access', controller.AdminGrantAccess);
router.post('/admin-revoke-access', controller.AdminRevokeAccess);
router.get('/completed-courses', controller.getCompletedCourses);
router.get('/inprogress-courses', controller.getInProgressCourses);
router.post('/create-pdf', controller.createPDF);
router.get('/fetch-pdf', controller.fetchPDF);
router.post('/create-certificate', controller.createCertificate);
router.get('/fetch-certificate', controller.fetchCertificate);

/////// Payment /////
router.post('/payment/create', controller.createPayment);
router.post('/buy-course', controller.buyCourse);
router.get('/wallet', controller.getWallet);
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.get('/logout', controller.Logout);
router.get('/loggedin', controller.LoggedIn);
/////////////////



module.exports = router;