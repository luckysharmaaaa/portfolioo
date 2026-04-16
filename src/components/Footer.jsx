import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-white/5 font-sans">
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Identity Section */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-[14px] font-medium tracking-tight text-white mb-1">
            Developed with <span className="text-red-500 animate-pulse">❤️</span> by Lucky Sharma
          </p>
          <p className="text-[11px] text-gray-600 uppercase tracking-[0.3em]">
            MERN Stack Specialist © 2026
          </p>
        </div>

        {/* Center - Creative Pulse */}
        <div className="order-1 md:order-2 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
          <p className="text-sm font-mono text-purple-400">
            <Typewriter
              words={["Code. Create. Innovate.", "Stay Curious.", "Keep Building."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </p>
        </div>

        {/* Social Connectivity */}
        <div className="flex gap-8 text-[22px] order-3">
          <a href="mailto:luckysharma232004@gmail.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300"><MdEmail /></a>
          <a href="https://www.linkedin.com/in/luckysharmaaaa/" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors duration-300"><FaLinkedin /></a>
          <a href="https://github.com/luckysharmaaaa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300"><FaGithub /></a>
          <a href="https://www.instagram.com/_lucky.sharmaaa" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition-colors duration-300"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}