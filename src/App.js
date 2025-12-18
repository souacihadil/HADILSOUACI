import React from 'react';
import Footer from './components/footer';
import Home from './pages/Homme';
import AboutMe from './pages/AboutMe';
import WhyMe from './pages/whyMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <> 
      
      <Home id="home" />
      <AboutMe id="about" />
      <WhyMe id="whyme" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;




