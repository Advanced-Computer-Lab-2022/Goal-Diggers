import React from 'react'
import { useState } from 'react'
import axios from 'axios';
//first we need to take the values from the input fields using use state
export default function Reset() {
    const[newpassword,setNewPassword]=useState("");
    const[confirmpassword,setConfirmedPassword]=useState("");
    async function Reset(e){
        //to prevent the page from refreshing when submit
        e.preventDefault();
        try {
            const resetData={
                newpassword,
                confirmpassword,
            }
            await axios.post("http://localhost:3000/api/login",resetData);
        } catch (error) {
            console.log(error.message);
        }
    } 
  return (
   <div>
    <h1 id='logintitle'>Reset your password</h1>
    <div id="loginContainer">
   
    <form onSubmit={Reset}>
        
    <div className="user-details">
    <div className="material-textfield input-box ">
            <input 
            className="inputt"
            placeholder=" "
            type="text"
            value={newpassword}
            onChange={(e)=>setNewPassword(e.target.value)}>
            </input>
            <label className="labell">New Password</label>
        </div>
        <div className="material-textfield input-box ">
            <input 
            type="password" 
            className='inputt'
            placeholder=" "
            value={confirmpassword}
            onChange={(e)=>setConfirmedPassword(e.target.value)}
            >
            </input>
            <label className="labell">Confirm Password</label>
        </div>
        </div>
        <button className='buttoon pt-2'>Reset</button>
    </form>
    </div>
    <h1 id="mar2"> </h1>
</div>
  )
}
