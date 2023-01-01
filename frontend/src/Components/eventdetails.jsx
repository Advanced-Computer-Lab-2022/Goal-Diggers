import React from "react";
import { useState } from "react";
import "./editprofile.css";
import main from "../assets1/course.mp4";
import OwlCarousel from "react-owl-carousel";
import courseService from "../courseContainer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import coun_curr_code from "../coun-curr-code";
import Logout from "./Auth/LogoutBtn";

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
function Eventdetails(handleCountry) {
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
                        <li >
                          <a href="/blog">Blogs</a>
                        </li>
                        <li className="active">
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
            <h4 class="crumb-title">The Death of Architecture</h4>
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
                  <img src="assets2/images/blog/blog-details.jpg" alt="image" />
                </div>
                <div class="cs-content">
                  <h3 class="mb-4">
                    Excepteur sint occaecat cupidatat non proident
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore voluptatem.
                  </p>
                </div>
              </div>

              <div class="comment-area">
                <h4 class="comment-title">
                  Comments <span>(03)</span>
                </h4>
                <ul class="comment-list">
                  <li class="comment-info-inner">
                    <article>
                      <div class="comment-thumb">
                        <img
                          src="assets2/images/author/cs-comment-auth1.jpg"
                          alt="image"
                        />
                      </div>
                      <div class="comment-content">
                        <h4>Tomas</h4>
                        <p>
                          Ed id interdum urna. Nam ac elit a ante commodo
                          tristique. Duis lacus urna, condimentum a vehicula a,
                          hendrerit ac nisi Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.{" "}
                        </p>
                        <div class="cs-cmnt-meta">
                          <ul>
                            <li>AUGUST 6, 2018</li>
                            <li>
                              <span>BY</span> Alebert dos
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li class="comment-info-inner">
                    <article>
                      <div class="comment-thumb">
                        <img
                          src="assets2/images/author/cs-comment-auth3.jpg"
                          alt="image"
                        />
                      </div>
                      <div class="comment-content">
                        <h4>Bagun khan</h4>
                        <p>
                          Ed id interdum urna. Nam ac elit a ante commodo
                          tristique. Duis lacus urna, condimentum a vehicula a,
                          hendrerit ac nisi Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.{" "}
                        </p>
                        <div class="cs-cmnt-meta">
                          <ul>
                            <li>AUGUST 6, 2018</li>
                            <li>
                              <span>BY</span> Alebert dos
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li class="comment-info-inner">
                    <article>
                      <div class="comment-thumb">
                        <img
                          src="assets2/images/author/cs-comment-auth1.jpg"
                          alt="image"
                        />
                      </div>
                      <div class="comment-content">
                        <h4>Tomas</h4>
                        <p>
                          Ed id interdum urna. Nam ac elit a ante commodo
                          tristique. Duis lacus urna, condimentum a vehicula a,
                          hendrerit ac nisi Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.{" "}
                        </p>
                        <div class="cs-cmnt-meta">
                          <ul>
                            <li>AUGUST 6, 2018</li>
                            <li>
                              <span>BY</span> Alebert dos
                            </li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>

              <div className="form-floating mb-3" />
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="sidebar">
                <div class="widget widget-course">
                  <h4 class="widget-title">Popular Posts</h4>
                  <div class="course-list">
                    <div class="w-cs-single">
                      <img
                        src="assets2/images/course/cs-small-thumb1.jpg"
                        alt="image"
                      />
                      <div class="fix">
                        <p>
                          <a href="blogdetails">Ui / Ux Design</a>
                        </p>
                        <span>
                          <i class="fa fa-clock-o"></i> AUGUST 6, 2023
                        </span>
                      </div>
                    </div>
                    <div class="w-cs-single">
                      <img
                        src="assets2/images/course/cs-small-thumb2.jpg"
                        alt="image"
                      />
                      <div class="fix">
                        <p>
                          <a href="blogdetails">Learn Java</a>
                        </p>
                        <span>
                          <i class="fa fa-clock-o"></i> AUGUST 6, 2023
                        </span>
                      </div>
                    </div>
                    <div class="w-cs-single">
                      <img
                        src="assets2/images/course/cs-small-thumb3.jpg"
                        alt="image"
                      />
                      <div class="fix">
                        <p>
                          <a href="blogdetails">C++</a>
                        </p>
                        <span>
                          <i class="fa fa-clock-o"></i> AUGUST 6, 2023
                        </span>
                      </div>
                    </div>
                    <div class="w-cs-single">
                      <img
                        src="assets2/images/course/cs-small-thumb4.jpg"
                        alt="image"
                      />
                      <div class="fix">
                        <p>
                          <a href="blogdetails">Seo</a>
                        </p>
                        <span>
                          <i class="fa fa-clock-o"></i> AUGUST 6, 2023
                        </span>
                      </div>
                    </div>
                    <div class="w-cs-single">
                      <img
                        src="assets2/images/course/cs-small-thumb5.jpg"
                        alt="image"
                      />
                      <div class="fix">
                        <p>
                          <a href="blogdetails">Python</a>
                        </p>
                        <span>
                          <i class="fa fa-clock-o"></i> AUGUST 6, 2023
                        </span>
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
  );
}

export default Eventdetails;
