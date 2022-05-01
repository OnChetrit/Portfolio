import { ReactComponent as Responsive } from '../../../assets/img/skills/cross-platform.svg';
import { ReactComponent as Css } from '../../../assets/img/skills/css.svg';
import { ReactComponent as Expressjs } from '../../../assets/img/skills/expressjs.svg';
import { ReactComponent as Github } from '../../../assets/img/skills/github.svg';
import { ReactComponent as Html } from '../../../assets/img/skills/html5.svg';
import { ReactComponent as Js } from '../../../assets/img/skills/javascript.svg';
import { ReactComponent as Jquery } from '../../../assets/img/skills/jquery.svg';
import { ReactComponent as Mongodb } from '../../../assets/img/skills/mongodb.svg';
import { ReactComponent as Nodejs } from '../../../assets/img/skills/node-js.svg';
import { ReactComponent as Reactjs } from '../../../assets/img/skills/react-js.svg';
import { ReactComponent as RestApi } from '../../../assets/img/skills/rest-api.svg';
import { ReactComponent as Sass } from '../../../assets/img/skills/sass.svg';
import { ReactComponent as Heroku } from '../../../assets/img/skills/heroku.svg';

export const SVG = ({ skill }) => {
  const renderSvg = (skill) => {
    switch (skill) {
      case 'javascript':
        return <Js />;
      case 'responsive':
        return <Responsive />;
      case 'css':
        return <Css />;
      case 'express':
        return <Expressjs />;
      case 'github':
        return <Github />;
      case 'html':
        return <Html />;
      case 'jQuery':
        return <Jquery />;
      case 'mongodb':
        return <Mongodb />;
      case 'nodejs':
        return <Nodejs />;
      case 'reactjs':
        return <Reactjs />;
      case 'restApi':
        return <RestApi />;
      case 'sass':
        return <Sass />;
      case 'heroku':
        return <Heroku />;

      default:
    }
  };
  return <div className="svg">{renderSvg(skill)}</div>;
};
