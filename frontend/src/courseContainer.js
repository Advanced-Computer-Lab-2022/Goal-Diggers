import  http  from './http-modules';
import { saveAs } from 'file-saver';

const apiUrl = 'http://localhost:3000/api/';

let courseService = {}

courseService.getCourse = async(id) => {
    console.log(id);
    const {data} = await http.get(apiUrl + 'course/' + id);
    return data;
}

courseService.getAllCourses = async() => {
    const {data} = await http.get(apiUrl + 'all-courses');
    return data.courses;
}

courseService.getSearchCourses = async(keyword) => {
    if(!keyword) {
        const {data} = await http.get(apiUrl + 'all-courses');
        return data.courses;
    }
    else {
        const {data} = await http.get(apiUrl + `search/${keyword}`);
        return data.courses;
    }
}

courseService.getInstructorCourses = async() => {
    const {data} = await http.get(apiUrl + 'instructor-courses');
    return data.courses;
}

courseService.addUser = async(user) => {
    const {data} = await http.post(apiUrl + 'add-user', user);
    return data;
}

courseService.addCourse = async(course) => {
    console.log(course);
    const {data} = await http.post(apiUrl + 'add-course', {course});
    return data;
}

//also send data of user in sprint 3
courseService.rateInstructor = async(review, rate, instructor,) => {
    const {data} = await http.post(apiUrl + 'rate-instructor/' + instructor, {review , rate});
    return data;
}

//also send data of user in sprint 3
courseService.rateCourse = async(review, rate, course,) => {
    const {data} = await http.post(apiUrl + 'rate-course/' + course, {review , rate});
    return data;
}

//need update in sprint 3
courseService.getRatingsAndReviews = async() => {
    const {data} = await http.get(apiUrl + 'reviews-ratings');
    return data;
}

//need update in sprint 3
courseService.changePassword = async(passwords) => {
    const {data} = await http.post(apiUrl + 'change-password', passwords);
    console.log(data);
    return data;
}

//need update in sprint 3
courseService.changeEmailorBiography = async(info) => {
    const {data} = await http.post(apiUrl + 'change-email-biography', info);
    return data;
}

courseService.getQuiz = async(id) => {
    const {data} = await http.get(apiUrl + 'get-quiz/' + id);
    return data.quiz;
}

courseService.saveProgress = async(course) => {
    const {data} = await http.post(apiUrl + 'save-progress', {course : course});
    return data.course;
}

courseService.getRegisteredCourse = async(id) => {
    const {data} = await http.get(apiUrl + 'get-register-course/' + id);
    return data.course;
}

courseService.saveQuiz = async(id, courseID,grade) => {
    console.log(grade);
    const {data} = await http.post(apiUrl + 'save-quiz/'+courseID + '/' + id,{ grade : grade});
    return data.course;
}

courseService.addQuiz = async(quiz) => {
    const {data} = await http.post(apiUrl + 'add-quiz',{ quiz });
    return data;
}

courseService.adminAddPromotions = async(courses,promotion) => {
    const {data} = await http.post(apiUrl + 'admin-add-promotion',{ courses, promotion});
    return data;
}
//------------------------------------------------------------------------------------//
courseService.getCoursesProblemsP = async() => {
    const {data} = await http.get(apiUrl + 'courses-problems-pending');
    return data.problems;
}
courseService.getCoursesProblemsR = async() => {
    const {data} = await http.get(apiUrl + 'courses-problems-resolved');
    return data.problems;
}
courseService.getCoursesProblemsU = async() => {
    const {data} = await http.get(apiUrl + 'courses-problems-unseen');
    return data.problems;
}
courseService.MarkAsPending = async(id) => {
    const {data} = await http.post(apiUrl + 'mark-pending/' + id);
    return data;
}
courseService.MarkAsResolved = async(id) => {
    const {data} = await http.post(apiUrl + 'mark-resolved/' + id);
    return data;
}
//-----------------------------------------------------------------------------------//
courseService.getCoursesRequestsP = async() => {
    const {data} = await http.get(apiUrl + 'courses-requests-pending');
    return data.requests;
}
courseService.getCoursesRequestsA = async() => {
    const {data} = await http.get(apiUrl + 'courses-requests-approved');
    return data.requests;
}
courseService.getCoursesRequestsR = async() => {
    const {data} = await http.get(apiUrl + 'courses-requests-rejected');
    return data.requests;
}

courseService.GrantAccess = async(id) => {
    const {data} = await http.post(apiUrl + 'admin-grant-access',{id});
    return data;
}
courseService.RevokeAccess = async(id) => {
    const {data} = await http.post(apiUrl + 'admin-revoke-access',{id});
    return data;
}

courseService.getInprogressCourses= async() => {
    const {data} = await http.get(apiUrl + 'inprogress-courses');
    return data.courses;
}

courseService.getCompletedCourses= async() => {
    const {data} = await http.get(apiUrl + 'completed-courses');
    return data.courses;
}

///////////////////////////////////////////////////////
// fetch the client secret to pay 
courseService.getClientSecret= async(price) => {
    console.log(price);
    const data = await http.post(apiUrl + "payment/create", {price});
    return data.data.clientSecret;
}

// buy the course 
courseService.buyCourse= async( course, price) => {
    const data = await http.post(apiUrl + "buy-course", {course, price});
    return data.data.clientSecret;
}

// fetch the client secret to pay 
courseService.getClientSecret= async(price) => {
    const data = await http.post(apiUrl + "payment/create", {price});
    return data.data.clientSecret;
}

// get instructor wallet 
courseService.getWallet= async( course) => {
    const data = await http.get(apiUrl + "wallet");
    return data.data.wallet;
}
///////////////////////////////////////////////////

courseService.createAndDownloadPdf = async(title, notes) => {
    await http.post(apiUrl+'create-pdf', {title, notes})
    .then(() => http.get(apiUrl+'fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, `${title} Notes.pdf`);
    })
}

courseService.createAndDownloadCertificate = async(title, username,instructor) => {
    await http.post(apiUrl+'create-certificate', {title, username,instructor})
    .then(() => http.get(apiUrl+'fetch-certificate', { responseType: 'blob' }))
    .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, `${title}.pdf`);
    })
}

courseService.acceptTerms= async() => {
    const data = await http.get(apiUrl + "accept-terms");
    return data;
}

courseService.requestCourse= async(course) => {
    const data = await http.post(apiUrl + "request", {course});
    return data;
}

courseService.getproblems = async(id) => {
    console.log(id);
    const {data} = await http.get(apiUrl + 'get-problems/' + id);
    return data.problems;
}

courseService.addproblems = async(problem) => {
    const {data} = await http.post(apiUrl + 'add-problem', {problem});
    return data;
}
//////refund course

courseService.refundcourse = async(id) => {
    const {data} = await http.post(apiUrl + 'refund-course/'+ id);
    return data;
}
courseService.AdminRefundCourse = async(course) => {
    const {data} = await http.post(apiUrl + 'refund', {course});
    return data;
}
courseService.getRefundRequests = async() => {
    const {data} = await http.get(apiUrl + 'refund-requests');
    return data.courses;
}

export default courseService;