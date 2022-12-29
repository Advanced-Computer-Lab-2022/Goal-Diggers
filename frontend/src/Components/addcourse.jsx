import React from 'react'
import { useState } from 'react'
import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import courseService from '../courseContainer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl,Select,InputLabel,MenuItem} from "@mui/material";
import coun_curr_code from '../coun-curr-code';

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
import "./addcourse.css"

function Addcourse(props) {
    const [totalhours, sethours] = useState("");
    const [done, setdone] = useState(false);
    const [titleofsubtitle, settitle] = useState("");
    const [summaryofsubtitle, setsummary] = useState("");
    const [video, setvideo] = useState("");
    const [videotitle, setvideotitle] = useState("");
    const [boolquiz, setboolquiz] = useState(true);
    const [texterror, settexterror] = useState("");
    const [titleerror, settitleerror] = useState("");
    const [videoerror, setvideoerror] = useState("");
    const [quizID, setquizID] = useState(null);
    const [styleForm , setstyleForm] = useState({width: '110px',
        height: '35px',
        margin: '0 10px',
        background: 'linear-gradient(to right , #ff105f , #ffad06)',
        borderRadius: '30px',
        border: "0",
        outline: 'none',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
        margin: '5px 0',
        padding: "10px 5px",
        borderBottom: "1px solid #999",
        outline: "none",
        background: "transparent",
        width: '280px',
        position: 'absolute',
        top: '100px',
        left: '40px',
        transition: '0.5s'
    });
    const [styleForm1 , setstyleForm1] = useState({... styleForm });
    const [styleForm2 , setstyleForm2] = useState({... styleForm , left: '450px'});
    const [styleForm3 , setstyleForm3] = useState({... styleForm , left: '450px'});
    const [styleForm4 , setstyleForm4] = useState({... styleForm , left: '450px'});

    const [data, setdata] = useState({
        subject: "",
        totalHours: "",
        titlee: "",
        price: "",
        summaryy: "",
        image: "",
        overviewVideo:"",
        subtitles: []
    })

    function Next1() {
        setstyleForm1({... styleForm, left : '-450px'});
        setstyleForm2({... styleForm, left : '40px'});
    }

    function Back1() {
        setstyleForm1({... styleForm, left : '40px'});
        setstyleForm2({... styleForm, left : '450px'});
    }

    function Next2() {
        setstyleForm2({... styleForm, left : '-450px'});
        setstyleForm3({... styleForm, left : '40px'});
    }

    function Back2() {
        setstyleForm2({... styleForm, left : '40px'});
        setstyleForm3({... styleForm, left : '450px'});
    }

    function Next3() {
        setstyleForm3({... styleForm, left : '-450px'});
        setstyleForm4({... styleForm, left : '40px'});
    }

    function Back3() {
        setstyleForm3({... styleForm, left : '40px'});
        setstyleForm4({... styleForm, left : '450px'});
    }

    const [subtitles, setsubtitles] = useState([]);
    const [videos, setVideos] = useState([]);
    //const [images,setImages] = useState([]);

    const [counter, setCounter] = useState(0);
    const [quiz, setQuiz] = useState([]);
    

    const [newQuestion, setNewQuestion] = useState(true);
    const [quizdata, setquizdata] = useState({
        title: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        explaination: "",
        correctanswer: ""


    })
    const [questionerror, setquestionerror] = useState("");

    

    function handle1(e) {
        const newdata = { ...quizdata }
        newdata[e.target.id] = e.target.value
        setquizdata(newdata);
        console.log(newdata);
        setquestionerror(false);
    }
    function handleChange1 (e)  {
        const newdata = { ...quizdata };
        newdata.correctanswer = e.target.value;
        setquizdata(newdata);
    }

    function addquestion() {

        if (quizdata.answer1.length === 0 || quizdata.answer2.length === 0 || 
            quizdata.answer3.length === 0 || quizdata.answer4.length === 0 
            || quizdata.explaination.length === 0 || quizdata.correctanswer.length==0 || quizdata.title.length==0) setquestionerror(true)
        else {
            let question = {};  
            question['questionText'] = quizdata.title;
            question['explanation'] = quizdata.explaination;
            let options = [];
            options[0] = {text : quizdata.answer1}; 
            options[1] = {text : quizdata.answer2}; 
            options[2] = {text : quizdata.answer3}; 
            options[3] = {text : quizdata.answer4};
            console.log(quizdata.correctanswer);
            options[Number(quizdata.correctanswer) - 1].correct = true;
            question['options'] = options;
            let temp = [... quiz];
            temp.push(question);
            setQuiz(temp);
            console.log(question);
            setquizdata({
                title: "",
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
                explaination: "",
                correctanswer: ""
        
        
            })
        }
        console.log(quizdata);
    }

    async function submit() {
        //e.preventdefault(e);
        if (data.totalHours.length === 0 || data.subject.length === 0 || 
            data.titlee.length === 0 || data.price.length === 0 || 
            data.summaryy.length === 0 || data.image.length === 0 || 
            data.overviewVideo.length==0) settexterror(true)

        else {
            settexterror(false);
            data.subtitles = subtitles;
            console.log(data);
            const res = await courseService.addCourse(data);
            setdone(true);
        }
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata);
        console.log(newdata);
    }

    function addtitle() {
        let section = { total: totalhours, title: titleofsubtitle, summary: summaryofsubtitle, videos: videos ,quizs: quizID }

        if (totalhours === 0 || titleofsubtitle.length === 0 || summaryofsubtitle.length === null) {
            settitleerror(true);
        }
        else {
            subtitles.push(section)
            settitleerror(false);
            sethours("");
            settitle("");
            setsummary("");
            setvideotitle("");
            sethours("");
            setvideo("");
            setVideos([]);
        }
        console.log(subtitles);
    }

    function addvideo() {
        let Video = { vod: video, vodtitle: videotitle }
        if (video.length === 0 || videotitle.length === 0) setvideoerror(true)
        else {
            videos.push(Video)
            setvideoerror(false);
            setvideo("");
            setvideotitle("");
        }
        console.log(videos);
    }

     function addquiz (){
        setboolquiz(false);
     }
     async function submitquiz(){
        addquestion(); 
        if(!(quizdata.answer1.length === 0 || quizdata.answer2.length === 0 || 
            quizdata.answer3.length === 0 || quizdata.answer4.length === 0 
            || quizdata.explaination.length === 0 || quizdata.correctanswer.length==0 || quizdata.title.length==0)){
        setboolquiz(true);
        const result = {questions : quiz};
        const res = await courseService.addQuiz(result);
        // setquizID(res._id);
        console.log(res);
        setquizdata({
            title: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            explaination: "",
            correctanswer: ""
        })
        setQuiz([]);
    }   
     }
    // function ImageUpload (){
    //     let Image = {img : image}
    //     images.push(Image)
    //     console.log(images);
    // }
    if(boolquiz){
    return (
        <React.Fragment>
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
                        <a href="homepage2"><img src="assets2/images/icon/logo.png" alt="logo"/></a>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                        <ul id="m_menu_active">
                                    <li><a href="homepage2">Home</a></li>
                                    <li class="active"><a href="about">About</a></li>
                                    <li><a href="newcourses">Courses</a></li>
                                    <li><a href="teachers">Teachers</a></li>
                                    <li><a href="blog">Blogs</a></li>
                                    <li ><a href="contact">Contact</a></li>
                                <li><a href='trainersidebar' class="avatar1"><img id='sidebar' src="r9.jpg" /></a></li>
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

    <div class="crumbs-area" >
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
                <h4 class="crumb-title"><span>Create</span> Course</h4>
            </div>
        </div>
    </div>

        <div className="containerr">
            <form id='Form1' style={styleForm1} className='formcourse'>
                <h3 className='createcourse'>Create Course</h3>
                <input className='createbuttom' type="text" placeholder='Email' required />
                <input className='createbuttom' type="password" placeholder='Password' required />
                <input className='createbuttom' type="text" placeholder='Email' required />
                <div className="btn-boox">
                    <button className='button2' type='button' onClick={()=>{Next1()}} id='Next1'>Next</button>
                </div>
            </form>

            <form id='Form2' style={styleForm2} className='formcourse'>
                <h3 className='createcourse'>Create Course</h3>
                <input className='createbuttom' type="text" placeholder='Email' required />
                <input className='createbuttom' type="password" placeholder='Password' required />
                <input className='createbuttom' type="text" placeholder='Email' required />
                <div className="btn-boox">
                    <button className='button2' type='button' onClick={()=>{Back1()}} id='Back1'>Back</button>
                    <button className='button2' type='button' onClick={()=>{Next2()}} id='Next2'>Next</button>
                </div>
            </form>

            <form id='Form3' style={styleForm3} className='formcourse'>
                <h3 className='createcourse'>Create Course</h3>
                <input className='createbuttom' type="text" placeholder='Email' required />
                <input className='createbuttom' type="password" placeholder='Password' required />
                <input className='createbuttom' type="text" placeholder='Email' required />
                <div className="btn-boox">
                    <button className='button2' type='button' onClick={()=>{Back2()}} id='Back2'>Back</button>
                    <button className='button2' type='button' onClick={()=>{Next3()}} id='Next3'>Next</button>
                </div>
            </form>

            <form id='Form4' style={styleForm4} className='formcourse'>
                <h3 className='createcourse'>Create Course</h3>
                <input className='createbuttom' type="text" placeholder='Email' required />
                <input className='createbuttom' type="password" placeholder='Password' required />
                <input className='createbuttom' type="text" placeholder='Email' required />
                <div className="btn-boox">
                    <button className='button2' type='button' onClick={()=>{Back3()}} id='Back3'>Back</button>
                    <button className='button2' type='button' id='Submit'>Submit</button>
                </div>
            </form>

            <div className="step-row">
                <div id="progress"></div>
                <div className="step-col"><small>Step 1</small></div>
                <div className="step-col"><small>Step 2</small></div>
                <div className="step-col"><small>Step 3</small></div>


            </div>

        </div>



            </React.Fragment>
    )
    }

}

export default Addcourse;