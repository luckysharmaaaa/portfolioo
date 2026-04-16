import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import luckyimage from "../assets/luckyimage.png";

export default function Home({ id }) {
  return (
    <section
      id={id}
      className="bg-[#0a0a0a] scroll-mt-20 text-white min-h-[90vh] flex items-center py-12 md:py-20"
    >
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 w-full">
        
        {/* Left Side - Text Content */}
        <div
          className="flex flex-col gap-6 flex-1 text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                Lucky Sharma
              </span>
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-400 font-medium tracking-tight">
              MERN Stack Developer
            </h3>
          </div>

          <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-[550px] mx-auto md:mx-0">
            I craft clean, scalable full-stack applications using the MERN stack. 
            With a focus on performance and impactful user experiences, I turn complex 
            problems into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <div className="flex items-center gap-6 text-2xl">
              <a href="mailto:luckysharma232004@gmail.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-all duration-300 hover:-translate-y-1"><MdEmail /></a>
              <a href="https://www.linkedin.com/in/luckysharmaaaa/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-all duration-300 hover:-translate-y-1"><FaLinkedin /></a>
              <a href="https://github.com/luckysharmaaaa" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"><FaGithub /></a>
              <a href="https://www.instagram.com/_lucky.sharmaaa" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-all duration-300 hover:-translate-y-1"><FaInstagram /></a>
            </div>
            <span className="hidden sm:block h-8 w-px bg-white/10"></span>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Open for opportunities
            </p>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div
          className="relative flex-1 flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={luckyimage} 
                alt="Lucky Sharma" 
                /* Removed grayscale and hover:grayscale-0 here */
                className="w-full h-full object-cover transition-all duration-500 ease-in-out scale-110 hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}