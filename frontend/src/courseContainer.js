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
    const {data} = await http.post(apiUrl + 'add-course', course);
    return data;
}

export default courseService;