import React, { useState, useEffect } from 'react';
import {Rating} from "@mui/material";
import courseService from '../courseContainer';
import Sections from './section';
import ReactPlayer from 'react-player/youtube';
import { useParams, Link } from "react-router-dom";

const CourseOverview = () => {
    const [course, setCourse] = useState({});
    const [count, setCount] = useState(0);
    const { id } = useParams();
    const [ready, setReady] = useState(false);
    const url = "https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
    useEffect(() => {
        const getCourse = async (id) => {
            const res = await courseService.getCourse(id);
            setCourse(res);
            console.log(res);
            setReady(true);
        }
        getCourse(id);
    }, [])
    return (
        <React.Fragment >
            {ready ? (
                <React.Fragment>
                    <div className='hero-cover' id='top'>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className='hero-text'>
                                    <h2>{course.createdByName}</h2>
                                    <p>{course.title}</p>
                                    <Link to={"/take-course/63890dc8da119c7b3d7f437d"} className="btn btn-primary">GO TO Course</Link>
                                </div>
                            </div>
                            <div className="col-sm-4 p-5 mr-5">
                                <img src={"." + course.image} style={{ width: '80%', height: '80%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2    ">
                        <a href='#top' className="btn btn-light mx-2">Top page</a>
                        <a href='#video' className="btn btn-light ">Welcom Video</a>
                        <a href='#sections' className="btn btn-light ">Sections</a>
                        <a href='#reviews' className="btn btn-light "> Reviews</a>
                    </div>
                    <div id='video'>
                        <div className="embed-responsive embed-responsive-16by9 text-center  su-youtube su-responsive-media-yes mt-5 " >
                            <center>
                                <ReactPlayer width={750} height={500} url={url} />
                            </center>

                        </div>
                        <div className="container mt-3 text-center">
                            <h1>Summary Of Course</h1>
                            <p>{course.summary}</p>
                        </div>

                    </div>
                    <hr />
                    <div id="sections">
                        {course.subtitle.map((section, index) => {
                            return <Sections key={index} section={section} count={index + 1} />
                        })}

                    </div>
                        <hr />
                    {/* /////////////////////////// */}
                    <div className='instructorrate' id="reviews">
                        <div class="rating mb-3">
                            <input type="radio" name="star" /><span class="star"> </span>
                            <input type="radio" name="star" /><span class="star"> </span>
                            <input type="radio" name="star" /><span class="star"> </span>
                            <input type="radio" name="star" /><span class="star"> </span>
                            <input type="radio" name="star" /><span class="star"> </span>
                            <span class="emo"> </span>
                        </div>
                        <Rating precision={0.1} name="rating" value={(course.rate / course.numberofrates).toFixed(1)} readOnly />
                        <div>
                            <span class="heading">User Rating</span>
                            <span >Total rating </span>
                            <p>{(course.rate / course.numberofrates).toFixed(1)} average based on {course.numberofrates} reviews.</p>
                            <hr style={{ border: '3px solid #f1f1f1' }} />
                        </div>
                        <div class="row">
                            <div class="side">
                                <div>5 star</div>
                            </div>
                            <div class="middle">
                                <div class="bar-container">
                                    <div class="bar-5" style={{ width: (course.ratedetails[5] / course.numberofrates) * 100 + '%' }}></div>
                                </div>
                            </div>
                            <div class="side right">
                                <div>{course.ratedetails[5]}</div>
                            </div>
                            <div class="side">
                                <div>4 star</div>
                            </div>
                            <div class="middle">
                                <div class="bar-container">
                                    <div class="bar-4" style={{ width: (course.ratedetails[4] / course.numberofrates) * 100 + '%' }}></div>
                                </div>
                            </div>
                            <div class="side right">
                                <div>{course.ratedetails[4]}</div>
                            </div>
                            <div class="side">
                                <div>3 star</div>
                            </div>
                            <div class="middle">
                                <div class="bar-container">
                                    <div class="bar-3" style={{ width: (course.ratedetails[3] / course.numberofrates) * 100 + '%' }}></div>
                                </div>
                            </div>
                            <div class="side right" >
                                <div>{course.ratedetails[3]}</div>
                            </div>
                            <div class="side">
                                <div>2 star</div>
                            </div>
                            <div class="middle">
                                <div class="bar-container">
                                    <div class="bar-2" style={{ width: (course.ratedetails[2] / course.numberofrates) * 100 + '%' }}></div>
                                </div>
                            </div>
                            <div class="side right">
                                <div>{course.ratedetails[2]}</div>
                            </div>
                            <div class="side">
                                <div>1 star</div>
                            </div>
                            <div class="middle">
                                <div class="bar-container">
                                    <div class="bar-1" style={{ width: (course.ratedetails[1] / course.numberofrates) * 100 + '%' }}></div>
                                </div>
                            </div>
                            <div class="side right" >
                                <div>{course.ratedetails[1]}</div>
                            </div>
                        </div>
                        <div>
                            <section id="testimonials">
                                <div class="testimonial-heading">
                                    <span>Comments</span>
                                    <h1>Students Says</h1>
                                </div>
                                <div class="testimonial-box-container">
                                    {course.reviews.map(review => {
                                        return (
                                            <div class="testimonial-box">
                                                <div class="box-top">
                                                    <div class="profilee">
                                                        <div class="profile-img">
                                                        </div>
                                                        <div class="name-user">
                                                            <strong>3bto saeed</strong>
                                                            <span>@abdo</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                    </div>
                                                </div>
                                                <div class="client-comment">
                                                    <p>{review}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* ////////////////////////////////////// */}
                </React.Fragment>
            ) : (
                    <div  className="container text-center" style={{marginBottom: '300px'}}>
                        <div className="container">
                            <div className="row">
                                <div id="loader">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="loading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            )
            }
        </React.Fragment>
    );
}

export default CourseOverview;