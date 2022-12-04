import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
<link rel="stylesheet" href="edituserproile.css" />

function Changepassword(props) {

    const [oldpassworderror , setoldpassworderror] = useState("");
    const [newpassworderror , setnewpassworderror] = useState("");
    const [confirmnewpassworderror , setconfirmnewpassworderror] = useState("");
    const [repeaterror , setrepeaterror] = useState("");
    const [matcherror , setmatcherror] = useState("");

    const [data , setdata] = useState({
        oldpassword : "",
        newpassword : "",
        confirmnewpassword : ""
    })

    async function submit(){
        //e.preventdefault(e);
        if(data.oldpassword.length === 0){
            setoldpassworderror(true);
        }
        else{
            setoldpassworderror(false);
        }
        if(data.newpassword.length === 0){
            setnewpassworderror(true);
        }
        else{
            setnewpassworderror(false);
        }
        if(data.confirmnewpassword.length ===0){
            setconfirmnewpassworderror(true);
        }
        else{
            setconfirmnewpassworderror(false);
        }
        if(data.oldpassword.length !== 0 && data.newpassword.length !== 0 && data.confirmnewpassword.length !==0){
            if(data.oldpassword ===data.newpassword){
                setrepeaterror(true);
            }
            else{
                setrepeaterror(false);
            }
            if(data.newpassword !== data.confirmnewpassword){
                setmatcherror(true);
            }
            else{
                setmatcherror(false);
            }
            if (data.newpassword === data.confirmnewpassword && data.oldpassword !==data.newpassword ){
                swal({
                    title: "Do you want to update your password?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Your password has been updated", {
                        icon: "success",
                      });
                    }
                  });
            }
        }      
   }
   const handleChange = (e, type)=>{
    let temp = {... data};
    temp[type] = e.target.value;
    if(type === 'oldpassowrd')
      setoldpassworderror(false);
    if(type === 'newpassowrd')
      setnewpassworderror(false);
    if(type === 'confirmnewpassword')
      setconfirmnewpassworderror(false);
    setdata(temp);
}

  return (
    <div className="login-box mt-5">
        <h2>Change Password</h2>
        <form>
            <div className="user-box ">
                <input type="password" name="" required="" onChange={(e)=>{handleChange(e,'oldpassword')}}/>
                <label>Old Password</label>
            </div>
            <div>
                {oldpassworderror && <label className = "l1">Old Password field required</label>}
                <div className="form-floating mb-3" />
            </div>
            <div className="user-box ">
                <input type="password" name="" required="" onChange={(e)=>{handleChange(e,'newpassword')}}/>
                <label>New Password</label>
            </div>
            <div>
                {newpassworderror && <label className = "l1">New Password field required</label> }
                <div className="form-floating mb-3" />
            </div>
            <div className="user-box ">
                <input type="password" name="" required="" onChange={(e)=>{handleChange(e,'confirmnewpassword')}}/>
                <label>Confirm New Password</label>
            </div>
            <div>
                {confirmnewpassworderror && <label className = "l1">Confirm New Password field required</label> }
                <div className="form-floating mb-3" />
            </div>
            <div>
                {repeaterror && <label className = "l1">Old pw and New pw are the same</label> }
                <div className="form-floating mb-3" />
            </div>
            <div>
                {matcherror && <label className = "l1">Two new passwords do not match</label> }
                <div className="form-floating mb-3" />
            </div>
            <a href="#" onClick={(e)=>submit()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
                Submit
            </a>
        </form>
    </div>
  )
}

export default Changepassword;