import React from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-72 md:ml-72">
        <MobileNav />
        <main className="pt-20 space-y-20">
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App; // ✅ Make sure this line exists!
