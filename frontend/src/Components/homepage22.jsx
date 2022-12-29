import React from 'react'
import { useState } from 'react'
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import "./editprofile.css"
import courseService from '../courseContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Homepage22() {
    const id = useParams() // id for course used when the id is in the link
    const [courseData,setCourseData] = useState(null)
    const [rate,setRate] = useState(null)
    let rateMap = []
    useEffect(()=>{
        const data = courseService.getCourseReviewsAndRatings(id)
        setCourseData(data)
        setRate(data.rate/data.numberofrates)
        rateMap[Math.ceil(data.rate/data.numberofrates)]=1
    },[])


  return (
    <React.Fragment>
    <div>
   

    <div class="offset-search">
        <form action="#">
            <input type="text" name="search" placeholder="Search here..."/>
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>

<div>
    <section class="section main-banner" id="top" data-section="section1">
      <video src={main} autoPlay muted loop id="bg-video">

      </video>

      <div class="video-overlay header-text">
          <div class="container">
            <div class="row">
              
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
                <div class="card mb-5 ">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img1.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Application Design Course</a></h4>
                                <ul class="course-meta-stats">
                                    {rate &&
                                        <li>
                                            {
                                                rateMap.map((num,index)=>{
                                                    if(rate!=rateMap.length && index===rateMap.length-1){
                                                        return <i class="fa fa-star-half"></i>
                                                    }
                                                    return <i class="fa fa-star"></i>
                                                })
                                            }
                                        </li>


                                    }
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                            <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <ul class="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div>
                </div>
 
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img2.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Data Structure & Algorithm</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                        <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>        
                        </ul>  
                  </div>
                </div>
  
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img3.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Android App Development</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                        <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>       
                        </ul>  
                  </div>
                </div>
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img3.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Android App Development</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                        <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>        
                        </ul>  
                  </div>
                </div>
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img3.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Android App Development</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                        <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div>
                </div>
                <div class="card mb-5">
                    <div class="course-thumb">
                        <img src="assets2/images/course/cs-img3.jpg" alt="image"/>
                        <span class="cs-price primary-bg">$150</span>
                    </div>
                    <div class="card-body  p-25"> 
                        <div class="course-meta-title mb-4">
                            <div class="course-meta-text">
                                <h4><a href="coursedetails">Android App Development</a></h4>
                                <ul class="course-meta-stats">
                                    <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                    <li>36 <i class="fa fa-comment"></i></li>
                                    <li>85 <i class="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul class="course-meta-details list-inline  w-100">
                            <a href="coursedetails" className="login-box mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                QuickOverview
                            </a>
                        <li> 
                             <p>Taughted by</p>
                             <span>Mahmoud</span>
                            </li>
                            <li>
                             <p>Course Sections</p>
                              <span>18 Sections</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>       
                        </ul>  
                  </div>
                </div>
                </OwlCarousel>
            </div> 
        </div>
    </div>

    <div class="teacher-area pb--70">
        
        <div class="container">
        
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="section-title1">
                        <span class="text-uppercase1">Learn from best</span>
                        <h2>Our Instructors</h2> 
                    </div>
                </div>
            </div>
            
            <div class="commn-carousel owl-carousel1 card-deck">  
            <OwlCarousel>   
              <div class="card mb-5"> 
                <img src="assets2/images/teacher/teacher-member1.jpg" alt="image"/> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacherdetails">Slim Abdennader</a></h4>
                  <span class="primary-color2 font-italic d-block mb-3">Computer Science</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>

              <div class="card mb-5"> 
                <img src="assets2/images/teacher/teacher-member3.jpg" alt="image"/> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacherdetails">Mervat Aboelkhair</a></h4>
                  <span class="primary-color2 font-italic d-block mb-3">Data Base</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>

              <div class="card mb-5"> 
                <img src="assets2/images/teacher/teacher-member5.jpg" alt="image"/> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacherdetails">Haythim O Ismaial</a></h4>
                  <span class="primary-color2 font-italic d-block mb-3">Theroy of Comptition</span>
                  <p class="card-text">We are a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="card mb-5"> 
                <img src="assets2/images/teacher/teacher-member4.jpg" alt="image"/> 
                <div class="card-body teacher-content p-25">  
                  <h4 class="card-title mb-4"><a href="teacherdetails">Amr ElMougy</a></h4>
                  <span class="primary-color2 font-italic d-block mb-3">Networks</span>
                  <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                  <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i class="fa fa-deviantart"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                  </ul>
                </div>
              </div>  
              </OwlCarousel>      
            </div>
            
        </div>
        
    </div>

    <div class="event-area  pt--120 pb--80">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-title1">
                        <span class="text-uppercase1">Join with us</span>
                        <h2>Upcoming Events to </h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>MAR</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="blogdetails">Affiliate Marketing</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>OCT</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="blogdetails">Facebook Marketing</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>NOV</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="blogdetails">Edustar Autumn</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div> 
                <div class="col-md-6">
                    <div class="media align-items-center mb-5">
                        <div class="media-head primary-bg">
                            <span><sub>DEC</sub>25</span>
                            <p>2018</p>
                        </div>
                        <div class="media-body">
                            <h4><a href="blogdetails">Workshop PHP</a></h4>
                            <p><i class="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
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
                        <span class="text-uppercase1">Top stories</span>
                        <h2>Blog & news</h2> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="blog-carousel owl-carousel1 card-deck">                     
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>               
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail2.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">Aenean id ullamcorper</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>
       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail3.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div>       
                  <div class="card mb-5"> 
                    <img class="card-img-top" src="assets2/images/blog/blog-thumbnail1.jpg" alt="image"/>
                    <div class="card-body p-25"> 
                        <ul class="list-inline primary-color2 mb-3">
                            <li><i class="fa fa-clock-o"></i> AUGUST 6, 2023</li>
                            <li><i class="fa fa-comments"></i> 3 Comments</li>
                        </ul>
                      <h4 class="card-title mb-4"><a href="blogdetails">The Death Of architechture</a></h4>
                      <p class="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p> 
                      <a class="btn btn-primary btn-round btn-sm" href="blogdetails"> Read More </a>
                    </div>
                  </div> 
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
            <h4>Watch the video to learn more <em>about Grad School</em></h4>
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
              <a href="https://www.youtube.com/watch?v=r9LtOG6pNUw" class="play"><img src="assets2/images/course/cs-img1.jpg"/></a>
            </figure>
          </article>
        </div>
      </div>
    </div>
  </section>
    </div>
    <div>
    <section class="our-facts">
    <div class="container">
      <div class="row">
        <div class="col-lg-61">
          <div class="row">
            <div class="col-lg-12">
              <h2>A Few Facts About Our Website</h2>
            </div>
            <div class="col-lg-61">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content percentage">
                    <div class="count-digit">94</div>
                    <div class="count-title">Succesed Students</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">126</div>
                    <div class="count-title">Current Teachers</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-61">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content new-students">
                    <div class="count-digit">2345</div>
                    <div class="count-title">New Students</div>
                  </div>
                </div> 
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">32</div>
                    <div class="count-title">Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="col-lg-61 align-self-center">
          <div class="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt=""/></a>
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
                        <a class="btn btn-light btn-round" href="#">Join Now</a>{/* sign up */}
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    
    </div>
    </React.Fragment>
  )
}

export default Homepage22