// About.js
import React from 'react';
import Navbar from '../../components/Navbar';
import './About.css';

const About = () => {
  return (<div>
    <Navbar currentPage={"about"}></Navbar>
    <div className="About">
      
      <div className="content">
        <h1>Welcome!</h1>
        <p>This is a simple front-end CRUD application - User Management System.</p>
        <p>You can Create, Update and Delete users.</p>
        <p>For more info check it at <a href="https://github.com/ignashub/4industry-assignment" target="_blank" rel="noreferrer">here</a>.</p>
      </div>
    </div>
    </div>
  );
};

export default About;
