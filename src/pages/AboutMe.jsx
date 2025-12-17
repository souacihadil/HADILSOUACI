import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si"; // ← أضف هذا
import "./AboutMe.css";

const About = ({id="about"}) => {
  return (
    <div id={id} className="about-container">

      <div className="about-header">
        <div className="about-title">
          <h4 className="discover">DISCOVER</h4>
          <h1 className="about-main">
            ABOUT <span>ME</span>
          </h1>
          <div className="underline"></div>
        </div>

        <h1 className="main-title">
          I build modern <span>websites</span>, <span>online stores</span> & clean <span>UI</span>.
        </h1>
      </div>

      <p className="about-text">
        I design and build clean, responsive, and user-friendly front-end interfaces for all kinds of websites —
        from portfolios and school platforms to landing pages, business websites, and online stores.
        I focus on creating modern visuals, smooth interactions, and a great user experience using React
        and other modern front-end tools.
      </p>

      {/* ------------------------ SKILLS SECTION ------------------------ */}

      <div className="skills-section">
        <h2 className="skills-title">SKILLS</h2>

        <div className="skills-grid">

          <div className="skill-item">
            <FaReact className="skill-icon" />
            <p>React</p>
          </div>

          <div className="skill-item">
            <SiJavascript className="skill-icon" />
            <p>JavaScript</p>
          </div>

          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <p>HTML5</p>
          </div>

          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <p>CSS3</p>
          </div>

          <div className="skill-item">
            <SiTailwindcss className="skill-icon" />
            <p>Tailwind</p>
          </div>

          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <p>Git</p>
          </div>

          <div className="skill-item">
            <FaCode className="skill-icon" />
            <p>API</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;



