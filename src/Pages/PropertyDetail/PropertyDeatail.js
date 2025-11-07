import React, { useState } from "react";
import "./PropertyDetail.css"

// breadcrumb images
import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png"

// info icons
import Location from "../../assets/Location.png";
import propertydetailbath from "../../assets/propertydetailbath.png";
import propertydetailbed from "../../assets/propertydetailbed.png";
import propertydetailsqft from "../../assets/propertydetailsqft.png";
import propertydetailpark from "../../assets/propertydetailpark.png";
import share from "../../assets/share.png";
import heart from "../../assets/Heart.png";
import plus from "../../assets/Plus.png";

// property detail img
import main from "../../assets/propertydetailmain.png"
import prop1 from"../../assets/propertydetail1.jpg"
import prop2 from"../../assets/propertydetail2.jpg"
import prop3 from"../../assets/propertydetail3.jpg"
import prop4 from"../../assets/propertydetail4.png"
import prop5 from"../../assets/propertydetail5.jpg"
import prop6 from"../../assets/propertydetail16.jpg"

// agent
import agent from "../../assets/propertydetailagent.jpg"
import agentmail from "../../assets/agentmail.svg"
import agentphone from "../../assets/agentphone.svg"

//blog image
import blog1 from "../../assets/blogdetail2.jpg";

// icons 
import callbox from "../../assets/propertydetailcallbox.svg"
import msgbox from "../../assets/propertydetailmsgbox.svg"

// review icons
import nameIcon from "../../assets/blogdetailperson.png";
import mailIcon from "../../assets/blogdetailmail.png";
import websiteIcon from "../../assets/blogdetailwebsite.png";
import messageIcon from "../../assets/blogdetailmessage.png";

// quotes 
import quote1 from "../../assets/blogdetailquote1.png";
import quote2 from "../../assets/blogdetailquote2.png";

// floor plan
import floor1 from "../../assets/propertydetailfloorplan.png"

//comments icons
import like from "../../assets/propertydetaillike.png"
import dislike from "../../assets/propertydetaildislike.png"
import comment from "../../assets/propertydetailcomment.png"

// comment profile images

import profile1 from "../../assets/commentsprofile1.png"
import profile2 from "../../assets/commentsprofile2.png"
import profile3 from "../../assets/commentsprofile3.png"
import { ImOpt } from "react-icons/im";

export default function PropertyDetail() {
  // small state for demo forms (no backend)
  const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" });
  const [review, setReview] = useState({ name: "", email: "", website: "", message: "" });

  const gallery = [prop1, prop2, prop3, prop4, prop5, prop6];

  function handleContactSubmit(e) {
    e.preventDefault();
    // placeholder
    alert("Contact form submitted (demo)");
  }
  function handleReviewSubmit(e) {
    e.preventDefault();
    alert("Review submitted (demo)");
  }

  return (
    <div className="property-page">
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container hero-inner">
            <h1 className="property-hero-title">Property Details</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">Home</a>
              <img src={Diamond} alt="diamond" className="breadcrumb-sep" />
              <span className="breadcrumb-current">Property Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Main Content ---------- */}
      <div className="container page-inner">
        <div className="content-grid">

          {/* ---------------- Left Column ---------------- */}
          <main className="main-col">

            {/* Property header */}

            <div>
            <div className="property-header">
              <div className="address">
                <img src={Location} alt="location" />
                <span>709 West Drive Chicago, IL 60606</span>
              </div>

              <div className="title-row">
                <div className="title-left">
                  <h2 className="propertydeatail-title">Modern Loft in Land River</h2>
                  <p className="property-sub">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically.</p>
                </div>

                <div className="price-box">
                  <div className="Rent-container">
                      <h3 className="price">$3500/<span className="price-type">Rent</span></h3>
                      <div className="three-imgs">
                        <img src={share} alt="share" title="Share" />
                        <img src={heart} alt="save" title="Save" className="share-img-2"/>
                        <img src={plus} alt="plus" title="More" className="share-img-"/>
                      </div>
                  </div>
                    <div className="property-features">
                      <div className="feature-card">
                        <img src={propertydetailbed} alt="bed" />
                        <span className="divider">|</span>
                        <p className="stats-paragraph">3 Beds</p>
                      </div>

                      <div className="feature-card">
                        <img src={propertydetailbath} alt="bath" />
                        <span className="divider">|</span>
                        <p className="stats-paragraph">2 Baths</p>
                      </div>

                      <div className="feature-card">
                        <img src={propertydetailpark} alt="parking" />
                        <span className="divider">|</span>
                        <p className="stats-paragraph">1 Parking</p>
                      </div>

                      <div className="feature-card">
                        <img src={propertydetailsqft} alt="sqft" />
                        <span className="divider">|</span>
                        <p className="stats-paragraph">120sqft</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="gallery">
              <div className="main-image">
                <img src={main} alt="main property" />
               
              </div>

              <div className="thumbs">
                {gallery.map((g, i) => (
                  <div className="thumb" key={i}>
                    <img src={g} alt={`thumb-${i}`} />
                  </div>
                ))}
              </div>
            </div>
            </div>

            {/* About the property */}



            <div className="agent container-fluid gap-4 w-100">
              <div>
            
            <section className="about-property">

              <h3>About the property</h3>
              <p>Laminate flooring is a more affordable option in place of hardwood flooring that can cost almost ten times the cost of 
                laminate flooring. Laminate flooring is light, durable and can be made to resemble.</p>

              <p>Appropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains 
                with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative 
                technology. Competently parallel task fully researched data and enterprise process improvements.</p>

              <ul className="detail-list">
                <li>Dynamically target high-payoff intellectual capital for customized</li>
                <li>Interactively procrastinate high-payoff content</li>
                <li>Credibly reintermediate backend data for cross-platform models</li>
              </ul>

              <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data 
                and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results 
                quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than 
                friction technology</p>

              {/* Quote (your provided code) */}
              <div className="quote-box">
                <img src={quote1} alt="quote start" className="quote-icon left" />
                <p className="quote-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum placerat 
                  ornare rutrum erat nulla. Maecenas id vitae, varius id neque.  
                </p>
                <img src={quote2} alt="quote end" className="quote-icon right" />
              </div>

              <h3 className="build-service">Make real time a build services</h3>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
              <ol className="services-list">
                <li>Dynamically target high-payoff intellectual capital for customized</li>
                <li>Interactively procrastinate high-payoff content</li>
                <li>Credibly reintermediate backend ideas for cross-platform models</li>
                <li>We provide operational efficiency, data security, and flexible scale</li>
              </ol>
              <p>It is a long established fact that a reader will be distracted by the readable content page when looking at its layout. The point 
                 of using Lorem Ipsum is that it more-or-less normal distribution of letters, as felt opposed to using 'Content here making it 
                 look like readable.</p>
            </section>

            {/* Floor plan */}
            <section className="floorplan">
              <h3 className="floor-plan-title">Floor plan</h3>
              <p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. 
                Mediocrem torquatos deseruisse te eum commodo.</p>
              <div className="floorplan-card">
                <img src={floor1} alt="floorplan" />
                <span className="floor-badge">Ground Floor</span>
              </div>
            </section>

            {/* What's nearby */}
            <section className="nearby">
              <h3 className="nearby-title">What's nearby?</h3>
              <p>la consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
              <div className="nearby-grid">
                <div className="near-item"><strong>School:</strong> 0.5km</div>
                <div className="near-item"><strong>Hospital,medical:</strong> 1.3km</div>
                <div className="near-item"><strong>Metro station:</strong> 0.1km</div>
                <div className="near-item"><strong>University:</strong> 2.2km</div>
                <div className="near-item"><strong>Grocery Center:</strong> 0.2km</div>
                <div className="near-item"><strong>River:</strong> 0.6km</div>
                <div className="near-item"><strong>Gym,wellness:</strong> 1.4km</div>
                <div className="near-item"><strong>River:</strong> 0.6km</div>
                <div className="near-item"><strong>University:</strong> 2.2km</div>
                <div className="near-item"><strong>Market:</strong> 0.5km</div>
                <div className="near-item"><strong>Market:</strong> 0.5km</div>
                <div className="near-item"><strong>Gym,wellness:</strong> 1.4km</div>
              </div>
            </section>

                {/* ---------- Comments Section ---------- */}
                <section className="comments container my-5">
                  <h3 className="comments-title mb-4">Comments</h3>

                  <div className="comments-box">
                    {/* ---------- Comment 1 ---------- */}
                    <div className="comment-item mb-4 p-3 border rounded">
                      <div className="row g-3 align-items-start">
                        <div className="col-md-2  text-center">
                          <img src={profile1} alt="user" className="avatar img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-10 ">
                          <strong>Dianne Russell</strong>
                          <div className="comment-meta text-muted small mb-2">
                            March 10, 2023 | 10:30 am
                          </div>
                          <p className="mb-3">
                            Mi quis hendrerit dolor magna eget est lorem. Velit sed ullamcorper morbi tincidunt
                            ornare massa. Tristique senectus et netus et. Iaculis eu non diam.
                          </p>

                          <div className="comment-images mb-3 d-flex flex-wrap gap-2">
                            <img src={prop1} alt="c1" className="img-fluid rounded" style={{ width: "80px" }} />
                            <img src={prop2} alt="c2" className="img-fluid rounded" style={{ width: "80px" }} />
                            <img src={prop3} alt="c3" className="img-fluid rounded" style={{ width: "80px" }} />
                          </div>

                          <div className="comment-actions d-flex flex-wrap gap-3">
                            <button className="btn btn-sm btn-outline-secondary like">
                              <img src={like} alt="like" className="me-1" /> Like
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={dislike} alt="dislike" className="me-1" /> Dislike
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={comment} alt="reply" className="me-1" /> Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ---------- Comment 2 ---------- */}
                    <div className="comment-item mb-4 p-3 border rounded">
                      <div className="row g-3 align-items-start">
                        <div className="col-md-2  text-center">
                          <img src={profile2} alt="user2" className="avatar img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-10 ">
                          <strong>Arlene McCoy</strong>
                          <div className="comment-meta text-muted small mb-2">
                            March 10, 2023 | 11:30 am
                          </div>
                          <p className="mb-3">
                            Mi quis hendrerit dolor magna eget est lorem. Velit sed ullamcorper morbi tincidunt
                            ornare massa. Tristique senectus et netus et. Iaculis eu non diam phasellus. Nullam ac
                            tortor vitae purus. Eget nullam non nisi est sit amet faci.
                          </p>

                          <div className="comment-actions d-flex flex-wrap gap-3">
                            <button className="btn btn-sm btn-outline-secondary like">
                              <img src={like} alt="like" className="me-1" /> Like
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={dislike} alt="dislike" className="me-1" /> Dislike
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={comment} alt="reply" className="me-1" /> Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ---------- Comment 3 ---------- */}
                    <div className="comment-item mb-4 p-3 border rounded">
                      <div className="row g-3 align-items-start">
                        <div className="col-md-2  text-center">
                          <img src={profile3} alt="user3" className="avatar img-fluid rounded-circle" />
                        </div>
                        <div className="col-md-10  ">
                          <strong>Annette Black</strong>
                          <div className="comment-meta text-muted small mb-2">
                            March 10, 2023 | 11:30 am
                          </div>
                          <p className="mb-3">
                            Mi quis hendrerit dolor magna eget est lorem. Velit sed ullamcorper morbi tincidunt
                            ornare massa. Tristique senectus et netus et. Iaculis eu non diam phasellus. Nullam ac
                            tortor vitae purus. Eget nullam non nisi est sit amet facilisis.
                          </p>

                          <div className="comment-actions d-flex flex-wrap gap-3">
                            <button className="btn btn-sm btn-outline-secondary like">
                              <img src={like} alt="like" className="me-1" /> Like
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={dislike} alt="dislike" className="me-1" /> Dislike
                            </button>
                            <button className="btn btn-sm btn-outline-secondary">
                              <img src={comment} alt="reply" className="me-1" /> Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>



            <form className="review-form" onSubmit={handleReviewSubmit}>
              <section>
              <h3 className="review-title">Leave a Review</h3>
              <div className="form-row">
                <div className="form-group">
                  <img src={nameIcon} alt="name" />
                  <input value={review.name} onChange={e => setReview({...review, name: e.target.value})} type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <img src={mailIcon} alt="email" />
                  <input value={review.email} onChange={e => setReview({...review, email: e.target.value})} type="email" placeholder="Email" />
                </div>
              </div>

              <div className="form-group">
                <img src={websiteIcon} alt="website" />
                <input value={review.website} onChange={e => setReview({...review, website: e.target.value})} type="text" placeholder="Website" />
              </div>

              <div className="form-group">
                <div>
                  <img src={messageIcon} alt="message" />
                </div>
                <textarea value={review.message} onChange={e => setReview({...review, message: e.target.value})} placeholder="Message"></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
              </section>
              

              
            </form>
            </div>

            <div>
            <aside className="side-col">

            {/* Agent Card */}
            <div className="agent-card">
              <div className ="agent-infos" >
                <div>
                  <img src={agent} alt="agent" className="agent-photo"/>
                </div>
                <div>
                  <h4>Anne Hathaway</h4>
                  <p className="agent-role">Land Seller</p>
                  </div>
              </div>
              <p className="agent-about">About Agent</p>
              <p className="agent-bio">A perfect property finder and seller with great 
                knowledge in the real estate field. Talented in 
                searching for a property with in the customer's 
                needed areas.</p>
              <div className="agent-contact">
                <div className="d-flex align-items-center justify-content-center px-4 gap-4" >
                  <img src={agentmail} alt="email" className="agent-icon"/>
                  <a href="mailto:anne.hathaway@email.com">anne.hathaway@email.com</a>
                </div>
                <div className="d-flex align-items-center justify-content-center px-4 gap-4">
                  <img src={agentphone} alt="phone" className="agent-icon"/>
                  <a href="tel:+17195041984">+1 719-504-1984</a>
                </div>
              </div>
            </div>

            {/* Contact box */}
            <div className="contact-box">
              <form onSubmit={handleContactSubmit}>
                <input type="text" placeholder="Name" value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} />
                <input type="email" placeholder="Email" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} />
                <input type="text" placeholder="Phone" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} />
                <textarea placeholder="Message" value={contact.message} onChange={e => setContact({...contact, message: e.target.value})}></textarea>
                <button type="submit" className="submit-btn w-100">Submit</button>
              </form>
            </div>

            {/* Latest Blog (your provided code, adapted to React className) */}
            <div className="latest-blog-card">
              <h4>Our Latest Blog</h4>
              <div className="latest-item">
                <img src={blog1} alt="latest" />
                <div className="latest-meta">
                  <small>24-12-2020 /  <span className="author">by Esther Miles</span></small>
                  <h5>Open Space And Bright Colors</h5>
                  <p className="tiny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo orci metus tempor.</p>
                  <div className="more-btn">    
                    <button className="read-more" >Read More →</button>
                  </div>
                </div>
              </div>
            </div>

            </aside>
            </div>
            </div>

          </main>

          {/* ---------------- Right Column (Sidebar) ---------------- */}
          
        </div>
      </div>
    </div>
  );
}
