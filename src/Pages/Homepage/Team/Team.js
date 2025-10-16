import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";

import "./Team.css";

import peterparker from "../../../assets/peterparker.png";
import elenagilberts from "../../../assets/elenagilberts.png";
import peterparker1 from "../../../assets/peterparker1.png";
import rosalinawilliam from "../../../assets/rosalinawilliam.png";
import instateam from "../../../assets/instateam.png";
import twitterteam from "../../../assets/twitterteam.png";
import facebookteam from "../../../assets/facebookteam.png";

const Team = () => {
  const swiperRef = useRef(null);

  const teamMembers = [
    { img: peterparker, name: "Peter Parker", role: "Land Seller" },
    { img: elenagilberts, name: "Elena Gilberts", role: "Land Seller" },
    { img: peterparker1, name: "Peter Parker", role: "Land Seller" },
    { img: rosalinawilliam, name: "Rosalina William", role: "Land Seller" },
    { img: peterparker, name: "Peter Parker", role: "Land Seller" },
    { img: elenagilberts, name: "Elena Gilberts", role: "Land Seller" },
  ];

  return (
    <section className="team-section text-center py-5 position-relative">
      <p className="team-subtitle">| MEET OUR TEAM |</p>
      <h2 className="team-title mb-5">Our Exclusive Agents</h2>

      <div className="custom container position-relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="card team-card ">
                <img
                  src={member.img}
                  className="card-img-top img-fluid"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-name">{member.name}</h5>
                  <div className="custom-body">
                  <p className="card-role">{member.role}</p>
                  <div className="social-icons">
                    <img src={instateam} alt="Instagram" />
                    <img src={twitterteam} alt="Twitter" />
                    <img src={facebookteam} alt="Facebook" />
                  </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          className="team-nav-btn team-left-btn"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        <button
          className="team-nav-btn team-right-btn"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Team;