import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex min-h-screen text-gray-800 bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
