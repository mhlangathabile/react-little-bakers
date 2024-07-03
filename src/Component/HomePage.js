import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import ChefsAttire from "../Images/Chefs attire.jpg";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="homepage row">
        <div className="col-6 bakers">
          <h1>TINY BAKERS</h1>
          <br />
          <h3>"Sweet Treats Made by Tiny Feet!"</h3>
        </div>
        <div className="col-6">
          <img
            src={ChefsAttire}
            alt="DonutsGif"
            // style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
