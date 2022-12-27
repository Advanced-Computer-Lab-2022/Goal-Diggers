import React, { useState, useEffect, useContext } from 'react';
import {Rating} from "@mui/material";
import courseService from '../courseContainer';
import Sections from './section';
import ReactPlayer from 'react-player/youtube';
import { useParams, Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from"../context/AuthContext";
import ReactLoading from 'react-loading';

const CourseOverview = () => {
    const [course, setCourse] = useState({});
    const {loggedIn,type ,email,minibiography}=useContext(AuthContext);
    const [response, setres] = useState({});
    const { id } = useParams();
    const [ready, setReady] = useState(false);
    const url = "https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
    useEffect(() => {
        const getCourse = async (id) => {
            const res = await courseService.getCourse(id);
            setCourse(res.course);
            setres({reg : res.register, pen : res.pending});
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
                                    {type != 'instructor' && 
                                        <React.Fragment>
                                            {response.reg && <Link to={`/take-course/${course._id}`} className="btn btn-primary">GO TO Course</Link>}
                                            {response.pen && <button disabled={true}  className="btn btn-primary">Your Request to fund is being processed</button>}
                                            {response.requested && <button disabled={true}  className="btn btn-primary ">Your Request is being processed</button>}
                                            {response.reg == false && type == "student" && <Link to={`/payment/${course._id}`} className="btn btn-primary">Enroll Now</Link>}
                                            {response.reg == false && type != "student" && <Link to={`/payment/${course._id}`} className="btn btn-primary">Request to Enroll</Link>}
                                        </React.Fragment>
                                    }
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
                    <div id='video' className='row bg-light p-4 m-2' style={{borderRadius : '25px', border : '1px solid black'}}>
                        <div className="col-sm-8 " >
                            <center>
                                <h2>A Preview Video for the course:</h2>
                                <ReactPlayer width={750} height={500} url={course.overviewvideo.url} />
                            </center>

                        </div>
                        <div className="col-sm-4">
                            <h3 className='text-center'>Summary Of Course</h3>
                            <hr />
                            <p className='mt-5'>{course.summary}</p>
                        </div>

                    </div>
                    <div id="sections" className='bg-light p-4 m-2' style={{borderRadius : '25px', border : '1px solid black'}}>
                        {course.subtitles.map((section, index) => {
                            return <Sections key={index} section={section} count={index + 1} />
                        })}

                    </div>
                    {/* /////////////////////////// */}
                    <div className='row bg-light p-4 m-2' id="reviews" style={{borderRadius : '25px', border : '1px solid black'}}>
                    <div className="col-sm-4 p-5">
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
                        </div>
                    <div className='col-sm-8 '>
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
                                                            <strong>{review.username}</strong>
                                                            <span>@{review.username}</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews">
                                                        {course.ratedetails.map((ra, i)=>{
                                                            if(i < review.rate){
                                                            return <i class="fas fa-star"></i>;
                                                            }
                                                        })}
                                                    </div>
                                                </div>
                                                <div class="client-comment">
                                                    <p>{review.text}</p>
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
                <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
                    <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
                </div>
            )
            }
        </React.Fragment>
    );
}

export default CourseOverview;