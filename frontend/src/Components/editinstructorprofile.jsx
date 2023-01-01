import React, { useContext } from "react";
import { useState } from "react";
import main from "../assets1/course.mp4";
import OwlCarousel from "react-owl-carousel";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext, { AuthContextProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Changepassword from "./changepassword";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Divider,
} from "@mui/material";
import coun_curr_code from "../coun-curr-code";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
import "./temp1.css";
import axios from "axios";
import swal from "sweetalert";

import courseService from "../courseContainer";

function Editinstructorprofile(handleCountry) {
  const [email, setemail] = useState("");
  const [minibiography, setminibiography] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [minibiographyerror, setminibiographyerror] = useState("");
  
  const [myCourses, setMyCourses] = useState({ myCourses: false });
  const [editprofile, seteditprofile] = useState(true);
  const [changepassword, setchangepassword] = useState(false);
  const navigate = useNavigate();


  const [data, setdata] = useState({
    email: "",
    minibiography: "",
  });

  async function submit() {
    //e.preventdefault(e);
    if (data.email.length === 0) {
      setemailerror(true);
    } else {
      setemailerror(false);
    }
    if (data.minibiography.length === 0) {
      setminibiographyerror(true);
    } else {
      setminibiographyerror(false);
    }
    if (data.minibiography.length !== 0 || data.email.length !== 0) {
      swal({
        title: "Do you want to save the changes?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          swal("your mini biography has been updated", {
            icon: "success",
          });
        }
        const res = await courseService.changeEmailorBiography(
          "638cbacd72d0b673c0e33e9a",
          data
        );
      });
    }
  }
  const handleChange = (e, type) => {
    let temp = { ...data };
    temp[type] = e.target.value;
    if (type === "minibiography") setminibiographyerror(false);
    if (type === "minibiography") setemailerror(false);
    setdata(temp);
  };
  const [value, setValue] = React.useState(0);

  const handlechange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <header id="header">
        <div class="header-top">
          <div class="container">
            <div class="row d-flex flex-center">
              <div class="col-sm-8">
                <div class="ht-address">
                  <ul>
                    <li>
                      <i class="fa fa-phone"></i>Phone: +201001004070
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>Email: info@cancham.org.eg
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="ht-social">
                  <ul>
                    <li>
                      <a href="https://youtu.be/z4tOlwuHEZI">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/kXhBKjDKF84">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/BG9HSntowA8">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/aiRY36TPVo8">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
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
                    <img src="/assets2/images/icon/logo.png" alt="logo" />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                  <div class="main-menu">
                    <nav>
                      <ul id="m_menu_active">
                        <li>
                          <a href="/homepage2">Home</a>
                        </li>
                        <li>
                          <a href="/newcourses">Courses</a>
                        </li>
                        <li>
                          <a href="/membership">MemberShip</a>
                        </li>
                        <li>
                          <a href="/blog">Blogs</a>
                        </li>
                        <li>
                          <a href="/event">Events</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/userprofile" class="avatar1">
                            <img id="sidebar" src="r9.jpg" />
                          </a>
                          <ul class="submenu mr-12">
                            <li>
                              <a href="/userprofile">View Profile</a>
                              <h1
                                class="fa fa-user dropdown"
                                aria-hidden="true"
                              ></h1>
                            </li>
                            <li class="active">
                              <a href="/mycourses">My Courses</a>
                              <i class="fa fa-book dropdown"></i>
                            </li>
                            <li>
                              <a href="/settings">Settings</a>
                              <i class="fa fa-cog dropdown"></i>
                            </li>
                            <li>
                              <a href="/help">Help</a>
                              <h1 class="fa fa-question-circle dropdown"></h1>
                            </li>
                            <li>
                              <a href="index3.html">Log Out</a>
                              <h1 class="fa fa-sign-out dropdown"></h1>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <FormControl class="mt-50 w-20 cc fa fa-globe">
                            <InputLabel class=""></InputLabel>
                            <Select
                              defaultValue=""
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              onChange={(e) => {
                                handleCountry(e.target.value);
                                console.log("NAV " + e.target.value);
                              }}
                            >
                              {coun_curr_code.map((country) => (
                                <MenuItem
                                  key={country.country}
                                  value={country.currency_code}
                                >
                                  {country.country}
                                </MenuItem>
                              ))}
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
                <input
                  type="text"
                  name="keyword"
                  placeholder="Search For Courses"
                  class="field"
                />
                <div class="icons-container">
                  <div class="icon-search"></div>
                  <div class="icon-close">
                    <div class="x-up"></div>
                    <div class="x-down"></div>
                  </div>
                </div>
              </form>
            </fieldset>
            <h4 class="crumb-title">
              <span>My Courses</span>
            </h4>
          </div>
        </div>
      </div>

      <Box sx={{ width: "100%", bgcolor: "background.red" }}>
        <Divider></Divider>
        <Tabs value={value} onChange={handlechange} centered>
          <Tab
            label="Edit Profile"
            onClick={() => navigate("/editinstructorprofile")}
          />
          <Tab
            label="Change Password"
            onClick={() => navigate("/changepassword")}
          />
        </Tabs>
        <Divider></Divider>
      </Box>

      <div className="wrapper">
        <div className="sidebar">
          <div className="profile2">
            <img src="./r9.jpg" alt="profile_picture" />
            <h3>Mahmoud Yassen</h3>
            <p>Software Developer</p>
            <p>Your wallet is 0$</p>
          </div>
          <ul>
            <li>
              <a href="/mycourses">
                <span className="icon">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
                <span className="item">My Courses</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </span>
                <span className="item">Refund</span>
              </a>
            </li>
            <li>
              <a href="/editinstructorprofile">
                <span className="icon">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                </span>
                <span className="item">Settings</span>
              </a>
            </li>
            <li>
              <a href="/policy&privacy">
                <span className="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <span className="item">Privacy&Policy</span>
              </a>
            </li>
            <li>
              <a href="/help">
                <span className="icon">
                  <i class="fa fa-question-circle" aria-hidden="true"></i>
                </span>
                <span className="item">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <span className="item">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="addUserContainer">
          <div className="posi ip">
            <input
              id="username"
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
              className="gzz"
              type="text"
              required
            ></input>
            <span className="w8">Email</span>
          </div>
          <div className="form-floating mb-3" />

          <div>
            {emailerror ? <label className="l1">You must fill it</label> : ""}
            <div className="form-floating mb-3" />
          </div>

          <div className="form-floating mb-3" />

          <div className="posi ip">
            <textarea
              onChange={(e) => handleChange(e, "minibiography")}
              value={data.minibiography}
              id="password"
              className="gzz"
              type="text"
              required
            ></textarea>
            <span className="w8">MiniBiography</span>
          </div>
          <div className="form-floating mb-3" />
          <div>
            {minibiographyerror ? (
              <label className="l1">You must fill it</label>
            ) : (
              ""
            )}
            <div className="form-floating mb-3" />
          </div>
          <div className="form-floating mb-3" />

          <div className="login-box posi">
            <form>
              <a href="#" onClick={() => submit()}>
                Save Changes
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </form>
          </div>
          <div className="form-floating mb-3" />
        </div>
      </div>
    </div>
  );
}
export default Editinstructorprofile;
