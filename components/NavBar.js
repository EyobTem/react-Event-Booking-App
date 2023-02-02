import React from 'react';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img
          className="navbar-logo-img"
          src="https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/logo.png"
          alt=""
          onClick={() => navigate('/')}
        />
      </div>

      <ul className="navbar-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="navbar-menu">
          <li>
            <href onClick={() => navigate('/')}>Dashboard</href>
          </li>
          <li>
            <href onClick={() => navigate('/')}>Events</href>
          </li>
          <li>
            <href onClick={() => navigate('/')}>Help</href>
          </li>
          <li>
            <href onClick={() => navigate('/')}>Logout</href>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
