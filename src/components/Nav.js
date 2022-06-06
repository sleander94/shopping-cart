import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div id="page">
      <nav id="nav">
        <div className="title">Outdoor Store</div>
        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
