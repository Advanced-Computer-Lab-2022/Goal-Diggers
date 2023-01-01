import React,{ useEffect } from 'react';
import { useState } from 'react';
import courseService from '../courseContainer';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

const StudentRefundRequests = () => {
    const [ready, setReady] = useState(false);
    const [requests, setRequests] = useState();
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        const getRequests = async () =>{
            setReady(false);
            const res = await courseService.StudentRefundRequests();
            setRequests(res);
            setReady(true);
        }
        getRequests();
    },[reload]);
    const reject = (course) =>{
        swal({
            title: `Do you really want to cancel this request` ,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
              swal("The Refund Request has been cancelled.", {
                icon: "success",
              });
              const res = await courseService.AdminRejectRefund(course);
              setReload(!reload);
            }
          });
    };

    return ( 
        <React.Fragment>
        {ready && 
            <React.Fragment>
                <span>Total {requests.length} Requests</span>
                <div className="container mt-3">
                {requests.length === 0 ? <React.Fragment>
                    <img src="./empty-box.png" alt="" className='mt-5' width={'300px'}/>
                </React.Fragment>
                :(requests.map(request => {
                    return <div key={request._id} className="card bg-light m-2">
                        <div className="row">
                            <div className="col-sm-1">
                                <img src={request.image} alt="" width={'60px'}/>
                            </div>
                            <div className="col-sm-8">
                                <p>You requested to refund {request.title} Course</p>
                            </div>
                            <div className="col-sm-3">
                                <button onClick={()=>{reject(request)}} id={request._id} style={{borderRadius:'25px'}} className='btn btn-danger mx-1'>Cancel</button>
                            </div>
                        </div>
                    </div>
                }))
                }
            </div>
            </React.Fragment>
        }
        {!ready && 
                <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
                    <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
                </div>
            }
        </React.Fragment>
     );
}
 
export default StudentRefundRequests;