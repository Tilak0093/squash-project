import React, { useState, useEffect } from "react";
import "./Service.css";
import Team from "../Homepage/Team/Team";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";
import cardbg from "../../assets/servicecardbackground.png";
import house1 from "../../assets/service1.png";
import house2 from "../../assets/service2.png";
import Home2 from "../../assets/aboutus2.jpg";

const VIDEO_ID = "njX2bu-_Vw4"; // your YouTube video id

const Service = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // close on ESC and lock body scroll while modal open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsPlaying(false);
    };
    if (isPlaying) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isPlaying]);

  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Service</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img src={Diamond} alt="separator" className="breadcrumb-separator" />
              <span className="breadcrumb-current">Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Our Service Cards ---------- */}
      <section className="our-service py-5">
        <div className="container text-center">
          <h6 className="section-subtitle">| Our Service |</h6>
          <h2 className="section-title mb-5">Our Main Focus</h2>

          <div className="row">
            {[
              { num: "01", title: "Planning stage" },
              { num: "02", title: "Development" },
              { num: "03", title: "New way of living" },
            ].map((card, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div
                  className="service-card"
                  style={{ backgroundImage: `url(${cardbg})` }}
                >
                  <div className="service-num">{card.num}</div>
                  <h5 className="service-title">{card.title}</h5>
                  <p className="service-desc">
                    High level overviews. approaches overall value proposition.
                    Organically grow the holistic world view of disruptive.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About Section (image + play button) ---------- */}
      <section className="about-service py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-3">
              <img src={house1} alt="house" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h3 className="service-about-title">
                Learn More About Who We Are in Real Estate
              </h3>
              <p className="service-about-text">
                Distinctively re-engineer revolutionary meta-services and premium.
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolore.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Right: image with play button overlay */}
            <div className="col-md-6 order-md-2 mb-3">
              <div className="video-cta" aria-hidden={isPlaying ? "true" : "false"}>
                <img src={house2} alt="video preview" className="img-fluid rounded" />
                <button
                  className="play-button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                >
                  <span className="play-ring" aria-hidden="true">
                    <span className="play-inner" aria-hidden="true">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="play-triangle" role="img" aria-hidden="true">
                        <path d="M8 5v14l11-7z" fill="#ffffff" />
                      </svg>
                    </span>
                  </span> 
                </button>
              </div>
            </div>

            <div className="col-md-6 order-md-1">
              <h3 className="service-about-title1">We’re reinventing the space</h3>
              <p className="service-about-text">
                Distinctively re-engineer revolutionary meta-services and premium.
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>

              <ul className="about-list">
                <li>
                  <strong className="prabhu-text">Full Services</strong>
                  <p className="service-list-text">
                    Interactively procrastinate high-payoff content without backward-compatible data.
                  </p>
                </li>
                <li>
                  <strong className="prabhu-text">Safe Investments</strong>
                  <p className="service-list-text">
                    Interactively procrastinate high-payoff content without backward-compatible data.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section
        className="stats-section mt-4"
        style={{ backgroundImage: `url(${Home2})` }}
      >
        <div className="stats-overlay">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">56,180</h2>
                <p className="stats-label">In property sales</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">+18</h2>
                <p className="stats-label">Years Of Experience</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">99%</h2>
                <p className="stats-label">Customer satisfaction</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">25K+</h2>
                <p className="stats-label">Property Transaction</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">2,918</h2>
                <p className="stats-label">Price Reduce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Team Section ---------- */}
      <section className="team-section ">
        <div className="container text-center">
          <div className="row justify-content-center ">
            <Team />
          </div>
        </div>
      </section>

      {/* ---------- Video Modal (opened when play clicked) ---------- */}
      {isPlaying && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPlaying(false)}
        >
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              aria-label="Close video"
              onClick={() => setIsPlaying(false)}
            >
              ×
            </button>

            <div className="video-iframe">
              <iframe
                title="Service video"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&showinfo=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
