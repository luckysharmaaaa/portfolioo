import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills({ id }) {
  const skills = [
    { icon: <FaHtml5 className="text-[#E44D26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DBFB]" />, name: "React.js" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-[#83CD29]" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb className="text-[#4DB33D]" />, name: "MongoDB" },
    { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" },
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  ];

  return (
    <section id={id} className="bg-[#0a0a0a] py-24 text-white">
      <div className="max-w-[1170px] mx-auto px-6 text-center">
        <h2 className="text-xs font-bold tracking-[0.4em] text-purple-500 uppercase mb-4">Technical Stack</h2>
        <h1 className="text-4xl md:text-5xl font-black mb-16">Technologies I <span className="text-gray-500">Use.</span></h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 50} className="bg-white/5 p-8 rounded-4xl border border-white/5 hover:border-purple-500/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <p className="font-bold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}