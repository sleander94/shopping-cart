import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>Nav</h1>
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <div>
        <Outlet />
      </div>
    </nav>
  );
};

export default Nav;
