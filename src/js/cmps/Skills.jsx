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
import { ReactComponent as Gsap } from '../../assets/img/skills/gsap.svg';
import { ReactComponent as Apollo } from '../../assets/img/skills/apollo.svg';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const skills = {
  html: Html,
  css: Css,
  sass: Sass,
  tailwind: Tailwind,
  gsap: Gsap,
  bootstrap: Bootstrap,
  javascript: Javascript,
  typescript: Typescript,
  react: React,
  nextjs: NextJS,
  vue: Vue,
  apollo: Apollo,
  graphql: Graphql,
  nodejs: Nodejs,
  nestjs: NestJS,
};

export const Skills = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        '.skill',
        {
          opacity: 0,
          scale: 1.3,
          // y: '-=100%',
          // stagger: {
          //   each: 1.5,
          // },
        },
        {
          opacity: 1,
          stagger: 0.5,
          scale: 1,
          scrollTrigger: {
            trigger: '.skill',
            start: 'bottom bottom-=150px',
            end: 'center center-=100px',
            scrub: 0.5,
          },
        }
      );
    },
    { scope: container }
  );

  const skillsList = Object.keys(skills).map((key, index) => {
    const Component = skills[key];
    return (
      <div className='skill flex auto-center' key={key}>
        <Component />
      </div>
    );
  });

  return (
    <section id='skills' className='skills-container flex column justify-center'>
      <div className='header'>
        <h4 className='skills-title'> Skills .</h4>
      </div>
      <ul className='skills-list' ref={container}>
        {skillsList}
      </ul>
    </section>
  );
};
