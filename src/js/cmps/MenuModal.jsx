import { Link } from 'react-router-dom';

export const MenuModal = ({ setMenuOpen }) => {
  return (
    <div className="menu-modal flex column align-center space-evenly">
      <Link to="about" smooth={true} duration={1400}>
        About
      </Link>
      <Link to="skills" smooth={true} duration={1400}>
        Skills
      </Link>
      <Link to="project" smooth={true} duration={1400}>
        Projects
      </Link>
      <Link to="contact" smooth={true} duration={1400}>
        Contact
      </Link>
    </div>
  );
};
