"use client";

import Image from "next/image";
import lightningLine from "../images/bannerImage2.png";
import SkillsComponent from "./SkillsComponent";

export default function Skills() {
  return (
    <section className="py-20 bg-[#121212] relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[30%] h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, rgba(59, 130, 246, 0.40) 0%, #121212 75%)`,
        }}
      />

      <div
        className="absolute top-0 right-0 w-[30%] h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 100% 50%, rgba(59, 130, 246, 0.40) 0%, #121212 75%)`,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full text-center relative z-10">
        <h2 className="font-orbitron text-4xl md:text-[64px] font-bold text-[#FFFFFF] uppercase">
          Skills / Tech Stack
        </h2>

        {/* Lightning separator */}
        <div className="w-full max-w-[450px] mx-auto -mt-3 mb-10">
          <Image
            src={lightningLine}
            alt="line"
            width={500}
            height={30}
            className="object-contain mx-auto -scale-x-100"
          />
        </div>

        <SkillsComponent />
      </div>
    </section>
  );
}
