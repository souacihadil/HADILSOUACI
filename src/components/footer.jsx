import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">

        {/* LEFT: Logo / Name */}
        <div className="footer-left">
          <h2 className="footer-logo">Hadil's Portfolio</h2>
          <p className="footer-text">
            Building modern and interactive web experiences. Let's connect!
          </p>
        </div>

        {/* CENTER: Quick Links */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

      
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hadil. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
