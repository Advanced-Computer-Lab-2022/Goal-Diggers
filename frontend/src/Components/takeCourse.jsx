import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
// import course from '../coursesTEST';
import ReactPlayer from 'react-player/youtube';
import ProgressBar from "@ramonak/react-progress-bar";
import WelcomeQuiz from './welcome-quiz';
import { Link, useParams } from 'react-router-dom';
import courseService from '../courseContainer';
import swal from 'sweetalert';
import {useFloating} from '@floating-ui/react';
import ViewNotes from './viewNotes';
// import Refundcourse from './refundcourse';
// import Showpreviousproblems from './showpreviousproblems';

const TakeCourse = () => {
    const [course, setCourse] = useState({});
    const [count, setCount] = useState(0);
    const [url, setUrl] = useState();
    const [discription, setDiscription] = useState();
    const [title, setTitle] = useState();
    const [quizStart, setQuizStart] = useState(false);
    const [ready, setReady] = useState(false);
    const [refund, setrefund] = useState(true);
    const [quizId, setQuizId] = useState(null);
    const [quizGrade, setQuizGrade] = useState(null);
    const { id } = useParams();
    const [report, setreport] = useState(false);
    const [followup, setfollowup] = useState(false);
    const [viewrefund, setviewrefund] = useState(false);
    const [showpreviousproblems, setshowpreviousproblems] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState({title : "", note:""});
    

    const handle = (e)=>{
        setNote({title : title, note : e.target.value});
    }

    const saveNote = async ()=>{
        if(note.note) {
            let temp= {... course};
            if(course.notes){
                temp.notes.push(note);
            }
            else {
                temp.notes = [note];
            }
            setNote({note:'', title:''});
            setCourse(temp);
            await courseService.saveProgress(temp);
        }
        else {
            setOpen(false);
        }
    }

    const chooseVideo = async (item) => {
        console.log(item);
        if (item.length > 1) {
            if (item[0] == "quiz") {
               
                setQuizGrade(null);
                for (let index = 0; index < course.attemptedQuizs.length; index++) {
                    if (course.attemptedQuizs[index].id === item[1])
                        setQuizGrade(course.attemptedQuizs[index].grade);
                }
                setQuizId(item[1]);
                setviewrefund(false);
                setfollowup(false);
                setQuizStart(true);
                setreport(false); 
                setshowpreviousproblems(false);
                setShowNotes(false);
                console.log("quiz");
               }
            else if(item[0] == "refund"){
                console.log("refund");
                    setviewrefund(true);
                    setfollowup(false);
                    setQuizStart(false);
                    setreport(false);
                    setshowpreviousproblems(false);
                    setShowNotes(false);
            }
            else if(item[0] == "notes"){
                    setviewrefund(false);
                    setfollowup(false);
                    setQuizStart(false);
                    setreport(false);
                    setshowpreviousproblems(false);
                    setShowNotes(true);
            }
            else if(item[0] == "report"){
                setviewrefund(false);
                setfollowup(false);
                setQuizStart(false);
                setreport(true);
                setshowpreviousproblems(false);
                setShowNotes(false);
            }
            else if(item[0] == "followup"){
                setviewrefund(false);
                setfollowup(true);
                setQuizStart(false);
                setreport(false);
                setshowpreviousproblems(false);
                setShowNotes(false);
            }
            else if(item[0] == "previousproblems"){
                setviewrefund(false);
                setfollowup(false);
                setQuizStart(false);
                setreport(false);
                setshowpreviousproblems(true);
                setShowNotes(false);
            }
            else {
                if (!course.completedVideos.includes(item[0])) {
                    let courseTemp = { ...course };
                    courseTemp.completedVideos.push(item[0]);
                    setCourse(courseTemp);
                }
                setviewrefund(false);
                setfollowup(false);
                setQuizStart(false);
                setreport(false);
                setShowNotes(false);
                setshowpreviousproblems(false);
                setUrl(item[0]);
                setDiscription(item[1]);
                setTitle(item[2]);
            }
        }
        await courseService.saveProgress(course);
    }
    function refundcourse (){
        swal({
            title: "Do you want to refund this course?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              
              swal("Your refund request has been sent", {
                icon: "success",
              });

            }
          });
    }
    useEffect(() => {
        const getCourse = async () => {
            const course = await courseService.getRegisteredCourse(id);
            setCourse(course);
            setTitle(course.overviewvideo.title);
            setDiscription(course.overviewvideo.descriprion);
            setUrl(course.overviewvideo.url);
            setReady(true);
            {
                (((course.completedVideos.length + course.completedQuizs) / course.totalItems) * 100) >= 50 &&
                setrefund(false)
            }
        }
        getCourse();
    }, [])
    return (
        <React.Fragment>
            {ready ?
                <div className='row p-2'>
                    <div className="col-sm-3" style={{ border: '1px solid lightcoral' }}>
                        <Sidebar refund={refund} completedVideos={course.completedVideos} attemptedQuizs={course.attemptedQuizs} subtitles={course.subtitles} overviewvideo={course.overviewvideo} choosevideo={chooseVideo} />
                    </div>
                    <div className="col-sm-1 bg-light">
                    </div>
                    <div className="col-sm-8 px-2 bg-light">
                        {(((course.completedVideos.length + course.completedQuizs) / course.totalItems) * 100) == 100 &&
                            <div className='alert alert-success row col-sm-10'>
                                <div className='col-sm-6'>
                                    <i style={{ color: 'green' }} className="fa fa-check-circle" aria-hidden="true"></i> Congratulations You have finished the course
                                </div>
                                <div className='col-sm-6' style={{ textAlign: 'right' }}>
                                    {!course.rateInstructor && <Link to={`/rateinstructor/${course._id}/638cbacd72d0b673c0e33e9a`} style={{ borderRadius: '25px' }} className='btn mx-2 btn-primary'>Rate Instructor <i className="fa fa-smile-o" aria-hidden="true"></i></Link>}
                                    {!course.rateCourse && <Link to={`/rateinstructor/${course._id}/6387c9ccf97dac90e3fa395c`} style={{ borderRadius: '25px' }} className='btn btn-primary'>Rate Course <i className="fa fa-smile-o" aria-hidden="true"></i></Link>}
                                </div>
                            </div>
                        }
                        {quizStart ?
                            <WelcomeQuiz courseID={course._id} id={quizId} grade={quizGrade} />
                            : (viewrefund ?
                                refundcourse ()
                                : ( report ?
                                    <WelcomeQuiz courseID={course._id} id={quizId} grade={quizGrade} /> 
                                : (followup ?
                                    <h1></h1>
                                : ( showpreviousproblems ?
                                    <WelcomeQuiz courseID={course._id} id={quizId} grade={quizGrade} />     
                                
                                : (
                                    showNotes ? 
                                    <div className="container p-3 justify-content-center" >
                                        <ViewNotes title={course.title} notes={course.notes}/>
                                    </div>
                                    :(
                                        <React.Fragment>
                                    <div className="container p-3 justify-content-center" >
                                        <ProgressBar width='73%' bgColor='#6a1b9a' completed={(((course.completedVideos.length + course.completedQuizs) / course.totalItems) * 100).toFixed(2)} />
                                    </div>
                                    <h2>{title} : </h2>
                                    <div className="row">
                                        <div className="col-sm-9">
                                        <ReactPlayer width={750} height={500} url={url} />
                                        </div>
                                        <div className="col-sm-3 text-center">
                                            <img onClick={()=>{setOpen(!open)}} src="../notepad.png" alt="" width={'75px'}  />
                                            {open && <div className='card bg-light mt-' style={{borderRadius:'25px'}}>
                                                        <div className="form-floating mb-3">
                                                            <textarea onChange={(e) => handle(e)} value={note.note} name="summary" id="summaryy" className="form-control" placeholder="write your note here" style={{ height: '100px' }}></textarea>
                                                            <label htmlFor="floatingTextarea2">Write your note here</label>
                                                        </div>
                                                        <button className='btn btn-primary'style={{borderRadius:'25px'}} onClick={()=>{saveNote()}}>Save</button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='mt-2 p-3 col-sm-9' style={{ border: '1px solid lightcoral', borderRadius: '25px' }}>
                                        <h4>Video Discription : </h4>
                                        <p>{discription}</p>
                                    </div>
                                </React.Fragment>
                                    )
                                
                                )
                                )
                                )
                                )
                            
                            )
                        }
                    </div>
                </div>
                : (
                    <div className="container text-center" style={{ marginBottom: '300px' }}>
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