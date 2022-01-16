import { Link } from 'react-router-dom';
import { projects } from '../services/project.service';

export const ProjectList = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <section key={project.title} className="project">
            <h2>{project.title}</h2>
            <h5>{project.genre}</h5>
            <Link to={project.url}>View Site</Link>
          </section>
        );
      })}
    </>
  );
};
