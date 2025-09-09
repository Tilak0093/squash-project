import React, { useState, useEffect } from "react";
import "./Team.css";

import peterparker from "../../assets/peterparker.png";
import elenagilberts from "../../assets/elenagilberts.png";
import peterparker1 from "../../assets/peterparker1.png";
import rosalinawilliam from "../../assets/rosalinawilliam.png";
import instateam from "../../assets/instateam.png";
import twitterteam from "../../assets/twitterteam.png";
import facebookteam from "../../assets/facebookteam.png"; 

const Team = () => {
  const teamMembers = [
    { img: peterparker, name: "Peter Parker", role: "Land Seller" },
    { img: elenagilberts, name: "Elena Gilberts", role: "Land Seller" },
    { img: peterparker1, name: "Peter Parker", role: "Land Seller" },
    { img: rosalinawilliam, name: "Rosalina William", role: "Land Seller" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to set visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 992) return 4; // large screen
    if (window.innerWidth >= 768) return 2; // tablet
    return 1; // mobile
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= teamMembers.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <section className="team-section text-center py-5">
      <p className="team-subtitle">| MEET OUR TEAM |</p>
      <h2 className="team-title mb-5">Our Exclusive Agents</h2>

      <div className="container position-relative">
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleCards
              }%)`,
              width: `${(teamMembers.length * 100) / visibleCards}%`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                className="card team-card"
                key={index}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <img
                  src={member.img}
                  className="card-img-top"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-name">{member.name}</h5>
                  <p className="card-role">{member.role}</p>
                  <div className="social-icons">
                    <img src={instateam} alt="Instagram" />
                    <img src={twitterteam} alt="Twitter" />
                    <img src={facebookteam} alt="Facebook" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="team-nav-btn team-left-btn" onClick={prevSlide}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="team-nav-btn team-right-btn" onClick={nextSlide}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Team;
