import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/home">
        <h1 className="title">Outdoor Store</h1>
      </Link>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
