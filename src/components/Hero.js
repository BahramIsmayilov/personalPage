import React from "react";

const Hero = ({ img, title, description }) => {
  return (
    <article className="hero">
      <img src={img} alt={title} />
      <div className="hero-effect"></div>
      <div className="hero-title">
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </article>
  );
};

export default Hero;
