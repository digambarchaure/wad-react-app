import React from "react";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );

  const data = { username: "", password: "" };
  const [inputData, setInputData] = useState(data);

  const handelData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/dailyWage/login", inputData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((Response) => {
        console.log(Response);
        sessionStorage.setItem('token', Response.data.token);
        if (Response.status === 200) alert("login suceess");
      })
      .catch((error) => setErrorMessage(error.message));
  };


  return (
    <div className="loginForm">
      <form>
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

        <div className="register-message">
          <Link to="/register">Don't have an account? Register here.</Link>
        </div>
      </form>
    </div>
  );
}
