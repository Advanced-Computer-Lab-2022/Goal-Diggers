import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="registerBody">
    <h1 id="registerHeader">Sign up and start learning</h1>
    
    <div  id="registerContainer" >    
      <div className="content">
        <form action="#" onSubmit={handleSignup}>
          <div className="user-details">
          <div class="material-textfield input-box ">
              <input className="inputt" placeholder="firstName" type="text" required/>
              <label className="labell">First Name</label>
            </div>
            <div class="material-textfield input-box  ">
              <input className="inputt" placeholder="lastName" type="text" required/>
              <label className="labell">Last Name</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder="email" value={email}  type="text" required onChange={(e) => setEmail(e.target.value)}/>
              <label className="labell">Email</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder="userName" type="text" required/>
              <label className="labell">User Name</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder="password" value={password}  type="text" required onChange={(e) => setPassword(e.target.value)}/>
              <label className="labell">Password</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder="confirmPassword" type="text" required/>
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
export default Form;
