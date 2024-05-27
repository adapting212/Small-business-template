import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import "../styles/navbar.scss";

const Navbar = ({ dispatch, state }) => {
 
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="nav-image" width="210" height="29" aria-hidden="true" decoding="async"/>
        </div>
        <div className="nav-menu">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
            </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
            </NavLink>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Aesthetics
            </NavLink>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Weight Loss
            </NavLink>
          <NavLink to="/" className="nav-link" activeClassName="active">
            FAQ
            </NavLink>
          <NavLink to="/" className="contact-us" activeClassName="active">
            Contact Us
          </NavLink>
         

        </div>
      </nav>
    </>
  );
};

export default Navbar;

