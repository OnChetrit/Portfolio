import { useGSAP } from '@gsap/react';
import useProjects from './hooks/useProjects';
import Project from './Project';
import gsap from 'gsap';
import { useRef } from 'react';

export const ProjectList = () => {
  const [projects, codeOasisLogoSrc] = useProjects();
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        '.infinite-text-left',
        {
          x: 0,
        },
        {
          x: '-=300',
          scrollTrigger: {
            trigger: '.infinite-text-left',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            toggleActions: 'play none none reset',
          },
        }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        '.infinite-text-right',
        {
          x: 0,
        },
        {
          x: '+=300',
          scrollTrigger: {
            trigger: '.infinite-text-right',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            toggleActions: 'play none none reset',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className='infinite-text-container' id='projects' ref={containerRef}>
        <div className='infinite-text-left flex'>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
        </div>
        <div className='infinite-text-right flex'>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
          Projects ★ <span> Projects ★ </span>
        </div>
      </section>
      <div className='project-list'>
        {projects.map((project) => {
          return (
            <Project project={project} key={project.title} codeOasisLogoSrc={codeOasisLogoSrc} />
          );
        })}
      </div>
    </>
  );
};
