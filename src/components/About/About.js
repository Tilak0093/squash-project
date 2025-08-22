import React from "react";
import "./About.css";
import House1 from "../../assets/House1.png";
import House2 from "../../assets/House2.png";
import House3 from "../../assets/House3.png";
import Circle1 from "../../assets/circle1.png";
import Circle2 from "../../assets/circle2.png";

const About = () => {
  return (
    <section className="container my-5 about-section">
      <div className="row align-items-center">
        
        {/* Left Column (Text + Cards) */}
        <div className="col-lg-6 mb-4">
          <h6 className="fw-bold text-uppercase text-purple">| Who We Are |</h6>
          <h2 className="fw-bold text-dark mb-3">
            Assisting individuals locating the <br /> appropriate real estate.
          </h2>
          <p className="text-muted">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim pu. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>

          {/* First Card */}
          <div className="about-card border border-purple p-3 mb-3 rounded-3">
            <h6 className="fw-bold text-purple">Donec porttitor euismod</h6>
            <p className="text-muted mb-0">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>

          {/* Second Card */}
          <div className="about-card shadow-sm p-3 rounded-3">
            <h6 className="fw-bold text-dark">Donec porttitor euismod</h6>
            <p className="text-muted mb-0">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>

        {/* Right Column (Images + Circles) */}
        <div className="col-lg-6 about-images">
          <div className="d-flex">
          <div className="main-image">
            <img src={House1} alt="estate" className="img-fluid shadow" />
            <div className="about-badge">
              <span>Since 2024 - Sky Estate</span>
            </div>
          </div>

          <div className="sub-images">
            <img src={House2} alt="room" className="img-fluid shadow" />
            <img src={House3} alt="living room" className="img-fluid shadow" />
          </div>
          </div>
          {/* Decorative Circles */}
          <img src={Circle1} alt="circle" className="circle circle1" />
          <img src={Circle2} alt="circle" className="circle circle2" />
        </div>

      </div>
    </section>
  );
};

export default About;
