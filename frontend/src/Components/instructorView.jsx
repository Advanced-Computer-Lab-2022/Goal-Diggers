import React, { useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Changepassword from './changepassword';
import Createcourse from './createcourse';
import StudentProfile from './studentProfile';
import Wallet from './wallet';

const InstructorView = () => {
    const [view, setView] = useState({adduser : true, addpromo :false, requests:false});
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
    }   
    return ( 
        <React.Fragment>
            <div className="row mt-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-3 text-center">
                    <img src="./instructor.png" width={'80px'} style={{borderRadius:'30px'}} alt="" />
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
                </div>
                <div className="col-sm-1"></div>
            </div>
        </React.Fragment>
     );
}
 
export default InstructorView;