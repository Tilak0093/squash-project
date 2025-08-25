import React from "react";
import "./Team.css";

import peterparker from "../../assets/peterparker.png";
import elenagilberts from "../../assets/elenagilberts.png";
import peterparker1 from "../../assets/peterparker1.png";
import rosalinawilliam from "../../assets/rosalinawilliam.png";
import instateam from "../../assets/instateam.png";
import twitterteam from "../../assets/twitterteam.png";
import facebookteam from "../../assets/facebookteam.png";

const Team = () => {
  return (
    <section className="team-section text-center py-5">
      {/* Subtitle */}
      <p className="team-subtitle">| MEET OUR TEAM |</p>
      {/* Title */}
      <h2 className="team-title mb-5">Our Exclusive Agents</h2>

      <div className="container position-relative">
        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card team-card">
              <img
                src={peterparker}
                className="card-img-top"
                alt="Peter Parker"
              />
              <div className="card-body">
                <h5 className="card-name">Peter Parker</h5>
                <p className="card-role">Land Seller</p>
                <div className="social-icons">
                  <img src={instateam} alt="Instagram" />
                  <img src={twitterteam} alt="Twitter" />
                  <img src={facebookteam} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card team-card active-card">
              <img
                src={elenagilberts}
                className="card-img-top"
                alt="Elena Gilberts"
              />
              <div className="card-body">
                <h5 className="card-name">Elena Gilberts</h5>
                <p className="card-role">Land Seller</p>
                <div className="social-icons">
                  <img src={instateam} alt="Instagram" />
                  <img src={twitterteam} alt="Twitter" />
                  <img src={facebookteam} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card team-card">
              <img
                src={peterparker1}
                className="card-img-top"
                alt="Peter Parker"
              />
              <div className="card-body">
                <h5 className="card-name">Peter Parker</h5>
                <p className="card-role">Land Seller</p>
                <div className="social-icons">
                  <img src={instateam} alt="Instagram" />
                  <img src={twitterteam} alt="Twitter" />
                  <img src={facebookteam} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="card team-card">
              <img
                src={rosalinawilliam}
                className="card-img-top"
                alt="Rosalina William"
              />
              <div className="card-body">
                <h5 className="card-name">Rosalina William</h5>
                <p className="card-role">Land Seller</p>
                <div className="social-icons">
                  <img src={instateam} alt="Instagram" />
                  <img src={twitterteam} alt="Twitter" />
                  <img src={facebookteam} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="team-nav-btn team-left-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="team-nav-btn team-right-btn">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Team;
