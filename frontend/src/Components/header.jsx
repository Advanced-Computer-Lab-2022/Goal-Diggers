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

function Header({handleCountry}) { 
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
                            <li class="active"><a href="/homepage2">Home</a></li>
                            <li><a href="newcourses">Courses</a></li>
                            <li><a href="membership">MemberShip</a></li>
                            <li><a href="blog">Blogs</a></li>
                            <li><a href="event">Events</a></li>
                            <li ><a href="contact">Contact</a></li>
                            <li><a href="userprofile" class="avatar1"><img id='sidebar' src="r9.jpg" /></a>
                                <ul class="submenu mr-12">
                                    <li><a href="userprofile" >View Profile</a><h1 class="fa fa-user dropdown" aria-hidden="true"></h1></li>
                                    <li><a href="mycourses">My Courses</a><i class="fa fa-book dropdown"></i></li>
                                    <li><a href="settings">Settings</a><i class="fa fa-cog dropdown"></i></li>
                                    <li><a href="help">Help</a><h1 class="fa fa-question-circle dropdown"></h1></li>
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
                <div class="col-xl-1 col-lg-2 col-sm-3">
                    <div class="hb-right">
                        <ul> 
                            <li class="search_btn ml-5"><i class="fa fa-search"></i></li>
                            
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
        </div>
    )
}

export default Header;
