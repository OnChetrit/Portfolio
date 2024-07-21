import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import cv from '../../assets/docs/On-Chetrit-CV.pdf';
import { projects } from '../services/project.service';

const container = {
  hidden: { y: '-100%' },
  show: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
      staggerChildren: 0.07,
      delayChildren: 0.8,
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
      delay: 1,
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: '40vw',
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-40vw',
    transition: {
      duration: 0.5,
    },
  },
};

export const MenuModal = ({ setMenuOpen, aboutHeight }) => {
  const projectsTitle = projects.map((p) => p.title);
  const links = ['about', 'skills', 'projects', ...projectsTitle, 'contact'];

  return (
    <motion.div
      className='menu-modal flex column justify-center'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {links.map((link) => {
        return (
          <motion.div
            key={link}
            variants={item}
            className={projectsTitle.includes(link) ? 'projects-title' : ''}
          >
            <Link
              // to={link === 'skills' ? 'about' : link}
              to={link}
              // offset={link === 'contact' ? 0 : link === 'skills' ? aboutHeight - 80 : -80}
              offset={-80}
              smooth={true}
              isDynamic={true}
              duration={1400}
              delay={1300}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {link}
            </Link>
          </motion.div>
        );
      })}
      <motion.div variants={item} className='tab container-button'>
        <button className='btn-br modal'>
          <a href={cv} download='on-chetrit-cv'>
            Download CV
          </a>
        </button>
      </motion.div>
    </motion.div>
  );
};
