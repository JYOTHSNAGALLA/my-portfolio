import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-72 bg-gray-900 text-white border-r border-gray-800 p-6 hidden md:flex flex-col justify-between z-50">
      {/* Profile Info */}
      <div className="text-center">
        <img
          src="/my-portfolio/assets/images/profile.jpg"
          alt="Jyothsna"
          className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-indigo-500"
        />
        <h1 className="text-xl font-bold">Jyothsna Galla</h1>
        <p className="text-sm text-gray-400">AI/ML Student</p>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 flex flex-col gap-4 text-sm">
        <a href="#about" className="hover:text-indigo-400 transition">About</a>
        <a href="#resume" className="hover:text-indigo-400 transition">Resume</a>
        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-4">
        <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-indigo-400 transition" />
        </a>
        <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-indigo-400 transition" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
