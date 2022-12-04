import './App.css';
import NavBar from './Components/navBar';
import React, { useEffect, useState } from 'react';
import CourseContainer from './Components/courseContainer';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import SearchResult from './Components/search';
import InstructorCourses from './Components/instructorCourses';
import Adduser from './Components/adduser';
import Createcourse from './Components/createcourse';
import CourseOverview from './Components/courseOverview';
import Register from './Components/register';
import RegisterFooter from './Components/registerFooter';
import Login from './Components/login';
import ForgetPassword from './Components/forgetPassword';
import Discount from './Components/courseDiscount';
function App() {
  const [currency, setCurrency] = useState('');
  const handleCountry = (curr) => {
      setCurrency(curr);
  }
  return (
    <React.Fragment>
      <NavBar handleCountry ={handleCountry}/>
      <Routes>
        <Route path='/instructor-courses' element={<CourseContainer currency={currency} type="instructor"/>} />
        <Route path='/search' element={<SearchResult currency={currency}/>} />
        <Route path='/Register' element={<Register  type="all"/>} />
         {/* for getting sepcific course */}
        <Route path='/course/:id' element={<CourseOverview />} />
        <Route path='/adduser' element={<Adduser />} />
        <Route path='/create-course' element={<Createcourse />} />
        <Route path='/login' element={<Login  type="all"/>} />
        <Route path='/forgetPassword' element={<ForgetPassword type="all"/>} />
        <Route path='/discount' element={<Discount type="all"/>} />
        
        <Route path='/' element={<CourseContainer currency={currency} type="all"/>} />
      </Routes>
      <RegisterFooter></RegisterFooter>
    </React.Fragment>
  );
}

export default App;
