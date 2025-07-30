import { useState } from "react";
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaAngleLeft,FaAngleRight,} from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const MobileNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white z-50 p-4 flex justify-between items-center">
        {/* Left: Sidebar Toggle */}
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
          {isSidebarOpen ? (
            <FaAngleLeft className="text-2xl" title="Close Sidebar" />
          ) : (
            <FaAngleRight className="text-2xl" title="Open Sidebar" />
          )}
        </button>

        <h2 className="text-lg font-bold">Jyothsna</h2>

        {/* Right: Nav Menu Toggle */}
        <button onClick={() => setNavOpen(!isNavOpen)} className="focus:outline-none">
          {isNavOpen ? (
            <FaTimes className="text-2xl" title="Close Menu" />
          ) : (
            <FaBars className="text-2xl" title="Open Menu" />
          )}
        </button>
      </div>

      {/* Slide-in Sidebar (Left) */}
      <div
        className={`fixed top-5 left-0 h-full w-72 bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="bg-gray-700 rounded-xl p-4 text-center shadow-md">
            <img
              src="/profile.jpg"
              alt="Jyothsna Galla"
              className="rounded-full w-24 h-24 mx-auto mb-2 border-4 border-gray-600 object-cover"
            />
            <h2 className="text-lg font-semibold">Jyothsna Galla</h2>
            <p className="bg-gray-600 text-xs text-white px-2 py-1 rounded mt-1 inline-block">
              AI/ML Student
            </p>
            <div className="mt-4 space-y-3 text-sm text-gray-300 text-left">
              <div className="flex items-center gap-2">
                <MdEmail /> gallajyothsna13@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MdPhone /> +91 93988 37173
              </div>
              <div className="flex items-center gap-2">
                <MdCake /> March 15, 2005
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn /> Visakhapatnam, AP
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/JYOTHSNAGALLA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/jyothsna-galla-90a2bb291"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Nav Menu (Top right) */}
      {isNavOpen && (
        <div className="md:hidden fixed top-16 right-4 w-48 bg-gray-800 text-white z-40 shadow-lg rounded-lg p-4 space-y-4 animate-fade-in-down">
          <a href="#about" className="block hover:text-indigo-400">About</a>
          <a href="#resume" className="block hover:text-indigo-400">Resume</a>
          <a href="#projects" className="block hover:text-indigo-400">Projects</a>
          <a href="#contact" className="block hover:text-indigo-400">Contact</a>
        </div>
      )}
    </>
  );
};

export default MobileNav;
