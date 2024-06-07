import on from '../../assets/img/on.webp';
import { motion } from 'framer-motion';
import { Social } from './Social';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// const container = {
//   show: {
//     transition: { staggerChildren: 0.3, delayChildren: 0.4 },
//   },
// };
// const imageContainer = {
//   show: {
//     transition: { delayChildren: 1.5 },
//   },
// };
// const item = {
//   hidden: { opacity: 0, y: -20 },
//   show: { opacity: 1, y: 0 },
// };

export const About = ({ setAboutHeight }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 1,
          pin: true,
        },
      });
    },
    {
      scope: container,
    }
  );

  useEffect(() => {
    setAboutHeight(container.current.clientHeight);
  });

  return (
    <section
      id='about'
      className='about flex align-center justify-center main-container'
      ref={container}
      data-speed='1.1'
    >
      <div className='left'>
        <h3>Hi! I'm On Chetrit</h3>
        <h1>Front End Developer</h1>
        <p>
          focused on CSS and its vast ecosystem. Dedicated to designing stunning, responsive web
          interfaces that excel in both aesthetics and performance.
        </p>
        <div className='social flex align-center'>
          <span>Find me Here </span>
          <Social />
        </div>
      </div>
      <div className='right flex auto-center'>
        <div className='photo'>
          <img src={on} alt='' />
        </div>
      </div>
    </section>
  );
};
