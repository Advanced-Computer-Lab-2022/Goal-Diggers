import React from "react";
import axios from "axios";
import { useState } from "react";
import courseService from "../courseContainer";
import "./temp1.css";

function Adduser(props) {
  const [texterror, settexterror] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState(false);
  const [username, setusrname] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [data, setdata] = useState({
    username: "",
    password: "",
    role: "",
  });

  async function submit() {
    //e.exporddefault();
    if (data.username.length === 0 || data.password.length === 0 || !data.role)
      settexterror(true);
    else {
      settexterror(false);
      const res = await courseService.addUser(data);
      if (res.error) {
        seterror(res.error);
      } else {
        seterror("");
        setsuccess(true);
      }
      console.log(res);
    }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <div className="addUserContainer">
        {error && <div className="alert alert-danger">{error}</div>}
        {success && (
          <div className="alert alert-success">User added successfully</div>
        )}

        <div className="posi ip">
          <input
            id="username"
            onChange={(e) => handle(e)}
            value={data.username}
            className="gzz"
            type="text"
            required
          ></input>
          <span className="w8">Username</span>
        </div>
        <div className="form-floating mb-3" />

        <div>
          {texterror ? <label className="l1">You must fill it</label> : ""}
          <div className="form-floating mb-3" />
        </div>

        <div className="posi ip">
          <input
            onChange={(e) => handle(e)}
            value={data.password}
            id="password"
            className="gzz"
            type="password"
            required
          ></input>
          <span className="w8">Password</span>
        </div>
        <div className="form-floating mb-3" />
        <div>
          {texterror ? <label className="l1">You must fill it</label> : ""}
          <div className="form-floating mb-3" />
        </div>

        <div className="form-floating mb-3" />

        <div>
          <select
            style={{
              border: "2px solid #a30506",
              borderRadius: "30px",
              width: "100%",
              height: "2.7rem",
            }}
            onChange={(e) => handle(e)}
            id="role"
            value={data.role}
            placeholder="role"
          >
            <option value="">Select Role</option>
            <option value="administrator">Administrator</option>
            <option value="instructor">Instructor</option>
            <option value="corporatetrainees ">Corporate trainee</option>
          </select>
          {texterror ? <label className="l1">You must fill it</label> : ""}
        </div>
        <div className="form-floating mb-3" />

        <div className="login-box posi">
          <form>
            <a href="/blogdetails" onClick={() => submit()}>
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
    </div>
  );
}

export default Adduser;
