import React from "react";
import Title from "./Title";
import { PersonalContext } from "../context/context";
import SingleProject from "./SingleProject";
import ProjectsBuiltType from "./ProjectsBuiltType";

const ProjectList = () => {
  const { tempProjects } = React.useContext(PersonalContext);

  return (
    <article className="article">
      <Title title="recent projects" />
      <ProjectsBuiltType />
      <div className="projects">
        {tempProjects.map(item => {
          return <SingleProject key={item.id} {...item} />;
        })}
      </div>
    </article>
  );
};

export default ProjectList;
