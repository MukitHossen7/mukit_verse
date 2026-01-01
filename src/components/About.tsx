export default function About() {
  const philosophy = [
    { title: "Clean Code", icon: "💻" },
    { title: "Performance First", icon: "🚀" },
    { title: "Emotion in Design", icon: "🎨" },
    { title: "Human at the Core", icon: "❤️" },
    { title: "Continuous Learning", icon: "📚" },
    { title: "Sustainable", icon: "🌱" },
  ];

  return (
    <section id="about" className="py-20 bg-[#050A18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center font-orbitron text-4xl md:text-5xl font-bold mb-16 text-white"
          data-aos="fade-down"
        >
          ABOUT ME
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: 3D Character (Placeholder) */}
          <div
            className="relative h-[400px] md:h-[500px] flex justify-center items-center"
            data-aos="fade-right"
          >
            {/* Replace with your 3D character image */}
            <div className="w-64 h-80 bg-gray-800 rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <span className="text-cyan-500 font-orbitron">
                3D Character Img
              </span>
            </div>
            {/* Lightning effect behind */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] -z-10"></div>
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left">
            <h3 className="font-orbitron text-3xl font-bold mb-4">
              Hi, I am <span className="text-primary">Mukit Hossain</span>
            </h3>
            <p className="font-rajdhani text-gray-400 text-lg leading-relaxed mb-8">
              A Next.js Developer who loves turning ideas into smooth, scalable
              web experiences that feel alive. I blend clean code with
              thoughtful design to create digital products that users love.
            </p>

            <div className="mb-4">
              <h4 className="flex items-center gap-2 font-orbitron text-xl mb-4 text-yellow-400">
                <span>💡</span> MY PHILOSOPHY
              </h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-white/20 p-2 rounded bg-white/5 text-center font-rajdhani text-sm md:text-base hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-default"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
