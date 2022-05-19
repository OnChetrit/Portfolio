import on from "../../assets/img/on.png";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Social } from "./Social";

const container = {
  show: {
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
};
const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <section id="about" className="about flex align-center">
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
          <motion.div className="social flex align-center" variants={item}>
            <span>Find me Here </span>
            <Social />
          </motion.div>
        </motion.div>
        <div className="right flex auto-center">
          <motion.div className="photo" variants={item}>
            {/* <Tilt
              trackOnWindow={true}
              transitionSpeed={3000}
              tiltReverse={true}
              scale={1.05}
            > */}
            <img src={on} alt="" />
            <div className="circle flex auto-center">
              <div className="logo"></div>
              <div className="text">
                <p>
                  {"Open To Work - Open To Work - ".split("").map((char, i) => {
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
            {/* </Tilt> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
