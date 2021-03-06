import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import house from "../images/house.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={house} alt="House" className="houseImage" />
      <ul className="navbar-links">
        <Link to="/" className="navbar-links-item">
          View Properties
        </Link>
        <Link to="/add-property" className="navbar-links-item">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
