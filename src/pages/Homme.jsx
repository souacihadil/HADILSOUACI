import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../components/Header"; 
import cv from "../images/HADIL_SOUACI.pdf"

const Home = ({id="home"}) => {
  const fullName = "HADIL SOUACI";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setTypedName(fullName.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullName.length) {
          setIsDeleting(true);
          setSpeed(1000);
        } else {
          setSpeed(150);
        }
      } else {
        setTypedName(fullName.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
          setSpeed(500);
        } else {
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typedName, isDeleting, index, speed]);

  return (
    <div id={id} className="home">
      <Header />
      <h1 className="title">Welcome</h1>
      <h2 className="subtitle-name">
        I’m <span>{typedName}<span className="cursor">|</span></span>
      </h2>
      <p className="subtitle-role">Frontend Developer</p>
      <button
  className="btn"
  onClick={() => window.open(cv, "_blank")}
>
  HIRE ME
</button>
    </div>
  );
};

export default Home;




