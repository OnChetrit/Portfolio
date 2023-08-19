import { Link, animateScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import cv from '../../assets/docs/On-Chetrit-Resume.pdf';

import { Menu } from './Menu';
import { projects } from '../services/project.service';

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
  let scroll = animateScroll;

  return (
    <header className='flex'>
      <motion.nav variants={variants} className='flex align-center space-between'>
        <span>On Chetrit</span>
        <div className='burger-menu'>
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>

        <motion.ul variants={variants} className='flex nav'>
          <motion.li variants={itemVariants} className='tab'>
            <Link
              onClick={() => scroll.scrollToTop()}
              to='about'
              spy={true}
              smooth={true}
              duration={1400}
              offset={-80}
              activeClass='active'
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className='tab'>
            <Link
              spy={true}
              to='about'
              smooth={true}
              duration={1400}
              offset={height - 160}
              activeClass='active'
            >
              Skills
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className='tab projects-hover'>
            <div className='projects flex align-center'>Projects</div>
            <div className='dropdown-container'>
              <ul className='dropdown flex'>
                {projects.map(({ title }) => {
                  return (
                    <li className='tab flex align-center' key={title}>
                      <Link
                        spy={true}
                        to={title}
                        offset={-80}
                        smooth={true}
                        duration={1400}
                        activeClass='active'
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.li>
          <motion.li variants={itemVariants} className='tab'>
            <Link to='contact' spy={true} smooth={true} duration={1400} activeClass='active'>
              Contact
            </Link>
          </motion.li>
          <motion.div className='tab container-button'>
            <a href={cv} download='on-chetrit-cv' className='btn-br'>
              Download CV
            </a>
          </motion.div>
        </motion.ul>
      </motion.nav>
    </header>
  );
};
