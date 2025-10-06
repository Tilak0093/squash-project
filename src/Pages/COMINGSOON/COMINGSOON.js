import React from "react";
import Countdown from "react-countdown";
import "./COMINGSOON.css";

// images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

//bg image
import background from "../../assets/comingsoonbg.png"

const ComingSoon = () => {
  // countdown target (27 days from now)
  const target = new Date();
  target.setDate(target.getDate() + 27);

  const renderer = ({ days, hours, minutes, seconds }) => {
    const two = (v) => String(v).padStart(2, "0");
    return (
      <div className="countdown-grid">
        <div className="count-box">
          <div className="count-num">{two(days)}</div>
          <div className="count-label">Days</div>
        </div>
        <div className="count-box">
          <div className="count-num">{two(hours)}</div>
          <div className="count-label">Hours</div>
        </div>
        <div className="count-box">
          <div className="count-num">{two(minutes)}</div>
          <div className="count-label">Minutes</div>
        </div>
        <div className="count-box">
          <div className="count-num">{two(seconds)}</div>
          <div className="count-label">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Coming Soon</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Coming Soon Section ---------- */}
      <section className="coming-soon-section"    >
        <div className="container coming-inner"  style={{ backgroundImage: `url(${background})` }}>
          <div className="coming-frame">
            <h2 className="coming-title">COMING SOON</h2>
          </div>

          <h3 className="stay-tuned">STAY TUNED</h3>

          <div className="countdown-wrapper">
            <Countdown date={target} renderer={renderer} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
