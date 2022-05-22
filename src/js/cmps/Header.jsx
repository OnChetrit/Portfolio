import { Link } from "react-scroll";
import { motion } from "framer-motion";
import cv from "../../assets/docs/on-chetrit-cv.pdf";

import { Menu } from "./Menu";
import { projects } from "../services/project.service";

export const Header = ({ setMenuOpen, menuOpen }) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const height = window.innerHeight;

  return (
    <header className="flex">
      <motion.nav
        variants={variants}
        className="flex align-center space-between"
      >
        <span>On Chetrit</span>
        <div className="burger-menu">
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>

        <motion.ul variants={variants} className="flex nav">
          <motion.li variants={itemVariants} className="tab">
            <Link to="about" smooth={true} duration={1400} offset="80px">
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="tab">
            <Link
              to="about"
              smooth={true}
              duration={1400}
              offset={height - 150}
            >
              Skills
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className="tab projects-hover">
            <div className="projects flex align-center">Projects</div>
            <div className="dropdown-container">
              <ul className="dropdown flex">
                {projects.map(({ title }) => {
                  return (
                    <li className="tab flex align-center" key={title}>
                      <Link
                        to={title}
                        offset={-150}
                        smooth={true}
                        duration={1400}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.li>
          <motion.li variants={itemVariants} className="tab">
            <Link to="contact" smooth={true} duration={1400}>
              Contact
            </Link>
          </motion.li>
          <motion.div className="tab container-button">
            <a href={cv} download="on-chetrit-cv" className="btn-br">
              Download CV
            </a>
          </motion.div>
        </motion.ul>
      </motion.nav>
    </header>
  );
};
