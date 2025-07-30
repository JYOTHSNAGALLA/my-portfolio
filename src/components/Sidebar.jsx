import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col justify-center w-64 bg-gray-900 text-white h-screen fixed p-6 shadow-lg z-30">
    <div className="flex flex-col items-center">
      <img src="/my-portfolio/assets/images/profile.jpg" alt="Jyothsna" className="rounded-full w-28 h-28 mb-4 border-4 border-white object-cover" />
      <h2 className="text-xl font-bold mb-1">Jyothsna Galla</h2>
      <p className="text-sm text-gray-400 mb-4">AI/ML Student</p>

      <div className="text-sm space-y-2 text-gray-300 w-full">
        <div className="flex items-center gap-2"><MdEmail /> gallajyothsna13@gmail.com</div>
        <div className="flex items-center gap-2"><MdPhone /> +91 93988 37173</div>
        <div className="flex items-center gap-2"><MdCake /> March 15, 2005</div>
        <div className="flex items-center gap-2"><MdLocationOn /> Visakhapatnam, AP</div>
      </div>
    </div>

    <div className="flex gap-4 justify-center mt-6">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-gray-400 hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
      </a>
    </div>
  </aside>
);

export default Sidebar;