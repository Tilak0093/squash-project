import React, { useRef } from "react";
import Slider from "react-slick";
import "./Neighborhood.css";
import newyork from "../../../assets/newyork.jpg";
import atlanta from "../../../assets/atlanta.jpg";
import singapore from "../../../assets/singapore.jpg";
import paris from "../../../assets/paris.jpg";
import arrow from "../../../assets/arrow.png";

const Neighborhood = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 on desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 767, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (

    
    <section className="neighborhood-section">
      <div className="container d-contents">
        {/* Section Title */}
        <div className="section-header">
          <h6 className="neighborhood-subtitle d-flex justify-content-center">| NEIGHBORHOOD |</h6>
          <h2 className="neighborhood-title">Find Your Neighborhood</h2>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={newyork} alt="New York" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">New York</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={atlanta} alt="Atlanta" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">Atlanta</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={singapore} alt="Singapore" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">Singapore</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={paris} alt="Paris" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">Paris</h5>
                  <p className="property-count">250 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={newyork} alt="Chicago" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">Chicago</h5>
                  <p className="property-count">180 Property</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="neighborhood-card">
              <img src={atlanta} alt="Dubai" className="card-img" />
              <div className="card-overlay">
                <button className="arrow-btn">
                  <img src={arrow} alt="arrow" />
                </button>
                <div className="card-info">
                  <h5 className="card-title">Dubai</h5>
                  <p className="property-count">320 Property</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        {/* Custom Navigation Arrows */}
        <div className="carousel-controls">
          <button
            className="nav-btn left-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            className="nav-btn right-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Neighborhood;
