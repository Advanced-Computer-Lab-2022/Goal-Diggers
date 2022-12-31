import React,{useContext} from 'react'
import {Rating} from '@mui/material';
import { Link } from "react-router-dom";
import AuthContext,{AuthContextProvider} from '../context/AuthContext';

const CourseCard = ({course}) => {
    const {loggedIn,id,type,username,lastname,firstname,email}=useContext(AuthContext);
    return ( 
      <div class="card mb-5">
      <div class="course-thumb">
          <img src={course.image} class = "piccss"  alt="image" />
          {!(type==='role')&&<> <span class="cs-price primary-bg"> 
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
          </span></>}
      </div>
      <div class="card-body  p-25">
          <div class="course-meta-title mb-4">
              <div class="course-meta-text">
              <h4><a href={`/coursedetails/${course._id}`}>{course.title}</a></h4>                                                    <ul class="course-meta-stats">
                      <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                      <li>{course.reviews.length} <i class="fa fa-comment"></i></li>
                      {
                        (course.discount && new Date(course.discount.start) <= Date.now() && new Date(course.discount.end) >= Date.now()) &&
                        <li><span className="px-1" style={{fontSize:"13px", color:'green'}}>Discount {course.discount.promotion}%</span></li>
                      }
                      {/* <li>85 <i class="fa fa-heart"></i></li> */}
                  </ul>
              </div>
     {/* <a href="coursedetails"><img class="course-meta-thumbnail rounded-circle" src="assets2/images/author/auth1.jpg" alt="image" /> </a> */}
     <div className="login-box">
<form>
  <a href={`/coursedetails/${course._id}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      View Course
  </a>
</form>
</div>
          </div>
          <p>{course.summary}</p>
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
  </div>
    );
}
 
export default CourseCard;