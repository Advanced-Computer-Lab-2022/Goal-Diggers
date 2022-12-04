import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
    return(
        <div id="loginContainer">
        <form  action="#" onSubmit={handleLogin}>
          <div className="user-details">
          <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
              <label className="labell">Email</label>
            </div>
            <div class="material-textfield input-box  ">
              <input className="inputt" placeholder=" " type="text" required  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
              <label className="labell">Password</label>
            </div>
            </div>
            <button className="buttoon" type="submit"> Login
</button>
<Link id="linkpos">forget Password</Link>
</form>
</div>
    )
}
export default Login;