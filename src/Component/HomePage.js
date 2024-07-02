import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import DonutsGif from "../Images/Donuts .gif";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="homepage row">
        <div className="col-6">
          <img
            src={DonutsGif}
            alt="DonutsGif"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-6">
          <h1>TINY BAKERS</h1>
          <h3>"Sweet Treats Made by Tiny Feet!"</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
