import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdCake } from "react-icons/md";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-center w-72 bg-white h-screen p-6 fixed border-r shadow-lg">
    <img src="/profile.jpg" alt="Jyothsna" className="rounded-full w-40 h-40 mb-4" />
    <h2 className="text-2xl font-bold mb-1">Jyothsna Galla</h2>
    <p className="text-gray-600 mb-4">AI/ML Student</p>
    <div className="text-gray-700 text-sm space-y-3 mb-8">
      <div className="flex items-center gap-2"><MdEmail/> gallajyothsna13@gmail.com</div>
      <div className="flex items-center gap-2"><MdPhone/> +91 93988 37173</div>
      <div className="flex items-center gap-2"><MdCake/> March 15, 2005</div>
      <div className="flex items-center gap-2"><MdLocationOn/> Visakhapatnam, AP, India</div>
    </div>
    <div className="flex gap-4">
      <a href="https://github.com/JYOTHSNAGALLA" target="_blank"><FaGithub className="text-2xl"/></a>
      <a href="https://linkedin.com/in/jyothsna‑galla-90a2bb291" target="_blank"><FaLinkedin className="text-2xl"/></a>
    </div>
  </aside>
);

export default Sidebar;
