"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-hero-gradient pt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]" />

      <div className="z-10 text-center px-4">
        <h2 className="font-orbitron text-xl md:text-2xl text-white mb-2 tracking-[0.2em] text-gray-400">
          WELCOME TO MUKITVERSE
        </h2>

        <h1
          ref={textRef}
          className="font-orbitron text-5xl md:text-8xl font-bold text-white mb-6 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        >
          Next.js{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Hero
          </span>
        </h1>

        {/* Fist Image (Placeholder approach - replace with your asset) */}
        <div className="relative w-full max-w-lg mx-auto h-40 md:h-64 my-4 animate-pulse">
          {/* You should put the fist/lightning image here */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Image src="/path-to-fist-lightning.png" alt="Power" fill className="object-contain"/> */}
            <div className="text-cyan-400 text-6xl">⚡👊⚡</div>
          </div>
        </div>

        <p
          className="font-rajdhani text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10"
          data-aos="fade-up"
        >
          I&apos;m a Next.js Developer crafting high-performance, modern web
          apps with clean UI & better UX.
        </p>

        <div
          className="flex gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-500 rounded text-white font-orbitron tracking-wide hover:scale-105 transition-transform border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            View My Work
          </button>
          <button className="px-8 py-3 bg-transparent border border-white/30 rounded text-white font-orbitron tracking-wide hover:bg-white/10 transition-colors">
            Let&apos;s Connect
          </button>
        </div>

        {/* Bottom Lightning Effect */}
        <div className="absolute bottom-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
      </div>
    </section>
  );
}
