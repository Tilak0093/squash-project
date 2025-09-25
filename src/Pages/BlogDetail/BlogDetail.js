import React, { useState } from "react";
import "./BlogDetail.css";

// breadcrumb images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

// Bachelor of Architecture 
import architecture from "../../assets/blogdeatail1.png";

// video bg
import videoBg from "../../assets/blogdetailvideobg.jpg";
import play from "../../assets/blogdetailplay.png";

// quotes 
import quote1 from "../../assets/blogdetailquote1.png";
import quote2 from "../../assets/blogdetailquote2.png";

// left image 
import leftimg from "../../assets/blogdetail3.png";

// right icons
import like from "../../assets/blogdetaillike.png";
import comment from "../../assets/blogdetailcomment.png";
import search from "../../assets/blogdetailsearch.png";
  
// blog (for latest blog card in sidebar)
import blog1 from "../../assets/blogdetail2.jpg";

// review icons
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
          <div className="container hero-inner">
            <h1 className="property-hero-title">Blog Detail</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">Home</a>
              <img src={Diamond} alt="diamond" className="breadcrumb-sep" />
              <span className="breadcrumb-current">Blog Detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog Detail Section (2-col grid) ---------- */}
      <section className="blog-detail container">
        <div className="blog-grid">
          {/* ---------- Left Column (Main Content) ---------- */}
          <div >            
            <div>
             <h2 className="blog-title">Bachelor Of Architecture</h2>
            <p className="blog-meta">
              12-03-2020 / by <span className="author">Kevin Johnson</span>
            </p>

            <img src={architecture} alt="architecture" className="main-img" />
            </div>
          
          <div className="blogdetail-format">
            <div>

            <p className="blog-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit nisl, ac a massa aliquam nisl purus vulputate. 
            Pellentesque adipiscing donec risus mauris gravida eu mattis magna eu. Porttitor odio ornare facilisis facilisi egestas 
            donec duis ornare lorem Faucibus elit nisl, 
            ac a massa aliquam nisl purus
            </p>
            <p className="blog-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit nisl, ac a massa aliquam nisl purus vulputate. 
             Pellentesque adipiscing donec risus mauris gravida eu mattis magna eu. Porttitor odio ornare facilisis facilisi egestas 
             donec duis ornare lorem Faucibus elit nisl, ac a massa aliquam nisl purus
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
                    aria-label="Play video"
                  >
                    <img src={play} alt="play" />
                  </button>
                </div>
              ) : (
                <div className="video-iframe">
                  <iframe
                    width="100%"
                    height="480"
                    src= "https://www.youtube.com/embed/njX2bu-_Vw4?si=RTHLJjgJvSrg4ur_" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* ---------- Rest of Blog (Quote + Image Strips) ---------- */}
            <h3 className="blog-subtitle">Give Your Dreams A Shape Of Reality</h3>
            <p className="blog-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit nisl, ac a massa aliquam nisl purus vulputate. 
              Pellentesque adipiscing donec risus mauris gravida eu mattis magna eu. Porttitor odio ornare facilisis facilisi egestas donec 
              duis ornare lorem Faucibus elit nisl, ac a massa aliquam nisl purus
            </p>

            <div className="quote-box">
              <img src={quote1} alt="quote start" className="quote-icon left" />
              <p className="quote-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum placerat 
                ornare rutrum erat nulla. Maecenas id vitae, varius id neque.  
              </p>
              <img src={quote2} alt="quote end" className="quote-icon right" />
            </div>

            <div className="strip-section">
              <div className="strips">
                {/* 5 narrow vertical strips using the same image but different background-position */}
                <div className="strip" style={{ backgroundImage: `url(${leftimg})`, backgroundPosition: "0% center" }} />
                <div className="strip" style={{ backgroundImage: `url(${leftimg})`, backgroundPosition: "25% center" }} />
                <div className="strip" style={{ backgroundImage: `url(${leftimg})`, backgroundPosition: "50% center" }} />
                <div className="strip" style={{ backgroundImage: `url(${leftimg})`, backgroundPosition: "75% center" }} />
                <div className="strip" style={{ backgroundImage: `url(${leftimg})`, backgroundPosition: "100% center" }} />
              </div>
              <div className="strip-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit
                  nisl, ac a massa aliquam nisl purus vulputate. Pellentesque 
                  adipiscing donec risus mauris gravida eu mattis magna eu. 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit 
                  nisl, ac a massa aliquam nisl purus.
                </p>
              </div>
            </div>

            <div className="blog-actions">
               
              <div className="icons">
                <div className="decor-tags">
                   <p >#Decor</p>
                <p>#Architecture</p>
                <p >#Home</p>
                </div>
                <div className="comment-section">
                 <div >
                  <img src={comment} alt="comment" className="action-icon"/> Comment
                  </div>
                <img src={like} alt="like" className="action-icon"/>Like
                </div>
               
              </div>
            </div>

            {/* ---------- Review Form ---------- */}
            <h3 className="review-title">Leave a Review</h3>
            <form className="review-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <img src={nameIcon} alt="name" />
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <img src={mailIcon} alt="email" />
                  <input type="email" placeholder="Email" />
                </div>
              </div>

              <div className="form-group">
                <img src={websiteIcon} alt="website" />
                <input type="text" placeholder="Website" />
              </div>

              <div className="form-group">
                <div>
                <img src={messageIcon} alt="message" />
                </div>
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
            </div>
             <aside className="sidebar">
            <div className="search-card ">
              <div className="search-wrap">
                <input placeholder="Search" />
                <button className="blog-search-btn" aria-label="search">
                  <img src={search} alt="search" />
                </button>
              </div>
            </div>

            <div className="categories-card">
              <h4>All Categories</h4>
              <ul>
                <li>Design</li>
                <li>Furniture</li>
                <li>Home</li>
              </ul>
            </div>

            <div className="latest-blog-card">
              <h4>Our Latest Blog</h4>
              <div className="latest-item">
                <img src={blog1} alt="latest" />
                <div className="latest-meta">
                  <small>24-12-2020 /  <span className="author">by Esther Miles</span></small>
                  <h5>Open Space And Bright Colors</h5>
                  <p className="tiny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo orci metus tempor.</p>
                  <div classname = "more-btn">    
                  <button className="read-more" >Read More →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="tags-share-card">
              <h4>Related Tags</h4>
              <div className="tag-cloud">
                <a>Decor</a>
                <span>–</span>
                <a>Furniture</a>
                <span>–</span>
                <a>Design</a>
                <br />
                <a>Home</a>
                <span>–</span>
                <a>Build</a>
                <span>–</span>
                <a>Architecture</a>
                </div>
                <h4>Share</h4>
                <div className="share-icons">
                  <span>FB</span>
                  <span>–</span>
                  <span>IN</span>
                  <span>–</span>
                  <span>TW</span>
                  <span>–</span>
                  <span>BE</span>
                </div>
              </div>
          </aside>
          </div>
         
          </div>

          {/* ---------- Right Column (Sidebar) ---------- */}
          
        </div>
      </section>

     
    </>
  );
}

export default BlogDetail;
   