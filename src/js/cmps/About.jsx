import on from '../../assets/img/on.webp';
import { Social } from './Social';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const About = ({ setAboutHeight }) => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from('.animate', {
        opacity: 0,
        delay: 0.5,
        y: -10,
        ease: 'power2.inOut',
        stagger: {
          each: 0.2,
        },
        autoAlpha: true,
      });

      gsap.to(container.current, {
        // y: '-=50%',
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: container }
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
        <h3 className='animate'>Hi! I'm On Chetrit</h3>
        <h1 className='animate'>Front End Developer</h1>
        <p className='animate'>
          focused on CSS and its vast ecosystem. Dedicated to designing stunning, responsive web
          interfaces that excel in both aesthetics and performance.
        </p>
        <div className='social animate flex align-center'>
          <span>Find me Here </span>
          <Social />
        </div>
      </div>
      <div className='animate right flex auto-center'>
        <div className='photo'>
          <img src={on} alt='' />
        </div>
      </div>
    </section>
  );
};
