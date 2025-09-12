import React from "react";
import "./About.css";
import House1 from "../../../assets/House1.png";
import House2 from "../../../assets/House2.png";
import House3 from "../../../assets/House3.png";
import Center1 from "../../../assets/Center1.png"; 
import Circle1 from "../../../assets/circle1.png";
import Circle2 from "../../../assets/circle2.png";
import SmartHome from "../../../assets/smarthome.png";
import AboutPerson from "../../../assets/aboutperson.png";

const About = () => {
  return (
    <section className="about-section container my-5 pt-5"> 
      <div className="row align-items-center">
        
        {/* Left Column (Text + Cards) */}
        <div className="col-lg-6 mb-4">
          {/* Subtitle */}
          <h6 className="about-subtitle">| Who We Are |</h6>

          {/* Title */}
          <h2 className="about-title">
            Assisting individuals locating <br/> the appropriate real estate.
          </h2>

          <p className="about-text-muted">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim pu. Nulla convallis ipsum molestie nibh malesuada, ac
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
          <div className="about-card about-card-second">
            <img src={AboutPerson} alt="About Person" className="about-card-icon" />
            <div className="about-card-text">
              <h6 className="about-card-title-dark">Donec porttitor euismod</h6>
              <p className="about-card-description">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Images + Circles) */}
        <div className="col-lg-6 about-images d-flex">
          {/* Main Large Image */}
          <div className="main-image position-relative">
            <img src={House1} alt="estate" className=" aboutimage1 img-fluid" />
            {/* Round Badge */}
            <div className="about-badge">
              <img src={Center1} alt="icon" className="icon-img"/>
            </div>
          </div>

          {/* Two Stacked Smaller Images */}
          <div className="sub-images d-flex flex-column gap-3">
            <img src={House2} alt="room" className="abouthouse2" />
            <img src={House3} alt="living room" className="abouthouse3" />
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
