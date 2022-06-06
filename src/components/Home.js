import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home">
      <div className="homeTitle1">
        Our favorite places are full of surprises...
      </div>
      <div className="homeTitle2">The right gears means everything.</div>
      <div className="homeTitle3">Be prepared for any challenge.</div>
      <img
        src={require('../images/todd-diemer-fpNBYsymggk-unsplash.jpg')}
      ></img>
      <Link to="/shop">Shop now</Link>
    </div>
  );
};

// Photo by Todd Diemer on Unsplash
export default Home;
