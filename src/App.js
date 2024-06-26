import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import AboutUs from "./Component/AboutUs";
import MenuPage from "./Component/MenuPage";
import EventsPage from "./Component/EventsPage";
import ContactUs from "./Component/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
