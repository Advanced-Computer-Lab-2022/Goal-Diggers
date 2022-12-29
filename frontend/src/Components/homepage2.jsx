import React from 'react'
import { useState } from 'react'
import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import courseService from '../courseContainer';
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
import "./bootstrap.min.css";
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
import "./search.scss";
import CourseCard from './courseCard';
import axios from 'axios';


function Homepage2({}) {

    const [ready, setReady] = useState(false);
    const [allcourses, setallCourses] = useState([]);
    const [allusers, setallusers] = useState([]);

    const id = useParams() // id for course used when the id is in the link
  const [courseData, setCourseData] = useState(null)
  const [rate, setRate] = useState(null)
  const [mostvcourses, setmostvcourses] = useState([]);
  const [mostpcourses, setmostpcourses] = useState([]);
  const [country, setCountry] = useState(false);
  const config = { headers: { "apikey": "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW" } };




  let rateMap = []
  useEffect(() => {
    const getData = async () =>{
      // const data = courseService.getCourseReviewsAndRatings(id);
      const res =await courseService.getmostviewedcourses();

      const res1 = await courseService.getnumusers();
      console.log("a7a");
      setallusers(res1);
      console.log(res1);

    
      // setCourseData(data)
      setmostvcourses(res.mvp);
      setmostpcourses(res.courses);
      // setRate(data.rate / data.numberofrates);
     
      // rateMap[Math.ceil(data.rate / data.numberofrates)] = 1
       setReady(true);

    }
    getData();
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

  return (
    <React.Fragment>
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
                            <li >
                                <FormControl class= "mt-50 w-20 cc fa fa-globe" >
    <InputLabel class=""  ></InputLabel>
    <Select 
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={ (e) => {handleCountry(e.target.value) ; console.log("NAV " +e.target.value);} }
        >
        {coun_curr_code.map(country =><MenuItem key={country.country} value={country.currency_code}>{country.country}</MenuItem>)}
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




<div>
    <section class="section main-banner" id="top" data-section="section1">
        
      <video src={main} autoPlay muted loop id="bg-video">
        
      </video>
      
      <div class="video-overlay header-text">
          <div class="container">
            <div class="row">
                
              <div>
              
                <div class="caption">
                <fieldset class="field-container">
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
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>Learning that gets you
Skills for your present (and your future).Get started with <a rel="nofollow" href="http://localhost:3000/homepage2" target="_blank">us</a>.</p>
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
					<h2>Best Instructors</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="divider-wrapper divider-two">
					<i class="fa fa-mobile"></i>
					<h2>Best Students</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
			<div class="col-md-4 col-sm-12">
				<div class="divider-wrapper divider-three">
					<i class="fa fa-life-ring"></i>
					<h2>Best Courses</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
		</div>
	</div>
</div>





{
    ready && <React.Fragment>

<div class="course-area  pt--120 pb--70">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="section-title1">
                  <span class="text-uppercase1">Build your career</span>
                  <h2>Most Viewed Courses</h2>
                </div>
              </div>
            </div>

            <div class="commn-carousel owl-carousel1 card-deck">
              <OwlCarousel>
                
                {mostvcourses.map((course) => {
                  return (<React.Fragment>
                    <CourseCard course={course}></CourseCard>



                  </React.Fragment>)
                })}


              </OwlCarousel>
            </div>
          </div>
        </div>





        <div class="course-area  pt--120 pb--70">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="section-title1">
                  <h2>Most Popular Courses</h2>
                </div>
              </div>
            </div>

            <div class="commn-carousel owl-carousel1 card-deck">
              <OwlCarousel>
                
                {mostpcourses.map((course) => {
                  return (<React.Fragment>
                   <CourseCard course={course}></CourseCard>


                  </React.Fragment>)
                })}


              </OwlCarousel>
            </div>
          </div>
        </div>        

    <div class="feature-blog  pt--120 pb--70">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-title1">
                        <span class="text-uppercase1">Events</span>
                        <h2>Upcoming Events</h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="commn-carousel owl-carousel1 card-deck">                     
                  <OwlCarousel><div class="card mb-5">
                    
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
                                    View Event
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </a>
                                </form>
                            </div>
                    </div>
                  </div>               
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail2.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">Aenean id ullamcorper</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
                                    View Event
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </a>
                                </form>
                            </div>
                    </div>
                  </div>
       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail3.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
                                    View Event
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </a>
                                </form>
                            </div>
                    </div>
                  </div>       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
                                    View Event
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </a>
                                </form>
                            </div>
                    </div>
                  </div> 
                  </OwlCarousel> 
                </div>
            </div>
        </div>
    </div>




    <div class="feature-blog  pt--120 pb--70">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-title1">
                        <span class="text-uppercase1">Top stories</span>
                        <h2>Blog & news</h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="commn-carousel owl-carousel1 card-deck"> 
                <OwlCarousel>                 
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
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
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail2.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">Aenean id ullamcorper</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
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
       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail3.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
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
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="/assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <div className="login-box">
                                <form>
                                    <a href="coursedetails">
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
                  </OwlCarousel>   
                </div>
            </div>
        </div>
    </div>
    <div>
    <section class="section video" data-section="section5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <div class="left-content">
            <span>our presentation is for you</span>
            <h4>Watch the video to learn more <em>about Our Company</em></h4>
            <span>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. You may <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> for details.
            <br/>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</span>
            <div class="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
          </div>
        </div>
        <div class="col-md-6">
          <article class="video-item">
            <div class="video-caption">
              <h4>Power HTML Template</h4>
            </div>
            <figure>
              <a href="https://www.youtube.com/watch?v=r9LtOG6pNUw" class="play"><img src="/assets2/images/course/cs-img1.jpg"/></a>
            </figure>
          </article>
        </div>
      </div>
    </div>
  </section>
    </div>
    </React.Fragment>
}
{!ready && 
        <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
        <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
    </div>
}



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
                                                    <div class="count-digit">{allusers[3]}</div>
                                                    <div class="count-title">courses</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 align-self-center">
                                <div class="video">
                                    <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    <div class="cta-area primary-bg has-color ptb--50"> 
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <div class="cta-content">
                        <p class="mb-2">Click to Join the Advance Workshop</p>
                        <h2>Training in advance networking</h2>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="cta-btn">
                    <div className="login-box">
                                <form>
                                    <a href="coursedetails">
                                    Join Us Now
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </a>
                                </form>
                            </div>{/* sign up */}
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
    <script src="assets2/js/search.js"></script>

    
    </div>
    </React.Fragment>
  )
}

export default Homepage2