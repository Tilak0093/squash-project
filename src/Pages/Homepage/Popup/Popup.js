import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Popup.css";

import background from "../../../assets/popupbgimage.png";
import left from "../../../assets/popupleftimage.png";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  // Check if user has visited before in this browser session
  const hasVisited = sessionStorage.getItem("hasVisitedBefore");

  if (!hasVisited) {
    // First visit in this session - show popup
    setIsOpen(true);
    // Mark as visited for this session
    sessionStorage.setItem("hasVisitedBefore", "true");
  }
}, []);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className="popup-overlay">
      <div
        className="popup-container container-fluid"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="row align-items-center gx-0 popup-row">
          {/* LEFT SIDE IMAGE */}
          <div className="col-lg-6 col-md-6 col-12 popup-left text-center">
            <img src={left} alt="Newsletter visual" className="popup-left-image" />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="col-lg-6 col-md-6 col-12 popup-right text-lg-start text-center">
            <div className="popup-content">
              <h2 className="popup-title">
                Sign up <br />
                <span>Our Newsletter</span>
              </h2>
              <p className="popup-subtitle">
                Discover the latest news on photography of the best camera
              </p>

              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="form-control popup-input"
                  placeholder="Enter your email..."
                  required
                />
                <button type="submit" className="btn subscribes-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}