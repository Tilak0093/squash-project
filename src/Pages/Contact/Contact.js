import React from "react";
import "./Contact.css";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

const Contact = () => {
  return (
    <div>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Contact Us</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">Home</a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Google Map ---------- */}
      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.606348027286!2d-106.48793302477096!3d31.75871907409896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75b2ffb92f7c1%3A0x37d33cf5f6dc81c!2sEl%20Paso%20Museum%20of%20Art!5e0!3m2!1sen!2sus!4v1694166423092!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* ---------- Contact Form ---------- */}
      <section className="contact-form-section py-5">
        <div className="container text-center">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-subtitle">
            Even tempor eget pharetra facilisis sed maecenas adipiscing. Eu
            iaculis molestie vel, ornare <br></br>non id blandit netus.
          </p>

          <form className="contact-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" placeholder="Name *" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="form-control"
                />
              </div>
              <div className="col-12 mb-3">
                <input type="email" placeholder="Email" className="form-control" />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn-submit">
                  Send a message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
