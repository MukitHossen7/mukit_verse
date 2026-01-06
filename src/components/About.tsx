"use client";

import Image from "next/image";
import goth from "../images/aboutme.png";
import current from "../images/aboutme2.png";

export default function About() {
  const philosophy = [
    { title: "Clean Code" },
    { title: "Performance First" },
    { title: "Emotion in Design" },
    { title: "Human at the Core" },
    { title: "Continuous Learning" },
    { title: "Sustainable" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#121212] py-10"
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 0% 50%, #2B58A1 0%, #1c2E4B 40%, #121212 100%)`,
          WebkitMaskImage:
            "radial-gradient(circle at 0% 50%, black 20%, transparent 60%)",
          maskImage:
            "radial-gradient(circle at 0% 50%, black 20%, transparent 60%)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212] opacity-100 z-0 pointer-events-none"></div>

      {/* ABOUT ME Title */}
      <div className="relative w-full text-center z-20 mb-10">
        <h2 className="font-orbitron text-4xl md:text-[64px] font-bold text-[#FFFFFF] uppercase">
          ABOUT ME
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full grid grid-cols-1 md:grid-cols-12 items-center gap-2 relative z-10">
        {/* Left Image (Goth) */}
        <div className="md:col-span-4 flex justify-center md:justify-end items-center">
          <div className="relative h-[400px] md:h-[550px] w-full">
            <Image
              alt="Character"
              src={goth}
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(43,88,161,0.25)]"
              priority
            />
          </div>
        </div>

        {/* Middle Image */}
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-visible">
            <Image
              src={current}
              alt="Lightning"
              fill
              className="object-cover opacity-40 scale-115 md:scale-125 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Right side content  */}
        <div className="md:col-span-5 text-[#FFFFFF] flex flex-col justify-center md:pl-0">
          <h3 className="font-orbitron text-2xl md:text-[40px] text-[#FFFFFF] font-bold mb-5 leading-tight">
            Hi, I am <span className="lowercase font-light">mukit hossen</span>
          </h3>

          <p className="font-rajdhani text-[#B9B9B9] text-base md:text-[20px] leading-relaxed mb-5 max-w-xl">
            A Next.js Developer who loves turning ideas into smooth, scalable
            web experiences that feel alive. I blend clean code with thoughtful
            design to create digital products that users love.
          </p>

          <div className="w-full">
            <h4 className="flex items-center font-orbitron text-[24px] mb-4 text-[#FFFFFF] uppercase tracking-[5px]">
              MY PHILOSOPHY
            </h4>

            <div className="flex flex-wrap gap-3 items-center ">
              {philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#121212]"
                >
                  <div className="bg-[#121212] h-full w-full px-3 py-2 flex items-center">
                    <span className="text-[#FFFFFF] font-orbitron text-[12px] font-medium uppercase tracking-widest whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
