// src/pages/Projects.jsx
import React from "react";
import "./Project.css";
import video1 from "../images/video1.mp4";
import video2 from "../images/video2.mp4";
import calculatoa from "../images/calculatorApp.png";
import todoApp from "../images/todoApp.png";
import temperator from "../images/celApp.png";
import imageedt from "../images/image_editor.jpg";
import portfolio from "../images/portfolio.png";
import land1 from "../images/landinp1.png";
import land2 from "../images/landp2.png";
import land3 from "../images/landing page.png";
import land4 from "../images/landp3.png";
import land5 from "../images/menassa.png";
import dashboard from "../images/dashboard.png";
import cur1 from "../images/onlinePl.jpg";
import cur2 from "../images/onlinShop1.jpg";
import cur3 from "../images/onlinShop2.jpg";

// Big React Projects (videos)
const bigReactProjects = [
  {
    id: 1,
    title: "React Online Store",
    type: "video",
    src: video1,
    link: "#",
  },
  {
    id: 2,
    title: "React Educational Platform",
    type: "video",
    src: video2,
    link: "#",
  },
];

// Small React Projects (images)
const smallReactProjects = [
  {
    id: 3,
    title: "Calculator App",
    type: "image",
    src: calculatoa,
    link: "https://souacihadil.github.io/calculator/",
  },
  {
    id: 4,
    title: "To Do List App",
    type: "image",
    src: todoApp,
    link: "https://souacihadil.github.io/todo-list/",
  },
  {
    id: 5,
    title: "Temperator App",
    type: "image",
    src: temperator,
    link: "https://souacihadil.github.io/temperator/",
  },
];

// HTML/CSS/JS Projects (images)
const htmlProjects = [
  {
    id: 6,
    title: "Image Editor",
    type: "image",
    src: imageedt,
    link: "https://souacihadil.github.io/image-effect/",
  },
  {
    id: 7,
    title: "Portfolio",
    type: "image",
    src: portfolio,
    link: "#",
  },
  {
    id: 8,
    title: "Landing Page",
    type: "image",
    src: land2,
    link: "https://souacihadil.github.io/Informational-website-for-a-car-agency/",
  },
  {
    id: 9,
    title: "Landing Page",
    type: "image",
    src: land3,
    link: "https://souacihadil.github.io/Girls-Tech-Club/",
  },
  {
    id: 10,
    title: "Landing Page",
    type: "image",
    src: land4,
    link: "https://souacihadil.github.io/universal-landing-page/",
  },
  {
    id: 11,
    title: "Landing Page",
    type: "image",
    src: land1,
    link: "https://souacihadil.github.io/landing-page/",
  },
  
];
const longScreenshots = [
  {
    id: 12,
    title: "Online Platforme",
    type: "image",
    src: cur1,
    
  },
  {
    id: 13,
    title: "Online shop Store",
    type: "image",
    src: cur2,
    
  },
  {
    id: 14,
    title: "Online shop Store",
    type: "image",
    src: cur3,
   
  },
];


// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.type === "video" ? "video-card" : ""}`}>
      {project.type === "video" ? (
        <video
          controls
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={project.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={project.src} alt={project.title} />
      )}
      <div className="overlay">
        <h3>{project.title}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    </div>
  );
};

// Projects Page Component
const Projects = ({id="projects"}) => {
  return (
    <div  id={id} className="projects-page">
      <div className="page-header">
        <h1>PROJECTS</h1>
        <div className="underline"></div>
      </div>

      <h2 className="section-title">Big React Projects</h2>
      <div className="projects-grid big">
        {bigReactProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      <h2 className="section-title">Small React Projects</h2>
      <div className="projects-grid small">
        {smallReactProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      <h2 className="section-title">HTML / CSS / JS Projects</h2>
      <div className="projects-grid html">
        {htmlProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
      <h2 className="section-title">Complete Web-Site</h2>
<div className="projects-grid long-screenshots">
  {longScreenshots.map((proj) => (
    <ProjectCard key={proj.id} project={proj} />
  ))}
</div>

    </div>
  );
};

export default Projects;




