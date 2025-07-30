import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import DesktopNavbar from "./components/DesktopNavbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar (Desktop only) */}
      <div className={`hidden md:flex transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-16' : 'w-64'}`}>
        <Sidebar isOpen={!sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Mobile Sidebar Navigation */}
      <MobileNav />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'md:ml-16' : 'md:ml-64'}`}>
        <DesktopNavbar />
        <main className="pt-16 px-4">
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
