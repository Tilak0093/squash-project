import React, { useState } from "react";
import "./property.css";

import propertybg from "../../../../assets/propertybg.jpg";
import propertycard1 from "../../../../assets/propertycard1.png";
import propertycard2 from "../../../../assets/propertycard2.png";
import propertycard3 from "../../../../assets/propertycard3.png";
import propertycard4 from "../../../../assets/propertycard4.png";
import propertycard5 from "../../../../assets/propertycard5.png";
import propertycard6 from "../../../../assets/propertycard6.png";
import propertycard7 from "../../../../assets/propertycard7.png";
import propertycard8 from "../../../../assets/propertycard8.png";
import propertycard9 from "../../../../assets/propertycard9.png";

import Location from "../../../../assets/Location.png";
import propertybath from "../../../../assets/propertybath.png";
import propertybed from "../../../../assets/propertybed.png";
import propertysqft from "../../../../assets/propertysqft.png";

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
  const [viewMode, setViewMode] = useState("grid-3"); // grid-3 | grid-2 | list
  const [perPage, setPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div className="property-page">
      {/* Breadcrumb / Hero */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Property</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">Home</a>
              <span className="breadcrumb-sep"> / </span>
              <span className="breadcrumb-current">Property</span>
            </div>
          </div>
        </div>
      </section>

      {/* Controls: View As / Showing Results / Sort By */}
      <section className="container property-controls">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="view-as">
              <span className="view-label">View As</span>

              <button
                className={`view-btn ${viewMode === "grid-3" ? "active" : ""}`}
                onClick={() => setViewMode("grid-3")}
                title="3-column grid"
              >
                <i className="fas fa-th"></i>
              </button>

              <button
                className={`view-btn ${viewMode === "grid-2" ? "active" : ""}`}
                onClick={() => setViewMode("grid-2")}
                title="2-column grid"
              >
                <i className="fas fa-th-large"></i>
              </button>

              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                title="list view"
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <span className="showing">Showing 1-12 Results</span>

            <div className="control-pill ms-3 d-inline-block">
              <select
                className="form-select perpage-select"
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

            <div className="control-pill ms-2 d-inline-block">
              <select
                className="form-select sortby-select"
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

      {/* Cards */}
      <section className="container property-cards mt-4 mb-5">
        <div className="row">
          {cards.map((c) => (
            <div
              key={c.id}
              className={
                viewMode === "grid-3"
                  ? "col-lg-4 col-md-6 mb-4"
                  : viewMode === "grid-2"
                  ? "col-lg-6 col-md-6 mb-4"
                  : "col-12 mb-4"
              }
            >
              <div className="card property-card h-100">
                <div className="card-img-wrap">
                  <img src={c.img} className="card-img-top" alt="property" />
                  <div className="price-text">
                    <span className="price-amount">$4500</span>
                    <span className="price-suffix">/Rent</span>
                  </div>

                  <div className="sale-badge">For Sale</div>
                </div>

                <div className="card-body">
                  <h6 className="card-price text-primary">
                    <span style={{ color: "#6e00ff", fontWeight: 700 }}>
                      $4500
                    </span>
                    <small className="ms-1" style={{ color: "#6e00ff" }}>
                      /Rent
                    </small>
                    <span className="float-end sale-pill">For Sale</span>
                  </h6>

                  <h5 className="card-title">Comefortable Appartment</h5>

                  <p className="card-location">
                    <img src={Location} alt="loc" />
                    <span className="loc-text">709 West Drive Chicago, IL 60606</span>
                  </p>

                  <div className="card-features d-flex gap-2">
                    <div className="feature-box">
                      <img src={propertybed} alt="beds" />
                      <span>3 Beds</span>
                    </div>
                    <div className="feature-box">
                      <img src={propertybath} alt="baths" />
                      <span>2 Baths</span>
                    </div>
                    <div className="feature-box">
                      <img src={propertysqft} alt="sqft" />
                      <span>120sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation example">
              <ul className="pagination custom-pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                {/* Render 1..12 like the example; highlight '1' */}
                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">12</a></li>

                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
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
