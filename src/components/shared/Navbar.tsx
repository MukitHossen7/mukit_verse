"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../images/logo.png";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "PROJECT", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILL", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[linear-gradient(to_right,#121212_0%,#141518_10%,#1C263B_50%,#141518_90%,#121212_100%)] shadow-none border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={60} height={48} />
            <h1 className="flex-shrink-0 font-orbitron text-[28px] md:text-[32px] font-extrabold tracking-widest text-[#FFFFFF]">
              Mukitverse
            </h1>
          </div>
          <div className="flex gap-6 justify-between items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex gap-6 items-baseline">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-orbitron text-[16px] font-normal text-[#FFFFFF] hover:text-blue-400 transition-colors duration-300 tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="#contact">
                <div className="p-[1px] bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]">
                  <button className="px-10 py-2 bg-gradient-to-r from-[#121212] to-[#3B82F6] text-[#FFFFFF] font-orbitron font-normal text-[16px] cursor-pointer active:scale-95 transition-all">
                    Hire me
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
