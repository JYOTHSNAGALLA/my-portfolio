import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 fixed h-screen p-6 hidden md:block">
      <div className="text-center">
        <img src="/profile.jpg" alt="Jyothsna" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-xl font-bold">Jyothsna Galla</h1>
        <p className="text-sm text-gray-500">AI/ML Student</p>
      </div>

      <nav className="mt-8 flex flex-col gap-4 text-sm">
        <a href="#about" className="hover:text-indigo-500">About</a>
        <a href="#resume" className="hover:text-indigo-500">Resume</a>
        <a href="#projects" className="hover:text-indigo-500">Projects</a>
        <a href="#contact" className="hover:text-indigo-500">Contact</a>
      </nav>

      <div className="mt-8 flex justify-center gap-4">
        <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer"><FaGithub className="text-lg" /></a>
        <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-lg" /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
