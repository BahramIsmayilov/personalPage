import React from 'react';
import { PersonalContext } from '../context/context';
import { useParams, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import Footer from './Footer';

const SingleProjectInfo = () => {
  const { projects } = React.useContext(PersonalContext);
  const { id } = useParams();
  const project = projects.find(item => id === item.id);
  const {
    name,
    built,
    used,
    description,
    image,
    urlGithub,
    urlWebSite
  } = project;
  return (
    <section className="section">
      <div className="singleProjectInfoBody">
        <div className="container">
          <div className="img-container">
            <img src={image} alt={name} />
          </div>
          <div className="singleProjectInfo">
            <h1>name : {name}</h1>
            <h3>built with {built}</h3>
            <h4>description : </h4>
            <p>{description}</p>
            <h4>technologies used :</h4>
            <h5>{used}</h5>
            <div>
              <Link to="/projects" type="button" className="btn">
                back all projects
              </Link>
              <div>
                <a href={urlGithub} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="singleProject-icon-git icon" />
                </a>
                <a href={urlWebSite} target="_blank" rel="noopener noreferrer">
                  <FiMonitor className="singleProject-icon-web icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleProjectInfo;
