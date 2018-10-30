import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/saved">Saved</Link>
      </div>
    </div>
  </nav>
)

export default NavBar;
