import { FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-COMMERCE PLATFORM",
    category: "SAAS",
    desc: "A seamless shopping experience with modern UI and blazing-fast performance.",
    stack: "NEXT.JS NODE.JS POSTGRESQL",
    role: "DEVELOPER AND PROJECT LEAD",
    image: "/project-placeholder.jpg", // Replace with your image
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#050A18]">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center font-orbitron text-4xl md:text-5xl font-bold mb-20 text-white"
          data-aos="fade-up"
        >
          FEATURED PROJECTS
        </h2>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[#0B1120] rounded-xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
              data-aos="fade-up"
            >
              {/* Image Side */}
              <div className="md:w-1/2 h-64 md:h-auto bg-gray-800 relative group">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-orbitron text-white">
                    View Case Study
                  </span>
                </div>
                {/* Place your image here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Project Image]
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#0B1120] to-[#111827]">
                <span className="text-sm font-orbitron text-gray-400 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="font-rajdhani text-gray-400 mb-6 text-lg">
                  {project.desc}
                </p>

                <div className="space-y-2 mb-8 font-rajdhani text-sm text-gray-300">
                  <p>
                    <span className="text-primary font-bold">TECH STACK:</span>{" "}
                    {project.stack}
                  </p>
                  <p>
                    <span className="text-primary font-bold">ROLE:</span>{" "}
                    {project.role}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-2 border border-blue-500 text-white rounded hover:bg-blue-600/20 transition-colors font-orbitron text-sm">
                    <FaExternalLinkAlt /> View live
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 border border-white/30 text-white rounded hover:bg-white/10 transition-colors font-orbitron text-sm">
                    <FaFileAlt /> Case study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="zoom-in">
          <div className="inline-block p-[1px] rounded bg-gradient-to-r from-transparent via-blue-500 to-transparent">
            <div className="px-10 py-4 bg-[#050A18] rounded border border-blue-500/30 font-orbitron">
              Want to build something awesome? → Let&apos;s Collaborate.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
