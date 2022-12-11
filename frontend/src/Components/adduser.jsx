import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import courseService from '../courseContainer';

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
    <form className='px-5 mx-5 mt-3 bg-light py-3 card' style={{borderRadius:'25px'}}>
            {error && <div className='alert alert-danger'>{error}</div>}
            {success && <div className='alert alert-success'>User added successfully</div>}
            <div className="form-floating">
                 <input onChange={(e)=>handle(e)} id = "username" value={data.username} type="text" className='form-control' placeholder="Username"/>
                 <label htmlFor='username'>Username</label>
            </div>
            <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div className="form-floating mb-3" />
            </div>
            <div className="form-floating">
                <input onChange={(e)=>handle(e)} id = "password" value={data.password} type="password" className='form-control'  placeholder="Password"/>
                <label htmlFor='password'>Password</label>
            </div>
            <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div className="form-floating mb-3" />
            </div>
            <div className="form-floating">
                <select onChange={(e)=>handle(e)} id = "role" value={data.role} className='form-control my-1' placeholder = 'role'>
                    <option  value="">Select Role</option>
                    <option value="administrator">Administrator</option>
                    <option value="instructor">Instructor</option>
                    <option value="corporatetrainees ">Corporate trainee</option>
                </select>
                {texterror?<label className = "l1">You must fill it</label>:""}
            </div>
        <button className='btn btn-primary mt-3' style={{borderRadius : '25px'}} onClick={()=>submit()}>Submit</button>
    </form>
  )
}


export default Adduser