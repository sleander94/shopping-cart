import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home">
      <div className="homeTitle1">
        Our favorite places are full of surprises...
      </div>
      <div className="homeTitle2">The right gear means everything.</div>
      <div className="homeTitle3">Be prepared for any challenge.</div>
      <div className="imageContainer">
        <img
          src={require('../images/todd-diemer-fpNBYsymggk-unsplash.jpg')}
        ></img>
        <div className="credit">Photo by Todd Diemer on Unsplash</div>
      </div>
      <Link to="/shop">Shop now</Link>
    </div>
  );
};

export default Home;
