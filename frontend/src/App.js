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



function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
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
      </Routes>
    </React.Fragment>
  );
}

export default App;
