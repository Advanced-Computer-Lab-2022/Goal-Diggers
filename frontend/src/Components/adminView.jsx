import React, { useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Adduser from './adduser';
import CoursesRequests from './coursesRequests';
import SetPromotions from './setPromotions';
const AdminView = () => {
    const [status, setStatus] = useState(''); 
    const [view, setView] = useState({adduser : true, addpromo :false, requests:false});
    const chooseItem = (item) => {
        if(['pending','approved','rejected'].includes(item)){
            setView({adduser : false, addpromo :false, requests:true});
            setStatus(item);
        }
        else if (item === 'add promotion') 
            setView({adduser : false, addpromo :true, requests:false});
        else if (item === 'add user') 
            setView({adduser : true, addpromo :false, requests:false});
    }   
    return ( 
        <React.Fragment>
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
                            {title : "Courses Requests",
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
                        ]}
                    />
                </div>
                <div className="col-sm-7 text-center">
                    {view.requests && <CoursesRequests status={status}/>}
                    {view.addpromo && <SetPromotions /> }
                    {view.adduser && <Adduser /> }
                </div>
                <div className="col-sm-1"></div>
            </div>
        </React.Fragment>
     );
}
 
export default AdminView;