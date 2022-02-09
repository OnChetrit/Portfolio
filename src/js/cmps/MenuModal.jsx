import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';

import { projects } from '../services/project.service';

export const MenuModal = ({ setMenuOpen, menuOpen }) => {
  const links = ['about', 'projects', 'contact'];

  const scrollToSection = (link) => {
    scroller.scrollTo(link, {
      duration: 3800,
      delay: 100,
      // smooth: true,
      offset: '150px',
    });
  };

  const container = {
    hidden: { y: '-100vh' },
    visible: { y: 0 },
    show: {
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      y: '-100vh',
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  };

  const sideVariants = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
        staggerChildren: 1,
      },
    },
    exit: {
      x: '-100vw',
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="menu-modal flex column auto-center"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      // animate="show"
    >
      {links.map((link) => {
        return (
          <motion.div
            key={link}
            variants={sideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
              setMenuOpen(false);
              scrollToSection(link);
            }}
          >
            {link}
          </motion.div>
        );
      })}
      <motion.div
        variants={sideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="tab container-button"
      >
        <span className="mas flex auto-center opp">Download CV</span>
        <button className="contact-me opp">Download CV</button>
      </motion.div>
    </motion.div>
  );
};
