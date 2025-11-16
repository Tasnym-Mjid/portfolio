import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import AssociativeLife from "./AssociativeLife";
import Contact from "./Contact";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée des animations (en ms)
      easing: "ease-out-cubic", // effet de fluidité
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Home data-aos="fade-up" />
      <About data-aos="fade-up" />
      <Education data-aos="fade-up" />
      <Experience data-aos="fade-up" />
      <Projects data-aos="fade-up" />
      <Skills data-aos="fade-up" />
      <AssociativeLife data-aos="fade-up" />
      <Contact data-aos="fade-up" />
      <Footer />
    </div>
  );
}

export default App;
