"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import bannerImage from "../images/Subtract.png";
import lightningLine from "../images/bannerImage2.png";

export default function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-10"
      style={{
        background: `
          
          radial-gradient(ellipse 100% 70% at 50% 50%, rgba(31, 52, 86, 0.6) 0%, transparent 80%),
          linear-gradient(to bottom, transparent 0%, #121212 100%),
          linear-gradient(to right, #121212 0%, #141518 10%, #1C263B 50%, #141518 90%, #121212 100%)
        `,
        backgroundColor: "#121212",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 z-10 w-full relative">
        <div className="text-center flex flex-col items-center">
          <h1
            ref={textRef}
            className="font-orbitron text-5xl md:text-[90px] lg:text-[120px] font-extrabold text-[#FFFFFF] mb-4 uppercase tracking-tighter leading-tight"
          >
            Next.js Hero
          </h1>

          <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mb-6">
            <Image
              ref={imageRef}
              src={bannerImage}
              alt="Fist"
              width={650}
              height={300}
              priority
              className="object-contain -rotate-10"
            />
          </div>

          <p className="text-[#B9B9B9] font-rajdhani max-w-2xl mx-auto text-lg md:text-[20px] mb-10 leading-relaxed">
            I&apos;m a Next.js Developer crafting high-performance, modern web
            apps with clean UI & better UX.
          </p>

          <div className="flex flex-wrap gap-8 justify-center ">
            <Link href="#projects">
              <div className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <button className="px-10 py-3 bg-gradient-to-r from-[#121212] to-[#1F3456] text-[#FFFFFF] font-orbitron font-medium text-[16px] uppercase tracking-wider">
                  View My Work
                </button>
              </div>
            </Link>
            <Link href="#contact">
              <div className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]  transition-transform hover:scale-105 active:scale-95">
                <button className="px-10 py-3 bg-[#1F3456] text-[#FFFFFF] font-orbitron font-medium text-[16px] uppercase tracking-wider">
                  Let&apos;s Connect
                </button>
              </div>
            </Link>
          </div>

          <div className="w-full max-w-[350px] opacity-80">
            <Image
              src={lightningLine}
              alt="line"
              width={350}
              height={40}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
