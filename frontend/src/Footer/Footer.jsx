import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <NavLink to="/link1" className="footer-link">Link 1</NavLink>
          <NavLink to="/link2" className="footer-link">Link 2</NavLink>
          <NavLink to="/link3" className="footer-link">Link 3</NavLink>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
