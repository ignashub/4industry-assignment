import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/4industry.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Navbar = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <Button onClick={onCreate}>Create User</Button>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
