import React from "react";
import HeroSection from "../HeroSection/HeroSectionPage";
import About from "../About/About"; 
import Choose from "../Choose/Choose";
import Latest from "../Latest/Latest";
import Neighborhood from "../Neighborhood/Neighborhood";
import Team from "../Team/Team";
import Blog from "../Blog/Blog";
import Subscribe from "../Subscribe/Subscribe";
const MainContent = () => {
  return (
    <div className="main-content">
        <HeroSection />
        
      <div className="container">
        <About />
      </div>

      <div className="container">
        <Choose />
      </div>

      <div className="container">
        <Latest />
      </div>

      <div className="container">
        <Neighborhood />
      </div>

      <div className="container">
        <Team />
      </div>

      <div className="container">
        <Blog />
      </div>

      <div className="container">
        <Subscribe />
      </div>
    </div>
  );
};

export default MainContent;
