import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./Pages/Homepage";           // ✅ default export
import PropertiesPage from "./Pages/PropertiesPage/Property"; // ✅ fixed import

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import AboutUs from "./Pages/AboutUs/AboutUS";
function App() {
  return (
    <Router>  
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property" element={<PropertiesPage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
