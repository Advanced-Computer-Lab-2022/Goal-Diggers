import React, { useEffect, useState } from 'react';
 

const StudentProfile = () => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        // getting user informaion from the localstorage    
    },[]);
    return ( 
        <React.Fragment>
            <div className="card bg-light px-5 py-3 mt-5" style={{borderRadius : '25px'}}>
                <h5 className='text-left'><i className="fa fa-money" aria-hidden="true"></i> Your Wallet : 0.0</h5>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h6>Firstname : Mahmoud </h6>
                    </div>
                    <div className="col-sm-6">
                        <h6>Lastname : Sayed </h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h6>Username : mahmoudsayed</h6>
                    </div>
                    <div className="col-sm-6">
                        <h6>Gender : male </h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h6>E-mail : ms9728830@gmail.com </h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default StudentProfile;