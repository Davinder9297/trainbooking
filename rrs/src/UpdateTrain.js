import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UpdateTrain.css";
//import "./Login.css";

export default function Updatetrain() {
  const [Out, setOut] = useState([]);
  const [TrainNo, setTrainNo] = useState("");
  const [TrainName, setTrainName] = useState("");

  const [Origin, setOrigin] = useState("");

  const [Destination, setDestination] = useState("");

  const [DepartureTime, setDepartureTime] = useState("");

  const [ArrivalTime, setArrivalTime] = useState("");

  const [Fare, setFare] = useState("");

  const [SeatAvailability, setSeatAvailability] = useState("");

  const navigate = new useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://localhost:7018/api/Train/${localStorage.getItem(
          "TrainNo"
        )}`
      )

      .then(function (response) {
        setOut(response.data[0]);

        setTrainNo(response.data[0].TrainNo);
        setTrainName(response.data[0].TrainName);

        setOrigin(response.data[0].Origin);

        setDestination(response.data[0].Destination);

        setDepartureTime(response.data[0].DepartureTime);

        setArrivalTime(response.data[0].ArrivalTime);

        setFare(response.data[0].Fare);

        setSeatAvailability(response.data[0].SeatAvailability);

        console.log(response.data);
      });
  }, []);

  function handleSubmit(e) {
    const Data = {
      TrainNo: localStorage.getItem("TrainNo"),
      TrainName: TrainName,
      Origin: Origin,

      Destination: Destination,

      DepartureTime: DepartureTime,

      ArrivalTime: ArrivalTime,

      Fare: Fare,

      SeatAvailability: SeatAvailability,
    };

    console.log(Data);

    axios
      .put(
        `https://localhost:7018/api/AdminLoginPage/Puttrain/${localStorage.getItem(
          "TrainNo"
        )}`,
        Data
      )

      .then(function (response) {
        console.log(response.data);

        alert("Updated Successfully..");

        navigate("/AdminOperations");
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  return (
    <div className="Login">
      {/*            {" "} */}
      <form className="Userform">
        <h1>UPDATE TRAIN</h1>
       <br />
        <label id="fn">Train Number</label>
       {/* disabled value={Out.TrainNumber} */}
        {/* onChange={event => setTrainNumber(event.target.value)} */}
        {/*      {" "} */}
        <input
          required
          type="number"
          readOnly
          value={localStorage.getItem("TrainNo")}
        ></input>
         
         <label>TrainName</label>
         <input
          required
          type="text"
          defaultValue={Out.TrainName}
          onChange={(event) => setTrainName(event.target.value)}
         
        ></input>

        <label>Origin</label>
        <input
          required
          type="text"
          defaultValue={Out.Origin}
          onChange={(event) => setOrigin(event.target.value)}
        ></input>
         <label>Destination</label>
        <input
          required
          type="text"
          defaultValue={Out.Destination}
          onChange={(event) => setDestination(event.target.value)}
        ></input>
         <label>Departure Time</label>
        <input
          required
          type="datetime-local"
          defaultValue={Out.DepartureTime}
          onChange={(event) => setDepartureTime(event.target.value)}
        ></input>
       <label>Arrival Time</label>
        <input
          required
          type="datetime-local"
          min={DepartureTime}
          disabled={DepartureTime.length ? false : true}
          defaultValue={Out.ArrivalTime}
          onChange={(event) => setArrivalTime(event.target.value)}
        ></input>
         <label>Available Seats</label>
        <input
          required
          type="number"
          defaultValue={Out.Fare}
          onChange={(event) => setFare(event.target.value)}
        ></input>
     <label>Ticket Cost</label>
        <input
          required
          type="number"
          defaultValue={Out.SeatAvailability}
          onChange={(event) => setSeatAvailability(event.target.value)}
        ></input>
         <button onClick={(e) => handleSubmit(e)}>Update</button>
     
      </form>
      <br />
      <br />
    </div>
  );
}
