import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import courseService from '../courseContainer';
import "./temp1.css";

function Adduser(props) {

    const [texterror , settexterror] = useState("");
    const [error , seterror] = useState("");
    const [success , setsuccess] = useState(false);
    const [username , setusrname] = useState("");
    const [password , setpassword] = useState("");
    const [role , setrole] = useState("");
    const [data , setdata] = useState({
        username : "",
        password : "",
        role : ""
    });

    

    async function submit(){
        //e.exporddefault();
        if(data.username.length === 0 || data.password.length ===0 || !data.role)settexterror(true)

        else{
            settexterror(false);
            const res = await courseService.addUser(data);
            if(res.error){
                seterror(res.error);
            }
            else
            {
                seterror("");
                setsuccess(true);
            }
            console.log(res);
        }
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setdata(newdata);
        console.log(newdata);
    }

  return (
    <div>
        {error && <div className='alert alert-danger'>{error}</div>}
        {success && <div className='alert alert-success'>User added successfully</div>}
        <div class="segment">
            <h1>Add User</h1>
        </div>

        <div className='ip posi'>
            <input id='username' onChange={(e)=>handle(e)} value={data.username} className='gzz' type="text" required ></input>
            <span className='w8'>Username</span>
        </div>
        <div className="form-floating mb-3" />

            <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div className="form-floating mb-3" />
            </div>

        <div className='ip posi'>
            <input onChange={(e)=>handle(e)} value={data.password} id="password" className='gzz' type="password" required ></input>
            <span className='w8'>Password</span>
        </div>
        <div className="form-floating mb-3" />
        <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div className="form-floating mb-3" />
            </div>

        <div className="form-floating mb-3" />

        <div className="col-sm-6 selbox">

                <select  onChange={(e)=>handle(e)} id = "role" value={data.role} className='form-control my-1 selbox' style={{width:'250px'}} placeholder = 'role'>
                    <option  value="">Select Role</option>
                    <option value="administrator">Administrator</option>
                    <option value="instructor">Instructor</option>
                    <option value="corporatetrainees ">Corporate trainee</option>
                </select>
                {texterror?<label className = "l1">You must fill it</label>:""}
            </div>
        <div className="form-floating mb-3" />

        <div className="login-box posi">
            <form>
                <a href="/blogdetails"onClick={()=>submit()}>
                Add User
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </form>
        </div>  
        <div className="form-floating mb-3" />
    </div>
  )
}


export default Adduser