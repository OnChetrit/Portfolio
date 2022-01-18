import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { Menu } from './Menu';

export const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <header className="flex">
      <nav className="flex align-center space-between main-container">
        <span>On Chetrit</span>
        <div className="burger-menu">
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>

        <div className="flex nav">
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
      </nav>
    </header>
  );
};
