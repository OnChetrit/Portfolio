import on from '../../assets/img/on.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Divider } from './Divider';

export const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: '-20px' },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about">
      <div className="top flex justify-center main-container">
        <motion.div
          className="left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h3 variants={item}>Hi! I'm On Chetrit</motion.h3>
          <motion.h1 variants={item}>Full-Stack Web Developer</motion.h1>
          <motion.p variants={item}>
            Well-qualified Full Stack Developer familiar with wide range of
            programming utilities and languages. Knowledgeable of backend and
            frontend development requirements.
          </motion.p>
          <motion.p variants={item}>
            Handle any part of process with ease. Collaborative team player with
            excellent technical abilities, hard worker, focusing on problem
            solving. self-learner and adapt quickly to new environments.
          </motion.p>
          <div className="actions flex" variants={item}>
            <div className="container-button">
              <span className="mas flex auto-center">Contact Me</span>
              <button className="contact-me">
                <Link to="contact" smooth={true} duration={2200}>
                  Contact Me
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
        <div className="right flex auto-center">
          <div className="photo" variants={item}>
            <Tilt
              trackOnWindow={true}
              transitionSpeed={3000}
              tiltReverse={true}
              scale={1.05}
            >
              <img src={on} alt="" />
              <div className="circle flex auto-center">
                <div className="logo"></div>
                <div className="text">
                  <p>
                    {'Open To Work - Open To Work - '
                      .split('')
                      .map((char, i) => {
                        return (
                          <span
                            key={i}
                            style={{ transform: `rotate(${i * 12}deg)` }}
                          >
                            {char}
                          </span>
                        );
                      })}
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};
