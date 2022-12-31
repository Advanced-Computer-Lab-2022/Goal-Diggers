import React, { useContext, useEffect, useState }  from 'react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Navigation} from 'react-minimal-side-navigation';
import Changepassword from './changepassword';
import StudentProfile from './studentProfile';
import InprogressCourses from './inprogress';
import CompletedCourses from './completed';
import AuthContext, { AuthContextProvider } from"../context/AuthContext";
import StudentWallet from './studentWallet';

const ProfileView = () => {
    const [view, setView] = useState({profile : true});
    const [active, seTactive] = useState("");
    const [items, setItems] = useState({});
    const {loggedIn,id,type, username,wallet}=useContext(AuthContext);
    const chooseItem = (item) => {
        if(item === 'profile') 
            setView({profile : true});
        else if(item === 'wallet') 
            setView({wallet:true});
        else if(item === 'password') 
            setView({changepassword : true,});
        else if(item === 'information') 
            setView({changeinfo : true});
    };
    useEffect (()=>{
        let itemTemp = [];
        itemTemp.push({title : "Profile",
        itemId : "profile"
        });
        if(type != "corporateterainees "){
            itemTemp.push({title : "My Wallet",
            itemId : "wallet"
            });
        }
        itemTemp.push({title : "Settings",
        subNav : [
            {title : "Change my Password",
            itemId : "password",
            },
            {title : "Change my Information",
            itemId : "information",
            },
        ]
        });
        setItems(itemTemp);
    },[type])
    return ( 
        <React.Fragment>
        <div className="row mt-3">
            <div className="col-sm-1"></div>
            <div className="col-sm-3 text-center">
                <img src="./graduating-student.png" width={'80px'} style={{borderRadius:'30px'}} alt="" />
                <h6 className='m-2'> {username} </h6>
                <Navigation
                    activeItemId={active}
                    onSelect={({itemId}) => {
                        chooseItem(itemId);
                    }}
                    items={items}     
                />
            </div>
            <div className="col-sm-7 text-center">
                {view.changepassword && <Changepassword />}
                {view.profile && <StudentProfile />}
                {view.wallet && <StudentWallet wallet={wallet}/>}
            </div>
            <div className="col-sm-1"></div>
        </div>
    </React.Fragment>
     );
}
 
export default ProfileView;