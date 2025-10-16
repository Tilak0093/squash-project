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
    slidesToShow: 4, // Desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 767, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="neighborhood-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h6 className="neighborhood-subtitle">| NEIGHBORHOOD |</h6>
          <h2 className="neighborhood-title">Find Your Neighborhood</h2>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {[
            { img: newyork, title: "New York", count: "250 Property" },
            { img: atlanta, title: "Atlanta", count: "250 Property" },
            { img: singapore, title: "Singapore", count: "250 Property" },
            { img: paris, title: "Paris", count: "250 Property" },
            { img: newyork, title: "Chicago", count: "180 Property" },
            { img: atlanta, title: "Dubai", count: "320 Property" },
          ].map((city, index) => (
            <div className="neighborhood-card-wrapper" key={index}>
              <div className="neighborhood-card">
                <img src={city.img} alt={city.title} className="card-img" />
                <div className="card-overlay">
                  <button className="arrow-btn">
                    <img src={arrow} alt="arrow" />
                  </button>
                  <div className="card-info">
                    <h5 className="card-title">{city.title}</h5>
                    <p className="property-count">{city.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows — Always visible */}
        <div className="carousel-controls">
          <button
            className="nav-btn left-btn"
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous neighborhood"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            className="nav-btn right-btn"
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next neighborhood"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Neighborhood;