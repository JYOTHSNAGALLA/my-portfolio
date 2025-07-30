import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import DesktopNavbar from "./components/DesktopNavbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16"}`}>
        <MobileNav />
        <DesktopNavbar />
        <main className="pt-16 px-4 md:px-10">
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
