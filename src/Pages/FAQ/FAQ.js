import React from "react";
import "./FAQ.css";

// breadcrumb images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";
import right from "../../assets/faqright.png";

function FAQ() {
  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">FAQ</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ Section ---------- */}
      <section className="faq-section container py-5">
        {/* Section Title */}
        <div className="section-header text-center mb-5">
          <h6 className="faq-subtitle">| ASK US |</h6>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="row align-items-center">
          {/* Left Column: Accordion */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="accordion" id="faqAccordion">
              {/* Question 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed no-arrow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What Does An Architect Actually Do?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus, molestie dignissim ut fusce faucibus. Tincidunt
                    integer eros, dui id viverra. Proin pellentesque ut justo
                    congue urna, justo, est est, natoque.
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed no-arrow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Why Do I Need An Architect?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Architects bring creative vision, technical knowledge, and
                    practical design expertise to ensure your project is
                    efficient, aesthetic, and functional.
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed no-arrow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can You Work With Clients Long Distance?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes! We collaborate remotely through video calls, design
                    mockups, and shared project dashboards for seamless
                    communication.
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed no-arrow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I Contact You Outside Of Business Hours?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can leave a message anytime. We typically respond within
                    24 hours on weekdays.
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed no-arrow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Is It Easy To Change The Office Layout?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Absolutely. We design flexible floor plans that allow modular
                    rearrangements with minimal effort.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img src={right} alt="faq illustration" className="img-fluid faq-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
