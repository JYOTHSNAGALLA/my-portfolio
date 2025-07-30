import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`hidden md:flex flex-col justify-between ${isOpen ? "w-64" : "w-16"} bg-gray-900 text-white h-screen fixed p-4 shadow-lg z-30 transition-all duration-300`}>
      <div className="flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Jyothsna"
          className="rounded-full w-24 h-24 mb-4 border-4 border-white object-cover"
        />

        {isOpen && (
          <>
            <h2 className="text-xl font-bold mb-1">Jyothsna Galla</h2>
            <p className="text-sm text-gray-400 mb-4">AI/ML Student</p>

            <div className="text-sm space-y-2 text-gray-300 w-full">
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
          </>
        )}
      </div>

      <div className="flex gap-4 justify-center mt-6">
        <a
          href="https://github.com/JYOTHSNAGALLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-gray-400 hover:text-white" />
        </a>
        <a
          href="https://linkedin.com/in/jyothsna-galla-90a2bb291"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 text-white hover:text-indigo-400"
      >
        {isOpen ? "←" : "→"}
      </button>
    </aside>
  );
};

export default Sidebar;
