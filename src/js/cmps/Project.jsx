import React from 'react';
import { Link } from 'react-router-dom';
import { SVG } from './dynamic/SVG';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from './hooks/useWindowSize';

const Project = ({ project }) => {
  const { title, genre, desc, madeWith, urlLive, urlGithub, mobile_image, desktop_image } = project;
  const size = useWindowSize();
  return (
    <section id={title} className='project flex main-container'>
      <div className='project-info flex column'>
        <h5>{genre}</h5>
        <h2>{title}</h2>
        <div className='desc'>
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className='project-actions flex space-between'>
          <Link to={{ pathname: urlLive }} className='action' target='_blank'>
            View Site
          </Link>
          <Link to={{ pathname: urlGithub }} className='action' target='_blank'>
            Repo
          </Link>
        </div>
        <div className='skills-used flex'>
          {madeWith?.map((skill) => {
            return (
              <Tilt perspective={500} key={skill} scale={1.15}>
                <SVG skill={skill} />
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
          <img className='desktop-image' src={desktop_image} alt='' loading='lazy' />
        </div>
      </div>
    </section>
  );
};

export default Project;
