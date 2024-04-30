import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Header } from './js/cmps/Header';
import { About } from './js/cmps/About';
import { ProjectList } from './js/cmps/ProjectList';
import { Contact } from './js/cmps/Contact';
import { MenuModal } from './js/cmps/MenuModal';

import { useWindowSize } from './js/cmps/hooks/useWindowSize';
import { Skills } from './js/cmps/Skills';
import { Loader } from './js/cmps/Loader';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [aboutHeight, setAboutHeight] = useState(0);

  const size = useWindowSize();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // });

  if (loading) return <Loader setLoading={setLoading} />;
  return (
    <div className='app flex column auto-center'>
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <main className='flex column'>
        <section className='test'>
          <About setAboutHeight={setAboutHeight} />
          <Skills />
        </section>
        <ProjectList />
        <Contact />
      </main>
      {size.width < 760 && (
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
          {menuOpen && <MenuModal setMenuOpen={setMenuOpen} aboutHeight={aboutHeight} />}
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
