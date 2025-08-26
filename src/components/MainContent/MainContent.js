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
      <About/>
      <Choose />
      <Latest />
      <Neighborhood />
      <Team />
      <Blog />
      <Subscribe />
    </div>
  );
};


export default MainContent;
