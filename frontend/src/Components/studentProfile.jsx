import React, { useContext,} from 'react';
import AuthContext, { AuthContextProvider } from"../context/AuthContext";

const StudentProfile = () => {
    const {loggedIn,id,type, username, firstname, lastname, email, gender,wallet}=useContext(AuthContext);
    return ( 
        <React.Fragment>
            <div className="card bg-light px-5 py-3 mt-5" style={{borderRadius : '25px'}}>
                <h5 className='text-left'><img src="./wallet.png" width={'35px'} alt="" /> Your Wallet : {wallet} USD</h5>
                <div className="row mt-5">
                    <div className="col-sm-6 text-left">
                        <h6>Firstname : {firstname} </h6>
                    </div>
                    <div className="col-sm-6">
                        <h6>Lastname : {lastname} </h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h6>Username : {username}</h6>
                    </div>
                    <div className="col-sm-6">
                        <h6>Gender : {gender} </h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h6>E-mail : {email} </h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default StudentProfile;