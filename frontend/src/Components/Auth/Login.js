import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import  { useNavigate }from 'react-router-dom';
//first we need to take the values from the input fields using use state
export default function Login() {
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[type,setType]=useState("");
    const {loggedIn,getLoggedIn}=useContext(AuthContext);
    const navigate = useNavigate();
    async function login(e){
        //to prevent the page from refreshing when submit
        e.preventDefault();
        try {
            const loginData={
                username,
                password,
                type,
            }
            //we need also to 
            await axios.post("http://localhost:3000/api/login",loginData);
            await getLoggedIn();
           if(loggedIn==true){
            navigate('/');}
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
   <div>
    <h1 id='logintitle'>Login now</h1>
    <div id="loginContainer">
   
    <form onSubmit={login}>
        
    <div className="user-details">
    <div class="material-textfield input-box ">
            <input 
            className="inputt"
            placeholder=" "
            type="text"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}>
            </input>
            <label className="labell">Username</label>
        </div>
        <div class="material-textfield input-box ">
            <input 
            type="password" 
            className='inputt'
            placeholder=" "
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            >
            </input>
            <label className="labell">Password</label>
        </div>
        </div>
        <button className='buttoon pt-2'>login</button>
    </form>
    </div>
    <h1 id="mar2"> </h1>
</div>
  )
}
