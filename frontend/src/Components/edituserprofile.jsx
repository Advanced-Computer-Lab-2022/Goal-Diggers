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
  const [oldpassworderror, setoldpassworderror] = useState("");
  const [newpassworderror, setnewpassworderror] = useState("");
  const [confirmnewpassworderror, setconfirmnewpassworderror] = useState("");
  const [repeaterror, setrepeaterror] = useState("");
  const [matcherror, setmatcherror] = useState("");

  const navigate = useNavigate();
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    description: "",
  });



  const [data3, setdata3] = useState({
    oldpassword: "",
    newpassword: "",
    confirmnewpassword: "",
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
  

  

  async function submit2() {
    //e.preventdefault(e);
    if (data.oldpassword.length === 0) {
      setoldpassworderror(true);
    } else {
      setoldpassworderror(false);
    }
    if (data.newpassword.length === 0) {
      setnewpassworderror(true);
    } else {
      setnewpassworderror(false);
    }
    if (data.confirmnewpassword.length === 0) {
      setconfirmnewpassworderror(true);
    } else {
      setconfirmnewpassworderror(false);
    }
    if (
      data.oldpassword.length !== 0 &&
      data.newpassword.length !== 0 &&
      data.confirmnewpassword.length !== 0
    ) {
      if (data.oldpassword === data.newpassword) {
        setrepeaterror(true);
      } else {
        setrepeaterror(false);
      }
      if (data.newpassword !== data.confirmnewpassword) {
        setmatcherror(true);
      } else {
        setmatcherror(false);
      }
      if (
        data.newpassword === data.confirmnewpassword &&
        data.oldpassword !== data.newpassword
      ) {
        swal({
          title: "Do you want to update your password?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Your password has been updated", {
              icon: "success",
            });
          }
        });
      }
    }
  }
  const handleChange2 = (e, type) => {
    let temp = { ...data };
    temp[type] = e.target.value;
    if (type === "oldpassowrd") setoldpassworderror(false);
    if (type === "newpassowrd") setnewpassworderror(false);
    if (type === "confirmnewpassword") setconfirmnewpassworderror(false);
    setdata(temp);
  };

    const [value, setValue] = React.useState("eprofile");

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.red" }}>
        <Divider></Divider>
        <Tabs value={value} centered>
          <Tab
            label="Edit Profile"
            value="eprofile"
            onClick={() => setValue("eprofile")}
          />
          <Tab
            label="Change Password"
            value="cpassword"
            onClick={() => setValue("cpassword")}
          />
        </Tabs>
        <Divider></Divider>
      </Box>
      <React.Fragment>
        
              {value === "eprofile" && (
                <React.Fragment>
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
                </React.Fragment>
              )}

              {value === "cpassword" && (
                <React.Fragment>
                  <div className="addUserContainer">
                    <div className="posi ip">
                      <input
                        onChange={(e) => handleChange2(e, "oldpassword")}
                        value={data3.password}
                        id="password"
                        className="gzz"
                        type="password"
                        required
                      ></input>
                      <span className="w8">Old Password</span>
                    </div>
                    <div className="form-floating mb-3" />
                    <div>
                      {oldpassworderror ? (
                        <label className="l1">Password is not correct</label>
                      ) : (
                        ""
                      )}
                      <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3" />

                    <div className="posi ip">
                      <input
                        onChange={(e) => handleChange2(e, "newpassword")}
                        value={data3.password}
                        id="password"
                        className="gzz"
                        type="password"
                        required
                      ></input>
                      <span className="w8">New Password</span>
                    </div>
                    <div className="form-floating mb-3" />
                    <div>
                      {newpassworderror ? (
                        <label className="l1">You must fill it</label>
                      ) : (
                        ""
                      )}
                      <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3" />
                    <div>
                      {repeaterror ? (
                        <label className="l1">
                          Please enter a different password
                        </label>
                      ) : (
                        ""
                      )}
                      <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3" />

                    <div className="posi ip">
                      <input
                        onChange={(e) => handleChange2(e, "confirmnewpassword")}
                        value={data3.password}
                        id="password"
                        className="gzz"
                        type="password"
                        required
                      ></input>
                      <span className="w8">Confirm new Password</span>
                    </div>
                    <div className="form-floating mb-3" />
                    <div>
                      {confirmnewpassworderror ? (
                        <label className="l1">You must fill it</label>
                      ) : (
                        ""
                      )}
                      <div className="form-floating mb-3" />
                    </div>
                    <div>
                      {matcherror ? (
                        <label className="l1">Two passwords do not match</label>
                      ) : (
                        ""
                      )}
                      <div className="form-floating mb-3" />
                    </div>
                    <div className="form-floating mb-3" />

                    <div className="login-box posi">
                      <form>
                        <a href="#" onClick={() => submit2()}>
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
                </React.Fragment>
              )}
            
      </React.Fragment>
      </div>
  );
}
export default Edituserprofile;
