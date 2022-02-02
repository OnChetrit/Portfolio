import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Header } from "./js/cmps/Header";
import { About } from "./js/cmps/About";
// import { Skills } from "./js/cmps/Skills";
import { ProjectList } from "./js/cmps/Projects";
import { Contact } from "./js/cmps/Contact";
import { MenuModal } from './js/cmps/MenuModal';
import { useWindowSize } from './js/cmps/hooks/useWindowSize';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 2000)
  })

  if (loading) return <div>Loadding</div>
  return (
    <div className="app flex column auto-center">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <main className="flex column">
        <About />
        {/* <Skills /> */}
        <ProjectList />
        <Contact />
      </main>
      {/* {size.width < 760 && <div className={`modal ${menuOpen ? 'open' : ''}`}>
        <MenuModal setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      </div>} */}

      {size.width < 760 && <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {menuOpen && <MenuModal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      </AnimatePresence>}
    </div>
  );
}

export default App;
