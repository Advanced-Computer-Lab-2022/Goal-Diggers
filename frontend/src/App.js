import './App.css';
import NavBar from './Components/navBar';
import React, { useEffect, useState } from 'react';
import CourseContainer from './Components/courseContainer';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import SearchResult from './Components/search';
import InstructorCourses from './Components/instructorCourses';


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
         {/* for getting sepcific course */}
        <Route path='/course/:id' element={<SearchResult currency={currency}/>} />
        
        <Route path='/' element={<CourseContainer currency={currency} type="all"/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
