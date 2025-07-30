import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden bg-white p-4 shadow fixed w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Jyothsna</h1>
        <button onClick={() => setOpen(!open)}>
          <FaBars className="text-xl" />
        </button>
      </div>
      {open && (
        <nav className="mt-4 flex flex-col gap-3 text-sm text-gray-700">
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#resume" className="hover:text-indigo-500">Resume</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default MobileNav;
