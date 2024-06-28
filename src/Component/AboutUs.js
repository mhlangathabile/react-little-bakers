import React from "react";
import NavBar from "./NavBar";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="/src/Images/Little Chefs.jpg" />
          </div>
          <div className="col-6">
            <h1>ABOUT US</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
