import { ReactComponent as Css } from '../../assets/img/skills/css.svg';
import { ReactComponent as Html } from '../../assets/img/skills/html5.svg';
import { ReactComponent as Javascript } from '../../assets/img/skills/javascript.svg';
import { ReactComponent as Bootstrap } from '../../assets/img/skills/bootstrap-5.svg';
import { ReactComponent as NestJS } from '../../assets/img/skills/nestjs.svg';
import { ReactComponent as MySQL } from '../../assets/img/skills/mysql.svg';
import { ReactComponent as Mongodb } from '../../assets/img/skills/mongodb.svg';
import { ReactComponent as Nodejs } from '../../assets/img/skills/node-js.svg';
import { ReactComponent as React } from '../../assets/img/skills/react-js.svg';
import { ReactComponent as Vue } from '../../assets/img/skills/vue-js.svg';
import { ReactComponent as Sass } from '../../assets/img/skills/sass.svg';
import { ReactComponent as Typescript } from '../../assets/img/skills/typescript.svg';

export const Skills = () => {
  let num = 0;
  const delayNum = () => {
    num += 0.3;
    return num;
  };
  return (
    <section id="skills" className="skills flex column justify-center">
      <h4 className="section-header main-container"> Skills .</h4>
      <div className="skills-container">
        <div className="skill-container flex auto-center">
          <Html
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Css
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Sass
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Bootstrap
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Javascript
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Typescript
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <React
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Vue
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Nodejs
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <NestJS
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Mongodb
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <MySQL
            style={{
              animationDelay: delayNum() + 's',
            }}
          />
        </div>
      </div>
    </section>
  );
};
