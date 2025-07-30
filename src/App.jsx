import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import DesktopNavbar from "./components/DesktopNavbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Sidebar />
      <MobileNav />
      <DesktopNavbar />
      <main className="pt-20 md:pl-64 px-4">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;