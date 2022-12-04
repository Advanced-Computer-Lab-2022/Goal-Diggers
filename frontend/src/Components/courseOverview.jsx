import React, { useState, useEffect } from 'react';
import courseService from '../courseContainer';
import Sections from './section';
import { useParams } from "react-router-dom";

const CourseOverview = () => {
    const [course, setCourse] = useState({});
    const [count, setCount] = useState(0);
    const {id} = useParams();
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
                                    <button type="button" className="btn btn-primary">GO TO Course</button>
                                </div>
                            </div>
                            <div className="col-sm-4 p-5 mr-5">
                                <img src={"."+course.image} style={{ width: '80%', height: '80%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-2    ">
                        <a href='#top' className="btn btn-light mx-2">Top page</a>
                        <a href='#video' className="btn btn-light ">Welcom Video</a>
                        <a href='#sections' className="btn btn-light ">Sections</a>
                        <a href='#' className="btn btn-light ">About US</a>
                    </div>
                    <div id='video'>
                        <div className="embed-responsive embed-responsive-16by9 text-center  su-youtube su-responsive-media-yes mt-5 " >
                            <iframe width="600"
                                height="320" className="embed-responsive-item text-center"
                                src={course.overviewVideo[0].url} allowFullScreen></iframe>

                        </div>
                        <div className="container mt-3 text-center">
                            <h1>Summary Of Course</h1>
                            <p>{course.summary}</p>
                        </div>

                    </div>
                    <hr />
                    <div id="sections">
                    {course.section.map((section,index) => 
                        {   
                            return <Sections key={index} section={section} count={index+1} />})}
                        
                    </div>
                </React.Fragment>
            ) : (
                <h1>not ready</h1>
            )
            }
        </React.Fragment>
    );
}

export default CourseOverview;