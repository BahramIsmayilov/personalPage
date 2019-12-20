import React from "react";
import { PersonalContext } from "../context/context";

const ProjectsBuiltType = () => {
  const { handleChange } = React.useContext(PersonalContext);
  return (
    <div className="projects-type-buttons">
      <button
        type="button"
        className="btn btn-inline"
        onClick={() => handleChange("all")}
      >
        all
      </button>
      <button
        type="button"
        className="btn btn-inline"
        onClick={() => handleChange("react")}
      >
        react
      </button>
      <button
        type="button"
        className="btn btn-inline"
        onClick={() => handleChange("jquery")}
      >
        jquery
      </button>
      <button
        type="button"
        className="btn btn-inline"
        onClick={() => handleChange("vanilla js")}
      >
        vanilla js
      </button>
    </div>
  );
};

export default ProjectsBuiltType;
