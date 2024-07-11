import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="bakersTitle">
        TINY BAKERS
      </a>

      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/AboutUs">ABOUT US</a>
        </li>
        <li>
          <a href="/MenuPage">MENU</a>
        </li>
        <li>
          <a href="/ContactUs">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
