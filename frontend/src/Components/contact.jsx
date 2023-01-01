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


function Contact(handleCountry) {
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
                        <li>
                          <a href="/membership">MemberShip</a>
                        </li>
                        <li>
                          <a href="/blog">Blogs</a>
                        </li>
                        <li>
                          <a href="/event">Events</a>
                        </li>
                        <li className="active">
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
              <span>Contact </span>Us
            </h4>
          </div>
        </div>
      </div>
      <div className="form-floating mt-5" />

      <div class="contact-info ptb--120 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="cnt-info">
                <h4>Contact Info</h4>
                <p>
                  PO Box CT16133 Collins Street West, Victoria 8007, Australia.
                </p>
                <ul class="address">
                  <li>
                    <i class="fa fa-phone"></i>+201001004070
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>+0201122510769
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>info@cancham.org.eg
                  </li>
                </ul>
                <ul class="social list-inline mt-5">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8">
              <div id="google-map"></div>
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

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&#038"></script>
      <script src="assets2/js/google-maps.js"></script>
      <script src="assets2/js/scripts.js"></script>
    </div>
  );
}

export default Contact