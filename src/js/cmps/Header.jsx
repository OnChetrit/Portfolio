import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import cv from '../../assets/docs/On-Chetrit-CV.pdf';

import { Menu } from './Menu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import useProjects from './hooks/useProjects';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export const Header = ({ setMenuOpen, menuOpen }) => {
  const container = useRef();
  const projects = useProjects();

  useGSAP(
    () => {
      gsap.from('.show', {
        opacity: 0,
        delay: 0.5,
        ease: 'power2.inOut',
        stagger: {
          each: 0.2,
        },
        autoAlpha: true,
      });
    },
    { scope: container }
  );

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
    <header className='flex' ref={container}>
      <motion.nav variants={variants} className='flex align-center space-between'>
        <span className='logo show'>
          <Logo />
        </span>
        <div className='burger-menu'>
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>

        <motion.ul variants={variants} className='flex nav'>
          <motion.li variants={itemVariants} className='tab show'>
            <Link to='about' duration={1400} offset={-1000} activeClass='active'>
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className='tab show'>
            <Link to='about' duration={1400} offset={height - 160} activeClass='active'>
              Skills
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} className='tab projects-hover'>
            <div className='projects flex align-center show'>Projects</div>
            <div className='dropdown-container'>
              <ul className='dropdown flex'>
                {projects.map(({ title }) => {
                  return (
                    <li className='tab flex align-center' key={title}>
                      <Link to={title} offset={-80} duration={1400} activeClass='active'>
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.li>
          <motion.li variants={itemVariants} className='tab show'>
            <Link to='contact' duration={1400} activeClass='active'>
              Contact
            </Link>
          </motion.li>
          <motion.div className='tab container-button show'>
            <a href={cv} download='on-chetrit-cv' className='btn-br'>
              Download CV
            </a>
          </motion.div>
        </motion.ul>
      </motion.nav>
    </header>
  );
};
