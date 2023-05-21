import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/4industry.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Navbar = ({ onCreate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateUser = () => {
    if (currentPage === 'about') {
      window.location.href = '/';
    } else {
      onCreate();
    }
  };
  

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-item">
        <Button onClick={handleCreateUser}>Create User</Button>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
