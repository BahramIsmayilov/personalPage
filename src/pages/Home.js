import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>bahram ismayilov</h1>
        <p>front end developer</p>
        <Link className="btn" to="/projects">
          my projects
        </Link>
      </div>
    </div>
  );
};

export default Home;
