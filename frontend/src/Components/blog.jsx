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


function Blog(handleCountry) {
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
                        <li >
                          <a href="/membership">MemberShip</a>
                        </li>
                        <li className="active">
                          <a href="/blog">Blogs</a>
                        </li>
                        <li>
                          <a href="/event">Events</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/userprofile">
                            <img className="avatar1" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/userprofile">View Profile</a>
                              <h1
                                className="fa fa-user dropdown"
                                aria-hidden="true"
                              ></h1>
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

      <div class="body_overlay"></div>

      <div class="crumbs-area">
        <div class="container">
          <div class="crumb-content">
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
            <h4 class="crumb-title">
              <span>Blog</span> & News
            </h4>
          </div>
        </div>
      </div>

      <div class="blog-area  pt--120 pb--70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="card mb-5">
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail1.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">The Death Of architechture</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail2.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">The Death Of architechture</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail3.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">The Death Of architechture</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail4.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">Aenean id ullamcorper</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail5.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">The Death Of architechture</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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
                <img
                  class="card-img-top"
                  src="assets2/images/blog/blog-thumbnail6.jpg"
                  alt="image"
                />
                <div class="card-body p-25">
                  <ul class="list-inline blog-meta mb-3">
                    <li>
                      <i class="fa fa-clock-o"></i> AUGUST 6, 2017
                    </li>
                    <li>
                      <i class="fa fa-comments"></i> 3 Comments
                    </li>
                  </ul>
                  <h4 class="card-title mb-4">
                    <a href="blogdetails">The Death Of architechture</a>
                  </h4>
                  <p class="card-text">
                    We’re a philosophical bunch here at School site and we have
                    thought long and hard about.
                  </p>
                  <div className="login-box">
                    <form>
                      <a href="/blogdetails">
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

      <script src="assets2/js/vendor/jquery-2.2.4.min.js"></script>

      <script src="assets2/js/bootstrap.min.js"></script>

      <script src="assets2/js/owl.carousel.min.js"></script>
      <script src="assets2/js/jquery.magnific-popup.min.js"></script>
      <script src="assets2/js/jquery.slicknav.min.js"></script>
      <script src="assets2/js/plugins.js"></script>
      <script src="assets2/js/scripts.js"></script>
    </div>
  );
}

export default Blog