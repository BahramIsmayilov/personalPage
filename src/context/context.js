import React, { useEffect } from "react";
// import { items } from "./data";
import { client } from "./contentful";

const PersonalContext = React.createContext();

function PersonalProvider({ children }) {
  const [projects, setProjects] = React.useState([]);
  const [btn, setBtn] = React.useState(false);
  const [tempProjects, setTempProjects] = React.useState([]);
  const [react, setReact] = React.useState([]);
  const [javascript, setJavascript] = React.useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "personalSite"
      })
      .then(response => {
        setProjects(
          response.items.map(item => {
            const { id } = item.sys;
            const { name } = item.fields;
            const { built } = item.fields;
            const { used } = item.fields;
            const { description } = item.fields;
            const { urlGithub } = item.fields;
            const { urlWebSite } = item.fields;
            const image = item.fields.image.fields.file.url;
            return {
              id,
              name,
              built,
              used,
              description,
              urlGithub,
              urlWebSite,
              image
            };
          })
        );
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    setTempProjects(projects);
  }, [projects]);
  const handleBtn = e => {
    setBtn(!e);
  };
  const handleChange = e => {
    setTempProjects(projects);
    if (e === "all") {
      setTempProjects(projects);
    } else if (e === "react") {
      const tempReact = projects.filter(project => project.built === "react");
      setTempProjects(tempReact);
    } else if (e === "javascript") {
      const tempJavascript = projects.filter(
        project => project.built === "javascript"
      );
      setTempProjects(tempJavascript);
    }

    return tempProjects;
  };
  console.log(tempProjects);

  return (
    <PersonalContext.Provider
      value={{ projects, handleBtn, btn, handleChange, tempProjects }}
    >
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };
