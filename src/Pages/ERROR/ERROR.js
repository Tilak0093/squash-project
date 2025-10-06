import React from "react";
import "./ERROR.css";

// breadcrumb images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";
import cardbg from "../../assets/servicecardbackground.png";

// error image
import error from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">404</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">404 ERROR</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 404 Main Section ---------- */}
      <section className="error-section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <img src={error} alt="404 Error" className="img-fluid error-img mb-4" />
              <h1 className="error-title">Page Not Found</h1>
              <p className="error-text">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias
                excepturi. Lorem ipsum.
              </p>
              <a href="/" className="btn-go-home">
                Go To Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
