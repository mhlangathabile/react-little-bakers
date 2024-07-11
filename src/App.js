import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import AboutUs from "./Component/AboutUs";
import MenuPage from "./Component/MenuPage";
import ContactUs from "./Component/ContactUs";
import NavBar from "./Component/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
