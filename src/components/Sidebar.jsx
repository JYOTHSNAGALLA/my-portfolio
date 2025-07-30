import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdCake } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 fixed h-screen p-6 shadow-lg hidden md:block">
      <div className="text-center">
        <img src="/profile.jpg" alt="Jyothsna" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-xl font-bold">Jyothsna Galla</h1>
        <p className="text-sm text-gray-500">AI/ML Student</p>
      </div>

      <hr className="my-4" />

      <div className="text-sm text-gray-600 space-y-4">
        <div className="flex items-center gap-2">
          <MdEmail className="text-lg" />
          <span>gallajyothsna13@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-lg" />
          <span>+91 93988 37173</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCake className="text-lg" />
          <span>March 15, 2005</span>
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-lg" />
          <span>Visakhapatnam, Andhra Pradesh, India</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
