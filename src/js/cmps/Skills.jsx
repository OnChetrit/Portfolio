import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    // adaptiveHeight: true,
    arrows: false,
    autoplaySpeed: 4000,
    autoplay: true,
    centerMode: true,
    className: '',
    dots: false,
    draggable: false,
    speed: 4000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="skills" className="skills flex column justify-center">
      <h4 className="section-header main-container"> Skills .</h4>
      <div className="skills-container">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};
