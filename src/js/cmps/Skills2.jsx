import { ReactComponent as Css } from "../../assets/img/skills/css.svg";
import { ReactComponent as Html } from "../../assets/img/skills/html5.svg";
import { ReactComponent as Js } from "../../assets/img/skills/javascript.svg";
import { ReactComponent as Bootstrap } from "../../assets/img/skills/bootstrap-5.svg";
import { ReactComponent as NestJS } from "../../assets/img/skills/nestjs.svg";
import { ReactComponent as MySQL } from "../../assets/img/skills/mysql.svg";
import { ReactComponent as Mongodb } from "../../assets/img/skills/mongodb.svg";
import { ReactComponent as Nodejs } from "../../assets/img/skills/node-js.svg";
import { ReactComponent as Reactjs } from "../../assets/img/skills/react-js.svg";
import { ReactComponent as Vue } from "../../assets/img/skills/vue-js.svg";
import { ReactComponent as Sass } from "../../assets/img/skills/sass.svg";
import { ReactComponent as Typescript } from "../../assets/img/skills/typescript.svg";

export const Skills2 = () => {
  return (
    <section id="skills" className="skills flex column justify-center">
      <h4 className="section-header main-container"> Skills .</h4>
      <div className="skills-container">
        <div className="skill-container flex auto-center">
          <Html />
        </div>
        <div className="skill-container flex auto-center">
          <Css />
        </div>
        <div className="skill-container flex auto-center">
          <Sass />
        </div>
        <div className="skill-container flex auto-center">
          <Bootstrap />
        </div>
        <div className="skill-container flex auto-center">
          <Js />
        </div>
        <div className="skill-container flex auto-center">
          <Typescript />
        </div>

        <div className="skill-container flex auto-center">
          <Reactjs />
        </div>
        <div className="skill-container flex auto-center">
          <Vue />
        </div>

        <div className="skill-container flex auto-center">
          <Nodejs />
        </div>
        <div className="skill-container flex auto-center">
          <NestJS />
        </div>
        <div className="skill-container flex auto-center">
          <Mongodb />
        </div>
        <div className="skill-container flex auto-center">
          <MySQL />
        </div>
      </div>
    </section>
  );
};
