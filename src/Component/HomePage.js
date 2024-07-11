import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import TinyChefs from "../Images/Tiny Chef homepage.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <div className="content">
        <div>
          <h1 data-aos="fade-right" data-aos-duration="1400">
            TINY BAKERS
          </h1>
          <h3
            data-aos="zoom-in-left"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            SWEET TREATS MADE BY TINY FEET!
          </h3>
        </div>
        <div
          className="homepageImage"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img src={TinyChefs} alt="homepage image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
