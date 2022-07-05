import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminOperations.css'

function AdminOps() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    debugger;
    axios
      .get("https://localhost:7018/api/AdminLoginPage/trainsinformation/")
      .then((result) => setData(result.data));
    console.log(data);
    debugger;
  }, [data]);
  const setTrainNumber=(tn)=>{
    localStorage.setItem("TrainNo",tn)
  }
  const del=(dl)=>{
    axios.delete("https://localhost:7018/api/AdminLoginPage/Deletetrain/"+dl).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })

  }
  return (
    <>
    <div className="admin-ops">

    
      <div >
        <h1>ADMIN DASHBOARD</h1>
        <br />
        {/* <button onClick={() => navigate("/UpdateTrain")}>Update Train</button>
        <br />
        <button onClick={() => navigate("/DeleteTrain")}>Delete Train</button> */}
        <br />
      </div>
      <div>
        <div>
          <div className="row" style={{ margin: "10px" }}>
            {/* <div className="col-sm-12 btn btn-info"></div> */}
          </div>
          <table class="content-table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Train Number</th>
                <th scope="col">Train Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Available Seats</th>
                <th scope="col">Ticket Cost</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.TrainNo}>
                    <td><b>{item.TrainNo}</b></td>
                    <td><b>{item.TrainName}</b></td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.Fare}</td>
                    <td>{item.SeatAvailability}</td>
                    <Link to='/UpdateTrain'>
                    <button className="admin-action" onClick={() => setTrainNumber(item.TrainNo)}>Update Train</button>
                    </Link>
                    <Link to='/AdminOperations'>
                    <button className="admin-train" onClick={() => del(item.TrainNo)}>Delete</button>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="admin-ops-insert">
          <button onClick={() => navigate("/InsertTrain")}>Insert Train</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminOps;

// onPress={() => {}}
