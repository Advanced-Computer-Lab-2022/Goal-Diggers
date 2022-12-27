import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseService from '../courseContainer';
import ReactLoading from 'react-loading';
import AuthContext, { AuthContextProvider } from"../context/AuthContext";


const Certificate = () => {
    const {loggedIn,lastname,username ,email,firstname}=useContext(AuthContext);
    console.log(username);
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({});
    const [Nusername, setusername] = useState(username);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getCourse = async ()=>{
            let usernameT = username; 
            if (firstname && lastname)
                usernameT = firstname + " " + lastname;
            setusername(usernameT);
            const res = await courseService.getRegisteredCourse(id);
            if(res.totalItems > res.completedVideos.length + res.completedQuizs) {
                navigate('/not-found');
            }
            setCourse(res);
            setReady(true);
        }
        getCourse();
    }, [])
    const download = async()=>{
        setLoading(true);
        await courseService.createAndDownloadCertificate(course.title, Nusername ,course.createdByName);
        setLoading(false);
    }
    return ( 
        <React.Fragment>
            {ready && <React.Fragment>
                <div className="row mt-2">
                    <div className="col-sm-4" >
                        <div className="pt-5 mb-5" style={{  display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                            <img src="../confetti.png" alt="" width={'200px'}/>
                        </div>
                        <div className="pt-5" style={{  display: 'flex',justifyContent: 'center',alignItems: 'center',height:'100'}}>
                            <button className='btn btn-dark' style={{borderRadius : '25px'}} onClick={()=>{download()}}>Download <i className="fa fa-download" aria-hidden="true"></i></button>
                            <button className='btn btn-info mx-2' style={{borderRadius : '25px'}}>Send Via Email <i className="fa fa-envelope-o" aria-hidden="true"></i></button>
                            {loading && <ReactLoading type={"bars"} color={'lightgreen'} width={'40px'}/>}
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div id='html' className='text-center'>
                        <div id='body'>
                            <div class="containerCER">
                                <div class="logo">
                                    <img src="../logo.png" width={'300px'} alt="" />
                                </div>

                                <div class="marquee">
                                    Certificate of Completion
                                </div>

                                <div class="assignment">
                                    This certificate is presented to
                                </div>

                                <div class="person">
                                    {Nusername}
                                </div>

                                <div class="reason">
                                    for completing {course.title} Course <br/>
                                    given by instructor : {course.createdByName} 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </React.Fragment>    
            }

            {!ready && 
                <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
                    <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
                </div>
            }
        </React.Fragment>
     );
}
 
export default Certificate;