import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/4industry.png';
import Button from '../Button';

const Navbar = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="nav-menu">
        <Button onClick={onCreate}>Create User</Button>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
