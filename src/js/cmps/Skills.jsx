import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as Css } from "../../assets/img/skills/css.svg";
import { ReactComponent as Html } from "../../assets/img/skills/html5.svg";
import { ReactComponent as Js } from "../../assets/img/skills/javascript.svg";
import { ReactComponent as Jquery } from "../../assets/img/skills/jquery.svg";
import { ReactComponent as NestJS } from "../../assets/img/skills/nestjs.svg";
import { ReactComponent as MySQL } from "../../assets/img/skills/mysql.svg";
import { ReactComponent as Mongodb } from "../../assets/img/skills/mongodb.svg";
import { ReactComponent as Nodejs } from "../../assets/img/skills/node-js.svg";
import { ReactComponent as Reactjs } from "../../assets/img/skills/react-js.svg";
import { ReactComponent as Sass } from "../../assets/img/skills/sass.svg";
import { ReactComponent as Typescript } from "../../assets/img/skills/typescript.svg";

export const Skills = () => {
  const settings = {
    arrows: false,
    adaptiveHeight: true,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: false,
    draggable: false,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
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
            <Sass />
          </div>
          <div className="skill-container">
            <Html />
          </div>
          <div className="skill-container">
            <Js />
          </div>
          <div className="skill-container">
            <Typescript />
          </div>
          <div className="skill-container">
            <Jquery />
          </div>
          <div className="skill-container">
            <Mongodb />
          </div>
          <div className="skill-container">
            <MySQL />
          </div>
          <div className="skill-container">
            <Nodejs />
          </div>
          <div className="skill-container">
            <Reactjs />
          </div>
          <div className="skill-container">
            <NestJS />
          </div>
        </Slider>
      </div>
    </div>
  );
};
