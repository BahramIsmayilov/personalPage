import React from "react";
import ProjectList from "../components/ProjectList";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img from "../img/projects.jpeg";

const Projects = () => {
  return (
    <div className="projects-page">
      <Hero img={img} title="my projects" description="recent projects" />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Projects;
