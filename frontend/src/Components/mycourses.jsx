import React,{useContext} from 'react'
import { useState } from 'react'
import courseService from '../courseContainer';
import "./editprofile.css"
import main from "../assets1/course.mp4";
import OwlCarousel from 'react-owl-carousel';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext,{AuthContextProvider} from '../context/AuthContext';

import { FormControl,Select,InputLabel,MenuItem, Divider} from "@mui/material";
import coun_curr_code from '../coun-curr-code';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
import CourseCard from './courseCard';
import axios from 'axios';


const drawerWidth = 240;

function Mycourses() {
    const {loggedIn,id,type,username,lastname,firstname,email}=useContext(AuthContext);
    const [myCourses,setMyCourses] = useState([]);
    const [inprogress,setinprogress] = useState([]);
    const [completed,setcompleted] = useState([]);
    const [choose,setchoose]=useState({all:true});
    const [ready, setReady] = useState(false);
    const [country, setCountry] = useState(false);
    const config = { headers: { "apikey": "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW" } };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    useEffect(()=>{
        const getCourses = async () => {
            const data = await courseService.getMyCourses(id);
            const c1 = await courseService.getInprogressCourses();
            const c2 = await courseService.getCompletedCourses();
            setMyCourses(data);
            setinprogress(c1);
            setcompleted(c2);
            setReady(true);

            console.log(data);
            console.log(c1);
            console.log(c2);
        }
        getCourses()
    },[country]);
    const handleCountry = async (e) => {
      let result = 1;
      const ConversionAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${e}&from=USD&amount=1`;
      const { data } = await axios.get(ConversionAPI, config);
      result = data.info.rate;
      localStorage.setItem("country", e);
      localStorage.setItem("rate", result);
      setCountry(!country);
  }


  return (
    <div>

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
                        <img src="/assets2/images/icon/logo.png" alt="logo"/>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                            <ul id="m_menu_active">
                            <li ><a href="/homepage2">Home</a></li>
                            <li ><a href="/newcourses">Courses</a></li>
                            <li><a href="/membership">MemberShip</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/event">Events</a></li>
                            <li ><a href="/contact">Contact</a></li>
                            <li><a href="/userprofile" class="avatar1"><img id='sidebar' src="r9.jpg" /></a>
                                <ul class="submenu mr-12">
                                    <li><a href="/userprofile" >View Profile</a><h1 class="fa fa-user dropdown" aria-hidden="true"></h1></li>
                                    <li class = "active"><a href="/mycourses">My Courses</a><i class="fa fa-book dropdown"></i></li>
                                    <li><a href="/settings">Settings</a><i class="fa fa-cog dropdown"></i></li>
                                    <li ><a href="/help">Help</a><h1 class="fa fa-question-circle dropdown"></h1></li>
                                    <li><a href="index3.html">Log Out</a><h1 class="fa fa-sign-out dropdown"></h1></li>
                                </ul>
                            </li>
                            <li >
                                <FormControl class= "mt-50 w-20 cc fa fa-globe" >
    <InputLabel class=""  ></InputLabel>
    <Select 
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={ (e) => {handleCountry(e.target.value) ; console.log("NAV " +e.target.value);} }
        >
        {coun_curr_code.map(country => <MenuItem key={country.country} value={country.currency_code}>{country.country}</MenuItem>)}
    </Select>
  </FormControl>
                            </li>
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

        <div class="crumbs-area">
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
                    <h4 class="crumb-title"><span>My Courses</span></h4>
                </div>
            </div>
        </div>
        
        <Box sx={{ width: '100%', bgcolor: 'background.red' }}>
            <Divider></Divider>
      <Tabs value={value} onChange={handleChange} centered>
        
        <Tab label="All Courses" />
        <Tab label="In Progress" />
        <Tab label="Completed" />
        
      </Tabs><Divider></Divider>
    </Box>

{
    ready && <React.Fragment>

        <div class="course-area  pt--120 pb--70 col-8">
        <div class="container">
            <div class="row">  
                { choose.all && 
                <React.Fragment>
                    {myCourses.map((course) => {
                            return (<React.Fragment>

                                <div class="col-lg-4 col-md-6">
                                <CourseCard course={course}></CourseCard>

                                </div>
                            </React.Fragment>)
                        })}


                </React.Fragment>
                }

{ choose.inprogress && 
                <React.Fragment>
                    {inprogress.map((course) => {
                            return (<React.Fragment>

                                <div class="col-lg-4 col-md-6">
                                    <CourseCard course={course}></CourseCard>
                                </div>
                            </React.Fragment>)
                        })}


                </React.Fragment>
                }

{ choose.completed && 
                <React.Fragment>
                    {completed.map((course) => {
                            return (<React.Fragment>

                                <div class="col-lg-4 col-md-6">
                                <CourseCard course={course}></CourseCard>

                                </div>
                            </React.Fragment>)
                        })}


                </React.Fragment>
                }
              
            </div>
        </div>
    </div>
    </React.Fragment>
}

{
    !ready && <React.Fragment>

<div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
        <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
    </div>

    </React.Fragment>
}
   
    </div>
  )
}

export default Mycourses