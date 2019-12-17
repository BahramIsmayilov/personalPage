import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { PersonalContext } from "../context/context";

const Navbar = () => {
  const { handleBtn, btn } = React.useContext(PersonalContext);
  console.log(btn);

  return (
    <nav className="navbar">
      <div>
        <Link className="portfolio" to="/">
          portfolio
        </Link>
      </div>
      <div className={btn ? "nav show" : "nav"}>
        <ul>
          <li>
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <FaBars className="bars" onClick={() => handleBtn(btn)} />
      </div>
    </nav>
  );
};

export default Navbar;
