import React from "react";
import "./Neighborhood.css";
import newyork from "../../assets/newyork.jpg";
import atlanta from "../../assets/atlanta.jpg";
import singapore from "../../assets/singapore.jpg";
import paris from "../../assets/paris.jpg";
import arrow from "../../assets/arrow.png";

const Neighborhood = () => {
  return (
    <section className="neighborhood-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h6 className="neighborhood-subtitle">| NEIGHBORHOOD |</h6>
          <h2 className="neighborhood-title">Find Your Neighborhood</h2>
        </div>

        {/* Cards Row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card neighborhood-card text-white">
              <img src={newyork} className="card-img" alt="New York" />
              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-end">
                  <button className="btn arrow-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
                <div>
                  <h5 className="card-title">New York</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card neighborhood-card text-white">
              <img src={atlanta} className="card-img" alt="Atlanta" />
              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-end">
                  <button className="btn arrow-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
                <div>
                  <h5 className="card-title">Atlanta</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card neighborhood-card text-white">
              <img src={singapore} className="card-img" alt="Singapore" />
              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-end">
                  <button className="btn arrow-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
                <div>
                  <h5 className="card-title">Singapore</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card neighborhood-card text-white">
              <img src={paris} className="card-img" alt="Paris" />
              <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-end">
                  <button className="btn arrow-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
                <div>
                  <h5 className="card-title">Paris</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Arrows */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="nav-btn left-btn">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="nav-btn right-btn">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>   
  );
};

export default Neighborhood;