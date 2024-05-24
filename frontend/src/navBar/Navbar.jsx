import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Cookies from "universal-cookie";
import {jwtDecode} from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.scss";

const Navbar = ({ dispatch, state }) => {
 

  

 
  return (
    <>
      
      <nav className="nav">
       
        <div className={`nav-menu`}>
          <NavLink to="/" className="nav-link" activeClassName="active">
            
          </NavLink>

          <NavLink to="/admin" className="nav-link" activeClassName="active">
              Admin
            </NavLink>
            <NavLink to="/admin" className="nav-link" activeClassName="active">
              Admin
            </NavLink>
         

        </div>
      </nav>
    </>
  );
};

export default Navbar;

