import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';

const SingleProject = item => {
  const { id, name, built, urlGithub, urlWebSite, image } = item;
  return (
    <div className="singleProject">
      <div className="image-cover">
        <img src={image} alt={name} />
        <div></div>
        <Link to={`projects/${id}`}>
          <FaSearch className="search-icon" />
        </Link>
      </div>
      <div className="footer-cover">
        <h3>{name}</h3>
        <div>
          <h3>{built}</h3>
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
  );
};
export default SingleProject;
