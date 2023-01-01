import React from 'react';
import "./userprofile.css";

function Instructorprofile() {
  return (
    <div >
      <header id="header">

<div class="header-top">
    <div class="container">
        <div class="row d-flex flex-center">
            <div class="col-sm-8">
                <div class="ht-address">
                    <ul>
                        <li><i class="fa fa-phone"></i>Phone: +201001004070</li>
                        <li><i class="fa fa-envelope"></i>Email: info@cancham.org.eg</li>
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
                        <img src="/assets2/images/icon/logo.png" alt="logo"/>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                            <ul id="m_menu_active">
                            <li class="active"><a href="/homepage2">Home</a></li>
                            <li><a href="/newcourses">Courses</a></li>
                            <li><a href="/membership">MemberShip</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/event">Events</a></li>
                            <li ><a href="/contact">Contact</a></li>
                            <li><a href="/userprofile" class="avatar1"><img id='sidebar' src="/r9.jpg" /></a>
                                <ul class="submenu mr-12">
                                    <li><a href="/userprofile" >View Profile</a><h1 class="fa fa-user dropdown" aria-hidden="true"></h1></li>
                                    <li><a href="/mycourses">My Courses</a><i class="fa fa-book dropdown"></i></li>
                                    <li><a href="/settings">Settings</a><i class="fa fa-cog dropdown"></i></li>
                                    <li><a href="/help">Help</a><h1 class="fa fa-question-circle dropdown"></h1></li>
                                    <li><a href="/index3.html">Log Out</a><h1 class="fa fa-sign-out dropdown"></h1></li>
                                </ul>
                            </li>
                            
                            </ul>       
                        </nav>
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
<div class="crumbs-area">
        <div class="container">
            <div class="crumb-content">
                <h4 class="crumb-title"><span>Profile</span></h4>
                
            </div>
        </div>
    </div>
        
    <div className="wrapper">
        <div className="sidebar">
            <div className="profile2">
                <img src="./r9.jpg" alt="profile_picture" />
                <h3>Mahmoud Yassen</h3>
            </div>
            <ul>
            <li>
                    <a href="/instructorprofile">
                        <span className="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <span className="item">Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                        <span className="item">My Courses</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                        <span className="item">Rating and Rewiews</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                        <span className="item">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                        <span className="item">Privacy&Policy</span>
                    </a>
                </li>
                <li>
                    <a href="/help">
                        <span className="icon"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                        <span className="item">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                        <span className="item">LogOut</span>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Instructorprofile;