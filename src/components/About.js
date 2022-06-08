import React from 'react';
import github from '../images/iconmonstr-github-1.svg';
import instagram from '../images/iconmonstr-instagram-11.svg';
import facebook from '../images/iconmonstr-facebook-1.svg';
import twitter from '../images/iconmonstr-twitter-1.svg';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about">
      <div className="icons">
        <a href="https://github.com/sleander94/">
          <img src={github} alt="github"></img>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src={instagram} alt="instagram"></img>
        </a>
        <a href="https://c.tenor.com/GbutACtJBTMAAAAd/cat.gif">
          <img src={facebook} alt="facebook"></img>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src={twitter} alt="twitter"></img>
        </a>
      </div>
    </div>
  );
};

export default About;
