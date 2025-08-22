import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="propertypro-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img 
              src="/logo.png" 
              alt="PropertyPro Logo" 
              className="header-logo"
              height="40"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link home-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/property">Property</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            
            {/* Get Started Button */}
            <div className="d-flex ms-lg-3">
              <button className="btn get-started-btn">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;