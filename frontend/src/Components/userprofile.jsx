import * as React from 'react'
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
import "./usersidebar.css";


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
import Edituserprofile from './edituserprofile';
import Mycourses from "./mycourses";
import Policy from "./policy";
import Help from "./help";


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"></link>


function Userprofile(handleCountry) {

  
  const [myCourses, setMyCourses] = useState({ myCourses: false });
  const [editprofile, seteditprofile] = useState({edituserprofile : false});
  const [policy, setpolicy] = useState({ policy: false });
  const [help, sethelp] = useState({ help: false });



  function edituserprofile () {
    seteditprofile(true);
    setMyCourses(false);
    sethelp(false);
    setpolicy(false);
  };

  function showmycourses() {
    seteditprofile(false);
    setMyCourses(true);
    sethelp(false);
    setpolicy(false);
  }

  function showpolicy() {
    seteditprofile(false);
    setMyCourses(false);
    sethelp(false);
    setpolicy(true);
  }

  function showhelp() {
    seteditprofile(false);
    setMyCourses(false);
    sethelp(true);
    setpolicy(false);
  }

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
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/edituserprofile">
                            <img className="avatar1" />
                          </a>
                          <ul className="submenu">
                            <li className="active">
                              <a href="/edituserprofile">View Profile</a>
                              <h1
                                className="fa fa-user dropdown active"
                                aria-hidden="true "
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
              <span>Profile</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="sidebar">
          <div className="profile2">
            <img className='avatar3' />
            <h3>Mahmoud Yassen</h3>
            <p>Software Developer</p>
            <p>Your wallet is 0$</p>
          </div>
          <ul>
            <li>
              <a onClick={showmycourses}>
                <span className="icon">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
                <span className="item">My Courses</span>
              </a>
            </li>
            <li>
              <a onClick={edituserprofile}>
                <span className="icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span>
                <span className="item">Settings</span>
              </a>
            </li>
            <li>
              <a onClick={showpolicy}>
                <span className="icon">
                  <i class="fa fa-shield" aria-hidden="true"></i>
                </span>
                <span className="item">Privacy&Policy</span>
              </a>
            </li>
            <li>
              <a onClick={showhelp}>
                <span className="icon">
                  <i class="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <span className="item">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <span className="item">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
        {myCourses == true && (
          <>
            <div className="poo">
              <Mycourses />
            </div>
          </>
        )}
        {help == true && (
          <>
            <div className="poo">
              <Help />
            </div>
          </>
        )}
        {policy == true && (
          <>
            <div className="poo">
              <Policy />
            </div>
          </>
        )}
        {editprofile == true && (
          <>
            <div className="poo">
              <Edituserprofile />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Userprofile;