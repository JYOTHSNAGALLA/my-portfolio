import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed w-full bg-white shadow p-4 z-50 flex justify-between items-center">
      <h2 className="text-xl font-bold">Jyothsna</h2>
      <button onClick={() => setOpen(prev => !prev)}><FaBars className="text-xl"/></button>

      {open && (
        <nav className="mt-3 flex flex-col space-y-2">
          <a href="#about" className="text-gray-700 hover:text-indigo-500">About</a>
          <a href="#resume" className="text-gray-700 hover:text-indigo-500">Resume</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-500">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
