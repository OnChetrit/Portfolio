import InfiniteCarousel from 'react-leaf-carousel';

import { ReactComponent as Responsive } from '../../assets/img/skills/cross-platform.svg';
import { ReactComponent as Css } from '../../assets/img/skills/css.svg';
import { ReactComponent as Expressjs } from '../../assets/img/skills/expressjs.svg';
import { ReactComponent as Html } from '../../assets/img/skills/html5.svg';
import { ReactComponent as Js } from '../../assets/img/skills/javascript.svg';
import { ReactComponent as Jquery } from '../../assets/img/skills/jquery.svg';
import { ReactComponent as Mongodb } from '../../assets/img/skills/mongodb.svg';
import { ReactComponent as Nodejs } from '../../assets/img/skills/node-js.svg';
import { ReactComponent as Reactjs } from '../../assets/img/skills/react-js.svg';
import { ReactComponent as RestApi } from '../../assets/img/skills/rest-api.svg';
import { ReactComponent as Sass } from '../../assets/img/skills/sass.svg';
import { ReactComponent as Heroku } from '../../assets/img/skills/heroku.svg';

export const Skills = () => {
  const settings = {
    animationDuration: 1000,
    autoCycle: true,
    cycleInterval: 1000,
    slidesToScroll: 4,
    slidesToShow: 4,
  };

  return (
    <div id="skills" className="main-container flex">
      <InfiniteCarousel {...settings}>
        <div className="skill-container">
          <Css />
        </div>
        <div className="skill-container">
          <Responsive />
        </div>
        <div className="skill-container">
          <Expressjs />
        </div>
        <div className="skill-container">
          <Html />
        </div>
        <div className="skill-container">
          <Js />
        </div>
        <div className="skill-container">
          <Jquery />
        </div>
        <div className="skill-container">
          <Mongodb />
        </div>
        <div className="skill-container">
          <Nodejs />
        </div>
        <div className="skill-container">
          <Reactjs />
        </div>
        <div className="skill-container">
          <RestApi />
        </div>
        <div className="skill-container">
          <Sass />
        </div>
        <div className="skill-container">
          <Heroku />
        </div>
      </InfiniteCarousel>
    </div>
  );
};
