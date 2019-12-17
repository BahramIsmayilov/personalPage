import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>bahram ismayilov</h1>
      <div className="footer-icon">
        <a href="https://www.youtube.com/BahramIsmayilov" target="_blank">
          <FaYoutube className="youtube icon" />
        </a>
        <a href="https://www.facebook.com/Bahram.Ismayilov89" target="_blank">
          <FaFacebook className="facebook icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/bahram-ismayilov-a35260154/"
          target="_blank"
        >
          <FaLinkedin className="linkedin icon" />
        </a>
        <a href="https://github.com/BahramIsmayilov" target="_blank">
          <FaGithub className="icon github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
