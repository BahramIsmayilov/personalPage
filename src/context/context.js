import React, { useEffect } from "react";
// import { items } from "./data";
import { client } from "./contentful";

const PersonalContext = React.createContext();

function PersonalProvider({ children }) {
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
  const handleBtn = e => {
    setBtn(!e);
  };

  return (
    <PersonalContext.Provider value={{ projects, handleBtn, btn }}>
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };
