// Sidebar.jsx (Updated for desktop view)
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-center w-72 bg-white text-gray-800 h-screen fixed p-6 shadow-md">
    <img
      src="/profile.jpg"
      alt="Jyothsna Galla"
      className="rounded-xl w-28 h-28 object-cover mb-4 border border-gray-300"
    />
    <h2 className="text-lg font-bold mb-1">Jyothsna Galla</h2>
    <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 mb-4">
      AI/ML Student
    </span>

    <div className="w-full mt-4 text-sm text-gray-700">
      <div className="flex items-start gap-2 mb-3">
        <MdEmail className="mt-1" /> <span>gallajyothsna13@gmail.com</span>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <MdPhone className="mt-1" /> <span>+91 93988 37173</span>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <MdCake className="mt-1" /> <span>March 15, 2005</span>
      </div>
      <div className="flex items-start gap-2">
        <MdLocationOn className="mt-1" /> <span>Visakhapatnam, AP</span>
      </div>
    </div>

    <div className="flex gap-6 mt-6">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl text-gray-600 hover:text-black" />
      </a>
      <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl text-gray-600 hover:text-black" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
