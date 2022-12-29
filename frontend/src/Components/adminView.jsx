import React, { useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Adduser from './adduser';
import CoursesRequests from './coursesRequests';
import Problems from './problems';
// import RefundRequests from './refundRequests';
import SetPromotions from './setPromotions';
const AdminView = () => {
    const [status, setStatus] = useState(''); 
    const [view, setView] = useState({adduser : true});
    const chooseItem = (item) => {
        if(['pending','approved','rejected'].includes(item)){
            setView({requests:true});
            setStatus(item);
        }
        if(['pendingpro','resolved','unseen'].includes(item)){
            setView({problems:true});
            setStatus(item);
        }
        else if (item === 'add promotion') 
            setView({addpromo :true});
        else if (item === 'add user') 
            setView({adduser : true});
        else if (item === 'refund') 
            setView({refund : true});
    }   
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
                        <img src="/assets2/images/icon/logo.png" alt="logo"/>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                            <ul id="m_menu_active">
                            <li class="active"><a href="/homepage2">Home</a></li>
                            <li><a href="/newcourses">Courses</a></li>
                            <li><a href="/membership">MemberShip</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/event">Events</a></li>
                            <li ><a href="/contact">Contact</a></li>
                            <li><a href="/userprofile" class="avatar1"><img id='sidebar' src="/r9.jpg" /></a>
                                <ul class="submenu mr-12">
                                    <li><a href="/userprofile" >View Profile</a><h1 class="fa fa-user dropdown" aria-hidden="true"></h1></li>
                                    <li><a href="/mycourses">My Courses</a><i class="fa fa-book dropdown"></i></li>
                                    <li><a href="/settings">Settings</a><i class="fa fa-cog dropdown"></i></li>
                                    <li><a href="/help">Help</a><h1 class="fa fa-question-circle dropdown"></h1></li>
                                    <li><a href="/index3.html">Log Out</a><h1 class="fa fa-sign-out dropdown"></h1></li>
                                </ul>
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
                <h4 class="crumb-title"><span>Admin</span></h4>
                
            </div>
        </div>
    </div>
            <div className="row mt-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-3 text-center">
                    <img src="./admin.png" width={'80px'} style={{borderRadius:'30px'}} alt="" />
                    <h6 className='m-2'>Mahmoud Sayed</h6>
                    <Navigation
                        activeItemId={"add user"}
                        onSelect={({itemId}) => {
                            chooseItem(itemId);
                        }}
                        items={[
                            {title : "Add User",
                            itemId : "add user"
                            },
                            {title : "Add Promotion",
                            itemId : "add promotion"
                            },
                            {title : "Refund Requests",
                            itemId : "refund"
                            },
                            {title : "Courses Requests",
                            itemId : "requests",
                            subNav : [
                                {title : "Pending Requests",
                                itemId : "pending",
                                },
                                {title : "Approved Requests",
                                itemId : "approved",
                                },
                                {title : "Rejected Requests",
                                itemId : "rejected",
                                },
                            ]
                            },
                            {title : "Courses Problems",
                            subNav : [
                                {title : "Unseen problems",
                                itemId : "unseen",
                                },
                                {title : "Pending problems",
                                itemId : "pendingpro",
                                },
                                {title : "Resolved problems",
                                itemId : "resolved",
                                },
                            ]
                            },
                        ]}
                    />
                </div>
                <div className="col-sm-7 text-center">
                    {view.requests && <CoursesRequests status={status}/>}
                    {view.problems && <Problems status={status}/>}
                    {view.addpromo && <SetPromotions role={'admin'}/> }
                    {view.adduser && <Adduser /> }
                    {/* {view.refund && <RefundRequests /> } */}
                </div>
                <div className="col-sm-1"></div>
            </div>
        </React.Fragment>
     );
}
 
export default AdminView;