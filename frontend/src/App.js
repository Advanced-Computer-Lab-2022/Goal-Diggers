import './App.css';
import NavBar from './Components/navBar';
import React, { useEffect, useState } from 'react';
import CourseContainer from './Components/courseContainer';
import {Route, Routes } from 'react-router-dom';
import Editinstructorprofile from './Components/editinstructorprofile';
import Instructorprofile from './Components/instructorprofile';
import Edituserprofile from './Components/edituserprofile';
import Reviewsoninstructor from './Components/reviewsoninstructor';
import Reviewsoncourse from './Components/reviewsoncourse';
import Ratecourse from './Components/ratecourse';
import Rateinstructor from './Components/rateinstructor';
import TakeCourse from './Components/takeCourse';
import Quiz from './Components/quiz';
import SearchResult from './Components/search';
import Createcourse from './Components/createcourse';
import Mycourses from './Components/mycourses';
import Homepage2 from './Components/homepage2';
import About from './Components/about';
import Blogdetails from './Components/blogdetails';
import Blog from './Components/blog';
import Contact from './Components/contact';
import Coursedetails from './Components/coursedetails';
import Newcourses from './Components/newcourses';
import Teacherdetails from './Components/teacherdetails';
import Meetingdetails from './Components/meetingdetails';
import Meetings from './Components/meetings';
import Changepassword from './Components/changepassword';
import Pruchercourse from './Components/pruchercourse';
import Comingsoon from './Components/comingsoon';
import Userprofile from './Components/userprofile';
import Help from './Components/help';
import Event from './Components/event';
import Eventdetails from './Components/eventdetails';
import Membership from './Components/membership';
import Certificate from './Components/certificate';
import Footer from './Components/footer';
import Wallet from '@mui/icons-material/Wallet';
import ViewNotes from './Components/viewNotes';
import AdminView from './Components/adminView';
import Temp1 from './Components/temp1';
import Adduser from './Components/adduser';
import CoursesRequests from './Components/coursesRequests';
import SetPromotions from './Components/setPromotions';
import Problems from './Components/problems';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import axios from "axios";
import RegisterFooter from './registerFooter';
import AuthContext, { AuthContextProvider } from "./context/AuthContext";
import TermsAndConditions from './Components/termsandconditions';
import ResetPassword from './Components/ResetPassword';
import ForgetPassword from './Components/ForgetPassword';
import Policy from './Components/policy';
import PayCourse from './Components/payCourse';
axios.defaults.withCredentials=true;
function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/eventdetails" element={<Eventdetails />} />
          <Route path="/event" element={<Event />} />
          <Route path="/homepage2" element={<Homepage2 />} />
          <Route path="/createcourse" element={<Createcourse />} />
        </Routes>
        <RegisterFooter></RegisterFooter>
        <Footer></Footer>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
