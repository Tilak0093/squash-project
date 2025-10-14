import React from "react";
import "./About.css";
import SmartHome from "../../../assets/smarthome.png";
import AboutPerson from "../../../assets/aboutperson.png";
import Right from "../../../assets/aboutright.png"; // Single image for right side

const About = () => {
  return (
    <section className="about-section container my-5 pt-5">
      <div className="row align-items-center">
        {/* ---------- LEFT COLUMN (Text + Cards) ---------- */}
        <div className="col-lg-6 mb-4">
          {/* Subtitle */}
          <h6 className="about-subtitle">| Who We Are |</h6>

          {/* Title */}
          <h2 className="about-title">
            Assisting individuals locating <br /> the appropriate real estate.
          </h2>

          <p className="about-text-muted">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>

          {/* First Card */}
          <div className="about-card about-card-first">
            <img src={SmartHome} alt="Smart Home" className="about-card-icon" />
            <div className="about-card-text">
              <h6 className="about-card-title-purple">Donec porttitor euismod</h6>
              <p className="about-card-description">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="about-card about-card-second mt-4">
            <img src={AboutPerson} alt="About Person" className="about-card-icon" />
            <div className="about-card-text">
              <h6 className="about-card-title-dark">Donec porttitor euismod</h6>
              <p className="about-card-description">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT COLUMN (Single Image) ---------- */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <div className="about-right-img-wrapper">
            <img
              src={Right}
              alt="About Illustration"
              className="about-right-img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;