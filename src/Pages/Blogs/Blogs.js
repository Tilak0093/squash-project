import React from "react";
import "./Blogs.css";

import propertybg from "../../assets/propertybg.jpg";
import Diamond from "../../assets/propertydiamond.png";

// Blog images
import blog1 from "../../assets/blogs1.png";
import blog2 from "../../assets/blogs2.png";
import blog3 from "../../assets/blogs3.png";
import blog4 from "../../assets/blogs4.png";
import blog5 from "../../assets/blogs5.png";
import blog6 from "../../assets/blogs6.png";
import blog7 from "../../assets/blogs7.png";
import blog8 from "../../assets/blogs8.png";
import blog9 from "../../assets/blogs9.png";

const Blogs = () => {
  const blogData = [
    {
      img: blog1,
      date: "28",
      day: "Tue",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "Top 10 Home Buying Mistakes to Avoid",
      desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      img: blog2,
      date: "08",
      day: "Mon",
      fullDate: "January 20, 2024",
      category: "Market Manager",
      title: "How to Stage Your Home Quick Sale",
      desc: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      img: blog3,
      date: "26",
      day: "Wed",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "5 Tips for First-Time Home Sellers",
      desc: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
    {
      img: blog4,
      date: "28",
      day: "Tue",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "Top 10 Home Buying Mistakes to Avoid",
      desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      img: blog5,
      date: "08",
      day: "Mon",
      fullDate: "January 20, 2024",
      category: "Market Manager",
      title: "How to Stage Your Home Quick Sale",
      desc: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      img: blog6,
      date: "26",
      day: "Wed",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "5 Tips for First-Time Home Sellers",
      desc: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
    {
      img: blog7,
      date: "28",
      day: "Tue",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "Top 10 Home Buying Mistakes to Avoid",
      desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      img: blog8,
      date: "08",
      day: "Mon",
      fullDate: "January 20, 2024",
      category: "Market Manager",
      title: "How to Stage Your Home Quick Sale",
      desc: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      img: blog9,
      date: "26",
      day: "Wed",
      fullDate: "January 04, 2024",
      category: "Architecture",
      title: "5 Tips for First-Time Home Sellers",
      desc: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
  ];

  return (
    <div className="blog-page">
      {/* ---------- Hero / Breadcrumb ---------- */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertybg})` }}
      >
        <div className="overlay">
          <div className="container text-center hero-inner">
            <h1 className="property-hero-title">Blog</h1>
            <div className="hero-breadcrumb">
              <a href="/" className="breadcrumb-home">Home</a>
              <img src={Diamond} alt="separator" className="breadcrumb-separator" />
              <span className="breadcrumb-current">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog Cards Section ---------- */}
      <section className="blogs-section py-5">
        <div className="container text-center">
          <div className="row justify-content-center mt-5">
            {blogData.map((blog, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="blog-card h-100">
                  <div className="blog-card-img position-relative">
                    <img
                      src={blog.img}
                      className="img-fluid rounded"
                      alt={blog.title}
                    />
                    <div className="blog-date-tag">
                      <h5>{blog.date}</h5>
                      <p>{blog.day}</p>
                    </div>
                  </div>
                  <div className="blog-card-body text-start">
                    <p className="blog-card-meta">
                      {blog.fullDate} | <span>{blog.category}</span>
                    </p>
                    <h5 className="blog-card-title">{blog.title}</h5>
                    <p className="blog-card-description">{blog.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pagination ---------- */}
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination custom-pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">‹</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">...</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">12</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">›</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
