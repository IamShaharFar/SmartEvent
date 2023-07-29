import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <span className="logo">Smart Event</span>
      <div className="buttons-container">
        <a href='https://www.linkedin.com/in/shahar-faradyan/' className="linkedin-button">My LinkedIn</a>
        <a href='https://shaharfaradyan.z6.web.core.windows.net/' className="portfolio-button">My Portfolio</a>
      </div>
    </header>
  );
}

export default Header;
