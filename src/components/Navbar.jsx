import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const handleClickLink = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Adding an offset for the sticky navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  return (
    <nav className="bg-[#0a0a0a]/80 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-[1170px] mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Branding */}
        <h1 
          className="text-2xl font-black tracking-tighter cursor-pointer"
          onClick={() => handleClickLink("home")}
        >
          LUCKY<span className="text-purple-500"></span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 font-bold text-[11px] uppercase tracking-[0.2em] list-none text-gray-400">
          <li
            onClick={() => handleClickLink("home")}
            className="hover:text-white cursor-pointer transition-all duration-300"
          >
            Home
          </li>
          <li
            onClick={() => handleClickLink("skillSets")}
            className="hover:text-white cursor-pointer transition-all duration-300"
          >
            Skills
          </li>
          <li
            onClick={() => handleClickLink("projects")}
            className="hover:text-white cursor-pointer transition-all duration-300"
          >
            Projects
          </li>
        </ul>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-6">
          <a
            href="/LuckySharma_MERN_CV.pdf"
            rel="noreferrer"
            target="_blank"
            className="hidden md:inline-block text-[12px] font-bold uppercase tracking-widest border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>

          <div
            className="cursor-pointer md:hidden text-2xl text-gray-400 hover:text-white"
            onClick={toggleMenu}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out ${
          menu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } z-[-1]`}
      >
        <ul className="flex flex-col items-center gap-10 list-none text-2xl font-black tracking-tighter">
          <li onClick={() => handleClickLink("home")} className="cursor-pointer hover:text-purple-500 transition-colors">HOME</li>
          <li onClick={() => handleClickLink("skillSets")} className="cursor-pointer hover:text-purple-500 transition-colors">SKILLS</li>
          <li onClick={() => handleClickLink("projects")} className="cursor-pointer hover:text-purple-500 transition-colors">PROJECTS</li>
          <li className="mt-4">
            <a
              href="/LuckySharma_MERN_CV.pdf"
              rel="noreferrer"
              target="_blank"
              className="bg-purple-600 text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg shadow-purple-500/20"
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}