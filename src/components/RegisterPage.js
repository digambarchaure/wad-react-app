import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './registerPage.css';
import axios from "axios";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState({});

  const data = {
    name: "",
    email: "",
    phoneno: "",
    usertype: "giver",
    username: "",
    password: "",
  };

  const [inputData, setInputData] = useState(data);

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleType = (e) => {
    const val = e.target.value;
    setInputData({...inputData, usertype: val});
    console.log(val);
    
  };

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/dailyWage/createUser", inputData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((Response) => {
        console.log(Response);
        if(Response.data.Status === 'Created'){
                
          alert("User Created Successfully");

          window.location.replace("http://localhost:3000/");
        }
        else{
          alert("User is Not Created");
        }
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className="registrationForm">
      <form>
        <div className="input-container">
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handelData}
            required
          />
          {renderErrorMessage("name")}
        </div>

        <div className="input-container">
          <label>Email </label>
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handelData}
            required
          />
          {renderErrorMessage("email")}
        </div>

        <div className="input-container">
          <label>Mobile No </label>
          <input
            type="tel"
            name="phoneno"
            value={inputData.phoneno}
            onChange={handelData}
            required
          />
          {renderErrorMessage("phoneNo")}
        </div>

        <div className="dropdownForJob">
          <label>
            Select a option
            <select onChange={handleType}>
              <option name = "usertype" value="giver"  >Job Giver</option>
              <option name = "usertype" value="seeker" >Job Seeker</option>
            </select>
          </label>
        </div>

        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={inputData.username}
            onChange={handelData}
            required
          />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handelData}
            required
          />
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <button
            
            type="submit"
            className="btn btn-secondary my-3"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>

        <div className="login-message">
          <Link to="/">Already have an account? Login here.</Link>
        </div>

      </form>
    </div>
  );
}
