import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import logo from "../components/images/logo.png";
import person from "./images/person.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav">
        <div className="firstnav">
          <img src={logo} alt=""></img>
        </div>
        <div className="middlenav">
          <NavLink exact to="/contact">
            <p>HOME</p>
          </NavLink>
          <NavLink exact to="/journey">
            <p>THE JOURNEY</p>
          </NavLink>
          <NavLink exact to="/team">
            <p>TEAM</p>
          </NavLink>
          <NavLink exact to="/allproducts">
            <p>STORE</p>
          </NavLink>
          <NavLink exact to="/contact">
            <p>CONTACT</p>
          </NavLink>
        </div>
        <div className="lastnav">
          <p>
            <img src={person} alt=""></img>
          </p>
          <p>GAGAN</p>
        </div>
      </div>
      <div className="ham">
        <div className="top">
          <div className="firstnav">
            <img src={logo} alt=""></img>
          </div>

          <div className="lastnav">
            <p>
              <img src={person} alt=""></img>
            </p>
            <p>GAGAN</p>
            <button onClick={handleClick}>Click</button>
          </div>
        </div>
        <div className="lower" style={{ height: isOpen ? "auto" : "0px" }}>
          <ul
            style={{
              transition: "all 0.3s ease-out",
              overflow: isOpen ? "visible" : "hidden",
            }}
          >
            <NavLink exact to="/contact">
              <p>HOME</p>
            </NavLink>
            <NavLink exact to="/journey">
              <p>THE JOURNEY</p>
            </NavLink>
            <NavLink exact to="/team">
              <p>TEAM</p>
            </NavLink>
            <NavLink exact to="/allproducts">
              <p>STORE</p>
            </NavLink>
            <NavLink exact to="/contact">
              <p>CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
