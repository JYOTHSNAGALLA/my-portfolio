import { useState } from "react";

const DesktopNavbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="hidden md:flex fixed top-0 left-72 right-0 h-16 bg-gray-900 text-white items-center px-10 shadow z-50">
      <ul className="flex gap-8 ml-auto">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setActiveSection(link.name.toLowerCase())}
              className={`text-sm font-medium hover:text-indigo-400 transition duration-200 pb-1 border-b-2 ${
                activeSection === link.name.toLowerCase()
                  ? "border-indigo-400 text-indigo-400"
                  : "border-transparent"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
