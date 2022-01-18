import { useState } from 'react';

import { Header } from "./js/cmps/Header";
import { About } from "./js/cmps/About";
import { Skills } from "./js/cmps/Skills";
import { ProjectList } from "./js/cmps/Projects";
import { Contact } from "./js/cmps/Contact";
import { MenuModal } from './js/cmps/MenuModal';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app flex column auto-center">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <main className="flex column">
        <About />
        {/* <Skills /> */}
        <ProjectList />
        {/* <Contact /> */}
      </main>
      <div className={`modal ${menuOpen ? 'open' : ''}`}>
        <MenuModal setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
