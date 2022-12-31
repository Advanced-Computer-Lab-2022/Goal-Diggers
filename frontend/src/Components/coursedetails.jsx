import React, { useState, useEffect,useContext } from 'react';
import { Rating } from "@mui/material";
import courseService from '../courseContainer';
import Sections from './section';
import ReactPlayer from 'react-player/youtube';
import { useParams, Link } from "react-router-dom";
import ReactLoading from 'react-loading';

import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import coun_curr_code from '../coun-curr-code';
import axios from 'axios';
import AuthContext,{AuthContextProvider} from '../context/AuthContext';

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

function Coursedetails() {

    const [course, setCourse] = useState({});
    const [allcourses, setallCourses] = useState({});
    const [instructor, setinstructor] = useState({});
    const [count, setCount] = useState(0);
    const [country, setCountry] = useState(false);
    const { id } = useParams();
    const [ready, setReady] = useState(false);
    const {loggedIn,idd,type,username,lastname,firstname,email}=useContext(AuthContext);
    const config = { headers: { "apikey": "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW" } };
    const url = "https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
    useEffect(() => {
        const getCourse = async () => {
            const res = await courseService.getCourse(id);
            setCourse(res);
            setTimeout(async () => {
                console.log(res.createdById);
                const res2 = await courseService.getInstructor(res.createdById);
                setinstructor(res2);
                console.log(res2);
                console.log("res2");
            }, 100)
            const res3 = await courseService.getAllCourses();
            setallCourses(res3);
            console.log(res);
            console.log(res3);
            setReady(true);
        }
        getCourse();
    }, [country])
    const rate = (num) => {
        console.log(num);
        for (let i = 0; i < num; i++)
            (<i class="fa fa-star" />);
    }
    const handleCountry = async (e) => {
        let result = 1;
        const ConversionAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${e}&from=USD&amount=1`;
        const { data } = await axios.get(ConversionAPI, config);
        result = data.info.rate;
        localStorage.setItem("country", e);
        localStorage.setItem("rate", result);
        setCountry(!country);
    }
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
                                        <img src="/assets2/images/icon/logo.png" alt="logo" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                                    <div class="main-menu">
                                        <nav>
                                            <ul id="m_menu_active">
                                                <li ><a href="/homepage2">Home</a></li>
                                                <li class="avtive"><a href="/newcourses">Courses</a></li>
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
                                                        <li><a href="index3.html">Log Out</a><h1 class="fa fa-sign-out dropdown"></h1></li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <FormControl class="mt-50 w-20 cc fa fa-globe" >
                                                        <InputLabel class=""  ></InputLabel>
                                                        <Select
                                                            defaultValue=""
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            onChange={(e) => { handleCountry(e.target.value); console.log("NAV " + e.target.value); }}
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
                        <h4 class="crumb-title"><span>{course.title}</span></h4>
                        <div className="login-box">
                            <form>
                                <a href="/coursedetails">
                                    Go to the Course
                                </a>
                            </form>
                        </div>
                        {type==='rule'&&<><div className="login-box">
                            <form>
                                <a href="/coursedetails">
                                    Request the Course
                                </a>
                            </form>
                        </div></>}
                        <div className="login-box">
                            <form>
                                <a href="/coursedetails">
                                    Buy the Course
                                </a>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="form-floating mb-3" />
            {ready &&
                <React.Fragment>

                    <div class="course-area ptb--120">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-8 col-md-8">
                                    <div class="course-details">
                                        <div class="cs-thumb mb-5">
                                            <div id='video'>
                                                <div className="embed-responsive embed-responsive-16by9 text-center  su-youtube su-responsive-media-yes " >
                                                    <center>
                                                        <ReactPlayer width={750} height={100} url={course.overviewvideo.url} />
                                                    </center>

                                                </div>

                                            </div>
                                            <span class="cs-price">
  { (course.discount && new Date(course.discount.start) <= Date.now() && new Date(course.discount.end) >= Date.now()) ?
            <React.Fragment>
                {localStorage.getItem('country') ? 
                  <React.Fragment>
                    <del style={{textDecoration : 'line-through'}}> {Number(course.price * localStorage.getItem('rate')).toFixed(2)}</del>
                    <br></br>
                      {Number(course.price * localStorage.getItem('rate') - course.price * localStorage.getItem('rate') * (course.discount.promotion/100)).toFixed(2)} {localStorage.getItem('country')}
                  </React.Fragment>
              :
                  <React.Fragment>
                      {course.price} USD
                  </React.Fragment>
              }
            </React.Fragment>
            :(
              <React.Fragment>
                  {course.price != 0 && 
                  <React.Fragment>

                            {localStorage.getItem('country') ? 
                          <React.Fragment>
                              {Number(course.price * localStorage.getItem('rate')).toFixed(2)} {localStorage.getItem('country')}
                          </React.Fragment>
                      :
                          <React.Fragment>
                              {course.price} USD
                          </React.Fragment>
                      }
                          </React.Fragment>
                  }
              </React.Fragment>
            )
          }
          {course.price == 0 && <React.Fragment>
                    <span>Free</span>
          </React.Fragment>
            }
                                            </span>
                                            <div class="csd-hv-info has-color align-items-center">
                                                <div class="course-dt-info">
                                                    <ul class="course-meta-details list-inline  w-100">
                                                        <li>
                                                            <p>Taughted by</p>
                                                            <span>{course.createdByName}</span>
                                                        </li>
                                                        <li>
                                                            <p>Course Sections</p>
                                                            <span>{course.subtitles.length} Sections</span>
                                                        </li>
                                                        <li>
                                                            <p>Duration</p>
                                                            <span>{course.totalHours} hour</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <ul class="course-meta-stats">

                                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                                    <li>{course.reviews.length} <i class="fa fa-comment"></i></li>
                                                    {/* <li>85 <i class="fa fa-heart"></i></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="login-box">
                                            <form>
                                                <a href="pruchercourse">
                                                    Buy Course
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>

                                                </a>
                                            </form>
                                        </div> */}
                                        <div id="sections">
                                            {course.subtitles.map((section, index) => {
                                                return <Sections key={index} section={section} count={index + 1} />
                                            })}

                                        </div>
                                        <div className="form-floating mb-3" />
                                        <div class="cs-content">
                                            <div className="form-floating mb-3" />
                                            <h3 class="mb-4 mr-2">Course Summary</h3>
                                            <p>{course.summary}</p>
                                            <div className="form-floating mb-3" />
                                        </div>
                                    </div>

                                    <div class="comment-area">
                                        <h4 class="comment-title">Comments <span>({course.reviews.length})</span></h4>
                                        <ul class="comment-list">

                                            {course.reviews.map((review) => {
                                                return (<React.Fragment>
                                                    <li class="comment-info-inner">
                                                        <article>
                                                            <div class="comment-thumb">
                                                                <img src="/assets2/images/author/cs-comment-auth3.jpg" alt="image" />
                                                            </div>
                                                            <div class="comment-content">
                                                                <h4>{review.username}</h4>
                                                                <p>{review.text} </p>
                                                                <div class="cs-cmnt-meta">

                                                                    <ul class="course-meta-stats">

                                                                        <li>AUGUST 6, 2018</li>
                                                                        <li><span>BY </span> Hasin Haydar</li>

                                                                        <li>
                                                                            {course.ratedetails.map((a, i) => {
                                                                                if (i < review.rate)
                                                                                    return <i class="fa fa-star" />
                                                                            })}
                                                                            {rate(review.rate)}
                                                                        </li>

                                                                    </ul>
                                                                    <a href="#">REPLY <i class="fa fa-long-arrow-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </li>

                                                </React.Fragment>)
                                            })}

                                        </ul>
                                    </div>

                                  
                                    <div className="form-floating mb-3" />
                                </div>

                                <div class="col-lg-4 col-md-4">
                                    <div class="sidebar">

                                        <div class="widget widget-instructor">
                                            <h4 class="widget-title">Course instructor</h4>
                                            <div class="instructor">
                                                <div class="post-author-info">
                                                    <div class="thumb">
                                                        <img src="/assets2/images/author/cs-post-author1.jpg" alt="image" />
                                                    </div>
                                                    <h5><a href={`teacherdetails/${course.createdById}`}>{instructor.username}</a></h5>
                                                    <ul class="social">
                                                        <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                                                        <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                                                        <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                                                        <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget widget-offer">
                                            <h4 class="widget-title">Special Offer</h4>
                                            <div class="wd-offer">
                                                <div class="text">
                                                    <h4>Get 50% OFF</h4>
                                                    <a href="comingsoon">Get Now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="widget widget-course">
                                            <h4 class="widget-title">Latest Courses</h4>
                                            <div class="course-list">



                                                {allcourses.slice(0, 4).map((course) => {
                                                    return (<React.Fragment>

                                                        <div class="w-cs-single">
                                                            <img src={"/" + course.image} alt="image" />
                                                            <div class="fix">
                                                                <h4><a href={`/coursedetails/${course._id}`}>{course.title}</a></h4>                                                                <span><i class="fa fa-clock-o"></i> AUGUST 6, 2023</span>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }

            {!ready &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
                    <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
                </div>}

        </div>
    )
}

export default Coursedetails