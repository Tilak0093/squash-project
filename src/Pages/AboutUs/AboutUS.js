import React from "react";
import "./AboutUs.css";
import Team from "../Homepage/Team/Team";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

//home images
import Home1 from "../../assets/aboutus1.jpg";
import Home2 from "../../assets/aboutus2.jpg";

// icons (will be used as card icons)
import home from "../../assets/aboutushome.svg";
import building from "../../assets/aboutusbuilding.svg";

//our blog images
import AboutusBlog1 from "../../assets/aboutusblog1.jpg";
import AboutusBlog2 from "../../assets/aboutusblog2.jpg";
import AboutusBlog3 from "../../assets/aboutusblog3.jpg";

//testimonial images
import TestimonialBg from "../../assets/testimonialsbg.png";
import Client1 from "../../assets/testimonial1.jpg";
import Client2 from "../../assets/testimonial2.jpg";
import Client3 from "../../assets/testimonial3.jpg";
import Quote from "../../assets/testimmonial-quote-close.png";

const AboutUs = () => {
  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">About Us</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="Separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About Intro Section ---------- */}
      <section className="about-intro py-5">
        <div className="container">
          <div className="row ">
            {/* Left image (large) */}
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <img
                src={Home1}
                alt="About - image"
                className="img-fluid rounded about-intro-image"
              />
            </div>

            {/* Right content */}
            <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center">
              <span className="aboutus-section-subtitle">| ABOUT US |</span>

              <h2 className="aboutus-section-title aboutus-intro-title">
                Buying & Selling Property In An Easy Way
              </h2>

              <p className="aboutus-description">
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi.
              </p>

              {/* Cards: Our Vision & Our Mission */}
              <div className="about-cards d-flex flex-column">
                <div className="aboutus-card about-card-first">
                  <img
                    src={home}
                    alt="Vision icon"
                    className="aboutus-card-icon"
                  />
                  <div className="about-card-text">
                    <h6 className="aboutus-card-title">Our Vision</h6>
                    <p className="aboutus-card-description">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio
                      dignissimos ducimus qui blanditiis
                    </p>
                  </div>
                </div>

                <div className="aboutus-card about-card-second">
                  <img
                    src={building}
                    alt="Mission icon"
                    className="aboutus-card-icon"
                  />
                  <div className="about-card-text">
                    <h6 className="aboutus-card-title">Our Mission</h6>
                    <p className="aboutus-card-description">
                      Distinctively re-engineer revolutionary meta-services and
                      premium At vero eos et accusamus et iusto odio
                      dignissimos ducimus qui blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats Section ---------- */}
      <section
        className="stats-section mt-4"
        style={{ backgroundImage: `url(${Home2})` }}
      >
        <div className="stats-overlay">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">56,180</h2>
                <p className="stats-label">In property sales</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">+18</h2>
                <p className="stats-label">Years Of Experience</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">99%</h2>
                <p className="stats-label">Customer satisfaction</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">25K+</h2>
                <p className="stats-label">Property Transaction</p>
              </div>
              <div className="col-md-2 col-6 mb-4">
                <h2 className="stats-number">2,918</h2>
                <p className="stats-label">Price Reduce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog Section ---------- */}
      <section className="blog-section py-5">
        <div className="container text-center">
          <span className="section-subtitle">| OUR BLOG |</span>
          <h2 className="section-title">Explore Our Blog</h2>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="blog-card h-100">
                <div className="blog-card-img position-relative">
                  <img
                    src={AboutusBlog1}
                    className="img-fluid rounded"
                    alt="blog 1"
                  />
                  <div className="blog-date-tag">
                    <h5>28</h5>
                    <p>Tue</p>
                  </div>
                </div>
                <div className="blog-card-body text-start">
                  <p className="blog-card-meta">
                    January 04, 2024 | <span>Architecture</span>
                  </p>
                  <h5 className="blog-card-title">
                    Top 10 Home Buying Mistakes to Avoid
                  </h5>
                  <p className="blog-card-description">
                    Etiam eget elementum elit. Aenean dignissim dapibus
                    vestibulum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="blog-card h-100">
                <div className="blog-card-img position-relative">
                  <img
                    src={AboutusBlog2}
                    className="img-fluid rounded"
                    alt="blog 2"
                  />
                  <div className="blog-date-tag">
                    <h5>08</h5>
                    <p>Mon</p>
                  </div>
                </div>
                <div className="blog-card-body text-start">
                  <p className="blog-card-meta">
                    January 20, 2024 | <span>Market Manager</span>
                  </p>
                  <h5 className="blog-card-title">
                    How to Stage Your Home Quick Sale
                  </h5>
                  <p className="blog-card-description">
                    Nullam odio lacus, dictum quis pretium congue, vehicula
                    venenatis nunc.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="blog-card h-100">
                <div className="blog-card-img position-relative">
                  <img
                    src={AboutusBlog3}
                    className="img-fluid rounded"
                    alt="blog 3"
                  />
                  <div className="blog-date-tag">
                    <h5>26</h5>
                    <p>Wed</p>
                  </div>
                </div>
                <div className="blog-card-body text-start">
                  <p className="blog-card-meta">
                    January 04, 2024 | <span>Architecture</span>
                  </p>
                  <h5 className="blog-card-title">
                    5 Tips for First-Time Home Sellers
                  </h5>
                  <p className="blog-card-description">
                    In hac habitasse platea dictumst. Phasellus vel velit vel
                    augue maximus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials Section ---------- */}
      <section
        className="testimonials-section py-5"
        style={{ backgroundImage: `url(${TestimonialBg})` }}
      >
        <div className="container text-center">
          <span className="section-subtitle">| TESTIMONIALS |</span>
          <h2 className="section-title">What Our Customers Say</h2>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card h-100">
                <img src={Quote} alt="quote" className="testimonial-quote" />
                <p className="testimonial-text">
                  “Hacenas est odio ante tincidunt tempus donec. Vitae
                  suspendisse libero venenatis faucibus nullam quis ante sit
                  amet est amet eget eros faucibus.”
                </p>
                <div className="testimonial-client d-flex align-items-center mt-4">
                  <img
                    src={Client1}
                    alt="Client 1"
                    className="testimonial-img"
                  />
                  <div className="testimonial-info text-start ms-3">
                    <h6>Christopher J. Larson</h6>
                    <p>Service Manager</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card h-100">
                <img src={Quote} alt="quote" className="testimonial-quote" />
                <p className="testimonial-text">
                  “Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in viverra.”
                </p>
                <div className="testimonial-client d-flex align-items-center mt-4">
                  <img
                    src={Client2}
                    alt="Client 2"
                    className="testimonial-img"
                  />
                  <div className="testimonial-info text-start ms-3">
                    <h6>Derrick P. Boudreaux</h6>
                    <p>Web Developer</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card h-100">
                <img src={Quote} alt="quote" className="testimonial-quote" />
                <p className="testimonial-text">
                  “Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in viverra.”
                </p>
                <div className="testimonial-client d-flex align-items-center mt-4">
                  <img
                    src={Client3}
                    alt="Client 3"
                    className="testimonial-img"
                  />
                  <div className="testimonial-info text-start ms-3">
                    <h6>Stanley S. Nesbitt</h6>
                    <p>Company Founder</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Team Section ---------- */}
      <section className="team-section py-5">
        <div className="container text-center">
          <div className="row justify-content-center mt-5">
            <Team />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
