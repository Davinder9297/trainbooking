import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminOperations.css'
import { BASE_URL } from "./api";

function UserOps() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    // debugger;
    axios
      .get(BASE_URL+'/getalltrains')
      .then((result) => setData(result?.data?.data));
    // console.log(data);
    // debugger;
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
  function Gettime(dateString){
    const dateObject = new Date(dateString);
    
    let hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    const seconds = dateObject.getUTCSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes and seconds to always show two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${formattedMinutes} ${ampm}`
  }
  return (
    <>
    <div className="admin-ops">

    
      <div >
        <h1 className="text-xl font-semibold">User Main Page</h1>
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
                    <td>{Gettime(item.ArrivalTime)}</td>
                    <td>{Gettime(item.DepartureTime)}</td>
                    <td>{item.Fare}</td>
                    <td>{item.SeatAvailability}</td>
                    <Link to='/TicketInfo'>
                    <button className="admin-action p-2 rounded" onClick={() => setTrainNumber(item.TrainNo)}>Book Train</button>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserOps;

// onPress={() => {}}
