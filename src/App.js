import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Header } from './js/cmps/Header';
import { About } from './js/cmps/About';
import { ProjectList } from './js/cmps/ProjectList';
import { Contact } from './js/cmps/Contact';
import { MenuModal } from './js/cmps/MenuModal';
import { useWindowSize } from './js/cmps/hooks/useWindowSize';
import { Skills } from './js/cmps/Skills';
import { ReactLenis } from 'lenis/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutHeight, setAboutHeight] = useState(0);
  const size = useWindowSize();

  return (
    <ReactLenis root>
      <div className='app flex column auto-center'>
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <main className='flex column'>
          <About setAboutHeight={setAboutHeight} />
          <Skills />
          <ProjectList />
          <Contact />
        </main>
        {size.width < 760 && (
          <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {menuOpen && <MenuModal setMenuOpen={setMenuOpen} aboutHeight={aboutHeight} />}
          </AnimatePresence>
        )}
      </div>
    </ReactLenis>
  );
}

export default App;
