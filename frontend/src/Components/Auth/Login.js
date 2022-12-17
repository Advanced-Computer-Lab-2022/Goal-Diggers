import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import  { useNavigate }from 'react-router-dom';
//first we need to take the values from the input fields using use state
export default function Login() {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const {getLoggedIn}=useContext(AuthContext);
    const navigate = useNavigate();
    async function login(e){
        //to prevent the page from refreshing when submit
        e.preventDefault();
        try {
            const loginData={
                userName,
                password,
            }
            //we need also to 
            await axios.post("http://localhost:5000/auth/login",loginData);
            await getLoggedIn();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
    <div>
    <h1>Login now</h1>
    <form onSubmit={login}>
        <input 
         placeholder="User Name"
         value={userName}
        onChange={(e)=>setUserName(e.target.value)}>
        </input>
        <input 
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        >
        </input>
        <button>login</button>
    </form>
    </div>
  )
}
