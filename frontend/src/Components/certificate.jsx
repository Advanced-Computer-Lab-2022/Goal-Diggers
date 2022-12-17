import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseService from '../courseContainer';
import ReactLoading from 'react-loading';


const Certificate = () => {
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getCourse = async ()=>{
            const res = await courseService.getRegisteredCourse(id);
            // if(res.totalItems > res.completedVideos.length + res.completedQuizs) {
            //     navigate('/not-found');
            // }
            setCourse(res);
            setReady(true);
        }
        getCourse();
    }, [])
    const download = async()=>{
        setLoading(true);
        await courseService.createAndDownloadCertificate(course.title, course.createdByName);
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
                                    An Organization
                                </div>

                                <div class="marquee">
                                    Certificate of Completion
                                </div>

                                <div class="assignment">
                                    This certificate is presented to
                                </div>

                                <div class="person">
                                    {'Mahmoud Sayed'}
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
            }
        </React.Fragment>
     );
}
 
export default Certificate;