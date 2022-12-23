import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import "./sidebar.css";

import Instructorprofile from './instructorprofile';
import Coursemanagement from './coursemanagement';
import Editinstructorprofile from './editinstructorprofile';
import Reviewsoninstructor from './reviewsoninstructor';
import Changepassword from './changepassword';

function Trainersidebar() {
  const [instructorprofile, setinstructorprofile] = useState(true);
  const [coursemanagement, setcoursemanagement] = useState(false);
  const [reviewsoninstructor , setreviewsoninstructor] = useState(false);
  const [editinstructorprofile, setEditinstructorprofile] = useState(false);
  const [changepassword, setchangepassword] = useState(false);

  function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }

  return (
    <React.Fragment>
      <div>
      <header id="header">

<div class="header-top">
    <div class="container">
        <div class="row d-flex flex-center">
            <div class="col-sm-8">
                <div class="ht-address">
                    <ul>
                        <li><i class="fa fa-phone"></i>+ 88 01916 444137</li>
                        <li><i class="fa fa-envelope"></i>info@example.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ht-social">
                    <ul>
                    <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                        <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="header-bottom">
    <div class="container">
        <div class="header-bottom-inner">
            <div class="row align-items-center">
                <div class="col-lg-3 col-sm-9">
                    <div class="logo">
                        <a href="index.html"><img src="assets2/images/icon/logo.png" alt="logo"/></a>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                        <ul id="m_menu_active">
                        <li><a href="homepage2">Home</a></li>
                            <li><a href="about">About</a></li>
                            <li class="active"><a href="newcourses">Courses</a></li>
                            <li><a href="teachers">Teachers</a></li>
                            <li><a href="blog">Blogs</a></li>
                            <li ><a href="contact">Contact</a></li>
                            <li><a href='trainersidebar' class="avatar1"><img id='sidebar' src="r9.jpg" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-xl-1 col-lg-2 col-sm-3">
                    <div class="hb-right">
                        <ul> 
                            <li class="search_btn"><i class="fa fa-search"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 d-block d-lg-none">
                    <div id="mobile_menu"></div>
                </div>
            </div>
        </div>
    </div>
</div>

</header>

<div class="offset-search">
<form action="#">
    <input type="text" name="search" placeholder="Search here..."/>
    <button type="submit"><i class="fa fa-search"></i></button>
</form>
</div>

<div class="body_overlay"></div>

<div class="crumbs-area">
<div class="container">
    <div class="crumb-content">
        <h4 class="crumb-title"><span>Single</span> Course DeatilS</h4>
    </div>
</div>
</div>
<div className="form-floating mb-3" />
      </div>
      <div className="row">
        <div className="col-sm-2">
        <div id="main">
      <div id="content">
  
        <span class="slide">
          <a href="#" onClick={() => openSlideMenu()}>
            <i class="fa fa-bars"></i>
          </a>
        </span>
  
        <div id="menu" class="nav">
          <a href="#" class="close" onClick={() => closeSlideMenu()}>
            <i class="fa fa-times"></i>
          </a>
          <a class="avatar">
		      <img id='sidebar' src="r4.jpg" />
          <h2>Mahmoud Yassen</h2>
          </a>
          <Link to="#" onClick={()=> {setinstructorprofile(true);   setcoursemanagement(false); setreviewsoninstructor(false); setEditinstructorprofile(false); setchangepassword(false)}}>Profile</Link>
          <Link to="#" onClick={()=> {setinstructorprofile(false);  setcoursemanagement(true);  setreviewsoninstructor(false); setEditinstructorprofile(false);setchangepassword(false)}}>ManageCourses</Link>
          <Link to="#" onClick={()=> {setinstructorprofile(false);  setcoursemanagement(false); setreviewsoninstructor(true);  setEditinstructorprofile(false);setchangepassword(false)}}>Reviews</Link>
          <Link to="#" onClick={()=> {setinstructorprofile(false);  setcoursemanagement(false); setreviewsoninstructor(false); setEditinstructorprofile(true); setchangepassword(false)}}>Editprofile</Link>
          <Link to="#" onClick={()=> {setinstructorprofile(false);  setcoursemanagement(false); setreviewsoninstructor(false);  setEditinstructorprofile(false);setchangepassword(true)}}>Changepassword</Link>
          <Link to="#">LogOut</Link>
        </div>
      </div>
    </div>
        </div>
        <div className="col-sm-9">
            {instructorprofile && <Instructorprofile />}
            {coursemanagement && <Coursemanagement />}
            {reviewsoninstructor && <Reviewsoninstructor />}
            {editinstructorprofile && <Editinstructorprofile/>} 
            {changepassword && <Changepassword/>}
            
        </div>
      </div>
     
    {/* { userprofile ? 
        <Userprofile />
      : (
        userprofile2 ? 
          <Userprofile2 /> 
          : ( <Edituserprofile/> ) 
        
      )
    } */}
    
    <footer>
        <div class="footer-top has-color pt--120 pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="widget widget-company">
                            <img src="assets2/images/icon/logo.png" alt="image"/>
                            <div class="address">
                                <h6>OFFICE ADDRESS</h6>
                                <p>London Oxford Street, 012 United Kingdom.</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS PHONE</h6>
                                <p>+012 3456 7890</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS EMAIL</h6>
                                <p>Business@themerocket.net</p>
                            </div>
                            <ul class="social">
                                <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget footer-link">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Footer Menu</h4> 
                            <ul>
                                <li><a href="whycc"><i class="fa fa-arrow-right"></i>Why Canadian Company</a></li>
                                <li><a href="about"><i class="fa fa-arrow-right"></i>About Us</a></li>
                                <li><a href="workwithus"><i class="fa fa-arrow-right"></i>Work with Us</a></li>
                                <li><a href="careers"><i class="fa fa-arrow-right"></i>Careers</a></li>
                                <li><a href="contact"><i class="fa fa-arrow-right"></i>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="widget widget-opening">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Working Day & time</h4>
                            <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                           <ul>
                                <li><span>Mon - Tus :</span>6.00 am - 10.00 pm</li>
                                <li><span>Wed - Tur :</span>8.00 am - 6.00 pm</li>
                                <li><span>Friday :</span>3.00 pm - 8.00 pm</li>
                                <li><span>Sunday :</span>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2022 <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">Edification</a> </span> - All Rights Reserved. Made by <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">GoalDiggers</a></span></p>
                </div>
            </div>
        </div>
    </footer>
    </React.Fragment>
  )
}

export default Trainersidebar;