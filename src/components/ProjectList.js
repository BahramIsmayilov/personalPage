import React from "react";
import Title from "./Title";
import { PersonalContext } from "../context/context";
import SingleProject from "./SingleProject";

const ProjectList = () => {
  const { projects } = React.useContext(PersonalContext);

  return (
    <article className="article">
      <Title title="recent projects" />
      <div className="projects">
        {projects.map(item => {
          return <SingleProject key={item.id} {...item} />;
        })}
      </div>
    </article>
  );
};

export default ProjectList;
