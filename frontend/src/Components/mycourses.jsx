import React, { useContext } from "react";
import { useState } from "react";
import courseService from "../courseContainer";
import "./editprofile.css";
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
import Edituserprofile from "./edituserprofile";
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
import CourseCard from "./courseCard";
import axios from "axios";
import Logout from "./Auth/LogoutBtn";

const drawerWidth = 240;

function Mycourses() {
  const { loggedIn, id, type, username, lastname, firstname, email } =
    useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);
  const [inprogress, setinprogress] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [choose, setchoose] = useState({ all: true });
  const [ready, setReady] = useState(false);
  const [country, setCountry] = useState(false);
  const config = { headers: { apikey: "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW" } };

  const [value, setValue] = React.useState("all");



  useEffect(() => {
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
    };
    getCourses();
  }, [country]);
  const handleCountry = async (e) => {
    let result = 1;
    const ConversionAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${e}&from=USD&amount=1`;
    const { data } = await axios.get(ConversionAPI, config);
    result = data.info.rate;
    localStorage.setItem("country", e);
    localStorage.setItem("rate", result);
    setCountry(!country);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div>

      <Box sx={{ width: "100%", bgcolor: "background.red" }}>
        <Divider></Divider>
        <Tabs value={value} centered>
          <Tab
            label="All Courses"
            value="all"
            onClick={() => setValue("all")}
          />
          <Tab
            label="In Progress"
            value="inProgress"
            onClick={() => setValue("inProgress")}
          />
          <Tab
            label="Completed"
            value="completed"
            onClick={() => setValue("completed")}
          />
        </Tabs>
        <Divider></Divider>
      </Box>

      

      {ready && (
        <React.Fragment>
          <div class="course-area  pt--120 pb--70 col-8">
            <div class="container">
              <div class="row">
                {value === "all" && (
                  <React.Fragment>
                    {myCourses.map((course) => {
                      return (
                        <React.Fragment>
                          <div class="col-lg-4 col-md-6">
                            <CourseCard course={course}></CourseCard>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                )}

                {value === "inProgress" && (
                  <React.Fragment>
                    {inprogress.map((course) => {
                      return (
                        <React.Fragment>
                          <div class="col-lg-4 col-md-6">
                            <CourseCard course={course}></CourseCard>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                )}

                {value === "completed" && (
                  <React.Fragment>
                    {completed.map((course) => {
                      return (
                        <React.Fragment>
                          <div class="col-lg-4 col-md-6">
                            <CourseCard course={course}></CourseCard>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}

      {!ready && (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <ReactLoading
              type={"bars"}
              color={"#a00407"}
              height={"5%"}
              width={"5%"}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Mycourses;
