import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-center w-72 bg-gray-900 text-white h-screen p-6 fixed border-r border-gray-700 shadow-lg z-20">
    <img
      src="/my-portfolio/assets/images/profile.jpg"
      alt="Jyothsna"
      className="rounded-full w-36 h-36 mb-4 border-4 border-indigo-500"
    />
    <h2 className="text-2xl font-bold mb-1">Jyothsna Galla</h2>
    <p className="text-gray-400 mb-4">AI/ML Student</p>
    
    <div className="text-sm space-y-3 text-gray-300">
      <div className="flex items-center gap-2"><MdEmail className="text-indigo-400" /> gallajyothsna13@gmail.com</div>
      <div className="flex items-center gap-2"><MdPhone className="text-indigo-400" /> +91 93988 37173</div>
      <div className="flex items-center gap-2"><MdCake className="text-indigo-400" /> March 15, 2005</div>
      <div className="flex items-center gap-2"><MdLocationOn className="text-indigo-400" /> Visakhapatnam, AP</div>
    </div>

    <div className="flex gap-6 mt-6">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl hover:text-indigo-400" />
      </a>
      <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-indigo-400" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
