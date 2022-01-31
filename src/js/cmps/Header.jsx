import { Link } from "react-scroll";
import { Menu } from "./Menu";

import { projects } from "../services/project.service";

export const Header = ({ setMenuOpen, menuOpen }) => {
  const links = ["about", "projects", "contact"];
  return (
    <header className="flex">
      <nav className="flex align-center space-between main-container">
        <span>On Chetrit</span>
        <div className="burger-menu">
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>

        <ul className="flex nav">
          <li className="tab">
            <Link to="about" smooth={true} duration={1400}>
              About
            </Link>
          </li>
          <li className="tab">
            <div className="projects flex align-center">
              Projects
             
            </div>
            <div className="dropdown-container">

            <ul className="dropdown main-container flex">
                {projects.map(({ title, thumbnails }) => {
                  return (
                    <li className="tab flex align-center">
                      <Link to={thumbnails} smooth={true} duration={1400}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              </div>
          </li>
          <li className="tab">
            <Link to="contact" smooth={true} duration={1400}>
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};
