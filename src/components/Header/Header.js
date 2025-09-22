import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="propertypro-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 w-100">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img 
              src="/logo.png" 
              alt="PropertyPro Logo" 
              className="header-logo"
              height="40"
            />
          </NavLink>

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

              {/* Home */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              {/* About */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs">
                  About
                </NavLink>
              </li>

              {/* Blog Dropdown */}
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="/Blogs" 
                  id="blogDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Blog
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/Blogs">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/blog-detail">
                      Blog Detail
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Service Dropdown */}
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="/service" 
                  id="serviceDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Service
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/service">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/service-detail">
                      Service Detail
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Property Dropdown */}
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="/property" 
                  id="propertyDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Property
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="propertyDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/property">
                      Property
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/property-detail">
                      Property Detail
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
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
