import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
// import course from '../coursesTEST';
import ReactPlayer from 'react-player/youtube';
import ProgressBar from "@ramonak/react-progress-bar";
import WelcomeQuiz from './welcome-quiz';
import { Link, useParams } from 'react-router-dom';
import courseService from '../courseContainer';

const TakeCourse = () => {
    const [course, setCourse] = useState({});
    const [url, setUrl] = useState();
    const [discription, setDiscription] = useState();
    const [title, setTitle] = useState();
    const [quizStart, setQuizStart] = useState(false);
    const [ready, setReady] = useState(false);
    const [quizId, setQuizId] = useState(null);
    const [quizGrade, setQuizGrade] = useState(null);
    const { id } = useParams();
    const chooseVideo = async (item)=>{
        if(item.length > 1) {
            if(item[0] != "quiz") {
                if (!course.completedVideos.includes(item[0])) {
                    let courseTemp = {... course};
                    courseTemp.completedVideos.push(item[0]);
                    setCourse(courseTemp);
                }
                setQuizStart(false);
                setUrl(item[0]);
                setDiscription(item[1]);
                setTitle(item[2]);
            }
            else {
                setQuizGrade(null);
                for (let index = 0; index < course.attemptedQuizs.length; index++) {
                    if(course.attemptedQuizs[index].id === item[1]) 
                        setQuizGrade(course.attemptedQuizs[index].grade);
                }
                setQuizId(item[1]);
                setQuizStart(true);
            }
        }
        await courseService.saveProgress(course);
    }
    useEffect(()=>{
        const getCourse = async()=> {
            const course = await courseService.getRegisteredCourse(id);
            setCourse(course);
            setTitle(course.overviewvideo.title);
            setDiscription(course.overviewvideo.descriprion);
            setUrl(course.overviewvideo.url);
            setReady(true);
        }
        getCourse();
    },[])
    return ( 
        <React.Fragment>
            
            {ready ? 
                <div className='row p-2'>
                    <div className="col-sm-3" style={{border : '1px solid lightcoral'}}>
                        <Sidebar completedVideos={course.completedVideos} attemptedQuizs={course.attemptedQuizs} subtitles={course.subtitles} overviewvideo={course.overviewvideo} choosevideo={chooseVideo}/>
                    </div>
                    <div className="col-sm-1 bg-light">
                    </div>
                    <div className="col-sm-8 px-2 bg-light">
                        {(((course.completedVideos.length + course.completedQuizs) / course.totalItems)*100) == 100 &&
                            <div className='alert alert-success row col-sm-10'>
                                <div className='col-sm-6'>
                                    <i style={{color: 'green'}} className="fa fa-check-circle" aria-hidden="true"></i> Congratulations You have finished the course
                                </div>
                                <div className='col-sm-6' style={{textAlign:'right'}}>
                                    {!course.rateInstructor && <Link to={`/rateinstructor/${course._id}/638cbacd72d0b673c0e33e9a`} style={{borderRadius : '25px' }} className='btn mx-2 btn-primary'>Rate Instructor <i className="fa fa-smile-o" aria-hidden="true"></i></Link>}
                                    {!course.rateCourse && <Link to={`/rateinstructor/${course._id}/6387c9ccf97dac90e3fa395c`} style={{borderRadius : '25px' }} className='btn btn-primary'>Rate Course <i className="fa fa-smile-o" aria-hidden="true"></i></Link>}
                                </div>
                            </div>
                        }
                        {quizStart ? 
                            <WelcomeQuiz courseID={course._id} id={quizId} grade={quizGrade} />
                        :  ( <React.Fragment>
                            <div className="container p-3 justify-content-center" > 
                                <ProgressBar width='73%' bgColor='#6a1b9a' completed={(((course.completedVideos.length + course.completedQuizs) / course.totalItems)*100).toFixed(2)} />
                            </div>  
                            <h2>{title} : </h2>
                            <ReactPlayer width={750} height={500} url={url} />
                            <div className='mt-2 p-3 col-sm-9' style={{border : '1px solid lightcoral',borderRadius : '25px' }}>
                            <h4>Video Discription : </h4>
                            <p>{discription}</p>
                            </div>
                        </React.Fragment>
                        )
                        }
                    </div>
                </div>
            : (
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
 
export default TakeCourse;