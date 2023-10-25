import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import "./NavBar.css" 

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/mega-deals" className="nav-link">Mega Deals</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
