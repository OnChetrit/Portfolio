import blackjack_mobile from './projects/blackjack/mobile.webp';
import blackjack_desktop from './projects/blackjack/desk.webp';
import looper_mobile from './projects/looper/mobile.webp';
import looper_desktop from './projects/looper/desk.webp';
import memeGenerator_mobile from './projects/memeGenerator/mobile.webp';
import memeGenerator_desktop from './projects/memeGenerator/desk.webp';
import touchNumbers_mobile from './projects/touchNumbers/mobile.webp';
import touchNumbers_desktop from './projects/touchNumbers/desk.webp';
import minesweeper_mobile from './projects/minesweeper/mobile.webp';
import minesweeper_desktop from './projects/minesweeper/desk.webp';
import alm_mobile from './projects/alm/mobile.webp';
import alm_desktop from './projects/alm/desk.webp';
import experis_mobile from './projects/experis/mobile.webp';
import experis_desktop from './projects/experis/desk.webp';

const useProjects = () => {
  const projects = [
    {
      title: 'ALM',
      genre: 'E commerce',
      urlLive: 'https://alm.co.il/',
      mobile_image: alm_mobile,
      desktop_image: alm_desktop,
      desc: `
      <p>An E-commerce website I've created at CodeOasis. <br>
      using Magento PWA's Venia template. <br>
      I was responsible to implemented responsive, adaptive web designs and enhancing user experience.</p>
      <p>Optimized page load times and site performance.</p>
      `,
      madeWith: ['reactjs', 'javascript', 'sass', 'tailwind', 'graphql'],
    },
    {
      title: 'Experis',
      genre: 'Jobs',
      urlLive: 'https://www.experis.co.il/',
      mobile_image: experis_mobile,
      desktop_image: experis_desktop,
      desc: `
      <p>A Job finder for IT departments.<br>
      Build with Next Js 13 and Typescript.<br>
      .</p>
      `,
      madeWith: ['nextjs', 'typescript', 'sass', 'tailwind', 'graphql'],
    },
    {
      title: 'BlackJack',
      genre: 'Game',
      urlLive: 'https://onchetrit.github.io/blackjack/',
      urlGithub: 'https://github.com/OnChetrit/blackjack',
      mobile_image: blackjack_mobile,
      desktop_image: blackjack_desktop,
      desc: `
      <p>Experience the excitement of Blackjack with this React.js game. <br>
      Place your bets, hit, and stand to reach 21, all while enjoying a sleek and responsive design styled with Sass. <br>
      Challenge yourself and refine your strategy in this engaging card game.</p>
      `,
      madeWith: ['reactjs', 'javascript', 'sass'],
    },
    {
      title: 'Looper App',
      genre: 'Audio',
      urlLive: 'https://onchetrit.github.io/looper-app/',
      urlGithub: 'https://github.com/OnChetrit/looper-app',
      mobile_image: looper_mobile,
      desktop_image: looper_desktop,

      desc: `<p>This interactive audio app leverages the Web Audio API and Canvas API to provide a seamless audio experience. <br>
      Users can play audio loops without gaps, adjust the volume, and deactivate audio as needed, ensuring smooth and versatile audio manipulation.</p>
      `,
      madeWith: ['reactjs', 'javascript', 'sass'],
    },
    {
      title: 'Meme Generator',
      genre: 'Creative',
      urlLive: 'https://onchetrit.github.io/on-chetrit-meme-generator/',
      urlGithub: 'https://github.com/OnChetrit/on-chetrit-meme-generator',
      mobile_image: memeGenerator_mobile,
      desktop_image: memeGenerator_desktop,
      desc: `
      <p>Canvas-based meme generator allows for easy caption addition to your images or a vast collection of memes. Whether you're crafting your own meme or browsing through a library, this tool offers simplicity and creativity.</p>
      <p>Save your customized meme or export it directly to your device for sharing with friends and family.</p>
     `,
      madeWith: ['javascript', 'html', 'css'],
    },
    {
      title: 'Touch the numbers',
      genre: 'Game',
      urlLive: 'https://onchetrit.github.io/TouchNums/',
      urlGithub: 'https://github.com/OnChetrit/TouchNums',
      mobile_image: touchNumbers_mobile,
      desktop_image: touchNumbers_desktop,
      desc: `
      <p>Touch the Numbers web game is a thrilling challenge where you must click on numbers in ascending order as quickly as possible, striving to achieve the best time.</p>
      <p>With multiple difficulty levels, you can tailor the game to your skill level and test your speed and accuracy.</p>
      `,
      madeWith: ['javascript', 'html', 'css'],
    },
    {
      title: 'Minesweeper',
      genre: 'Game',
      urlLive: 'https://onchetrit.github.io/MineSweeperOnChetrit/',
      urlGithub: 'https://github.com/OnChetrit/MineSweeperOnChetrit',
      mobile_image: minesweeper_mobile,
      desktop_image: minesweeper_desktop,
      desc: `
      <p>Minesweeper game with multiple difficulty levels. Uncover the number board without detonating bombs. Each number indicates neighboring bombs. Features 3 lives and 3 hints to aid bomb detection.</p>
      <p>Left click to open cells, right click to flag/unflag, and wheel click to open surrounding cells safely.</p>
     `,
      madeWith: ['javascript', 'html', 'css'],
    },
  ];

  return projects;
};

export default useProjects;
