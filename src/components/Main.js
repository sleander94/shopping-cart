import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Main.css';

const Main = () => {
  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
