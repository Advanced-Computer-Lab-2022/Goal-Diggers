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
function Blogdetails(handleCountry) {
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
                            <li class="active"><a href="/blog">Blogs</a></li>
                            <li><a href="/event">Events</a></li>
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
                <h4 class="crumb-title"><span>Single</span> Blog Deatils</h4>
            </div>
        </div>
    </div>
    <div className="form-floating mb-3" />
    <div class="blog-details-area ptb--120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <div class="course-details">
                        <div class="cs-thumb mb-5">
                            <img src="assets2/images/blog/blog-details.jpg" alt="image"/>
                        </div>
                        <div class="cs-content">
                            <h3 class="mb-4">Excepteur sint occaecat cupidatat non proident</h3>                
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore voluptatem.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>

                    <div class="comment-area">
                        <h4 class="comment-title">Comments <span>(03)</span></h4>
                        <ul class="comment-list">
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth1.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Tomas</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth3.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Bagun khan</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li class="comment-info-inner">
                                <article>
                                    <div class="comment-thumb">
                                        <img src="assets2/images/author/cs-comment-auth1.jpg" alt="image"/>
                                    </div>
                                    <div class="comment-content">
                                        <h4>Tomas</h4>
                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <div class="cs-cmnt-meta">
                                            <ul>
                                                <li>AUGUST 6, 2018</li>
                                                <li><span>BY</span> Alebert dos</li>
                                            </ul>
                                            <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <div class="leave-comment-area">
                        <h4 class="comment-title">Leave Your Comment</h4>
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" name="Name" placeholder="Enter your name"/>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" name="email" placeholder="Your Email"/>
                                </div>
                            </div>
                            <textarea name="msg" id="msg" placeholder="Your message here"></textarea>
                            <button  class="btn btn-primary btn-round"  type="submit">Post Comment <i class="fa fa-long-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className="form-floating mb-3" />
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="sidebar">
                        <div class="widget widget-course">
                            <h4 class="widget-title">Popular Posts</h4>
                            <div class="course-list">
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb1.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Ui / Ux Design</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb2.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Learn Java</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb3.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">C++</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb4.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Seo</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                                <div class="w-cs-single">
                                    <img src="assets2/images/course/cs-small-thumb5.jpg" alt="image"/>
                                    <div class="fix">
                                         <p><a href="blogdetails">Python</a></p>
                                        <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
                

            </div>
        </div>
    </div>



    <script src="assets2/js/vendor/jquery-2.2.4.min.js"></script>

    <script src="assets2/js/bootstrap.min.js"></script>

    <script src="assets2/js/owl.carousel.min.js"></script>
    <script src="assets2/js/jquery.magnific-popup.min.js"></script>
    <script src="assets2/js/jquery.slicknav.min.js"></script>
    <script src="assets2/js/plugins.js"></script>
    <script src="assets2/js/scripts.js"></script>
    </div>
  )
}

export default Blogdetails