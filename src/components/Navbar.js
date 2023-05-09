import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import weblogo from "./img/logo1.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>

      <div className="navbar">

        <div className="logo">
          <img className="web-logo" src={weblogo} alt="logo" />
        </div>

        <div className="searchbar">
          <input className="search-bar" type="text" placeholder="Search" />
        </div>
        
        <div className="links">
          <li>
            <Link to="/home"> Home</Link>
          </li>

          <li>
            <Link to="/">Login</Link>
          </li>

          <li>
            <Link to="/register"> Register</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </div>

      </div>

    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text",
};
