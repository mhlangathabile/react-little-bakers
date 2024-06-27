import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <div className="container-fluid">
          <a href="/" className="site-name">
            TINY BAKERS
          </a>
        </div>
      </nav>
      <div className="mt-3 links">
        <a href="/">HOME</a>
        <a href="/AboutUs">ABOUT US</a>
        <a href="/MenuPage">MENU</a>
        <a href="/EventsPage">EVENTS</a>
        <a href="/ContactUs">CONTACT US</a>
      </div>
    </div>
  );
};

export default NavBar;
