import React from "react";
import { useState } from "react";
function ForgetPassword(){
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    return( <div id="loginContainer">
    <form  action="#">
      <div className="user-details">
      <div class="material-textfield input-box ">
          <input className="inputt" placeholder=" " type="text" value={NewPassword} required />
          <label className="labell">New Password</label>
        </div>
        <div class="material-textfield input-box  ">
          <input className="inputt" placeholder=" " type="text" value={ConfirmPassword} required />
          <label className="labell">Confirm Password</label>
        </div>
        </div>
        <button className="buttoon" type="submit"> Submit
</button>
</form>
</div>);
}
export default ForgetPassword;