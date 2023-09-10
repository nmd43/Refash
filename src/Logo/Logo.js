import React from 'react';
import './Logo.css';
import logoImage from '../../src/images/logo-no-background.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="My Logo" />
    </div>
  );
};

export default Logo;