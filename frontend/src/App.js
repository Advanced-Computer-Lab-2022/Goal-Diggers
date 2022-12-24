import './App.css';
import NavBar from './Components/navBar';
import React, { useEffect, useState,useContext} from 'react';
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
import AdminView from './Components/adminView'
import ProfileView from './Components/profileView';
import AuthContext, { AuthContextProvider } from "./context/AuthContext";
import PayCourse from './Components/payCourse';
import InstructorView from './Components/instructorView';
import Certificate from './Components/certificate';
import NotFound from './Components/notfound';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import axios from "axios";
axios.defaults.withCredentials=true;


function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
    <AuthContextProvider>
      <NavBar handleCountry ={handleCountry}/>
      <Routes>
        <Route path='/editinstructorprofile' element={<Editinstructorprofile />} />
        <Route path='/ratecourse/:id/:courseID' element={<Ratecourse />} />
        <Route path='/rateinstructor/:id/:insturctorID' element={<Rateinstructor />} />
        <Route path='/edituserprofile' element={<Edituserprofile />} />
        <Route path='/instructorprofile' element={<Instructorprofile />} />
        <Route path='/instructorsidebar' element={<Instructorsidebar />} />
        <Route path='/reviewsoninstructor' element={<Reviewsoninstructor />} />
        <Route path='/reviewsoncourse' element={<Reviewsoncourse />} />
        <Route path='/instructor-courses' element={<CourseContainer currency={currency} type="instructor"/>} />
        <Route path='/search' element={<SearchResult currency={currency}/>} />
        <Route path='/create-course' element={<Createcourse />} />
        <Route path='/admin-profile' element={<AdminView />} />
        <Route path='/student-profile' element={<ProfileView />} />
        <Route path='/instructor-profile' element={<InstructorView />} />
         {/* for getting sepcific course */}
        <Route path='/course/:id' element={<CourseOverview currency={currency}/>} />
        <Route path='/take-course/:id' element={<TakeCourse />} />
        <Route path='/quiz/:courseID/:id' element={<Quiz />} />
        <Route path='/payment/:id' element={<PayCourse />} />
        <Route path='/certificate/:id' element={<Certificate />} />
        <Route path='/' exact element={<CourseContainer currency={currency} type="all"/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
