import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white z-50 p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Jyothsna</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white z-40 shadow-lg p-4 space-y-4">
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