import React from "react";
import "./Subscribe.css";
import subscribeImg from "../../assets/subscribe.png";

const Subscribe = () => {
  return (
    <section className="subscribe-wrapper my-5">
      <div className="card subscribe-card">
        <div className="row align-items-center">
          {/* Left Side - Text + Input */}
          <div className="col-md-7 p-4">
            <h4 className="subscribe-title">
              Subscribe to get the latest <br /> news for you!
            </h4>
            <form className="d-flex mt-3">
              <input
                type="email"
                className="form-control subscribe-input"
                placeholder="Enter your email..."
              />
              <button type="submit" className="btn btn-success subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-5 text-center">
            <img
              src={subscribeImg}
              alt="Subscribe"
              className="img-fluid subscribe-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;