import './App.css';
import NavBar from './Components/navBar';
import React, { useEffect, useState } from 'react';
import CourseContainer from './Components/courseContainer';
import {Route, Routes } from 'react-router-dom';
import Editinstructorprofile from './Components/editinstructorprofile';
import Instructorprofile from './Components/instructorprofile';
import Edituserprofile from './Components/edituserprofile';
import Instructorsidebar from './Components/instructorsidebar'
import Reviewsoninstructor from './Components/reviewsoninstructor';
import Reviewsoncourse from './Components/reviewsoncourse';
import Ratecourse from './Components/ratecourse';
import Rateinstructor from './Components/rateinstructor';
import TakeCourse from './Components/takeCourse';
import Quiz from './Components/quiz';
import SearchResult from './Components/search'
import CourseOverview from './Components/courseOverview';
import Createcourse from './Components/createcourse';
import Mycourses from './Components/mycourses';
import Trainersidebar from './Components/trainersidebar';
import Homepage from './Components/homepage';
import Homepage2 from './Components/homepage2';
import About from './Components/about';
import Blogdetails from './Components/blogdetails';
import Blog from './Components/blog';
import Contact from './Components/contact';
import Coursedetails from './Components/coursedetails';
import Newcourses from './Components/newcourses';
import Teachers from './Components/teachers';
import Teacherdetails from './Components/teacherdetails';
import Meetingdetails from './Components/meetingdetails';
import Meetings from './Components/meetings';
import Addcourse from './Components/addcourse';
import Usersidebar from './Components/usersidebar';
import Changepassword from './Components/changepassword';
import Addfirstcard from './Components/addfirstcard';
import Pruchercourse from './Components/pruchercourse';
import Comingsoon from './Components/comingsoon';





function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
        
      <Routes>
      <Route path='/instructorprofile' element={<Instructorprofile />} />
      <Route path='/mycourses' element={<Mycourses />} />
      <Route path='/trainersidebar' element={<Trainersidebar />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/blogdetails' element={<Blogdetails />} />
      <Route path='/comingsoon' element={<Comingsoon />} />
      <Route path='/homepage2' element={<Homepage2 />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/coursedetails' element={<Coursedetails />} />
      <Route path='/newcourses' element={<Newcourses />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/teacherdetails' element={<Teacherdetails />} />
      <Route path='/meetingdetails' element={<Meetingdetails />} />
      <Route path='/meetings' element={<Meetings />} />
      <Route path='/createcourse' element={<Createcourse />} />
      <Route path='/addcourse' element={<Addcourse />} />
      <Route path='/usersidebar' element={<Usersidebar />} />
      <Route path='/changepassword' element={<Changepassword />} />
      <Route path='/addfirstcard' element={<Addfirstcard />} />
      <Route path='/pruchercourse' element={<Pruchercourse />} />


      </Routes>

    </React.Fragment>
  );
}

export default App;
