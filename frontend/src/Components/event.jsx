import React from 'react'
import { useState } from 'react'
import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import courseService from '../courseContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Select,InputLabel,MenuItem} from "@mui/material";
import coun_curr_code from '../coun-curr-code';

import "./default-css.css";
import "./font-awesome.min.css";
import "./magnific-popup.css";
import "./owl.carousel.css";
import "./owl.carousel.min.css";
import "./owl.theme.default.css";
import "./owl.theme.default.min.css";
import "./owl.theme.green.css";
import "./owl.theme.green.min.css";
import "./responsive.css";
import "./slicknav.min.css";
import "./styles.css";
import "./templatemo-style2.css";
import "./typography.css";
import "./owl.css";
import "./templatemo-edu-meeting.css";
function Event(handleCountry) {
  return (
    <div>

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
                            <li ><a href="/homepage2">Home</a></li>
                            <li><a href="/newcourses">Courses</a></li>
                            <li><a href="/membership">MemberShip</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li class= "active"><a href="/event">Events</a></li>
                            <li ><a href="/contact">Contact</a></li>
                            <li><a href="/userprofile" class="avatar1"><img id='sidebar' src="r9.jpg" /></a>
                                <ul class="submenu mr-12">
                                    <li><a href="/userprofile" >View Profile</a><h1 class="fa fa-user dropdown" aria-hidden="true"></h1></li>
                                    <li><a href="/mycourses">My Courses</a><i class="fa fa-book dropdown"></i></li>
                                    <li><a href="/settings">Settings</a><i class="fa fa-cog dropdown"></i></li>
                                    <li><a href="/help">Help</a><h1 class="fa fa-question-circle dropdown"></h1></li>
                                    <li><a href="index3.html">Log Out</a><h1 class="fa fa-sign-out dropdown"></h1></li>
                                </ul>
                            </li>
                            <li >
                                <FormControl class= "mt-50 w-20 cc fa fa-globe" >
    <InputLabel class=""  ></InputLabel>
    <Select 
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={ (e) => {handleCountry(e.target.value) ; console.log("NAV " +e.target.value);} }
        >
        {coun_curr_code.map(country => <MenuItem key={country.country} value={country.currency_code}>{country.country}</MenuItem>)}
    </Select>
  </FormControl>
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


<div class="body_overlay"></div>

<div class="crumbs-area">
<div class="container">
    <div class="crumb-content">
    <fieldset class="field-container mb-5">
                    <form action="/search">
                        <input type="text" name='keyword' placeholder="Search For Courses" class="field" />
                        <div class="icons-container">
                            <div class="icon-search"></div>
                            <div class="icon-close">
                            <div class="x-up"></div>
                            <div class="x-down"></div>
                            </div>
                        </div>
                    </form>
                </fieldset>
        <h4 class="crumb-title"><span>Events</span></h4>
    </div>
</div>
</div>

<div class="blog-area  pt--120 pb--70">
<div class="container">
    <div class="row"> 

        <div class="col-lg-4 col-md-6">
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="/eventdetails">The Death Of architechture</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="/eventdetails">
                            Check News
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div> 
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail2.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="eventdetails">The Death Of architechture</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="eventdetails">
                            Check News
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail3.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="eventdetails">The Death Of architechture</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="eventdetails">
                            Check News.
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div>     
        </div>

        <div class="col-lg-4 col-md-6">       
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail4.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="eventdetails">Aenean id ullamcorper</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="eventdetails">
                            Check News
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6"> 
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail5.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="eventdetails">The Death Of architechture</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="eventdetails">
                            Check News
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div>    
        </div>
        
        <div class="col-lg-4 col-md-6"> 
          <div class="card mb-5"> 
            <img class="card-img-top" src="assets2/images/blog/blog-thumbnail6.jpg" alt="image"/>
            <div class="card-body p-25"> 
                <ul class="list-inline blog-meta mb-3">
                    <li><i class="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                    <li><i class="fa fa-comments"></i> 3 Comments</li>
                </ul>
              <h4 class="card-title mb-4"><a href="eventdetails">The Death Of architechture</a></h4>
              <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
              <div className="login-box">
                        <form>
                            <a href="eventdetails">
                            Check News
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </form>
                    </div>
            </div>
          </div>    
        </div>
    </div>
</div>
</div>


    </div>
  )
}

export default Event