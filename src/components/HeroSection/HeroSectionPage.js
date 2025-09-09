import "./HeroSection.css";

const HeroSectionPage = () => {
  return (
    <section
      className="main-content d-flex flex-column align-items-center justify-content-center"
      id="hero-section"
    >
      <div className="text-center text-white hero-text">
        {/* Hero Text */}
        <h1 className="hero-title">Discover Your New Home</h1>
        <p className="hero-subtitle">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-wrapper">
        {/* Rent / Sale toggle (OUTSIDE the box) */}
        <div className="toggle-buttons d-flex justify-content-center">
          <button className="rent-btn active">Rent</button>
          <button className="sale-btn">Sale</button>
        </div>

        {/* Search Box */}
        <div className="bottom-bar container shadow-lg rounded-3 p-3 bg-white">
          <div className="row g-3 align-items-center">
            {/* Locations */}
            <div className="col-md-3 col-12 border-col d-flex flex-column align-items-center">
              <label className="form-label fw-bold mt-3">Locations</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Select your city</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
              </div>
            </div>

            {/* Property Type */}
            <div className="col-md-3 col-12 border-col d-flex flex-column align-items-center">
              <label className="form-label fw-bold mt-3">Property Type</label>
              <div className="select-wrapper">
                <select className="form-select">
                  <option>Select property type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
              </div>
            </div>

            {/* Rent Range */}
           <div className="col-md-3 col-12 border-col d-flex flex-column align-items-center">
            <label className="form-label fw-bold mt-3">Rent Range</label>
            <div className="select-wrapper">
              <select className="form-select">
                <option>Select rent range</option>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>
              </select>
            </div>
          </div>

            {/* Search Button */}
            <div className="col-md-3 col-12 d-flex justify-content-center">
              <button className="search-btn w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
