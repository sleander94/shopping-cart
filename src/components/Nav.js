import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/shopping-cart/home" className="title">
        Outdoor Store
      </Link>
      <div className="links">
        <Link to="/shopping-cart/home">Home</Link>
        <Link to="/shopping-cart/shop">Shop</Link>
        <Link to="/shopping-cart/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
