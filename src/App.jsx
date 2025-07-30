// App.jsx
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import DesktopNavbar from "./components/DesktopNavbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Mobile Nav */}
      <MobileNav />

      {/* Main Content */}
      <div className="flex-1 md:ml-72">
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
