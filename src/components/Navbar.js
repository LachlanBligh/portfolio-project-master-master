// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
