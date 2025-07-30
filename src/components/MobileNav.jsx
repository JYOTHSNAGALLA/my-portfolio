import { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md p-4 z-50 flex justify-between items-center">
      <h2 className="text-lg font-bold">Jyothsna</h2>
      
      <button onClick={() => setOpen(!open)}>
        <FaBars className="text-2xl text-white" />
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-md flex flex-col p-4 space-y-2 z-50">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#resume" className="hover:text-indigo-400">Resume</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
