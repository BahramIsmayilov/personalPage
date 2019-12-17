import React from "react";
import Title from "./Title";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";

const AboutInfo = () => {
  return (
    <article className="article">
      <Title title="my info" />
      <div className="about-info">
        <h1>about me</h1>
        <h2>i'm a front end developer from shamakhi, azerbaijan</h2>
        <p className="about-info-p">
          I spend most of my day, working with HTML, CSS, Bootstrap, JS, jQuery,
          React. I enjoy coding and the challange of learning something new
          everyday. When i'm not coding you will find me in the gym or surfing.
        </p>
        <div className="about-info-name">
          <p>
            <strong>first name</strong> : bahram
          </p>
          <p>
            <strong>last name</strong> : ismayilov
          </p>
          <p>
            <strong>location</strong> : shamakhi, azerbaijan
          </p>
        </div>
      </div>
      <Title title="my stack" />
      <div className="my-stack">
        <div>
          <FaHtml5 className="icon html5" />
          <h4>html5</h4>
        </div>
        <div>
          <FaCss3Alt className="icon css3" />
          <h4>css3</h4>
        </div>
        <div>
          <IoLogoJavascript className="icon javascript" />
          <h4>javascript</h4>
        </div>
        <div>
          <DiJqueryLogo className="icon jquery" />
          <h4>jquery</h4>
        </div>
        <div>
          <FaReact className="icon react" />
          <h4>react</h4>
        </div>
      </div>
    </article>
  );
};

export default AboutInfo;
