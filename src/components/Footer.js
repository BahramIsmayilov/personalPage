import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer">
      {/* <h1>bahram ismayilov</h1> */}
      <div className="footer-icon">
        <a
          href="https://www.youtube.com/BahramIsmayilov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="youtube icon" />
        </a>
        <a
          href="https://www.facebook.com/Bahram.Ismayilov89"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="facebook icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/bahram-ismayilov-a35260154/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="linkedin icon" />
        </a>
        <a
          href="https://github.com/BahramIsmayilov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
      </div>
      <p className="copy-right">
        <MdCopyright className="copy-right-icon" /> Bahram Ismayilov 2019 - 2020
      </p>
    </footer>
  );
};

export default Footer;
