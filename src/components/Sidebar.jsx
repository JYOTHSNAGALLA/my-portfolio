import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile & desktop */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white md:hidden bg-gray-900 p-2 rounded-full"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white z-40 p-6 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/my-portfolio/assets/images/profile.jpg"
            alt="Jyothsna"
            className="rounded-full w-28 h-28 mb-4 border-4 border-white object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Jyothsna Galla</h2>
          <p className="text-sm text-gray-400 mb-4">AI/ML Student</p>

          <div className="text-sm space-y-2 text-gray-300 w-full">
            <div className="flex items-center gap-2"><MdEmail /> gallajyothsna13@gmail.com</div>
            <div className="flex items-center gap-2"><MdPhone /> +91 93988 37173</div>
            <div className="flex items-center gap-2"><MdCake /> March 15, 2005</div>
            <div className="flex items-center gap-2"><MdLocationOn /> Visakhapatnam, AP</div>
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;