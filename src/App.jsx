import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <main className="pt-20 md:ml-64 bg-gray-900 text-white min-h-screen">
        {/* Add sections here */}
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
