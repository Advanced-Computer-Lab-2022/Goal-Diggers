import React from 'react'
import { useState } from 'react'
import axios from 'axios';
//first we need to take the values from the input fields using use state
export default function Reset() {
    const[username,setUserName]=useState("");
    async function handleReset(e){
        //to prevent the page from refreshing when submit
        e.preventDefault();
        try {
            const forgetData={
                username,
            }
            await axios.post("http://localhost:3000/api/login",forgetData);
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
   <div>
    <h1 id='logintitle'>Enter your user name</h1>
    <div id="loginContainer">
   
    <form onSubmit={handleReset}>
        
    <div className="user-details">
    <div className="material-textfield input-box ">
            <input 
            className="inputt"
            placeholder=" "
            type="text"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}>
            </input>
            <label className="labell">UserName</label>
        </div>
       
        </div>
        <button className='buttoon pt-2'>Confirm</button>
    </form>
    </div>
    <h1 id="mar2"> </h1>
</div>
  )
}
