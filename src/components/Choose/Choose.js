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

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img src={piggybank} className="choose-img-top" alt="Budget Friendly" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="choose-card-title">Budget Friendly</h5>
                <p className="choose-card-text">
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

          {/* Card 2 - horizontal */}
          <div className="col-lg-8 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="row g-0 h-100">
                <div className="col-md-5 d-flex align-items-center justify-content-center p-3">
                  <img src={house} className="choose-img-side" alt="Property Insurance" />
                </div>
                <div className="col-md-5 d-flex flex-column p-3">
                  <h5 className="choose-card-title">Property Insurance</h5>
                  <p className="choose-card-text">
                    Distinctively re-engineer revolutionary meta-services and premium.
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
                  </p>
                  <p className="card-text">
                    Distinctively re-engineer revolutionary meta-services and premium.
                  </p>
                  <div className="mt-auto text-start">
                    <button className="btn btn-success">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img src={hands} className="choose-img-top" alt="Trusted By Thousands" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="choose-card-title">Trusted By Thousands</h5>
                <p className="choose-card-text">
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

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img src={map} className="choose-img-top" alt="Prime Location" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className=" choose-card-title">Prime Location</h5>
                <p className="choose-card-text">
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

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm text-center">
              <div className="p-3">
                <img src={cash} className="choose-img-top" alt="Lowest Commission" />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="choose-card-title">Lowest Commission</h5>
                <p className="choose-card-text">
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
