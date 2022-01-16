import Slider from 'react-slick';

import { ReactComponent as Responsive } from '../../assets/img/skills/cross-platform.svg';
import { ReactComponent as Css } from '../../assets/img/skills/css.svg';
import { ReactComponent as Expressjs } from '../../assets/img/skills/expressjs.svg';
import { ReactComponent as Git } from '../../assets/img/skills/git.svg';
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div id="skills" className="">
      <Slider {...settings}>
        <Responsive />
        <Expressjs />
        <Git />
        <Html />
        <Js />
        <Jquery />
        <Mongodb />
        <Nodejs />
        <Reactjs />
        <RestApi />
        <Sass />
        <Heroku />
      </Slider>
    </div>
  );
};
