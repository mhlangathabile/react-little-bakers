import React from "react";
import NavBar from "./NavBar";
import "./AboutUs.css";
import aboutUsImage from "../Images/Still Life Image.gif";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="row p-5 aboutUs">
        <div className="col-6">
          <h1 className="text-center">ABOUT US</h1>
          <div className=" border-top border-right border-light rounded-bottom p-5">
            <p>
              Welcome to Tiny Bakers, where little hands create big delights!
              Born from the joy of seeing kids turn kitchen messes into magical
              treats, we are dedicated to bringing families together through the
              art of baking. Our mission is to inspire creativity, promote
              togetherness, and build confidence in every young baker. We value
              fun, learning, safety, and community, ensuring that every baking
              adventure is filled with laughter, love, and delicious memories.
              Join us at Tiny Bakers, where every moment is a sweet celebration!
            </p>
          </div>
        </div>
        <div className="col-6">
          <img src={aboutUsImage} alt="Little Chefs" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
