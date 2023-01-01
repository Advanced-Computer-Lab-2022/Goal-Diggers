import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Adduser from "./adduser";
import CoursesRequests from "./coursesRequests";
import Problems from "./problems";
import RefundRequests from "./refundRequests";
// import RefundRequests from './refundRequests';
import SetPromotions from "./setPromotions";
import AuthContext, { AuthContextProvider } from "../context/AuthContext";

const AdminView = () => {
  const [status, setStatus] = useState("");
  const [view, setView] = useState({ adduser: true });
  const [aUser, setAUser] = useState({ aUser: false });
  const [problemsP, setProblemP] = useState(false);
  const [problemsR, setProblemR] = useState(false);
  const [problemsU, setProblemU] = useState(false);
  const [courseRequest, setCourseRequest] = useState({ courseRequest: false });
  const [refund, setRefund] = useState(false);
  const [addPromotions, setAddPromotions] = useState({ addPromotions: false });
  const chooseItem = (item) => {
    if (["pending", "approved", "rejected"].includes(item)) {
      setView({ requests: true });
      setStatus(item);
    }
    if (["pendingpro", "resolved", "unseen"].includes(item)) {
      setView({ problems: true });
      setStatus(item);
    } else if (item === "add promotion") setView({ addpromo: true });
    else if (item === "add user") setView({ adduser: true });
    else if (item === "refund") setView({ refund: true });
  };
  function showAddUser() {
    setAUser(true);
    setProblemP(false);
    setProblemU(false);
    setProblemR(false);
    setCourseRequest(false);
    setAddPromotions(false);
    setRefund(false);
  }
  function problemP() {
    setProblemP(true);
    setProblemU(false);
    setProblemR(false);
    setAUser(false);
    setCourseRequest(false);
    setAddPromotions(false);
    setRefund(false);
  }
  function problemR() {
    setProblemP(false);
    setProblemU(false);
    setProblemR(true);
    setAUser(false);
    setCourseRequest(false);
    setAddPromotions(false);
    setRefund(false);
  }
  function problemU() {
    setProblemP(false);
    setProblemU(true);
    setProblemR(false);
    setAUser(false);
    setCourseRequest(false);
    setAddPromotions(false);
    setRefund(false);
  }
  function handelCourseRequest() {
    setProblemP(false);
    setProblemU(false);
    setProblemR(false);
    console.log("SDds");
    setCourseRequest(true);
    setAUser(false);
    setAddPromotions(false);
    setRefund(false);
  }
  function handlePromotions() {
    setProblemP(false);
    setProblemU(false);
    setProblemR(false);
    setAddPromotions(true);
    setAUser(false);
    setCourseRequest(false);
    setRefund(false);
  }
  function refundReq() {
    setProblemP(false);
    setProblemU(false);
    setProblemR(false);
    setAddPromotions(false);
    setRefund(true);
    setAUser(false);
    setCourseRequest(false);
  }
  return (
    <React.Fragment>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row d-flex flex-center">
              <div className="col-sm-8">
                <div className="ht-address">
                  <ul>
                    <li>
                      <i className="fa fa-phone"></i>Phone: +201001004070
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>Email:
                      info@cancham.org.eg
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="ht-social">
                  <ul>
                    <li>
                      <a href="https://youtu.be/z4tOlwuHEZI">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/kXhBKjDKF84">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/BG9HSntowA8">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/aiRY36TPVo8">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom-inner">
              <div className="row align-items-center">
                <div className="col-lg-3 col-sm-9">
                  <div className="logo">
                    <img src="/assets2/images/icon/logo.png" alt="logo" />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-none d-lg-block">
                  <div className="main-menu">
                    <nav>
                      <ul id="m_menu_active">
                        <li className="active">
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">
                            <img className="avatar1" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/changepasswordadmin" className="active">Change Password</a>
                              <h1
                                class="fa fa-unlock-alt dropdown"
                                aria-hidden="true"
                              ></h1>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-12 d-block d-lg-none">
                  <div id="mobile_menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="body_overlay"></div>

      <div class="crumbs-area">
        <div class="container">
          <div class="crumb-content">
            <h4 class="crumb-title">
              <span>Admin</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile2">
            <img className="avatar3" />
            <h3>Admin</h3>
          </div>
          <ul>
            <li>
              <a onClick={showAddUser}>
                <span className="icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
                <span className="item">Add User</span>
              </a>
            </li>
            <li>
              <a onClick={handelCourseRequest}>
                <span className="icon">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
                <span className="item">Course Request</span>
              </a>
            </li>
            <li>
              <a onClick={handlePromotions}>
                <span className="icon">
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </span>
                <span className="item">Set Promotions</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  refundReq();
                }}
              >
                <span className="icon">
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </span>
                <span className="item">Refund Request</span>
              </a>
            </li>
            <li>
              <a onClick={problemP}>
                <span className="icon">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span className="item">Problems Pending</span>
              </a>
            </li>
            <li>
              <a onClick={problemU}>
                <span className="icon">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span className="item">Problems Unseen</span>
              </a>
            </li>
            <li>
              <a onClick={problemR}>
                <span className="icon">
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span className="item">Problems Resolved</span>
              </a>
            </li>
          </ul>
        </div>
        {addPromotions == true && (
          <>
            <div className="poo">
              <SetPromotions />
            </div>
          </>
        )}
        {aUser == true && (
          <>
            <div className="po">
              <Adduser />
            </div>
          </>
        )}
        {courseRequest == true && (
          <>
            <div className="po">
              <CoursesRequests />
            </div>
          </>
        )}
        {problemsP == true && (
          <>
            <div className="po">
              <Problems status={"pending"} />
            </div>
          </>
        )}
        {problemsR == true && (
          <>
            <div className="po">
              <Problems status={"resolved"} />
            </div>
          </>
        )}
        {refund == true && (
          <>
            <div className="po">
              <RefundRequests />
            </div>
          </>
        )}
        {problemsU == true && (
          <>
            <div className="po">
              <Problems status={"unseen"} />
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdminView;
