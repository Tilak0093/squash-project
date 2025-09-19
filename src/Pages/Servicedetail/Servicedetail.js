import React from "react";
import "./Servicedetail.css";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";
import cardbg from "../../assets/servicecardbackground.png";

// gallery images
import house1 from "../../assets/detail1.png";
import house2 from "../../assets/detail2.png";
import house3 from "../../assets/detail3.png";

const ServiceDetail = () => {
  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Service Detail</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">Service Detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Main Section ---------- */}
      <section className="service-detail container py-5">
        <div className="row">
          {/* Left content */}
          <div className="col-lg-8">
            <button className="btn-buy">Buy Property</button>

            <h2 className="service-heading">
              We Help You To Buy Your Dream Home.
            </h2>
            <p className="service-desc-text">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI. Lorem Ipsum is that it has a more-or-
              less normal distribution of letters, as opposed to using 'Content
              here, content here', making it look like readable.
            </p>
            <p className="service-desc-text">
              Our dedicated risk and compliance consulting team assists clients
              in transforming uncertainty into advantageous prospects. We work
              collaboratively with organizations to identify & leverage the
              potential within their risk and compliance functions, enabling
              them to thrive in ever-changing business landscape.
            </p>

            {/* Property Gallery */}
            <h4 className="gallery-title">Property gallery</h4>
            <div className="row gallery-row mt-5">
              {[house1, house2, house3].map((img, idx) => (
                <div className="col-md-4 mb-3" key={idx}>
                  <img src={img} alt="gallery" className="gallery-img" />
                </div>
              ))}
            </div>

            {/* Quick Processing */}
            <h4 className="gallery-title ">Quick Processing</h4>
            <p className="service-desc-text">
              Your leading real estate advocate, transforming houses into
              dreams. Trust us to expertly guide you home.
            </p>

            {/* Cards */}
            
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-box">
              {[
                "Buy Home",
                "Property & Loan",
                "Sell Home",
                "Consulting Service",
                "Rent Home",
                "Mortgage",
              ].map((item, idx) => (
                <div key={idx} className="sidebar-item">
                  <span>{item}</span>
                  <button className="sidebar-btn">→</button>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                    <div className="servicedetail-num">{card.num}</div>
                    <h5 className="servicedetail-title">{card.title}</h5>
                    <p className="servicedetail-desc">
                      High level overviews. approaches overall value
                      proposition. Organically grow the holistic world view of
                      disruptive.
                    </p>
                  </div>
                </div>
              ))}
            </div>
      </section>
    </>
  );
};

export default ServiceDetail;
