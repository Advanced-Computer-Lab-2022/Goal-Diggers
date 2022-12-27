import React, { useState } from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Adduser from './adduser';
import CoursesRequests from './coursesRequests';
import Problems from './problems';
import RefundRequests from './refundRequests';
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
                    {view.refund && <RefundRequests /> }
                </div>
                <div className="col-sm-1"></div>
            </div>
        </React.Fragment>
     );
}
 
export default AdminView;