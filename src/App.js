import { About } from "./js/cmps/About";
import { Contact } from "./js/cmps/Contact";
import { Header } from "./js/cmps/Header";
import { ProjectList } from "./js/cmps/Projects";
import { Skills } from "./js/cmps/Skills";


function App() {
  return (
    <div className="app flex column auto-center">
      <Header />
      <main className="flex column">
        <About />
        {/* <Skills /> */}
        <ProjectList />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
