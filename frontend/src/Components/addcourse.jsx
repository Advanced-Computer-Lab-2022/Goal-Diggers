import React from 'react';
import courseService from '../courseContainer';
import { useState } from 'react';

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
                        <a href="index.html"><img src="assets2/images/icon/logo.png" alt="logo"/></a>
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
                <div class="col-xl-1 col-lg-2 col-sm-3">
                    <div class="hb-right">
                        <ul> 
                            <li class="search_btn"><i class="fa fa-search"></i></li>
                        </ul>
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

<div class="offset-search">
<form action="#">
    <input type="text" name="search" placeholder="Search here..."/>
    <button type="submit"><i class="fa fa-search"></i></button>
</form>
</div>

<div class="body_overlay"></div>

    <div class="crumbs-area">
        <div class="container">
            <div class="crumb-content">
                <h4 class="crumb-title"><span>Create</span> Course</h4>
            </div>
        </div>
    </div>
            {!done ? <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
                <div className='text-center p-2 my-2 bg-light' style={{ border: '1px solid black', borderRadius: '15px' }}>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e)} id="subject" value={data.subject} type="text" className="form-control" placeholder="Subject" />
                        <label htmlFor="floatingInput">Subject</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e)} id="titlee" value={data.titlee} type="text" className="form-control" placeholder="Title" />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e)} id="totalHours" value={data.totalHours} type="number" className="form-control" placeholder="Title" />
                        <label htmlFor="floatingInput">Course Hours</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e)} id="price" value={data.price} type="number" className="form-control" min={0} placeholder="Price" />
                        <label htmlFor="price">Price</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <textarea onChange={(e) => handle(e)} value={data.summaryy} name="summary" id="summaryy" className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Summry</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    {/* <label for="input" id='label'><input onChange={(e) => setimage(e.target.files[0])} type="file" name="cover" id="input" accept="image/*" />Upload Course Cover</label> */}
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e)} id="image" value={data.image} type="text" className="form-control" placeholder="image" />
                        <label htmlFor="img">Image Link</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handle(e) } id="overviewVideo" value={data.overviewVideo} type="text" className="form-control" placeholder="image" />
                        <label htmlFor="img">overviewVideo Link</label>
                    </div>
                    <div>
                        {texterror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3" />
                    <div className="form-floating mb-3">
                        <input onChange={(e) => { settitle(e.target.value) }} id="titleofsubtitle" value={titleofsubtitle} type="text" className="form-control" placeholder="Subtitle" />
                        <label htmlFor="floatingInput">Subtitle {subtitles.length + 1}</label>
                    </div>
                    <div>
                        {titleerror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => { setvideotitle(e.target.value) }} id="videotitle" value={videotitle} type="text" className="form-control" placeholder="Video Title" />
                        <label htmlFor="floatingInput">Video Title {videos.length + 1} for section {subtitles.length + 1}</label>
                    </div>
                    <div>
                        {videoerror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => { setvideo(e.target.value) }} id="video" value={video} type="text" className="form-control" placeholder="Video" />
                        <label htmlFor="floatingInput">Video Link</label>
                    </div>
                    <div>
                        {videoerror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <button className='btn btn-primary' onClick={() => addvideo()}>Add Video</button>
                    <br></br>
                    <br></br>
                    
                    <button className='btn btn-primary' onClick={(e) => addquiz()}>Add Quiz</button>
                    <div className="form-floating mb-3" />
                    <div className="form-floating mb-3">
                        <input onChange={(e) => { sethours(e.target.value) }} id="totalhours" value={totalhours} type="number" className="form-control" min={0} placeholder="Totalhours" />
                        <label htmlFor="price">Totalhours</label>
                    </div>
                    <div>
                        {titleerror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3">
                        <textarea onChange={(e) => { setsummary(e.target.value) }} id="summaryofsubtitle" value={summaryofsubtitle} className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea2">Summry of Subtitle</label>
                    </div>
                    <div>
                        {titleerror ? <label className="l1">You must fill it</label> : ""}
                        <div className="form-floating mb-3" />
                    </div>
                    <button className='btn btn-primary' onClick={() => addtitle()}>Add Subtitle</button>
                    <div className="form-floating mb-3" />
                    <div className="form-floating mb-3" />

                    <button className='btn btn-primary' onClick={(e) => submit()}>Create Course</button>
                </div>
            </div>
            
            <footer>
        <div class="footer-top has-color pt--120 pb--30">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="widget widget-company">
                            <img src="assets2/images/icon/logo.png" alt="image"/>
                            <div class="address">
                                <h6>OFFICE ADDRESS</h6>
                                <p>London Oxford Street, 012 United Kingdom.</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS PHONE</h6>
                                <p>+012 3456 7890</p>
                            </div>
                            <div class="address">
                                <h6>BUSINESS EMAIL</h6>
                                <p>Business@themerocket.net</p>
                            </div>
                            <ul class="social">
                                <li><a href="https://youtu.be/z4tOlwuHEZI"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://youtu.be/kXhBKjDKF84"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://youtu.be/BG9HSntowA8"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="https://youtu.be/aiRY36TPVo8"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget footer-link">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Footer Menu</h4> 
                            <ul>
                                <li><a href="whycc"><i class="fa fa-arrow-right"></i>Why Canadian Company</a></li>
                                <li><a href="about"><i class="fa fa-arrow-right"></i>About Us</a></li>
                                <li><a href="workwithus"><i class="fa fa-arrow-right"></i>Work with Us</a></li>
                                <li><a href="careers"><i class="fa fa-arrow-right"></i>Careers</a></li>
                                <li><a href="contact"><i class="fa fa-arrow-right"></i>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="widget widget-opening">
                            <h4 class="fwidget-title mb-5 pb-3 primary-color2">Working Day & time</h4>
                            <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                           <ul>
                                <li><span>Mon - Tus :</span>6.00 am - 10.00 pm</li>
                                <li><span>Wed - Tur :</span>8.00 am - 6.00 pm</li>
                                <li><span>Friday :</span>3.00 pm - 8.00 pm</li>
                                <li><span>Sunday :</span>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © 2022 <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">Edification</a> </span> - All Rights Reserved. Made by <span><a class="primary-color2" href="https://youtu.be/r6zIGXun57U" target="_blank">GoalDiggers</a></span></p>
                </div>
            </div>
        </div>
    </footer>
    <script src="assets2/js/vendor/jquery-2.2.4.min.js"></script>
    <script src="assets2/js/bootstrap.min.js"></script>
    <script src="assets2/js/owl.carousel.min.js"></script>
    <script src="assets2/js/jquery.magnific-popup.min.js"></script>
    <script src="assets2/js/jquery.slicknav.min.js"></script>
    <script src="assets2/js/plugins.js"></script>
    <script src="assets2/js/scripts.js"></script>
        </div>
        :(
            <React.Fragment>
                <h1>Course added successfully</h1>
                
            </React.Fragment>
        )
        }
        </React.Fragment>
    )
    }else{
        return(
        <div className="container">
            <div className="container" style={{ width: '800px' }}>
                <h3 className="text-center">Question {quiz.length + 1}</h3>
                {questionerror && <div className="alert alert-danger" >You must add querstion text , explanation , 4 options
                    and choose the correct one
                </div>}
                <div className="form-group">
                    <label htmlFor="QuestionText" style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Enter The Question text :-
                    </label>
                    <textarea onChange={(e) => handle1(e)} id="title" value={quizdata.title} className="form-control" aria-label="Text input with radio button" cols="30" rows="2"></textarea>
                </div>
                <div className="text-center">
                    <hr className="divider" />
                </div>
                <div className="text-center" style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>
                    Enter 4 options for the question and choose the correct one
                </div>
                <div className="input-group my-2">
                    <textarea placeholder='option 1' onChange={(e) => handle1(e)} id="answer1" value={quizdata.answer1} className="form-control" aria-label="Text input with radio button" cols="30"
                        rows="2"></textarea>
                </div>
                <div className="input-group my-2">
                    <textarea placeholder='option 2' onChange={(e) => handle1(e)} id="answer2" value={quizdata.answer2} className="form-control" aria-label="Text input with radio button" cols="30"
                        rows="2"></textarea>
                </div>
                <div className="input-group my-2">
                    <textarea placeholder='option 3' onChange={(e) => handle1(e)} id="answer3" value={quizdata.answer3} className="form-control" aria-label="Text input with radio button" cols="30"
                        rows="2"></textarea>
                </div>
                <div className="input-group my-2">
                    <textarea placeholder='option 4' onChange={(e) => handle1(e)} id="answer4" value={quizdata.answer4} className="form-control" aria-label="Text input with radio button" cols="30"
                        rows="2"></textarea>
                </div>
                <div className="text-center">
                    <hr className="divider" />
                </div>
                <div className="form-group">
                    <label htmlFor="QuestionText" style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Enter The  
                        correct choice number from 1 to 4
                        :-</label>
                    <input onChange={(e) => handle1(e)} id="correctanswer" min={1} max={4} type="number" value={quizdata.correctanswer} className="form-control" aria-label="Text input with radio button"
                        cols="30" rows="2"></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="QuestionText" style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>Enter The explanations
                        htmlFor the
                        correct choice
                        :-</label>
                    <textarea onChange={(e) => handle1(e)} id="explaination" value={quizdata.explaination} className="form-control" aria-label="Text input with radio button"
                        cols="30" rows="2"></textarea>
                </div>
                <div className="text-center"><button className="btn btn-primary" onClick={() => addquestion()} type="submit" style={{ borderRadius: '25px' }}>Go To next Question <i
                    className="fa fa-step-htmlForward" aria-hidden="true"></i></button></div>
                    <div className="form-floating mb-3" />
                <div className="text-center" ><button
                    className="btn btn-primary" style={{ borderRadius: '25px' }} onClick={() => submitquiz()}>Save the Quiz <i className="fa fa-floppy-o"
                        aria-hidden="true"></i></button></div>
            </div>
            
        </div>
    )
    }

}

export default Addcourse;