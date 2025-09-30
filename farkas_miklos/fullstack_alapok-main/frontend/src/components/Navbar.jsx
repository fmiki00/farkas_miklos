import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Felhasználókezelő</h2>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Főoldal</Link>
        <Link to="/add" className="nav-link">Új felhasználó</Link>
        <Link to="/list" className="nav-link">Felhasználók listája</Link>
      </div>
    </nav>
  );
};

export default Navbar;
