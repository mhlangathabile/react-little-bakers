import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="homepage">
        <h1>TINY BAKERS</h1>
        <h3>"Sweet Treats Made by Tiny Feet!"</h3>
      </div>
    </div>
  );
};

export default HomePage;
