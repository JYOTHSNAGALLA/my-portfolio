import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-72">
        <MobileNav />
        <main className="pt-20 px-4 space-y-16">
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
