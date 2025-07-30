import { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 w-full bg-white shadow-md p-4 z-50 flex justify-between items-center">
      <h2 className="text-lg font-bold">Jyothsna</h2>
      <button onClick={() => setOpen(!open)}><FaBars className="text-2xl" /></button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-2">
          <a href="#about" className="text-gray-700 hover:text-indigo-500">About</a>
          <a href="#resume" className="text-gray-700 hover:text-indigo-500">Resume</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-500">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
