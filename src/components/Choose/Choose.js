import React from "react";
import "./Choose.css";
import piggybank from "../../assets/piggybank.png";
import house from "../../assets/house.png";
import hands from "../../assets/hands.png";
import map from "../../assets/map.png";
import cash from "../../assets/cash.png";

const Choose = () => {
  return (
    <section className="choose-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="choose-subtitle">| WHY CHOOSE US |</p>
          <h2 className="choose-title">
            Why Choose Our Properties <br /> Of Real Estate Industries
          </h2>
        </div>

        {/* First Row */}
        <div className="row mb-4">
          {/* Card 1 (Vertical Layout) */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm d-flex flex-column">
              <div className="text-center p-3">
                <img
                  src={piggybank}
                  className="choose-img-top"
                  alt="Budget Friendly"
                />
              </div>
              <div className="card-body flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">Budget Friendly</h5>
                  <p className="card-text">
                    Distinctively re-engineer revolutionary meta-services and
                    premium. At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis.
                  </p>
                </div>
                <div className="mt-auto text-start">
                  <button className="btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Horizontal Layout 4 + 8) */}
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="row g-0 h-100">
                <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                  <img
                    src={house}
                    className="choose-img-side"
                    alt="Property Insurance"
                  />
                </div>
                <div className="col-md-8 d-flex flex-column p-3">
                  <h5 className="card-title">Property Insurance</h5>
                  <p className="card-text">
                    Distinctively re-engineer revolutionary meta-services and
                    premium. At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis.
                  </p>
                  <p className="card-text">
                    Distinctively re-engineer revolutionary meta-services and
                    premium.
                  </p>
                  <div className="mt-auto text-start">
                    <button className="btn btn-success">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row (3 Normal Cards) */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={hands}
                className="card-img-top p-3"
                alt="Trusted By Thousands"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Trusted By Thousands</h5>
                <p className="card-text">
                  Distinctively re-engineer revolutionary meta-services and
                  premium. At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis.
                </p>
                <div className="mt-auto text-start">
                  <button className="btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={map}
                className="card-img-top p-3"
                alt="Prime Location"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Prime Location</h5>
                <p className="card-text">
                  Distinctively re-engineer revolutionary meta-services and
                  premium. At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis.
                </p>
                <div className="mt-auto text-start">
                  <button className="btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={cash}
                className="card-img-top p-3"
                alt="Lowest Commission"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Lowest Commission</h5>
                <p className="card-text">
                  Distinctively re-engineer revolutionary meta-services and
                  premium. At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis.
                </p>
                <div className="mt-auto text-start">
                  <button className="btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
