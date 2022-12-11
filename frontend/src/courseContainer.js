import  http  from './http-modules';


const apiUrl = 'http://localhost:3000/api/';

let courseService = {}

courseService.getCourse = async(id) => {
    console.log(id);
    const {data} = await http.get(apiUrl + 'course/' + id);
    return data.course;
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
courseService.getRatingsAndReviews = async(id) => {
    const {data} = await http.get(apiUrl + 'reviews-ratings/' + id);
    return data;
}

//need update in sprint 3
courseService.changePassword = async(id, passwords) => {
    const {data} = await http.post(apiUrl + 'change-password/' + id, passwords);
    return data;
}

//need update in sprint 3
courseService.changeEmailorBiography = async(id, info) => {
    const {data} = await http.post(apiUrl + 'change-email-biography/' + id, info);
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


export default courseService;