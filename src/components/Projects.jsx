import React from "react";
import projects from "../data.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="bg-[#0a0a0a] scroll-mt-20 py-20 sm:py-24 text-white"
    >
      <div className="max-w-[1170px] mx-auto px-6 text-center">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-xs font-bold tracking-[0.4em] text-purple-500 uppercase mb-4">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            Featured <span className="text-gray-500">Projects.</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base italic">
            Showcasing applications built with passion, precision, and the MERN stack.
          </p>
        </div>

        {/* Project Grid - Adjusted for 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.pId}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover saturate-50 group-hover:saturate-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 text-left">
                <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={12} /> Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/10 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-gray-300"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}