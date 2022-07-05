import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import './Login.css';

function UserLogin(props) {
  const handleSubmit = (e) => {
    axios
      .get("https://localhost:7018/api/UserLogin", {
        params: {
          UserName: Username, //keyboard typed
          Password: Password,
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        //console.log(response.data[0].matches)
        if (response.data[0].matches === 0) {
          setNotfound(true);
          // alert("No Account with that Username and password..");
        } else {
          localStorage.setItem("UserName", Username);
          // alert("Account Found");
          navigate("/UserOperations");
          // UserOperations
        }
      });

    e.preventDefault();
  };
  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Notfound, setNotfound] = useState(false);
  return (
    // <>
    <div className="Login">
      <form className="Userform"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>USER LOGIN</h1>
        <br />
        <label>Username</label>
        <input
          required
          name="Username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}

        />
        <label>Password</label>
        <input
          required
          name="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <button className="submitButton" type="submit">
        Login
        </button>
        {Notfound ? <p>Invalid Credentials</p> : ""}

        {/* <button onClick={() => navigate(-1)}>Back to Home</button> */}
      </form>
      {/* <>{IsLoggedin && navigate("/AdminOps")}</> */}
    {/* </> */}
    </div>
  );
}
export default UserLogin;
