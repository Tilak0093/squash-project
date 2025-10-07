import React from "react";
import HeroSection from "../HeroSection/HeroSectionPage";
import About from "../About/About"; 
import Choose from "../Choose/Choose";
import Latest from "../Latest/Latest";
import Neighborhood from "../Neighborhood/Neighborhood";
import Team from "../Team/Team";
import Blog from "../Blog/Blog";
import Subscribe from "../Subscribe/Subscribe";
import Popup  from "../Popup/Popup";

const MainContent = () => {
  return (
    <div className="main-content">
        <HeroSection />
        
      <div className="container">
        <About />
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#f1f1f1' }}>
        <Choose />
      </div>

      <div className="container">
        <Latest />
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#f1f1f1' }}>
        <Neighborhood />
      </div>

      <div className="container-fluid">
        <Team />
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#f1f1f1' }}>
        <Blog />
      </div>

      <div className="container">
        <Subscribe />
      </div>
      <div className="container">
        <Popup />
      </div>
    </div>
  );
};

export default MainContent;
