import React from "react";
import "./Latest.css";

// Import house images
import house1 from "../../assets/latesthouse1.png";
import house2 from "../../assets/latesthouse2.png";
import house3 from "../../assets/latesthouse3.png";
import house4 from "../../assets/latesthouse4.png";
import house5 from "../../assets/latesthouse5.png";
import house6 from "../../assets/latesthouse6.png";

// Import profile images
import jacobjones from "../../assets/jacobjones.png";
import diannerussel from "../../assets/diannerussel.png";
import robertfox from "../../assets/robertfox.png";
import jennywilson from "../../assets/jennywilson.png";
import bessiecooper from "../../assets/bessiecooper.png";
import lesliealexander from "../../assets/lesliealexander.png";

// Import icons
import car from "../../assets/car4.png";
import bath from "../../assets/bathroom4.png";
import sqft from "../../assets/sqft.png";
import share from "../../assets/share.png";
import heart from "../../assets/Heart.png";
import plus from "../../assets/Plus.png";

const properties = [
  { img: house1, profile: jacobjones, name: "Jacob Jones" },
  { img: house2, profile: diannerussel, name: "Dianne Russel" },
  { img: house3, profile: robertfox, name: "Robert Fox" },
  { img: house4, profile: jennywilson, name: "Jenny Wilson" },
  { img: house5, profile: bessiecooper, name: "Bessie Cooper" },
  { img: house6, profile: lesliealexander, name: "Leslie Alexander" },
];

export default function Latest() {
  return (
    <div className="container my-5 latest-section">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h6 className="latest-subtitle">| Latest Properties |</h6>
        <h2 className="latest-title">Discover our handpicked selection of top listings</h2>
      </div>

      {/* Property Cards */}
      <div className="row g-4">
        {properties.map((prop, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="card latest-card h-100">
              <img src={prop.img} className="card-img-top" alt="property" />
              <div className="card-body d-flex flex-column justify-content-between">

                {/* Top Section */}
                <div>
                  <h5 className="card-title">Beautiful Family House</h5>
                  <p className="price mt-1">$4,500</p>
                  <p className="card-text text-muted">Los Angeles, CA</p>

                  <div className="d-flex justify-content-between text-center my-3">
                    <div><img src={car} alt="car" className="icon" /> 2</div>
                    <div><img src={bath} alt="bathroom" className="icon" /> 2</div>
                    <div><img src={sqft} alt="sqft" className="icon" /> 1200 sqft</div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <img src={prop.profile} className="profile-img" alt="owner" />
                    <span className="ms-2">{prop.name}</span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <img src={share} alt="share" className="action-icon" />
                    <img src={heart} alt="heart" className="action-icon" />
                    <img src={plus} alt="plus" className="action-icon" />
                  </div>
                </div>

              </div> {/* card-body */}
            </div> {/* card */}
          </div> /* col */
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-5">
        <button className="see-all-btn">See All Properties</button>
      </div>
    </div> /* container */
  );
}
