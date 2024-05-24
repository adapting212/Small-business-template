import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Cookies from "universal-cookie";
import {jwtDecode} from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.scss";

const Navbar = ({ dispatch, state }) => {
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userUsername, setUserUsername] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdown visibility

  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.userId);
      setUserEmail(decodedToken.userEmail);
      setUserUsername(decodedToken.userUsername);
      dispatch({ type: "SET_LOGIN_STATE", payload: true });
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    cookies.remove("token");
    dispatch({ type: "SET_LOGIN_STATE", payload: false });
    window.location.reload();
  };

  const decodedToken = token ? jwtDecode(token) : null;
  const adminToken = decodedToken ? decodedToken.userAdmin : false;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (link) => {
    setDropdownOpen(link);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <>
      
      <nav className="nav">
        <div className="bars" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" activeClassName="active">
            
          </NavLink>

          {adminToken && (
            <NavLink to="/admin" className="nav-link" activeClassName="active">
              Admin
            </NavLink>
          )}

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('store')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/aboutus" className="nav-link" activeClassName="active">
              Store
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'store' ? 'show' : ''}`}>
              <NavLink to="/store/sub1" className="dropdown-link">Sub Link 1</NavLink>
              <NavLink to="/store/sub2" className="dropdown-link">Sub Link 2</NavLink>
              <NavLink to="/store/sub3" className="dropdown-link">Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('mac')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/mac" className="nav-link" activeClassName="active">
              Mac
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'mac' ? 'show' : ''}`}>
              <NavLink to="/mac/sub1" className="dropdown-link">Mac Sub Link 1</NavLink>
              <NavLink to="/mac/sub2" className="dropdown-link">Mac Sub Link 2</NavLink>
              <NavLink to="/mac/sub3" className="dropdown-link">Mac Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('ipad')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/ipad" className="nav-link" activeClassName="active">
              iPad
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'ipad' ? 'show' : ''}`}>
              <NavLink to="/ipad/sub1" className="dropdown-link">iPad Sub Link 1</NavLink>
              <NavLink to="/ipad/sub2" className="dropdown-link">iPad Sub Link 2</NavLink>
              <NavLink to="/ipad/sub3" className="dropdown-link">iPad Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('iphone')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/iphone" className="nav-link" activeClassName="active">
              iPhone
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'iphone' ? 'show' : ''}`}>
              <NavLink to="/iphone/sub1" className="dropdown-link">iPhone Sub Link 1</NavLink>
              <NavLink to="/iphone/sub2" className="dropdown-link">iPhone Sub Link 2</NavLink>
              <NavLink to="/iphone/sub3" className="dropdown-link">iPhone Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('watch')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/iwatch" className="nav-link" activeClassName="active">
              Watch
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'watch' ? 'show' : ''}`}>
              <NavLink to="/watch/sub1" className="dropdown-link">Watch Sub Link 1</NavLink>
              <NavLink to="/watch/sub2" className="dropdown-link">Watch Sub Link 2</NavLink>
              <NavLink to="/watch/sub3" className="dropdown-link">Watch Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('vision')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/vision" className="nav-link" activeClassName="active">
              Vision
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'vision' ? 'show' : ''}`}>
              <NavLink to="/vision/sub1" className="dropdown-link">Vision Sub Link 1</NavLink>
              <NavLink to="/vision/sub2" className="dropdown-link">Vision Sub Link 2</NavLink>
              <NavLink to="/vision/sub3" className="dropdown-link">Vision Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('airpods')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/airpods" className="nav-link" activeClassName="active">
              AirPods
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'airpods' ? 'show' : ''}`}>
              <NavLink to="/airpods/sub1" className="dropdown-link">AirPods Sub Link 1</NavLink>
              <NavLink to="/airpods/sub2" className="dropdown-link">AirPods Sub Link 2</NavLink>
              <NavLink to="/airpods/sub3" className="dropdown-link">AirPods Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('tvhome')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/tvhome" className="nav-link" activeClassName="active">
              TV & Home
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'tvhome' ? 'show' : ''}`}>
              <NavLink to="/tvhome/sub1" className="dropdown-link">TV & Home Sub Link 1</NavLink>
              <NavLink to="/tvhome/sub2" className="dropdown-link">TV & Home Sub Link 2</NavLink>
              <NavLink to="/tvhome/sub3" className="dropdown-link">TV & Home Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('entertainment')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/entertainment" className="nav-link" activeClassName="active">
              Entertainment
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'entertainment' ? 'show' : ''}`}>
              <NavLink to="/entertainment/sub1" className="dropdown-link">Entertainment Sub Link 1</NavLink>
              <NavLink to="/entertainment/sub2" className="dropdown-link">Entertainment Sub Link 2</NavLink>
              <NavLink to="/entertainment/sub3" className="dropdown-link">Entertainment Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('accessories')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/accessories" className="nav-link" activeClassName="active">
              Accessories
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'accessories' ? 'show' : ''}`}>
              <NavLink to="/accessories/sub1" className="dropdown-link">Accessories Sub Link 1</NavLink>
              <NavLink to="/accessories/sub2" className="dropdown-link">Accessories Sub Link 2</NavLink>
              <NavLink to="/accessories/sub3" className="dropdown-link">Accessories Sub Link 3</NavLink>
            </div>
          </div>

          <div
            className="nav-link-container"
            onMouseEnter={() => handleMouseEnter('support')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/support" className="nav-link" activeClassName="active">
              Support
            </NavLink>
            <div className={`dropdown ${dropdownOpen === 'support' ? 'show' : ''}`}>
              <NavLink to="/support/sub1" className="dropdown-link">Support Sub Link 1</NavLink>
              <NavLink to="/support/sub2" className="dropdown-link">Support Sub Link 2</NavLink>
              <NavLink to="/support/sub3" className="dropdown-link">Support Sub Link 3</NavLink>
            </div>
          </div>

          <NavLink to="/search" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faSearch} className="nav-icon" />
          </NavLink>
          <NavLink to="/shop" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faShoppingBag} className="nav-icon" />
          </NavLink>

          {adminToken && (
            <NavLink to="/listings" className="nav-link" activeClassName="active">
              Listings
            </NavLink>
          )}

          {userId ? (
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Manage Account
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

