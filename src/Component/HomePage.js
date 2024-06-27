import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Navigation */}
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
      <div className="homepage">
        <h1>TINY BAKERS</h1>
        <h3>"Sweet Treats Made by Tiny Feet!"</h3>
      </div>
    </div>
  );
};

export default HomePage;
