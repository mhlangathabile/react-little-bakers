import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import BakersShop from "../Images/Bakers shop.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <h1>TINY BAKERS</h1>
      <img src={BakersShop} />
      <h3>"SWEET TREATS MADE BY TINY FEET!"</h3>
    </div>
  );
};

export default HomePage;
