// Sidebar.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-center w-72 bg-gray-900 text-white h-screen fixed left-0 top-0 pt-24 shadow-lg rounded-tr-3xl rounded-br-3xl">
    {/* Profile Image */}
    <img src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`} alt="Jyothsna Galla"
      className="rounded-xl w-28 h-28 object-cover mb-4 border border-gray-300"
    />


    {/* Name & Role */}
    <h2 className="text-lg font-semibold mb-1">Jyothsna Galla</h2>
    <span className="text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300 mb-4">
      AI/ML Student
    </span>

    {/* Info */}
    <div className="w-full px-6 mt-4 text-sm text-gray-300 space-y-4">
      <div className="flex items-center gap-3">
        <MdEmail className="text-gray-400" />
        <span>gallajyothsna13@gmail.com</span>
      </div>
      <div className="flex items-center gap-3">
        <MdPhone className="text-gray-400" />
        <span>+91 93988 37173</span>
      </div>
      <div className="flex items-center gap-3">
        <MdCake className="text-gray-400" />
        <span>March 15, 2005</span>
      </div>
      <div className="flex items-center gap-3">
        <MdLocationOn className="text-gray-400" />
        <span>Visakhapatnam, AP</span>
      </div>
    </div>

    {/* Socials */}
    <div className="flex gap-6 mt-6">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl text-gray-400 hover:text-white" />
      </a>
      <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl text-gray-400 hover:text-white" />
      </a>
    </div>
  </aside>
);

export default Sidebar;
