import React,{ useContext }  from "react";
import { Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from "./context/AuthContext";
function RegisterFooter(){
    const {getLoggedIn,loggedIn,id,type}= useContext(AuthContext);
    console.log(loggedIn);

    { if(!loggedIn){
    return(
         <div id="footerSign">
    
    <span id="span1">welcome to canadian chamber</span>
    <span id="span2">Create an account for free and strat learning</span>
  
  <div id="footerButtons">
 <Link to="/login"> <button id="button1">Login</button></Link>
 <Link to="/register"><button id="button2">SignUp</button></Link>
  </div>
  </div>
   
    );}else{
return <div></div>;
    }}
}
export default RegisterFooter;