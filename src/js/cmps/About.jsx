import on from '../../assets/img/on.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.section
      id="about"
      className="about flex justify-center main-container"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="left">
        <h3 variants={item}>Hi! I'm On Chetrit</h3>
        <h1 variants={item}>Full-Stack Web Developer</h1>
        <p variants={item}>
          Well-qualified Full Stack Developer familiar with wide range of
          programming utilities and languages. Knowledgeable of backend and
          frontend development requirements.
        </p>
        <p variants={item}>
          Handle any part of process with ease. Collaborative team player with
          excellent technical abilities, hard worker, focusing on problem
          solving. self-learner and adapt quickly to new environments.
        </p>
        <div className="actions flex" variants={item}>
          <div className="container-button">
            <span className="mas flex auto-center">Contact Me</span>
            <button className="contact-me">
              <Link to="contact" smooth={true} duration={2200}>
                Contact Me
              </Link>
            </button>
          </div>
          <div className="container-button">
            <span className="mas flex auto-center">Download CV</span>
            <button className="contact-me">Download CV</button>
          </div>
          {/* <button className="mas flex auto-center">Download CV</button> */}
        </div>
      </div>
      <div className="right flex auto-center">
        <div className="photo" variants={item}>
          <Tilt trackOnWindow={true} tiltReverse={true} scale={1.05}>
            <img src={on} alt="" />
            <div className="circle flex auto-center">
              <div className="logo"></div>
              <div className="text">
                <p>
                  {'Open To Work - Open To Work - '.split('').map((char, i) => {
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
    </motion.section>
  );
};
