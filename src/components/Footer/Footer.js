import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";
import linked from "../../assets/linked.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          {/* Logo + Description */}
          <div className="col-md-6 col-lg-3">
            <img src={logo} alt="Dreamzkape Logo" className="footer-logo" />
            <p className="footer-title">
              Dreamz<span>kape</span>
            </p>
            <p className="footer-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed consequuntur magni dolores eos qui ratione.
            </p>
            <div className="footer-icons">
              <a href="#"><img src={facebook} alt="Facebook" /></a>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
              <a href="#"><img src={insta} alt="Instagram" /></a>
              <a href="#"><img src={linked} alt="LinkedIn" /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-2">
            <h4>Contact</h4>
            <p>(629) 555-0129</p>
            <p>info@example.com</p>
            <p>6391 Elgin St. Celina, 10299</p>
          </div>

          {/* Page */}
          <div className="col-md-6 col-lg-2">
            <h4>Page</h4>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Property</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2">
            <h4>Quick Links</h4>
            <ul className="footer-list">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-md-12 col-lg-3">
            <h4 className="subscribe">Subscribe</h4>
            <div className="subscribe-box">
              <input
                type="email"
                className="form-control"
                placeholder="Get product updates"
              />
              <button className="btn">➜</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom mt-4">
          <p>© 2023 Copyright Dreamzkape, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
