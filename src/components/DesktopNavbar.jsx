// components/DesktopNavbar.jsx
const DesktopNavbar = () => (
  <nav className="hidden md:flex justify-center gap-8 bg-gray-900 text-white py-4 fixed top-0 left-72 w-[calc(100%-18rem)] z-40">
    <a href="#about" className="hover:text-indigo-400">About</a>
    <a href="#resume" className="hover:text-indigo-400">Resume</a>
    <a href="#projects" className="hover:text-indigo-400">Projects</a>
    <a href="#contact" className="hover:text-indigo-400">Contact</a>
  </nav>
);

export default DesktopNavbar;
