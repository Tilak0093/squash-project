import React, { useState, useEffect } from "react";
import MainContent from "./MainContent/MainContent";
import "./Homepage.css";

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show popup immediately when page loads
    setShowPopup(true);
  }, []);

  const closePopup = () => setShowPopup(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribed with email:", email);
    setShowPopup(false);
  };

  return (
    <div className="app-container">
      <main className="main-content">
        <MainContent />
      </main>

      {/* Newsletter Splash Screen Popup */}
      {showPopup && (
        <div className="newsletter-overlay">
          <div className="newsletter-popup">
            {/* Decorative Elements */}
            <div className="decoration circle-purple circle-1"></div>
            <div className="decoration circle-yellow circle-2"></div>
            <div className="decoration circle-pink circle-3"></div>
            <div className="decoration circle-yellow circle-4"></div>
            <div className="decoration circle-yellow circle-5"></div>
            <div className="decoration triangle-purple triangle-1"></div>
            <div className="decoration triangle-yellow triangle-2"></div>
            <div className="decoration triangle-pink triangle-3"></div>
            <div className="decoration triangle-yellow triangle-4"></div>
            <div className="decoration triangle-yellow triangle-5"></div>

            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>

            <div className="popup-content">
              {/* Left Side - Image */}
              <div className="popup-left">
                <div className="image-container">
                  <img 
                    src="/path-to-your-house-image.png" 
                    alt="Newsletter" 
                    className="popup-image"
                  />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="popup-right">
                <h2 className="popup-title">Sign up</h2>
                <h3 className="popup-subtitle">Our Newsletter</h3>
                <p className="popup-description">
                  Discover the latest news on photography of the best camera
                </p>
                
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;