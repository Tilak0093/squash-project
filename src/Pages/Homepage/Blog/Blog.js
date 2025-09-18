import React from "react";
import "./Blog.css";

// import images
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";

const Blog = () => {  
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
  ];

  return (
    <section className="blog-section py-5">
      <div className="container text-center">
        {/* Section Heading */}
        <p className="section-subtitle">| OUR BLOG |</p>
        <h2 className="section-title">Explore Our Blog</h2>

        {/* Blog Cards */}
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
                  {/* Date Tag */}
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
  );
};

export default Blog;
