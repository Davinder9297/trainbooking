import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import './Login.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {useFormik} from 'formik';
// import * as yup from 'yup';
function AdminLoginPage(props) {
  
  const handleSubmit = (e) => {
    axios
      .get("https://localhost:7018/api/AdminLoginPage/Get", {
        params: {
          UserName: UserName, //keyboard typed
          Password: Password
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        //console.log(response.data[0].matches)
        if (response.data[0].matches === 0) {
          setNotfound(true);
          // alert("No Account with that Username and password..");
        } else {
          // alert("Account Found");
          navigate("/AdminOperations");
        }
      });

    // .then(function (response) {
    //   console.log(response);
    //   setIsLoggedin(true);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    e.preventDefault();
  };

  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   Username: "",
  //   Password: "",
  // });
  // const postdata = { data };
  // axios.post("https://localhost:7281/api/Admin/Post", postdata);
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Notfound, setNotfound] = useState(false);
 
  // const [IsLoggedin, setIsLoggedin] = useState(false);
  return (
    // <>
    <div className="Login" >
      <form className="Userform"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>ADMINISTRATOR</h1>
        <br />
        <label>Username</label>
        <input
          required
          name="Username"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <label>Password</label>
        <input
         name="Password"
         type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <button className="submitButton" type="submit">
          {/* <span className="text"></span> */}
          {/* <i className="ri-check-line icon"></i> */}
          Login
        </button>
        {Notfound ? <p>Invalid Credentials</p> : ""}
        {/* <button onClick={() => navigate(-1)}>Back to Home</button> */}
      </form>
      {/* <>{IsLoggedin && navigate("/AdminOperations")}</> */}
      </div>
    // </>
  );
}

export default AdminLoginPage;
