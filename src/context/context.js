import React, { useEffect } from "react";
// import { items } from "./data";
import { client } from "./contentful";

const PersonalContext = React.createContext();

function PersonalProvider({ children }) {
  const [projects, setProjects] = React.useState([]);
  const [btn, setBtn] = React.useState(false);
  const [tempProjects, setTempProjects] = React.useState([]);

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
            const { order } = item.fields;
            const { built } = item.fields;
            const { used } = item.fields;
            const { description } = item.fields;
            const { urlGithub } = item.fields;
            const { urlWebSite } = item.fields;
            const image = item.fields.image.fields.file.url;
            return {
              id,
              name,
              order,
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
    let orderSort = projects.slice(0);
    orderSort.sort((a, b) => {
      return a.order - b.order;
    });
    setTempProjects(orderSort);
  }, [projects]);
  const handleBtn = e => {
    setBtn(!e);
  };

  const handleChange = e => {
    if (e === "all") {
      let orderSort = projects.slice(0);
      orderSort.sort((a, b) => {
        return a.order - b.order;
      });
      setTempProjects(orderSort);
    } else {
      const tempProject = projects.filter(project => project.built === e);
      let orderSort = tempProject.slice(0);
      orderSort.sort((a, b) => {
        return a.order - b.order;
      });
      setTempProjects(orderSort);
    }
  };
  let orderSort = projects.slice(0);
  orderSort.sort((a, b) => {
    return a.order - b.order;
  });

  return (
    <PersonalContext.Provider
      value={{ projects, handleBtn, btn, handleChange, tempProjects }}
    >
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };
