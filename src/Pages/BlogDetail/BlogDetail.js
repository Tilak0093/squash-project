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
import search from "../../assets/blogdetailsearch.png";

// blog (for latest blog card in sidebar)
import blog1 from "../../assets/blogdetail2.jpg";

// review icons
import nameIcon from "../../assets/blogdetailperson.png";
import mailIcon from "../../assets/blogdetailmail.png";
import websiteIcon from "../../assets/blogdetailwebsite.png";
import messageIcon from "../../assets/blogdetailmessage.png";

function BlogDetail() {
  // Removed showVideo / setShowVideo (unused)
  const [isPlaying, setIsPlaying] = useState(false);

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
              <a href="/" className="breadcrumb-home">
                Home
              </a>
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
          <div>
            <div>
              <h2 className="blog-title">Bachelor Of Architecture</h2>
              <p className="blog-meta">
                12-03-2020 / by{" "}
                <span className="author">Kevin Johnson</span>
              </p>

              <img
                src={architecture}
                alt="Bachelor of Architecture illustration"
                className="main-img"
              />
            </div>

            <div className="blogdetail-format">
              <div>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus elit nisl, ac a massa aliquam nisl purus vulputate.
                  Pellentesque adipiscing donec risus mauris gravida eu mattis
                  magna eu. Porttitor odio ornare facilisis facilisi egestas
                  donec duis ornare lorem Faucibus elit nisl, ac a massa aliquam
                  nisl purus
                </p>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus elit nisl, ac a massa aliquam nisl purus vulputate.
                  Pellentesque adipiscing donec risus mauris gravida eu mattis
                  magna eu. Porttitor odio ornare facilisis facilisi egestas
                  donec duis ornare lorem Faucibus elit nisl, ac a massa aliquam
                  nisl purus
                </p>

                {/* ---------- Blog Section Video ---------- */}
                <div className="blog-section-video">
                  <div
                    className="blog-section-video-cta"
                    aria-hidden={isPlaying ? "true" : "false"}
                  >
                    {!isPlaying ? (
                      <>
                        <img
                          src={videoBg}
                          alt="Video preview"
                          className="blog-section-video-thumb"
                        />
                        <button
                          className="blog-section-video-play-btn"
                          onClick={() => setIsPlaying(true)}
                          aria-label="Play video"
                          type="button"
                        >
                          <span
                            className="blog-section-video-ring"
                            aria-hidden="true"
                          >
                            <span
                              className="blog-section-video-inner"
                              aria-hidden="true"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="blog-section-video-triangle"
                                role="img"
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" fill="#ffffff" />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </>
                    ) : (
                      <div className="blog-section-video-modal">
                        <div className="blog-section-video-modal-inner">
                          <button
                            className="blog-section-video-close"
                            onClick={() => setIsPlaying(false)}
                            aria-label="Close video"
                            type="button"
                          >
                            ×
                          </button>
                          <div className="blog-section-video-iframe">
                            <iframe
                              src="https://www.youtube.com/embed/njX2bu-_Vw4?autoplay=1"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ---------- Rest of Blog (Quote + Image Strips) ---------- */}
                <h3 className="blog-subtitle">
                  Give Your Dreams A Shape Of Reality
                </h3>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus elit nisl, ac a massa aliquam nisl purus vulputate.
                  Pellentesque adipiscing donec risus mauris gravida eu mattis
                  magna eu. Porttitor odio ornare facilisis facilisi egestas
                  donec duis ornare lorem Faucibus elit nisl, ac a massa aliquam
                  nisl purus
                </p>

                <div className="quote-box">
                  <img
                    src={quote1}
                    alt="Opening quote mark"
                    className="quote-icon left"
                  />
                  <p className="quote-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Interdum placerat ornare rutrum erat nulla. Maecenas id
                    vitae, varius id neque.
                  </p>
                  <img
                    src={quote2}
                    alt="Closing quote mark"
                    className="quote-icon right"
                  />
                </div>

                <div className="strip-section">
                  <div className="strips">
                    <div
                      className="strip"
                      style={{
                        backgroundImage: `url(${leftimg})`,
                        backgroundPosition: "0% center",
                      }}
                    />
                    <div
                      className="strip"
                      style={{
                        backgroundImage: `url(${leftimg})`,
                        backgroundPosition: "25% center",
                      }}
                    />
                    <div
                      className="strip"
                      style={{
                        backgroundImage: `url(${leftimg})`,
                        backgroundPosition: "50% center",
                      }}
                    />
                    <div
                      className="strip"
                      style={{
                        backgroundImage: `url(${leftimg})`,
                        backgroundPosition: "75% center",
                      }}
                    />
                    <div
                      className="strip"
                      style={{
                        backgroundImage: `url(${leftimg})`,
                        backgroundPosition: "100% center",
                      }}
                    />
                  </div>
                  <div className="strip-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Faucibus elit nisl, ac a massa aliquam nisl purus
                      vulputate. Pellentesque adipiscing donec risus mauris
                      gravida eu mattis magna eu.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Faucibus elit nisl, ac a massa aliquam nisl purus.
                    </p>
                  </div>
                </div>

                <div className="blog-actions">
                  <div className="blog-icons">
                    <div className="decor-tags">
                      <p>#Decor</p>
                      <p>#Architecture</p>
                      <p>#Home</p>
                    </div>
                    <div className="comment-section">
                      <div>
                        <img
                          src={comment}
                          alt="comments"
                          className="action-icon"
                        />{" "}
                        Comment
                      </div>
                      <div>
                        <img
                          src={like}
                          alt="likes"
                          className="action-icon"
                        />{" "}
                        Like
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------- Review Form ---------- */}
                <h3 className="review-title">Leave a Review</h3>
                <form
                  className="review-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <img src={nameIcon} alt="name icon" />
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <img src={mailIcon} alt="email icon" />
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>

                  <div className="form-group">
                    <img src={websiteIcon} alt="website icon" />
                    <input type="text" placeholder="Website" />
                  </div>

                  <div className="form-group">
                    <div>
                      <img src={messageIcon} alt="message icon" />
                    </div>
                    <textarea placeholder="Message" />
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
              </div>

              {/* ---------- Sidebar ---------- */}
              <aside className="sidebar">
                <div className="search-card">
                  <div className="search-wrap">
                    <input placeholder="Search" />
                    <button
                      className="blog-search-btn"
                      aria-label="search"
                      type="button"
                    >
                      <img src={search} alt="search icon" />
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
                  <div className="latest-blog-item">
                    <img src={blog1} alt="Latest blog" />
                    <div className="latest-meta">
                      <small>
                        24-12-2020 /{" "}
                        <span className="author">by Esther Miles</span>
                      </small>
                      <h5>Open Space And Bright Colors</h5>
                      <p className="tiny">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Leo orci metus tempor.
                      </p>
                      <div className="more-btn">
                        <button className="read-more" type="button">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tags-share-card">
                  <h4>Related Tags</h4>
                  <div className="tag-cloud">
                    {/* Changed <a> to <button> to satisfy jsx-a11y/anchor-is-valid */}
                    <button type="button" className="tag-link">
                      Decor
                    </button>
                    <span>–</span>
                    <button type="button" className="tag-link">
                      Furniture
                    </button>
                    <span>–</span>
                    <button type="button" className="tag-link">
                      Design
                    </button>
                    <br />
                    <button type="button" className="tag-link">
                      Home
                    </button>
                    <span>–</span>
                    <button type="button" className="tag-link">
                      Build
                    </button>
                    <span>–</span>
                    <button type="button" className="tag-link">
                      Architecture
                    </button>
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
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
