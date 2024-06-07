import { ReactComponent as Html } from '../../assets/img/skills/html5.svg';
import { ReactComponent as Css } from '../../assets/img/skills/css.svg';
import { ReactComponent as Sass } from '../../assets/img/skills/sass.svg';
import { ReactComponent as Tailwind } from '../../assets/img/skills/tailwind.svg';
import { ReactComponent as Bootstrap } from '../../assets/img/skills/bootstrap-5.svg';
import { ReactComponent as Javascript } from '../../assets/img/skills/javascript.svg';
import { ReactComponent as Typescript } from '../../assets/img/skills/typescript.svg';
import { ReactComponent as React } from '../../assets/img/skills/react-js.svg';
import { ReactComponent as NextJS } from '../../assets/img/skills/nextjs.svg';
import { ReactComponent as Vue } from '../../assets/img/skills/vue-js.svg';
import { ReactComponent as Graphql } from '../../assets/img/skills/graphql.svg';
import { ReactComponent as Nodejs } from '../../assets/img/skills/node-js.svg';
import { ReactComponent as NestJS } from '../../assets/img/skills/nestjs.svg';

const skills = {
  html: Html,
  css: Css,
  sass: Sass,
  tailwind: Tailwind,
  bootstrap: Bootstrap,
  javascript: Javascript,
  typescript: Typescript,
  react: React,
  nextjs: NextJS,
  vue: Vue,
  graphql: Graphql,
  nodejs: Nodejs,
  nestjs: NestJS,
};
export const Skills = () => {
  const skillsList = Object.keys(skills).map((key, index) => {
    const Component = skills[key];
    return (
      <div
        className='skill flex auto-center'
        style={{
          animationTimeline: `view(block ${70}% ${20}%)`,
        }}
      >
        <Component />
      </div>
    );
  });

  return (
    <section id='skills' className='skills-container flex column justify-center'>
      <div className='header'>
        <h4 className='skills-title'> Skills .</h4>
      </div>
      <ul className='skills-list'>{skillsList}</ul>
    </section>
  );
};
