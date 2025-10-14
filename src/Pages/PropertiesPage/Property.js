import React, { useState } from "react";
import "./property.css";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";
import propertycard1 from "../../assets/propertycard1.png";
import propertycard2 from "../../assets/propertycard2.png";
import propertycard3 from "../../assets/propertycard3.png";
import propertycard4 from "../../assets/propertycard4.png";
import propertycard5 from "../../assets/propertycard5.png";
import propertycard6 from "../../assets/propertycard6.png";
import propertycard7 from "../../assets/propertycard7.png";
import propertycard8 from "../../assets/propertycard8.png";
import propertycard9 from "../../assets/propertycard9.png";

import Location from "../../assets/Location.png";
import propertybath from "../../assets/propertybath.png";
import propertybed from "../../assets/propertybed.png";
import propertysqft from "../../assets/propertysqft.png";

import Button1 from "../../assets/propertybutton1.png";
import Button2 from "../../assets/propertybutton2.png";
import Button3 from "../../assets/propertybutton3.png";
import Button4 from "../../assets/propertybutton4.png";

const cards = [
  { id: 1, img: propertycard1 },
  { id: 2, img: propertycard2 },
  { id: 3, img: propertycard3 },
  { id: 4, img: propertycard4 },
  { id: 5, img: propertycard5 },
  { id: 6, img: propertycard6 },
  { id: 7, img: propertycard7 },
  { id: 8, img: propertycard8 },
  { id: 9, img: propertycard9 },
];

const Property = () => {
  const [viewMode, setViewMode] = useState("grid-3");
  const [perPage, setPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div className="property-page">
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero d-flex align-items-center justify-content-center text-center"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay w-100 py-5">
          <div className="container">
            <h1 className="property-hero-title mb-3">Property</h1>
            <div className="hero-breadcrumb d-flex justify-content-center align-items-center gap-2">
              <a href="/" className="breadcrumb-home">Home</a>
              <img src={Diamond} alt="diamond" className="breadcrumb-separator" />
              <span className="breadcrumb-current">Property</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Controls Section ---------- */}
      <section className="container my-4 property-controls">
        <div className="row align-items-center g-3">
          {/* Left: View Mode Buttons */}
          <div className="col-12 col-md-6">
            <div className="view-as d-flex align-items-center flex-wrap gap-2">
              <span className="view-label me-2 fw-semibold">View As:</span>

              <button
                className={`view-btn btn ${viewMode === "grid-4" ? "active" : ""}`}
                onClick={() => setViewMode("grid-4")}
                title="4-column grid"
              >
                <img src={Button1} alt="4-column grid" className="view-icon" />
              </button>

              <button
                className={`view-btn btn ${viewMode === "grid-3" ? "active" : ""}`}
                onClick={() => setViewMode("grid-3")}
                title="3-column grid"
              >
                <img src={Button2} alt="3-column grid" className="view-icon" />
              </button>

              <button
                className={`view-btn btn ${viewMode === "grid-2" ? "active" : ""}`}
                onClick={() => setViewMode("grid-2")}
                title="2-column grid"
              >
                <img src={Button3} alt="2-column grid" className="view-icon" />
              </button>

              <button
                className={`view-btn btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                title="list view"
              >
                <img src={Button4} alt="list view" className="view-icon" />
              </button>
            </div>
          </div>

 {/* Right: Filters */}
          <div className="col-12 col-md-6 d-flex flex-wrap justify-content-md-end align-items-center gap-3">
            <span className="showing ">Showing 1–12 Results</span>

            <div className="d-flex align-items-center gap-2">

              <select
                className="forms-select form-select-sm perpage-select"
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

            <div className="d-flex align-items-center gap-2">
              <label className=" mb-0">Sort By:</label>
              <select
                className="forms-select form-select-sm sortby-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>



      {/* ---------- Property Cards ---------- */}
      <section className="container property-cards my-5">
        <div className="row g-4">
          {cards.map((c) => (
            <div key={c.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card property-card h-100">
                <div className="card-img-wrap">
                  <img src={c.img} className="card-img-top" alt="property" />
                </div>

                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="block d-flex justify-content-between align-items-center mb-2">
                    <div className="price-text">
                      <span className="price-amount">$4500</span>
                      <span className="price-suffix">/Rent</span>
                    </div>
                    <div className="sale-badge">For Sale</div>
                  </div>

                  <h5 className="property-card-title">Comfortable Apartment</h5>

                  <p className="card-location d-flex align-items-center gap-2">
                    <img src={Location} alt="loc" className="loc-icon" />
                    <span className="loc-text">709 West Drive Chicago, IL 60606</span>
                  </p>

                  <div className="card-features d-flex gap-3 mt-2">
                    <div className="feature-box">
                      <img src={propertybed} alt="beds" />
                    </div>
                    <div className="feature-box">
                      <img src={propertybath} alt="baths" />
                    </div>
                    <div className="feature-box">
                      <img src={propertysqft} alt="sqft" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Pagination ---------- */}
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination custom-pagination mb-0">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">‹</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" href="#">...</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">12</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
