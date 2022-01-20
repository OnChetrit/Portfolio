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
      {projects.map(
        ({ title, genre, desc, madeWith, urlLive, urlGithub, thumbnails }) => {
          return (
            <section key={title} className="project flex main-container">
              <div className="project-info flex column">
                <h5>{genre}</h5>
                <h2>{title}</h2>
                <div className="desc">
                  {desc.map((p) => {
                    return <p>{p}</p>;
                  })}
                </div>
                <div className="skills-used flex">
                  {madeWith.map((skill) => {
                    return <SVG key={skill} skill={skill} />;
                  })}
                </div>
                <div className="project-actions flex space-between">
                  <Link
                    to={{ pathname: urlLive }}
                    className="ul"
                    target="_blank"
                  >
                    View Site
                  </Link>
                  <Link
                    to={{ pathname: urlGithub }}
                    className="ul"
                    target="_blank"
                  >
                    Repo
                  </Link>
                </div>
              </div>
              <div className="thumbnail">
                <img src={renderImg(thumbnails)} alt="" srcSet="" />
              </div>
            </section>
          );
        }
      )}
    </>
  );
};
