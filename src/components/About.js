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
        <img src={github} alt="github"></img>
        <img src={instagram} alt="instagram"></img>
        <img src={facebook} alt="facebook"></img>
        <img src={twitter} alt="twitter"></img>
      </div>
    </div>
  );
};

export default About;
