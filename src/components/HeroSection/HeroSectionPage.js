import "./HeroSection.css";

const HeroSectionPage = () => {
  return (
    <section
      className="main-content d-flex align-items-center justify-content-center"
      id="hero-section"
    >
      <div className="container text-center text-white">
        {/* Hero Text */}
        <h1 className="hero-title">Discover Your New Home</h1>
        <p className="hero-subtitle">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>

        {/* Rent / Sale toggle */}
        <div className="toggle-buttons my-4 d-flex justify-content-center">
          <button className="btn rent-btn active">Rent</button>
          <button className="btn sale-btn">Sale</button>
        </div>

        {/* Search Box */}
        <div className="search-box shadow-lg rounded-3 p-3 bg-white">
          <div className="row g-3 align-items-center">
            {/* Locations */}
            <div className="col-md-3 col-12">
              <label className="form-label fw-bold">Locations</label>
              <select className="form-select">
                <option>Select your city</option>
                <option>Chennai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="col-md-3 col-12">
              <label className="form-label fw-bold">Property Type</label>
              <select className="form-select">
                <option>Select property type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>

            {/* Rent Range */}
            <div className="col-md-3 col-12">
              <label className="form-label fw-bold">Rent Range</label>
              <select className="form-select">
                <option>Select rent range</option>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>+
              </select>
            </div>

            {/* Search Button */}
            <div className="col-md-3 col-12 d-flex align-items-end">
              <button className="btn btn-success w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
