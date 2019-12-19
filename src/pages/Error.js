import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h2>oops:! it`s a dead end</h2>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};

export default Error;
