import React from 'react'
import './Navbar.css';
import Logo from '../../assets/4industry.png';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-logo">
      {/* Replace with your actual logo */}
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
    </div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
  )
}

export default Navbar