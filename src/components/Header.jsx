import React from 'react';
import './Header.css';
import heroImage from '../assets/hero.png'; // Pastikan gambar ini ada

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">NeonWeather</h1>
        <p className="header-subtitle">Your vibrant window to the world's weather.</p>
      </div>
      <img src={heroImage} alt="Hero" className="header-hero" />
    </header>
  );
};

export default Header;