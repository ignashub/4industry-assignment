// About.js
import React from 'react';
import Navbar from '../../components/Navbar';
import './About.css';

const About = () => {
  return (<div>
    <Navbar></Navbar>
    <div className="About">
      
      <div className="content">
        <h1>Welcome to the About Page</h1>
        <p>This is some dummy text that will appear in the middle of the page.</p>
      </div>
    </div>
    </div>
  );
};

export default About;
