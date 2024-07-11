import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <a href="/" className="logo">
        TINY BAKERS
      </a>

      <ul className="navBar">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/AboutUs.js">ABOUT US</a>
        </li>
        <li>
          <a href="/Menu.js">MENU</a>
        </li>
        <li>
          <a href="/ContactUs.js">CONTACT US</a>
        </li>
      </ul>

      <div className="navContent">
        <a href=""></a>
      </div>
    </header>
  );
};

export default NavBar;
