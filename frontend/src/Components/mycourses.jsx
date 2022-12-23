import React from 'react'
import courseService from '../courseContainer'
import { useState } from 'react'
import { useEffect } from 'react'
function Mycourses() {
    const [myCourses,setMyCourses] = useState([])
    useEffect(()=>{
        const getCourses = async () => {
            const data = await courseService.getMyCourses(555555)
            setMyCourses(data)
            console.log(data);
        }
        getCourses()
    },[])


  return (
    <div>
        <div class="course-area  pt--120 pb--70">
        <div class="container">
            <div class="row">  
                { myCourses && myCourses.map((course,index)=>
                <div class="col-lg-4 col-md-6">
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img1.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">{course.title}</a></h4>
                                    <ul class="course-meta-stats">
                                        <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                        <li>36 <i class="fa fa-comment"></i></li>
                                        <li>85 <i class="fa fa-heart"></i></li>
                                    </ul>
                                </div> 
                                <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image"/> </a>
                            </div>
                            <p>{course.summary}</p> 
                            <ul class="course-meta-details list-inline  w-100">
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>{course.totalHours}</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div>

                )
}
                {/* <div class="col-lg-4 col-md-6"> 
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img2.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">Data Structure & Algorithm</a></h4>
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
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>1 hour</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">  
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img3.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">Android App Development</a></h4>
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
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>1 hour</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">  
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img4.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">Application Design Course</a></h4>
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
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>1 hour</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div> 

                <div class="col-lg-4 col-md-6">
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img5.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">Application Design Course</a></h4>
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
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>1 hour</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">   
                    <div class="card mb-5">
                        <div class="course-thumb">
                            <img src="assets2/images/course/cs-img6.jpg" alt="image"/>
                            <span class="cs-price primary-bg">$150</span>
                        </div>
                        <div class="card-body  p-25"> 
                            <div class="course-meta-title mb-4">
                                <div class="course-meta-text">
                                    <h4><a href="course-details.html">Application Design Course</a></h4>
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
                                <li> 
                                 <p>Course</p>
                                 <span>3 Year</span>
                                </li>
                                <li>
                                 <p>Class Size</p>
                                  <span>18</span>
                                </li> 
                                <li>
                                 <p>Duration</p>
                                  <span>1 hour</span>
                                </li>      
                            </ul>  
                      </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
    </div>
  )
}

export default Mycourses