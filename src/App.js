import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import SpecificWork from "./components/SpecificWork";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Daily Wage Workers" aboutText="About" />
        <Routes>
          
          <Route
            exact
            path="/register"
            element={
              <div className="register-form">
                <Register />
              </div>
            }
          />

          <Route
            exact
            path="/specificWork/:id"
            element={
                <SpecificWork />
            }
          />

          <Route
            exact
            path="/specificWork/:id"
            element={
                <SpecificWork />
            }
          />

          <Route
            exact
            path="/profile"
            element={
                <Profile />
            }
          />

          
          <Route
            exact
            path="/home"
            element={
              <div className="home-page">
                <HomePage />
              </div>
            }
          />

          <Route
            exact
            path="/"
            element={
              <div className="login-form">
                <Login />
              </div>
            }
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
