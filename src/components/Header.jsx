import React from "react";
import "./Header.css";
import '../index.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="sidebar">

      <nav className="nav-links">
  <a href="#home" className="active">Home</a>
  <a href="#about">About</a>
  <a href="#whyme">Why Me?</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>


      <div className="sidebar-footer">
        <a href="https://github.com/souacihadil" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>

    </div>
  );
};

export default Header;

