import React from "react";
import HeroSection from "../HeroSection/HeroSectionPage";
import About from "../About/About"; 
import Choose from "../Choose/Choose";
import Latest from "../Latest/Latest";
import Neighborhood from "../Neighborhood/Neighborhood";
import Team from "../Team/Team";
const MainContent = () => {
  return (
    <div className="main-content">
      <HeroSection />
      <About/>
      <Choose />
      <Latest />
      <Neighborhood />
      <Team />
    </div>
  );
};


export default MainContent;
