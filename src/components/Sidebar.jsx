import { FaGithub, FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-800 shadow-md z-40 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"} hidden md:flex flex-col justify-between`}>
      <div className="flex flex-col items-center py-6 px-2 transition-all duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-[-12px] w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center z-50"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {isOpen && (
          <>
            <img src="/profile.jpg" alt="Jyothsna" className="rounded-full w-24 h-24 mb-4 border-2 border-white object-cover" />
            <h2 className="text-lg font-bold">Jyothsna Galla</h2>
            <p className="text-sm text-gray-400 mb-4">AI/ML Student</p>
            <div className="space-y-2 text-sm text-gray-300 text-left">
              <div className="flex items-center gap-2"><MdEmail /> gallajyothsna13@gmail.com</div>
              <div className="flex items-center gap-2"><MdPhone /> +91 93988 37173</div>
              <div className="flex items-center gap-2"><MdCake /> March 15, 2005</div>
              <div className="flex items-center gap-2"><MdLocationOn /> Visakhapatnam, AP</div>
            </div>
          </>
        )}
      </div>
      {isOpen && (
        <div className="flex gap-4 justify-center pb-6">
          <a href="https://github.com/JYOTHSNAGALLA" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank"><FaLinkedin /></a>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
