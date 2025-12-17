import React, { useEffect, useRef, useState } from 'react';
import './whyMe.css';
import '../index.css'
import WhyMeCard from "../components/Card";

import { FaLaptopCode, FaRobot, FaLightbulb } from 'react-icons/fa';

const WhyMe = ({id="whyme"}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // نوقف المراقبة بعد الظهور
        }
      },
      { threshold: 0.2 } // عندما يظهر 20% من العنصر
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []);

  return (
    <section id={id}
      ref={containerRef}
      className={`whyme-container fade-in ${isVisible ? 'active' : ''}`}
    >
      <div className="whyme-header">
        <h2 className="whyme-title">Why Work With Me?</h2>
        <div className="underline"></div>
        <p className="whyme-text">
          <span className="highlighted-line">
            I am an AI graduate with experience in multiple <span className="ai-projects">AI projects</span>
          </span>, including image recognition, predictive modeling, and data analysis. 
          I design and build modern websites and interfaces, and in the future, I will develop smart web apps integrating AI using Flask.
        </p>
      </div>

      <div className="whyme-cards">
        <WhyMeCard 
          title="Web Development"
          Icon={FaLaptopCode}
          content="Built responsive, clean, and modern front-end interfaces."
          isPrimary={true}
        />
        <WhyMeCard 
          title="AI Experience"
          Icon={FaRobot}
          content="Knowledge in AI, machine learning, and data analysis."
        />
        <WhyMeCard 
          title="Future Smart Apps"
          Icon={FaLightbulb}
          content="Planning to integrate AI into web apps for intelligent user experiences."
        />
      </div>
    </section>
  );
};

export default WhyMe;


