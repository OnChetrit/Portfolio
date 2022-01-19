import { Link } from 'react-scroll';
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuModal = ({ setMenuOpen }) => {
  const links = ["about", "skills", "projects", "contact"];

  const sideVariants = {
    closed: {
      transition: {
        x: -800
      }
    },
    open: {
      transition: {
        x: 0
      }
    }
  };

  return (
    <div className="menu-modal flex column align-center space-evenly">
      {links.map((link) => {
        return (
          <motion.a
            to={link}
            key={link}
            smooth={true}
            duration={1400}
            variants={sideVariants}
            initial="closed"
            animate="open"
            transition={{
              type: "spring",
              stiffness: 260
            }}
          >
            {link}
          </motion.a>
        );
      })}
    </div>
  );
};
