import React from "react";
import Hero from "../components/Hero";
import img from "../img/about.jpeg";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section className="section">
      <Hero img={img} title="about me" description="little about me" />
      <AboutInfo />
      <Footer />
    </section>
  );
};

export default About;
