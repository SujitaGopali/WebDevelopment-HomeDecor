import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact us</a>
          </div>
          <div className="nav-icons">
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Let's make your home beautiful together.</h1>
          </div>
          
          <div className="hero-visual">
            <img src="/images/room-scene.jpg" alt="Beautiful home interior" className="room-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;