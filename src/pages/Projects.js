import React from "react";
import { PersonalContext } from "../context/context";
// import Project from "../components/Project";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img from "../img/projects.jpeg";

const Projects = () => {
  const projects = React.useContext(PersonalContext);
  console.log(projects);

  return (
    <div>
      <Hero img={img} title="my projects" description="recent projects" />
      {/* {projects.map(item => {
        return <Project key={item.id} {...item} />;
      })} */}
      <Footer />
    </div>
  );
};

export default Projects;
