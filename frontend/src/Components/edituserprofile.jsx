import React, { useContext } from "react";
import { useState } from "react";
import courseService from "../courseContainer";
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
import CourseCard from "./courseCard";
import axios from "axios";
import swal from "sweetalert";
import Logout from "./Auth/LogoutBtn";


function Edituserprofile(handleCountry) {
  const [firstnamenerror, setfirstnameerror] = useState("");
  const [lastnamenerror, setlastnameerror] = useState("");
  const [descriptionenerror, setdescriptionerror] = useState("");
  const [myCourses, setMyCourses] = useState({ myCourses: false });
  const [editprofile, seteditprofile] = useState(true);
  const [changepassword, setchangepassword] = useState({changepassword : false});
  const [policy, setpolicy] = useState({policy : false});
  const [help, sethelp] = useState({help:false});

  const navigate = useNavigate();
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    description: "",
  });

  async function submit() {
    //e.preventdefault(e);
    if (data.firstname.length === 0) {
      setfirstnameerror(true);
    } else {
      setfirstnameerror(false);
    }
    if (data.lastname.length === 0) {
      setlastnameerror(true);
    } else {
      setlastnameerror(false);
    }
    if (data.description.length === 0) {
      setdescriptionerror(true);
    } else {
      setdescriptionerror(false);
    }
    if (
      data.firstname.length !== 0 &&
      data.lastname.length !== 0 &&
      data.description.length !== 0
    ) {
      swal({
        title: "Do you want to save the changes?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("your profile has been updated", {
            icon: "success",
          });
        }
      });
    }
  }
  const handleChange = (e, type) => {
    let temp = { ...data };
    temp[type] = e.target.value;
    if (type === "firstname") setfirstnameerror(false);
    if (type === "lastname") setlastnameerror(false);
    if (type === "description") setdescriptionerror(false);
    setdata(temp);
  };
  const [value, setValue] = React.useState(0);

  
  const handlechange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      

      <Box sx={{ width: "100%", bgcolor: "background.red" }}>
        <Divider></Divider>
        <Tabs value={value} onChange={handlechange} centered>
          <Tab
            label="Edit Profile"
            onClick={() => navigate("/edituserprofile")}
          />
          <Tab
            label="Change Password"
            onClick={() => navigate("/changepassword")}
          />
        </Tabs>

        <Divider></Divider>
      </Box>

      <div className="wrapper">
        
            <div className="addUserContainer">
              <div className="posi ip">
                <input
                  id="username"
                  onChange={(e) => handleChange(e, "firstname")}
                  value={data.username}
                  className="gzz"
                  type="text"
                  required
                ></input>
                <span className="w8">First name</span>
              </div>
              <div className="form-floating mb-3" />

              <div>
                {firstnamenerror ? (
                  <label className="l1">You must fill it</label>
                ) : (
                  ""
                )}
                <div className="form-floating mb-3" />
              </div>

              <div className="posi ip">
                <input
                  onChange={(e) => handleChange(e, "lastname")}
                  value={data.password}
                  id="password"
                  className="gzz"
                  type="text"
                  required
                ></input>
                <span className="w8">Last name</span>
              </div>
              <div className="form-floating mb-3" />
              <div>
                {lastnamenerror ? (
                  <label className="l1">You must fill it</label>
                ) : (
                  ""
                )}
                <div className="form-floating mb-3" />
              </div>

              <div className="form-floating mb-3" />

              <div className="posi ip">
                <textarea
                  onChange={(e) => handleChange(e, "description")}
                  value={data.password}
                  id="password"
                  className="gzz"
                  type="text"
                  required
                ></textarea>
                <span className="w8">Description</span>
              </div>
              <div className="form-floating mb-3" />
              <div>
                {descriptionenerror ? (
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
    </React.Fragment>
  );
}
export default Edituserprofile;
