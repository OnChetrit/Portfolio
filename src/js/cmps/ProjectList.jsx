import { useGSAP } from '@gsap/react';
import useProjects from './hooks/useProjects';
import Project from './Project';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export const ProjectList = () => {
  const projects = useProjects();

  useGSAP(() => {});

  return (
    <>
      <section className='infinite-text-container' id='projects'>
        <div className='infinite-text flex'>
          <p className='line'>
            {' '}
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </p>
          <p className='line'>
            {' '}
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </p>
        </div>{' '}
        <div className='infinite-text flex'>
          <p className='line'>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
          </p>
          <p className='line'>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>
            Projects ★ <span> Projects ★ </span>{' '}
          </p>
        </div>
      </section>
      <div className='project-list'>
        {projects.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </>
  );
};
