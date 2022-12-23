import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
//first we need to take the values from the input fields using use state
function Register() {
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[passwordVerify,setPasswordVerify]=useState("");
    const {getLoggedIn}=useContext(AuthContext);
    const navigate = useNavigate();
    async function register(e){
        //to prevent the page from refreshing when submit
        e.preventDefault();
        try {
            const registerData={
                userName,
                email,
                password,
                firstName,
                lastName,
                passwordVerify,
            }
            //we need also to 
            await axios.post("http://localhost:5000/auth/",registerData);
            await getLoggedIn();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
    <div id="registerBody">
    <h1 id="registerHeader">Sign up and start learning</h1>
    
    <div  id="registerContainer" >    
      <div className="content">
        <form action="#" onSubmit={register}>
          <div className="user-details">
          <div class="material-textfield input-box ">
          <input 
          className="inputt"
         placeholder="firstName"
         value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}>
        </input>
              <label className="labell">First Name</label>
            </div>
            <div class="material-textfield input-box  ">
            <input 
            className="inputt"
         placeholder="lastName"
         value={lastName}
        onChange={(e)=>setlastName(e.target.value)}>
        </input>
              <label className="labell">Last Name</label>
            </div>
            <div class="material-textfield input-box ">
            <input 
            className="inputt"
        type="email"
         placeholder="email"
         value={email}
        onChange={(e)=>setEmail(e.target.value)}>
        </input>
              <label className="labell">Email</label>
            </div>
            <div class="material-textfield input-box ">
            <input 
       className="inputt"
         placeholder="userName"
         value={userName}
        onChange={(e)=>setUserName(e.target.value)}>
        </input>
              <label className="labell">User Name</label>
            </div>
            <div class="material-textfield input-box ">
            <input 
            className="inputt"
        type="password"
         placeholder="password"
         value={password}
        onChange={(e)=>setPassword(e.target.value)}>
        </input>
              <label className="labell">Password</label>
            </div>
            <div class="material-textfield input-box ">
            <input 
            className="inputt"
        type="password"
         placeholder="confirm password"
         value={passwordVerify}
        onChange={(e)=>setPasswordVerify(e.target.value)}>
        </input>
              <label className="labell">Confirm Password</label>
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
           
            </div>
          </div>
          <button type="submit" className="buttoon"> Sign Up
</button>
        </form>
        </div>
      
 
  
    </div>
    
    </div>

  
    
    

  );
}
export default Register;
