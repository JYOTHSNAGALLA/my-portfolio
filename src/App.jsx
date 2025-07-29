// App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-72 w-full">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
