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
import Addcourse from './Components/addcourse';
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
function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>

      <Routes>
      <Route path='/search'element={<SearchResult/> } />
      <Route path='/instructorprofile' element={<Instructorprofile />} />
      <Route path='/mycourses' element={<Mycourses />} />
      <Route path='/homepage2' element={<Homepage2 />} />
      <Route path='/about' element={<About />} />
      <Route path='/blogdetails' element={<Blogdetails />} />
      <Route path='/comingsoon' element={<Comingsoon />} />
      <Route path='/homepage2' element={<Homepage2 handleCountry={handleCountry}/>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/coursedetails/:id' element={<Coursedetails />} />
      <Route path='/newcourses' element={<Newcourses />} />
      <Route path='/teacherdetails/:id' element={<Teacherdetails />} />
      <Route path='/meetingdetails' element={<Meetingdetails />} />
      <Route path='/meetings' element={<Meetings />} />
      <Route path='/createcourse' element={<Createcourse />} />
      <Route path='/addcourse' element={<Addcourse />} />
      <Route path='/changepassword' element={<Changepassword />} />
      <Route path='/pruchercourse' element={<Pruchercourse />} />
      <Route path='/userprofile' element={<Userprofile />} />
      <Route path='/help' element={<Help />} />
      <Route path='/event' element={<Event />} />
      <Route path='/eventdetails' element={<Eventdetails />} />
      <Route path='/membership' element={<Membership />} />
      <Route path='/certifacte' element={<Certificate />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/viewNotes' element={<ViewNotes />} />
      <Route path='/adminview' element={<AdminView />} />
      <Route path='/takeCourse' element={<TakeCourse />} />
      <Route path='/temp1' element={<Temp1 />} />
      <Route path='/adduser' element={<Adduser />} />
      <Route path='/coursesRequests' element={<CoursesRequests />} />
      <Route path='/setPromotions' element={<SetPromotions />} />
      <Route path='/problems' element={<Problems />} />


      </Routes>
<Footer></Footer>
    </React.Fragment>
  );
}

export default App;
