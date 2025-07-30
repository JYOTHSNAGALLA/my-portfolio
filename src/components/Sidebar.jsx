import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdCake, MdLocationOn } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex justify-center items-center h-screen w-72 fixed left-0 top-0 bg-gray-900 p-6 z-30 shadow-lg">
      <div className="bg-gray-800 rounded-xl p-6 w-full text-center shadow-inner">
        <img
          src="/profile.jpg"
          alt="Jyothsna Galla"
          className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-gray-700 object-cover"
        />
        <h2 className="text-xl font-semibold">Jyothsna Galla</h2>
        <p className="bg-gray-700 text-sm text-white px-2 py-1 rounded mt-1 inline-block">
          AI/ML Student
        </p>

        <div className="my-6 border-t border-gray-600 pt-4 text-left text-sm text-gray-300 space-y-4">
          <div className="flex items-center gap-3">
            <MdEmail className="text-lg" />
            <span>gallajyothsna13@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone className="text-lg" />
            <span>+91 93988 37173</span>
          </div>
          <div className="flex items-center gap-3">
            <MdCake className="text-lg" />
            <span>March 15, 2005</span>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-lg" />
            <span>Visakhapatnam, AP</span>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-4">
          <a href="https://linkedin.com/in/jyothsna-galla-90a2bb291" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
          </a>
          <a href="https://github.com/JYOTHSNAGALLA" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
