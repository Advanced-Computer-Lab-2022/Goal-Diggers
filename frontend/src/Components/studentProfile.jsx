import React, { useContext,} from 'react';
import AuthContext, { AuthContextProvider } from"../context/AuthContext";

const StudentProfile = () => {
    const {loggedIn,id,type, username, firstname, lastname, email, gender,wallet}=useContext(AuthContext);
    return ( 
        <React.Fragment>
            <div className="card px-5 py-3 mt-5" style={{borderRadius : '25px',backgroundColor:'#F9F9F9'}}>
               
                <div className="row mt-5">
                    <div className="col-sm-6 text-left">
                        <h6>Firstname : {firstname}</h6>
                    </div>
                    <div className="col-sm-6 ">
                        <h6>Lastname : {lastname} </h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <h6>Username : {username}</h6>
                    </div>
                    <div className="col-sm-6">
                        <h6>E-mail : {email} </h6>
                    </div>
                </div>
                <div className="row mt-5">
                <div className="col-sm-6">
                        <h6>Gender : {gender} </h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default StudentProfile;