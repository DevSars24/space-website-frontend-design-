import React from "react";

const Navigation = () => {
  return (
    <header className="header-nav">
      <nav>
        <div className="logo">
          <img
            src="/images/universe.jpg"
            alt="logo"
          />
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#">planets</a></li>
            <li><a href="#">galaxies and multiverse</a></li>
            <li><a href="#">spacex and elon musk</a></li>
            <li><a href="#">aliens</a></li>
          </ul>
          <button className="login-btn">MULTIVERSE</button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;