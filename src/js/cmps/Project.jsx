import React from 'react';
import { Link } from 'react-router-dom';
import { SVG } from './dynamic/SVG';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from './hooks/useWindowSize';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { getRatio } from '../services/utils';

const Project = ({ project }) => {
  const { title, genre, desc, madeWith, urlLive, urlGithub, mobile_image, desktop_image } = project;
  const size = useWindowSize();
  const containerRef = useRef();
  const desktopImageRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        '.skill',
        {
          opacity: 0,
        },
        {
          stagger: 0.1,
          opacity: 1,
          scrollTrigger: {
            trigger: '.skills-used',
            start: 'bottom bottom-=100px',
            end: 'center center',
            // scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        'h2, h5, .desc, .project-actions',
        {
          opacity: 0,
          delay: 0.5,
          y: -10,
          ease: 'power2.inOut',
          stagger: {
            each: 0.2,
          },
        },
        {
          stagger: 0.2,
          opacity: 1,
          scrollTrigger: {
            trigger: '.project-info',
            start: 'top bottom-=20%',
            end: 'center center',
            // scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.gallery',
        {
          y: -10,
          opacity: 0,
        },
        {
          stagger: 0.1,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: '.gallery',
            start: 'center bottom-=20px',
            end: 'center center',
            // scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.mobile-image, .desktop-image',
        {
          scale: 1.1,
        },
        {
          stagger: 0.1,
          scale: 1,
          scrollTrigger: {
            trigger: '.gallery',
            start: 'center bottom-=20px',
            end: 'center center',
            // scrub: 1,
          },
        }
      );
    },

    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.image-container:has(.desktop-image)',
        {
          y: () => '+=200',
        },
        {
          y: () => '-=200',
          scrollTrigger: {
            trigger: '.image-container:has(.desktop-image)',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            // invalidateOnRefresh: true,
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
      <div
        className='gallery'
        style={{
          width: size.width > 960 ? size.width / 2 - 50 : '100%',
        }}
      >
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
