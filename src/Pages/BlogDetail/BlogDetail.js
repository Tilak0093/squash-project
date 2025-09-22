import React, { useState } from "react";
import "./BlogDetail.css";

// breadcrumb images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

// Bachelor of Architecture
import architecture from "../../assets/blogdeatail1.png";

// video bg
import videoBg from "../../assets/blogdetailvideobg.jpg";

// quotes 
import quote1 from "../../assets/blogdetailquote1.png";
import quote2 from "../../assets/blogdetailquote2.png";

// left image 
import leftimg from "../../assets/blogdetail3.png";

// right icons
import like from "../../assets/blogdetaillike.png";
import comment from "../../assets/blogdetailcomment.png";

// blog
import blog1 from "../../assets/blogdetail2.jpg";

//review icons
import nameIcon from "../../assets/blogdetailperson.png";
import mailIcon from "../../assets/blogdetailmail.png";
import websiteIcon from "../../assets/blogdetailwebsite.png";
import messageIcon from "../../assets/blogdetailmessage.png";

function BlogDetail() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Blog Detail</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">
                Home
              </a>
              <img
                src={Diamond}
                alt="separator"
                className="breadcrumb-separator"
              />
              <span className="breadcrumb-current">Blog Detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog Detail Section ---------- */}
      <section className="blog-detail container">
        <h2 className="blog-title">Bachelor Of Architecture</h2>
        <p className="blog-meta">
          12-03-2020 / by <span className="author">Kevin Johnson</span>
        </p>
        <img src={architecture} alt="architecture" className="main-img" />

        <p className="blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est
          nisi, ac a massa aliquam nisi purus vulputate...
        </p>
        <p className="blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est
          nisi, ac a massa aliquam nisi purus vulputate...
        </p>

        {/* ---------- Video Section ---------- */}
        <div className="video-section">
          {!showVideo ? (
            <div
              className="video-thumbnail"
              style={{ backgroundImage: `url(${videoBg})` }}
            >
              <button
                className="play-button"
                onClick={() => setShowVideo(true)}
              >
                ▶
              </button>
            </div>
          ) : (
            <div className="video-iframe">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/wgZdpFRpZCs?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* ---------- Rest of Blog (Quote + Images) ---------- */}
        <h3 className="blog-subtitle">Give Your Dreams A Shape Of Reality</h3>
        <p className="blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus est
          nisi, ac a massa aliquam nisi purus vulputate...
        </p>

        <div className="quote-box">
          <img src={quote1} alt="quote" className="quote-icon" />
          <p className="quote-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            placerat ornare rutrum erat nulla. Nascenas id vitae, varius id neque.
          </p>
          <img src={quote2} alt="quote" className="quote-icon" />
        </div>

        <div className="image-row">
          <img src={leftimg} alt="left" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            est nisi, ac a massa aliquam nisi purus vulputate...
          </p>
        </div>

        <div className="blog-actions">
          <span># Decor</span>
          <span># Architecture</span>
          <img src={comment} alt="comment" />
          <img src={like} alt="like" />
        </div>

        {/* ---------- Review Form ---------- */}
        <h3 className="review-title">Leave a Review</h3>
        <form className="review-form">
          <div className="form-group">
            <img src={nameIcon} alt="name" />
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <img src={mailIcon} alt="email" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <img src={websiteIcon} alt="website" />
            <input type="text" placeholder="Website" />
          </div>
          <div className="form-group">
            <img src={messageIcon} alt="message" />
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </>
  );
}

export default BlogDetail;
