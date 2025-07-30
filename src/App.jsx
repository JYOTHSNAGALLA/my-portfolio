import React from "react";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 md:ml-72 flex-1">
        <MobileNav />
        <main className="pt-20 md:pt-0 px-4 space-y-20 bg-gray-900">
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
