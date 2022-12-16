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
import AdminView from './Components/adminView'
import ProfileView from './Components/profileView';
import AuthContext, { AuthContextProvider } from "./context/AuthContext";



function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
      <NavBar handleCountry ={handleCountry}/>
      <AuthContextProvider>
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
         {/* for getting sepcific course */}
        <Route path='/course/:id' element={<CourseOverview currency={currency}/>} />
        <Route path='/take-course/:id' element={<TakeCourse />} />
        <Route path='/quiz/:courseID/:id' element={<Quiz />} />
        <Route path='/' element={<CourseContainer currency={currency} type="all"/>} />
      </Routes>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
