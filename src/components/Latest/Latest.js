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

const Latest = () => {
  return (
    <section className="latest-section py-5">
      <div className="container">
        {/* Section Heading */}
        <p className="section-subtitle text-center">| LATEST PROPERTY |</p>
        <h2 className="section-title text-center">
          Properties for sale in your favorite area
        </h2>

        {/* Row Start */}
        <div className="row mt-5">

          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house1} className="card-img-top" alt="Luxury villa" />
                <span className="tag hot">Hot offer</span>
                <span className="tag sale">Sale</span>
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Luxury villa in Rego Park</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={jacobjones} alt="Jacob Jones" className="agent-img" />
                  <span className="agent-name">Jacob Jones</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house2} className="card-img-top" alt="Equestrian Home" />
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Equestrian Family Home</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={diannerussel} alt="Dianne Russel" className="agent-img" />
                  <span className="agent-name">Dianne Russel</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house3} className="card-img-top" alt="Equestrian Home" />
                <span className="tag hot">Hot offer</span>
                <span className="tag sale">Sale</span>
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Equestrian Family Home</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={robertfox} alt="Robert Fox" className="agent-img" />
                  <span className="agent-name">Robert Fox</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house4} className="card-img-top" alt="Luxury villa" />
                <span className="tag hot">Hot offer</span>
                <span className="tag sale">Sale</span>
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Luxury villa in Rego Park</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={jennywilson} alt="Jenny Wilson" className="agent-img" />
                  <span className="agent-name">Jenny Wilson</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house5} className="card-img-top" alt="Equestrian Home" />
                <span className="tag hot">Hot offer</span>
                <span className="tag sale">Sale</span>
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Equestrian Family Home</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={bessiecooper} alt="Bessie Cooper" className="agent-img" />
                  <span className="agent-name">Bessie Cooper</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card latest-card h-100">
              <div className="card-img position-relative">
                <img src={house6} className="card-img-top" alt="Luxury villa" />
              </div>
              <div className="card-body text-start">
                <h5 className="property-title">Luxury villa in Rego Park</h5>
                <p className="property-price">$590,693</p>
                <div className="property-details">
                  <span><img src={car} alt="" /> 4</span>
                  <span><img src={bath} alt="" /> 4</span>
                  <span><img src={sqft} alt="" /> 2,096.00 ft</span>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                  <img src={lesliealexander} alt="Leslie Alexander" className="agent-img" />
                  <span className="agent-name">Leslie Alexander</span>
                </div>
                <div className="icons">
                  <img src={share} alt="Share" />
                  <img src={heart} alt="Heart" className="ms-2" />
                  <img src={plus} alt="Plus" className="ms-2" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="btn see-all-btn">See All Properties</button>
        </div>
      </div>
    </section>
  );
};

export default Latest;
