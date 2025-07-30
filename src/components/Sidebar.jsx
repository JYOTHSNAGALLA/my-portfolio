import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-900 text-white h-screen fixed p-4 md:flex flex-col justify-between shadow-lg z-40 hidden transition-all duration-300`}
    >
      <div className="flex justify-end">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <FaChevronRight className="text-xl text-gray-400 hover:text-white" />
          ) : (
            <FaChevronLeft className="text-xl text-gray-400 hover:text-white" />
          )}
        </button>
      </div>

      {!collapsed && (
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Jyothsna"
            className="rounded-full w-24 h-24 mb-4 border-4 border-white object-cover"
          />
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
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
