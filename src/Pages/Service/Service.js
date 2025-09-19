import React from "react";
import "./Service.css";
import Team from "../Homepage/Team/Team";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

// card background image
import cardbg from "../../assets/servicecardbackground.png";

// house images
import house1 from "../../assets/service1.png";

// stats background image
import Home2 from "../../assets/aboutus2.jpg";

const Service = () => {
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
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
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
                    High level overviews. approaches lverall value
                    proposition. Organically grow the holistic world
                    view of disruptive.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About Section ---------- */}
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
                Distinctively re-engineer revolutionary meta-services and premium
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolore.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 mb-3">
              {/* Embedded YouTube Video */}
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/njX2bu-_Vw4?si=cAWngxfde0vowaAG"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <h3 className="service-about-title1">We’re reinventing the space</h3>
              <p className="service-about-text">
                Distinctively re-engineer revolutionary meta-services and premium.
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
              <ul className="about-list">
                <li>
                  <strong className="prabhu-text">Full Services</strong> <br />
                  <p className="service-list-text">
                    Interactively procrastinate high-payoff content without <br />
                    backward-compatible data.
                  </p>
                </li>
                <li>
                  <strong className="prabhu-text">Safe Investments</strong> <br />
                  <p className="service-list-text">
                    Interactively procrastinate high-payoff content without backward-
                    <br />
                    compatible data.
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
      <section className="team-section py-5">
        <div className="container text-center">
          <div className="row justify-content-center mt-5">
            <Team />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
