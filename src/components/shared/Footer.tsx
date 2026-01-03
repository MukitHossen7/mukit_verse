// components/Footer.tsx
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-10 border-t border-white/10 relative overflow-hidden">
      {/* Blue Glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-blue-900/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="font-orbitron text-2xl font-bold tracking-widest text-white mb-6">
          Mukit<span className="text-primary">verse</span>
        </div>

        <div className="flex gap-6 mb-8">
          {/* Add your links */}
          {["HOME", "PROJECT", "ABOUT", "CONTACT"].map((item) => (
            <span
              key={item}
              className="px-4 py-1 border border-blue-500/30 text-blue-100 font-orbitron text-sm rounded bg-blue-900/20 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mb-8 text-2xl text-white">
          <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaGithub className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
        </div>

        <p className="font-rajdhani text-gray-500 text-sm">
          © 2025 Mukitverse. Crafted with by Minhazul Abedin Apon.
        </p>

        <div className="mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-500/50 rounded text-white font-orbitron flex items-center gap-2 mx-auto hover:bg-blue-800 transition-colors">
            Lets build together →
          </button>
        </div>
      </div>
    </footer>
  );
}
