import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="propertypro-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 w-100">
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
                <a className="nav-link" href="/AboutUs">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blogs">Blog</a>
              </li>

              {/* Service Dropdown */}
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="/service" 
                  id="serviceDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                  <li>
                    <a className="dropdown-item" href="/service">Service</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/service-detail">Service Detail</a>
                  </li>
                </ul>
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
