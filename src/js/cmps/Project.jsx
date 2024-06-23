import React from 'react';
import { Link } from 'react-router-dom';
import { SVG } from './dynamic/SVG';
import Tilt from 'react-parallax-tilt';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Project = ({ project, codeOasisLogoSrc }) => {
  const {
    title,
    genre,
    desc,
    madeWith,
    urlLive,
    urlGithub,
    codeOasis,
    mobile_image,
    desktop_image,
  } = project;
  const containerRef = useRef();
  const desktopImageRef = useRef();

  // Skills Reveals
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom-=100px',
          end: 'center center',
          toggleActions: 'play none none reset',
        },
      });
      tl.from('h2, h5, .desc,.code-oasis-logo, .project-actions', {
        opacity: 0,
        y: -10,
        ease: 'power2.inOut',
        stagger: {
          each: 0.2,
        },
      }).from(
        '.skill',
        {
          opacity: 0,
          stagger: 0.1,
        },

        '-=0.5'
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.gallery',
          start: 'center bottom-=200px',
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      });
      tl.from(
        '.gallery',
        {
          opacity: 0,
          duration: 0.5,
          // stagger: 0.1,
        },
        0
      ).from(
        '.mobile-image, .desktop-image',
        {
          stagger: 0.1,
          scale: 1.1,
        },
        0
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.image-container:has(.desktop-image)',
        {
          y: '+=200',
        },
        {
          y: '-=200',
          scrollTrigger: {
            trigger: '.image-container:has(.desktop-image)',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id={title} className='project flex main-container' ref={containerRef}>
      <div className='project-info flex column'>
        <h5>{genre}</h5>
        <h2>{title}</h2>
        {codeOasis && (
          <div className='code-oasis-logo flex'>
            <span>As Part Of</span>
            <img src={codeOasisLogoSrc} alt='code Oasis logo' title='code Oasis logo' />
          </div>
        )}
        <div className='desc'>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className='project-actions flex space-between'>
          {urlLive && (
            <Link to={{ pathname: urlLive }} className='action' target='_blank'>
              View Site
            </Link>
          )}
          {urlGithub && (
            <Link to={{ pathname: urlGithub }} className='action' target='_blank'>
              Repo
            </Link>
          )}
        </div>
        <div className='skills-used flex'>
          {madeWith?.map((skill) => {
            return (
              <Tilt perspective={500} key={skill} scale={1.15}>
                <SVG skill={skill} className='skill' />
              </Tilt>
            );
          })}
        </div>
      </div>
      <div className='gallery'>
        <div className='image-container'>
          <img className='mobile-image' src={mobile_image} alt='' loading='lazy' />
        </div>
        <div className='image-container'>
          <img
            className='desktop-image'
            ref={desktopImageRef}
            src={desktop_image}
            alt=''
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
