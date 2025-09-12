import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./Pages/Homepage";           // ✅ default export
import PropertiesPage from "./Pages/PropertiesPage/index"; // ✅ fixed import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property" element={<PropertiesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
