import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitter className="icon"/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon"/>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt className="icon"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon"/>
        </a>
      </div>
      <p className="footer-text">
        © 2023 Shahar Faradyan Incorporated. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
