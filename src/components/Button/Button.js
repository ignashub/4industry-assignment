import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type }) => {
  const buttonClass = type === 'delete' ? 'custom-button delete' : 'custom-button';

  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
