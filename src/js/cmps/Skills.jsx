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
  const randomDelay = () => Math.floor(Math.random() * 30) + 3;
  const randomDuration = () => Math.floor(Math.random() * 4) + 1;
  return (
    <section id="skills" className="skills flex column justify-center">
      <h4 className="section-header main-container"> Skills .</h4>
      <div className="skills-container">
        <div className="skill-container flex auto-center">
          <Html
            style={{
              animationDuration: randomDuration() + 's',
              animationDelay: randomDelay() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Css
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Sass
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Bootstrap
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Javascript
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Typescript
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <React
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Vue
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Nodejs
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <NestJS
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <Mongodb
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
        <div className="skill-container flex auto-center">
          <MySQL
            style={{
              animationDelay: randomDelay() + 's',
              animationDuration: randomDuration() + 's',
            }}
          />
        </div>
      </div>
    </section>
  );
};
