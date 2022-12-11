import React, { useState }  from 'react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Navigation} from 'react-minimal-side-navigation';
import Changepassword from './changepassword';
import StudentProfile from './studentProfile';
import InprogressCourses from './inprogress';
import CompletedCourses from './completed';

const ProfileView = () => {
    const [view, setView] = useState({profile : true});

    const chooseItem = (item) => {
        if(item === 'profile') 
            setView({profile : true});
        else if(item === 'progress') 
            setView({inprogress:true});
        else if(item === 'completed') 
            setView({completed : true});
        else if(item === 'password') 
            setView({changepassword : true,});
        else if(item === 'information') 
            setView({changeinfo : true});
        else if(item === 'card') 
            setView({pcard : true});
    };
    return ( 
        <React.Fragment>
        <div className="row mt-3">
            <div className="col-sm-1"></div>
            <div className="col-sm-3 text-center">
                <img src="./user.png" width={'80px'} style={{borderRadius:'30px'}} alt="" />
                <h6 className='m-2'>Mahmoud Sayed</h6>
                <Navigation
                    activeItemId={"profile"}
                    onSelect={({itemId}) => {
                        chooseItem(itemId);
                    }}
                    items={[
                        {title : "Profile",
                        itemId : "profile"
                        },
                        {title : "My Courses",
                        subNav : [
                            {title : "In Progress",
                            itemId : "progress",
                            },
                            {title : "Completed",
                            itemId : "completed",
                            }
                        ],
                        itemId : "My Courses"
                        },
                        {title : "Settings",
                        subNav : [
                            {title : "Change my Password",
                            itemId : "password",
                            },
                            {title : "Change my Information",
                            itemId : "information",
                            },
                        ]
                        },
                        {title : "Manage my cards",
                        itemId : "card"
                        },
                    ]}
                />
            </div>
            <div className="col-sm-7 text-center">
                {view.changepassword && <Changepassword />}
                {view.profile && <StudentProfile />}
                {view.inprogress && <InprogressCourses />}
                {view.completed && <CompletedCourses />}
            </div>
            <div className="col-sm-1"></div>
        </div>
    </React.Fragment>
     );
}
 
export default ProfileView;