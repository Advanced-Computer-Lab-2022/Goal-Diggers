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
import Logout from "./Auth/LogoutBtn";

function Membership(handleCountry) {
  return (
    <div>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row d-flex flex-center">
              <div className="col-sm-8">
                <div className="ht-address">
                  <ul>
                    <li>
                      <i className="fa fa-phone"></i>Phone: +201001004070
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>Email:
                      info@cancham.org.eg
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="ht-social">
                  <ul>
                    <li>
                      <a href="https://youtu.be/z4tOlwuHEZI">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/kXhBKjDKF84">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/BG9HSntowA8">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/aiRY36TPVo8">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom-inner">
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-9">
                  <div className="logo">
                    <img src="/assets2/images/icon/logo.png" alt="logo" />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-none d-lg-block">
                  <div className="main-menu">
                    <nav>
                      <ul id="m_menu_active">
                        <li>
                          <a href="/homepage2">Home</a>
                        </li>
                        <li>
                          <a href="/newcourses">Courses</a>
                        </li>
                        <li className="active">
                          <a href="/membership">MemberShip</a>
                        </li>
                        <li>
                          <a href="/blog">Blogs</a>
                        </li>
                        <li>
                          <a href="/event">Events</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/edituserprofile">
                            <img className="avatar1" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/edituserprofile">View Profile</a>
                              <h1
                                className="fa fa-user dropdown"
                                aria-hidden="true"
                              ></h1>
                            </li>
                            <li>
                              <a href="/mycourses">My Courses</a>
                              <i className="fa fa-book dropdown"></i>
                            </li>
                            <li>
                              <a href="/edituserprofile">Settings</a>
                              <i className="fa fa-cog dropdown"></i>
                            </li>
                            <li>
                              <a href="/help">Help</a>
                              <h1 className="fa fa-question-circle dropdown"></h1>
                            </li>
                            <li>
                              <a href="/homepage2">
                                <Logout></Logout>
                              </a>
                              <h1 className="fa fa-sign-out dropdown"></h1>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <FormControl className="mt-50 w-20 cc fa fa-globe">
                            <InputLabel className=""></InputLabel>
                            <Select
                              defaultValue=""
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              className="navbarr"
                              onChange={(e) => {
                                handleCountry(e.target.value);
                                console.log("NAV " + e.target.value);
                              }}
                            >
                              {coun_curr_code.map((country) => (
                                <MenuItem
                                  key={country.country}
                                  value={country.currency_code}
                                >
                                  {country.country}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12 d-block d-lg-none">
                  <div id="mobile_menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <section class="section main-banner" id="top" data-section="section1">
          <video autoPlay muted loop id="bg-video">
            <source src="assets/images/course-video.mp4" type="video/mp4" />
          </video>

          <div class="video-overlay header-text">
            <div class="container">
              <div class="row">
                <div class="">
                  <div class="caption">
                    <fieldset class="field-container mb-5">
                      <form action="/search">
                        <input
                          type="text"
                          name="keyword"
                          placeholder="Search For Courses"
                          class="field"
                        />
                        <div class="icons-container">
                          <div class="icon-search"></div>
                          <div class="icon-close">
                            <div class="x-up"></div>
                            <div class="x-down"></div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                    <h6>Hello Students</h6>
                    <h2>Welcome to Education</h2>
                    <p>
                      Learning that gets you Skills for your present (and your
                      future).Get started with{" "}
                      <a
                        rel="nofollow"
                        href="http://localhost:3000/homepage2"
                        target="_blank"
                      >
                        us
                      </a>
                      .
                    </p>
                    <div className="login-box">
                      <form>
                        <a href="coursedetails">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Join Us Now
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="divider">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="divider-wrapper divider-one">
                <i class="fa fa-laptop"></i>
                <h2>Teach your way</h2>
                <p>
                  Publish the course you want, in the way you want, and always
                  have control of your own content.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="divider-wrapper divider-two">
                <i class="fa fa-mobile"></i>
                <h2>Inspire learners</h2>
                <p>
                  Teach what you know and help learners explore their interests,
                  gain new skills, and advance their careers.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="divider-wrapper divider-three">
                <i class="fa fa-life-ring"></i>
                <h2>Get rewarded</h2>
                <p>
                  Expand your professional network, build your expertise, and
                  earn money on each paid enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-blog  pt--120 pb--70">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="section-title1">
                <h2>How to begin</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="commn-carousel owl-carousel1 card-deck">
              <div class="card mb-5">
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail2.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">Plan Your Curriculum</a>
                  </h4>
                  <p class="card-text">
                    You start with your passion and knowledge. Then choose a
                    promising topic with the help of our Marketplace Insights
                    tool. The way that you teach — what you bring to it — is up
                    to you.
                  </p>
                </div>
              </div>

              <div class="card mb-5">
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail3.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">Record Your Course</a>
                  </h4>
                  <p class="card-text">
                    Use basic tools like a smartphone or a DSLR camera. Add a
                    good microphone and you’re ready to start. If you don’t like
                    being on camera, just capture your screen. Either way, we
                    recommend two hours or more of video for a paid course.
                  </p>
                </div>
              </div>
              <div class="card mb-5">
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail1.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">Launch Your Course</a>
                  </h4>
                  <p class="card-text">
                    Gather your first ratings and reviews by promoting your
                    course through social media and your professional networks.
                    Your course will be discoverable in our marketplace where
                    you earn revenue from each paid enrollment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-blog  pt--120 pb--70">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="section-title1">
                <h2>Feedback of Instructors</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="commn-carousel owl-carousel1 card-deck">
              <OwlCarousel>
                <div class="card mb-5">
                  <img
                    class="card-img-top"
                    src="assets2/images/blog/blog-thumbnail1.jpg"
                    alt="image"
                  />
                  <div class="card-body p-25">
                    <h4 class="card-title mb-4">
                      <a href="blogdetails">Frank Kane</a>
                    </h4>
                    <span class="primary-color font-italic d-block mb-3">
                      Data Science & IT Certifications
                    </span>
                    <p class="card-text">
                      I’m proud to wake up knowing my work is helping people
                      around the world improve their careers and build great
                      things. While being a full-time instructor is hard work,
                      it lets you work when, where, and how you want.
                    </p>
                  </div>
                </div>
                <div class="card mb-5">
                  <img
                    class="card-img-top"
                    src="assets2/images/blog/blog-thumbnail2.jpg"
                    alt="image"
                  />
                  <div class="card-body p-25">
                    <h4 class="card-title mb-4">
                      <a href="blogdetails">Deborah Grayson Riege</a>
                    </h4>
                    <span class="primary-color font-italic d-block mb-3">
                      Leadership, Communication
                    </span>
                    <p class="card-text">
                      Teaching on Canadian Chamber has provided me with two
                      important elements: the opportunity to reach more learners
                      than I ever would be able to on my own and a steady stream
                      of extra income which make it easier to my to teach
                      online.
                    </p>
                  </div>
                </div>

                <div class="card mb-5">
                  <img
                    class="card-img-top"
                    src="assets2/images/blog/blog-thumbnail3.jpg"
                    alt="image"
                  />
                  <div class="card-body p-25">
                    <h4 class="card-title mb-4">
                      <a href="blogdetails">Paulo Dichone</a>
                    </h4>
                    <span class="primary-color font-italic d-block mb-3">
                      Developer (Android Speciality)
                    </span>
                    <p class="card-text">
                      Canadian Chamber has changed my life. It’s allowed me to
                      follow my passion and become a teacher I love to see my
                      students succeed and hear them say they’ve learned more,
                      quicker, from my courses than they did in college. It’s so
                      humbling.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Membership