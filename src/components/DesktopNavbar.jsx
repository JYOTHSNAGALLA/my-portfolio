const DesktopNavbar = () => (
  <nav className="hidden md:flex fixed top-0 left-72 w-[calc(100%-18rem)] bg-gray-900 text-white justify-center gap-8 py-4 z-40">
    <a href="#about" className="hover:text-indigo-400">About</a>
    <a href="#resume" className="hover:text-indigo-400">Resume</a>
    <a href="#projects" className="hover:text-indigo-400">Projects</a>
    <a href="#contact" className="hover:text-indigo-400">Contact</a>
  </nav>
);

export default DesktopNavbar;