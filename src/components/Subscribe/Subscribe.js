import React from "react";
import "./Subscribe.css";
import subscribeImg from "../../assets/subscribe.png";

const Subscribe = () => {
  return (
    <section className="subscribe-wrapper ">
      <div className="subscribe-card">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-7 p-4">
            <h4 className="subscribe-title">
              Subscribe to get the latest <br /> news for you!
            </h4>
            <form className="subscribe-form mt-3">
              <input
                type="email"
                className="subscribe-input"
                placeholder="Enter your email..."
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="col-md-5 subscribe-img-wrapper">
            <img
              src={subscribeImg}
              alt="Subscribe"
              className="subscribe-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
