import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => (
  <aside className={`hidden md:flex flex-col justify-between ${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white h-screen fixed p-4 transition-all duration-300 z-30`}>
    
    {/* Toggle Button */}
    <div className="flex justify-end">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        <FaBars className="text-xl" />
      </button>
    </div>

    {/* Content */}
    <div className="flex flex-col items-center mt-4 space-y-4 overflow-hidden">
      <img src="/profile.jpg" alt="Jyothsna" className={`rounded-full ${isOpen ? 'w-24 h-24' : 'w-10 h-10'} border-2 border-white object-cover transition-all`} />
      {isOpen && (
        <>
          <h2 className="text-lg font-bold">Jyothsna Galla</h2>
          <p className="text-xs text-gray-400">AI/ML Student</p>
          <div className="text-xs space-y-1 text-gray-300 text-left">
            <div className="flex items-center gap-2"><MdEmail /> gallajyothsna13@gmail.com</div>
            <div className="flex items-center gap-2"><MdPhone /> +91 93988 37173</div>
            <div className="flex items-center gap-2"><MdCake /> March 15, 2005</div>
            <div className="flex items-center gap-2"><MdLocationOn /> Visakhapatnam, AP</div>
          </div>
        </>
      )}
    </div>

    <div className="flex gap-4 justify-center mt-6">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl hover:text-white" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
