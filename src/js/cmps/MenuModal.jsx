import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';

import { projects } from '../services/project.service';

export const MenuModal = ({ setMenuOpen, menuOpen }) => {
  const links = ['about', 'projects', 'contact'];

  const scrollToSection = (link) => {
    scroller.scrollTo(link, {
      duration: 1800,
      delay: 500,
      smooth: 'easeInOutQuart',
    });
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
    <div className="menu-modal flex column auto-center">
      {links.map((link) => {
        return (
          <motion.div
            key={link}
            variants={sideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => {
              setMenuOpen(false);
              scrollToSection(link);
            }}
          >
            {link}
          </motion.div>
        );
      })}
    </div>
  );
};
