import React from "react";

function Form() {
  return (
    <div>
    <h1 className="header">Sign up and start learning</h1>
    
    <div className="container"  id="relative-layer">
    
    <div className="row" >
        <div className="column" >
       
      <div className="content">
        <form id='formm' action="#">
          <div className="user-details">
          <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required/>
              <label className="labell">First Name</label>
            </div>
            <div class="material-textfield input-box  ">
              <input className="inputt" placeholder=" " type="text" required/>
              <label className="labell">Last Name</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required/>
              <label className="labell">Email</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required/>
              <label className="labell">User Name</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required/>
              <label className="labell">Password</label>
            </div>
            <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required/>
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
          <button className="buttoon"> Sign Up
</button>
        </form>
        </div>
        </div>
 
    </div>
    </div>
    
    </div>

  
    

  );
}
export default Form;
