import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import icon from '../images/iconmonstr-github-1.svg';
import '../styles/Main.css';

const Main = () => {
  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Outlet />
      </div>
      <div id="footer">
        <div>sleander94</div>
        <div>
          <a href="https://github.com/sleander94">
            <img src={icon} alt="github logo"></img>
          </a>
        </div>
        <div>2022</div>
      </div>
    </div>
  );
};

export default Main;
