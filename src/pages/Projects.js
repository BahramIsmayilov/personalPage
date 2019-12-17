import React from "react";
import { PersonalContext } from "../context/context";
// import Project from "../components/Project";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = React.useContext(PersonalContext);
  console.log(projects);

  return (
    <div>
      <h1>Hello from projects page</h1>
      {/* {projects.map(item => {
        return <Project key={item.id} {...item} />;
      })} */}
      <Footer />
    </div>
  );
};

export default Projects;
