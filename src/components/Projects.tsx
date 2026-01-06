"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-COMMERCE PLATFORM",
    category: "SAAS",
    desc: "A seamless shopping experience with modern UI and blazing-fast performance.",
    stack: "NEXT.JS NODE.JS POSTGRESQL",
    role: "DEVELOPER AND PROJECT LEAD",
    image: "https://i.ibb.co.com/R4gknyWV/Screenshot-2025-12-27-185016.png",
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#121212] w-full min-h-screen overflow-hidden relative flex flex-col justify-center"
    >
      {/* Background Gradient - Left Side */}
      <div
        className="absolute top-0 left-0 w-[40%] h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, rgba(59, 130, 246, 0.40) 0%, transparent 70%)`,
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full relative z-10">
        <h2 className="font-orbitron text-4xl md:text-[64px] font-bold  text-[#FFFFFF] uppercase text-center mb-10">
          FEATURED PROJECTS
        </h2>

        <div className="space-y-20">
          {projects.map((project) => (
            /* 1px Gradient Border Wrapper */
            <div
              key={project.id}
              className="p-[1px] rounded-[16px] bg-gradient-to-r from-[#3B82F6] to-[#999999]"
              data-aos="fade-up"
            >
              {/* Project Card Main Body */}
              <div
                className="relative overflow-hidden rounded-[16px] flex flex-col md:flex-row w-full h-full"
                style={{
                  background: `linear-gradient(to right, #121212, #151C25, #3B82F6)`,
                }}
              >
                {/* Image Side */}
                <div className="md:w-1/2 h-64 md:h-[437px] relative group overflow-hidden p-4">
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-[#3B82F6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"></div>
                    <Image
                      alt={project.title}
                      src={project.image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-sm font-orbitron text-blue-300 uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-[32px] font-orbitron  text-[#FFFFFF] mb-8">
                    {project.title}
                  </h3>

                  <p className="font-rajdhani text-[#B9B9B9] mb-3 text-[20px] leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="space-y-3 mb-8 font-rajdhani text-[16px] text-[#B9B9B9] uppercase">
                    <p>
                      <span className="text-[#FFFFFF] text-[16px] tracking-wider uppercase font-orbitron">
                        TECH STACK:
                      </span>{" "}
                      {project.stack}
                    </p>
                    <p>
                      <span className="text-[#FFFFFF] tracking-wider text-[16px] uppercase font-orbitron">
                        ROLE:
                      </span>{" "}
                      {project.role}
                    </p>
                  </div>

                  <div className="flex gap-6">
                    <div className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]">
                      <button className="px-6 py-2 bg-gradient-to-r from-[#121212] to-[#3B82F6] text-[#FFFFFF] font-orbitron text-[16px] cursor-pointer active:scale-95 transition-all flex items-center gap-2">
                        <FaExternalLinkAlt /> View live
                      </button>
                    </div>
                    <div className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]">
                      <button className="px-6 py-2 bg-gradient-to-r from-[#244376] to-[#2D5CA8] text-[#FFFFFF] font-orbitron text-[16px] cursor-pointer active:scale-95 transition-all flex items-center gap-2">
                        <FaFileAlt /> Case study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          <div className="inline-block p-[1px]  bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]">
            <div className="px-8 py-4 bg-gradient-to-r from-[#121212] to-[#3B82F6] text-[#FFFFFF] font-orbitron text-[16px]">
              Want to build something awesome? → Let&apos;s Collaborate.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
