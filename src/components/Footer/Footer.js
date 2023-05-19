import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the icons from react-icons
import './Footer.css';

const Footer = () => {
  return (
      <div className="footer">
          <div className="copy-text">
              &copy; {new Date().getFullYear()} Ignas Apšega
          </div>
          <div className="footer-icons">
              <a href="https://www.linkedin.com/in/ignas-ap%C5%A1ega-4495601bb/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="icon" size={24} />
              </a>
              <a href="https://github.com/ignashub/4industry-assignment" target="_blank" rel="noreferrer">
                  <FaGithub className="icon" size={24} />
              </a>
          </div>
      </div>
  )
}

export default Footer;
