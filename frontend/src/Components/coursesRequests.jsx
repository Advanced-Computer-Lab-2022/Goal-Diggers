import React,{ useEffect } from 'react';
import { useState } from 'react';
import courseService from '../courseContainer';
import swal from 'sweetalert';

const CoursesRequests = () => {
    const [ready, setReady] = useState(false);
    const [requests, setRequests] = useState();
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        const getRequests = async () =>{
            setReady(false);
            const res = await courseService.getCoursesRequestsP();
            setRequests(res);
            setReady(true);
            
        }
        getRequests();
    },[reload]);
    const accept = (e) =>{
        swal({
            title: `Do you really want to grant access` ,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
              swal("The access has been granted to the student", {
                icon: "success",
              });
              const res = await courseService.GrantAccess(e.target.id);
              setReload(!reload);
            }
          });
    }
    const reject = (e) =>{

        swal({
            title: `Do you really want to revoke access` ,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
              swal("The request has been revoked", {
                icon: "success",
            });
            const res = await courseService.RevokeAccess(e.target.id);
            setReload(!reload);
            }
          });
    }
    return ( 
        <React.Fragment>
        {ready && 
            <React.Fragment>
                <span>Total {requests.length} Requests</span>
                <div className="container mt-3">
                {requests.length === 0 ? <React.Fragment>
                    <img src="./no-results.png" alt="" className='mt-5' style={{width:'300px'}}/>
                </React.Fragment>
                :(requests.map(request => {
                    return <div key={request._id} className="card bg-light m-2">
                        <div className="row">
                            <div className="col-sm-1">
                                <img src="./video.png" alt="" width={'60px'}/>
                            </div>
                            <div className="col-sm-8">
                                <p>{request.studentName} requested to take {request.title} Course</p>
                            </div>
                            {request.status == 'pending' && 
                            <div className="col-sm-3">
                                <button onClick={(e)=>{accept(e)}} id={request._id} style={{borderRadius:'25px'}} className='btn btn-success mx-1'>Approve</button>
                                <button onClick={(e)=>{reject(e)}} id={request._id} style={{borderRadius:'25px'}}className='btn btn-danger mx-1'>Reject</button>
                            </div>
                            }
                            {request.status == 'approved' && 
                            <div className="col-sm-3">
                                <h6 style={{color : 'lightgreen'}}><i className="fa fa-check-circle" aria-hidden="true"></i> Approved </h6>
                            </div>
                            }
                            {request.status == 'rejected' && 
                            <div className="col-sm-3">
                                <h6 style={{color : 'lightcoral'}}><i className="fa fa-times-circle" aria-hidden="true"></i> Rejected </h6>
                            </div>
                            }
                        </div>
                    </div>
                }))
                }
            </div>
            </React.Fragment>
        }
        {!ready && 
                <div  className="container text-center" style={{marginBottom: '300px'}}>
                    <div className="container">
                        <div className="row">
                            <div id="loader">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
     );
}
 
export default CoursesRequests;