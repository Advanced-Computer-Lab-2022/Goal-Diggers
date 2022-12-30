import React, { useContext, useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Changepassword from './changepassword';
import Createcourse from './createcourse';
import StudentProfile from './studentProfile';
import Wallet from './wallet';
import Reviewsoninstructor from './reviewsoninstructor';
import Editinstructorprofile from './editinstructorprofile';
import AuthContext, { AuthContextProvider } from"../context/AuthContext";
import SetPromotions from './setPromotions';

const InstructorView = () => {
    const [view, setView] = useState({profile : true,});
    const {loggedIn,id,username}=useContext(AuthContext);
    const chooseItem = (item) => {
        if(item === 'profile') 
            setView({profile : true});
        else if(item === 'password') 
            setView({changepassword : true,});
        else if(item === 'information') 
            setView({changeinfo : true});
        else if(item === 'earn') 
            setView({earn : true});
        else if(item === 'addc') 
            setView({addcourse : true});
        else if(item === 'rate') 
            setView({rate : true});
        else if(item === 'promo') 
            setView({addpromo : true});
    }   
    return ( 
        <React.Fragment>
            <div className="row mt-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-3 text-center">
                    <img src="./instructor.png" width={'80px'} style={{borderRadius:'30px'}} alt="" />
                    <h6 className='m-2'>{username}</h6>
                    <Navigation
                        activeItemId={"profile"}
                        onSelect={({itemId}) => {
                            chooseItem(itemId);
                        }}
                        items={[
                            {title : "Profile",
                            itemId : "profile"
                            },
                            {title : "Add Promotion",
                            itemId : "promo"
                            },
                            {title : "Rating and Reviews",
                            itemId : "rate"
                            },
                            {title : "Add Course",
                            itemId : "addc"
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
                            {title : "My Earnings",
                            itemId : "earn"
                            },
                        ]}
                    />
                </div>
                <div className="col-sm-7 text-center">
                    {view.changepassword && <Changepassword />}
                    {view.profile && <StudentProfile />}
                    {view.earn && <Wallet />}
                    {view.addcourse && <Createcourse />}
                    {view.rate && <Reviewsoninstructor />}
                    {view.changeinfo && <Editinstructorprofile />}
                    {view.addpromo && <SetPromotions role={'instructor'}/> }
                </div>
                <div className="col-sm-1"></div>
            </div>
        </React.Fragment>
     );
}
 
export default InstructorView;