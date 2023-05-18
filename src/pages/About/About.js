// About.js
import React from 'react';
import Navbar from '../../components/Navbar';
import './About.css';

const About = () => {
  return (<div>
    <Navbar></Navbar>
    <div className="About">
      
      <div className="content">
        <h1>Welcome!</h1>
        <p>This is a simple CRUD application - User Management System.</p>
        <p>For more info check it at Github.</p>
      </div>
    </div>
    </div>
  );
};

export default About;
