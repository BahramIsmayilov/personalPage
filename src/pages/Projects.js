import React from "react";
import { PersonalContext } from "../context/context";
// import Project from "../components/Project";

const Projects = () => {
  const projects = React.useContext(PersonalContext);
  console.log(projects);

  return (
    <div>
      helo
      {/* {projects.map(item => {
        return <Project key={item.id} {...item} />;
      })} */}
    </div>
  );
};

export default Projects;
