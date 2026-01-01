export default function Skills() {
  return (
    <section className="py-20 bg-[#050A18] relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="font-orbitron text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-down"
        >
          SKILLS / TECH STACK
        </h2>
        {/* Lightning separator */}
        <div className="h-1 w-64 mx-auto bg-cyan-500 blur-sm mb-20"></div>

        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center">
          {/* Center Logo */}
          <div className="absolute z-10 w-24 h-24 bg-black rounded-full border border-gray-700 flex items-center justify-center">
            <span className="font-orbitron text-4xl font-bold text-gray-500">
              N
            </span>
          </div>

          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow"></div>
          <div className="absolute inset-10 rounded-full border border-white/10"></div>

          {/* Skills Icons (Positioned absolutely) */}
          {/* HTML5 - Top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-16 h-16 bg-orange-600 rounded flex items-center justify-center shadow-lg"
            data-aos="zoom-in"
          >
            <span className="font-bold text-white">HTML</span>
          </div>

          {/* React - Right */}
          <div
            className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded flex items-center justify-center border border-cyan-400"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <span className="text-cyan-400 text-2xl">⚛️</span>
          </div>

          {/* JS - Left */}
          <div
            className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="font-bold text-black">JS</span>
          </div>

          {/* Node/DB - Bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-16 h-16 bg-green-600 rounded flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span className="font-bold text-white">Node</span>
          </div>
        </div>
      </div>
    </section>
  );
}
