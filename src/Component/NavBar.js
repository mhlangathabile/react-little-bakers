import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-name">
          TINY BAKERS
        </a>
        <ul>
          <li>
            <a href="/">HOMEPAGE</a>
          </li>
          <li>
            <a href="/AboutUs">ABOUT US</a>
          </li>
          <li>
            <a href="/MenuPage">MENU </a>
          </li>
          <li>
            <a href="/EventsPage">EVENTS</a>
          </li>
          <li>
            <a href="/ContactUs">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
