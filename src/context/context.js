import React, { useEffect } from "react";
// import { items } from "./data";
import { client } from "./contentful";

const PersonalContext = React.createContext();

function PersonalProvider({ children }) {
  // const projects = items.map(item => {
  //   const { id } = item.sys;
  //   const image = item.fields.image.fields.file.url;
  //   const { urlGithub } = item.fields;
  //   const { urlWebSite } = item.fields;
  //   return { id, image, urlGithub, urlWebSite };
  // });
  const [projects, setProjects] = React.useState([]);
  const [btn, setBtn] = React.useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: "personalSite"
      })
      .then(response => {
        setProjects(
          response.items.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const { urlGithub } = item.fields;
            const { urlWebSite } = item.fields;
            return { id, image, urlGithub, urlWebSite };
          })
        );
        // return projects;
      })
      .catch(console.error);
  }, []);
  const handleBtn = e => {
    setBtn(!e);
  };

  // console.log(projects);
  // projects.map(item => {
  //   const { id } = item.sys;
  //   const image = item.fields.image.fields.file.url;
  //   const { urlGithub } = item.fields;
  //   const { urlWebSite } = item.fields;
  //   return { id, image, urlGithub, urlWebSite };
  // });
  return (
    <PersonalContext.Provider value={{ projects, handleBtn, btn }}>
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };
