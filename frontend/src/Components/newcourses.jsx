import React from 'react'
import { useState } from 'react'
import courseService from '../courseContainer';
import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Select,InputLabel,MenuItem} from "@mui/material";
import coun_curr_code from '../coun-curr-code';
import axios from 'axios';

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
import Filters from './common/filters';
import CourseCard from './courseCard';
import Logout from "./Auth/LogoutBtn";


function Newcourses() {

    const [ready, setReady] = useState(false);
    const [courseDisplayed, setCoursesDisplayed] = useState([]);
    const [coursesOriginal, setcoursesOriginal] = useState([]);
    const [price, setPrice] = useState(Infinity);
    const [subject, setSubject] = useState("");
    const [rate, setRate] = useState(null);
    const [search, setSearch] = useState("");
    const [allusers, setallusers] = useState([]);
    const [priceRate, serPriceRate] = useState(1);
    const [country, setCountry] = useState(false);
    const config = { headers: { "apikey": "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW" } };




    useEffect(() => {
        setReady(false);
        const getCourses = async () => {
            const res = await courseService.getAllCourses();
            const res1 = await courseService.getnumusers();
            console.log(res);
            console.log(res1);
            setCoursesDisplayed(res);
            setcoursesOriginal(res);
            setallusers(res1);
            setReady(true);
        };
        getCourses();
    }, [country]);
    const handleCountry = async (e) => {
        let result = 1;
        const ConversionAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${e}&from=USD&amount=1`;
        const { data } = await axios.get(ConversionAPI, config);
        result = data.info.rate;
        localStorage.setItem("country", e);
        localStorage.setItem("rate", result);
        setCountry(!country);
    }
    const handleChange = (filter, value) =>{
        console.log(value + filter);
        if(filter === "subject") {
            if( rate)
            setCoursesDisplayed(
                coursesOriginal.filter(course => {
                    return course.subject.includes(value) && Math.round((course.price * priceRate) * 100) / 100 <= price && Math.round(course.rate) === rate;
                })
            )
            else 
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(value) && Math.round((course.price * priceRate) * 100) / 100 <= price;
                    })
            )
            setSubject(value);
        }
        else if(filter === "price") {
            if(!value)
                value = Infinity;
            if(rate)
            setCoursesDisplayed(
                coursesOriginal.filter(course => {
                    return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= value && Math.round(course.rate) === rate;
                })
            )
            else 
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= value;
                    })
            )
            setPrice(value);
        }
        else {
            if(value) {
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= price && Math.round(course.rate) === value;
                    })
                )
            }
            else {
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= price;
                    })
                )
            }
            
            setRate(value);
        }
    };
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
                        <li className="active">
                          <a href="/newcourses">Courses</a>
                        </li>
                        <li>
                          <a href="/membership">MemberShip</a>
                        </li>
                        <li>
                          <a href="/blog">Blogs</a>
                        </li>
                        <li >
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
              <span>Courses</span>
            </h4>
          </div>
        </div>
      </div>

      {ready && (
        <React.Fragment>
          <div class="course-area  pt--120 pb--70">
            <div class="container">
              <div class="row">
                <Filters handleChange={handleChange} />
                {courseDisplayed.map((course) => {
                  return (
                    <React.Fragment>
                      <div class="col-lg-4 col-md-6">
                        <CourseCard course={course}></CourseCard>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {!ready && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <ReactLoading
            type={"bars"}
            color={"#a00407"}
            height={"5%"}
            width={"5%"}
          />
        </div>
      )}

      <div>
        <section class="our-facts">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>A Few Facts About Our University</h2>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-12">
                        <div class="count-area-content new-students">
                          <div class="count-digit">{allusers[2]}</div>
                          <div class="count-title">Corporate trainee</div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="count-area-content">
                          <div class="count-digit">{allusers[0]}</div>
                          <div class="count-title">Current Teachers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-12">
                        <div class="count-area-content new-students">
                          <div class="count-digit">{allusers[1]}</div>
                          <div class="count-title"> Students</div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="count-area-content">
                          <div class="count-digit">
                            {courseDisplayed.length}
                          </div>
                          <div class="count-title">courses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="video">
                  <a
                    href="https://www.youtube.com/watch?v=HndV87XpkWg"
                    target="_blank"
                  >
                    <img src="assets/images/play-icon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Newcourses
