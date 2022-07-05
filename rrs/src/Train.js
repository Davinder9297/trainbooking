import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Train.css";
//import {Table} from "react-bootstrap";

function Train() {
    const [data, setData] = useState([]);
     useEffect(() => {
       debugger;
       axios.get("https://localhost:7018/api/Train").then((result) =>
         setData(result.data)
       );
       console.log(data);
       debugger;
     }, [data]);
const navigate=useNavigate();
  return (
    <div className = "container" >
        <div className = "navbar-train"><h1>RAILWAY RESERVATION SYSTEM</h1>
        <p className="nav-link">
          <button  onClick={() => navigate("/AdminLoginPage")}>
            Admin Login
          </button>
          <button onClick={() => navigate("/UserRegistration")}>
            SignUp User 
          </button>
          <button onClick={() => navigate("/UserLogin")}>User Login</button>
        </p >
        </div>

        <div className="row" style={{ margin: "10px" }}></div>
        <table className = "content-table">
            <thead >
               <tr>
                 <th scope="col">TrainNo</th>
                 <th scope="col">TrainName</th>
                 <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">ArrivalTime</th>
                <th scope="col">DepartureTime</th>          
               <th scope="col">Fare</th>
                 <th scope="col">SeatAvailability</th>
               </tr>
             </thead>
             <tbody >

                 
             {data.map((item) => {
                 return(   
                 <tr key={item.TrainNo}>
                    <td>{item.TrainNo}</td>
                    <td>{item.TrainName}</td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.Fare}</td>
                    <td>{item.SeatAvailability}</td>
                  </tr>
                );
             })}
            </tbody>
          </table>
          </div>
  );
}
export default Train;