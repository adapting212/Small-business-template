import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/navbar.scss';

const Navbar = ({ dispatch, state }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isExpanded ? 'expanded' : ''}`}>
      <div className={`nav-logo ${isExpanded ? 'expanded' : ''}`}>
        <img src={logo} alt="Logo" className="nav-image" width="210" height="29" aria-hidden="true" decoding="async" />
      </div>
      <div className={`nav-menu ${isExpanded ? 'expanded' : ''}`}>
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
        <NavLink to="/" className="nav-link" activeClassName="active">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

