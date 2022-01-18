import { Link } from 'react-router-dom';
import { SVG } from './dynamic/SVG';
import { projects } from '../services/project.service';

import Wednesday from '../../assets/img/thumbnails/Wednesday.png';
import Appsus from '../../assets/img/thumbnails/Appsus.png';
import TouchTheNumbers from '../../assets/img/thumbnails/TouchTheNumbers.png';
import MemeGenerator from '../../assets/img/thumbnails/MemeGenerator.png';
import Minesweeper from '../../assets/img/thumbnails/Minesweeper.png';

export const ProjectList = () => {
  const renderImg = (src) => {
    switch (src) {
      case 'Wednesday':
        return Wednesday;
      case 'Appsus':
        return Appsus;
      case 'TouchTheNumbers':
        return TouchTheNumbers;
      case 'MemeGenerator':
        return MemeGenerator;
      case 'Minesweeper':
        return Minesweeper;
    }
  };

  return (
    <>
      {projects.reverse().map((project) => {
        return (
          <section key={project.title} className="project">
            <h5>{project.genre}</h5>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div className="skills-used">
              {project.madeWith.map((skill) => {
                <SVG key={skill} skill={skill} />;
              })}
            </div>
            <div className="project-actions">
              <Link to={{pathname: project.urlLive}} target="_blank">View Site</Link>
              <Link to={{pathname: project.urlGithub}} target="_blank">Repo</Link>
            </div>
            <div className="thumbnail">
              <img src={renderImg(project.thumbnails)} alt="" srcset="" />
            </div>
          </section>
        );
      })}
    </>
  );
};
