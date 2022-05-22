import { Link } from "react-scroll";
import { motion } from "framer-motion";
import cv from "../../assets/docs/on-chetrit-cv.pdf";

const container = {
  hidden: { y: "-100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
      staggerChildren: 1,
      delayChildren: 0.8,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const item = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const height = window.innerHeight;

export const MenuModal = ({ setMenuOpen }) => {
  const links = ["about", "skills", "contact"];
  return (
    <motion.div
      className="menu-modal flex column auto-center"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {links.map((link) => {
        return (
          <motion.div key={link} variants={item}>
            <Link
              to={link === "skills" ? "about" : link}
              offset={
                link === "contact" ? 0 : link === "skills" ? height - 150 : -150
              }
              smooth={true}
              duration={1400}
              delay={1000}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {link}
            </Link>
          </motion.div>
        );
      })}
      <motion.div variants={item} className="tab container-button">
        <button className="btn-br modal">
          <a href={cv} download="on-chetrit-cv">
            Download CV
          </a>
        </button>
      </motion.div>
    </motion.div>
  );
};
