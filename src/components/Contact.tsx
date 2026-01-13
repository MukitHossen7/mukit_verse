"use client";
import Image from "next/image";
import contactImg from "../images/contact.png";
import message from "../images/message.png";
import call from "../images/call.png";
import location from "../images/location.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] relative overflow-hidden flex items-center min-h-screen py-20"
    >
      <div className="absolute top-[0%] left-0 w-full flex justify-center select-none pointer-events-none z-0">
        <Image
          src={contactImg}
          alt="Contact Background"
          className="w-[90%] md:w-[80%] object-contain "
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0  w-full relative z-10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Info */}
          <div data-aos="fade-right" className="relative">
            <h3 className="font-orbitron text-3xl md:text-[40px] font-bold mb-3 mt-20 text-[#FFFFFF] leading-tight tracking-tight">
              GET IN TOUCH
            </h3>
            <p className="font-rajdhani text-[#B9B9B9] mb-4 text-[20px] italic max-w-md leading-relaxed">
              “Have an idea, a dream, or just curiosity? Let’s turn it into
              something beautiful together.”
            </p>

            {/* Info Cards - Styled as per Image */}
            <div className="space-y-4 w-full">
              {[
                {
                  label: "EMAIL",
                  val: "hossenmukit7@gmail.com",
                  icon: message,
                },
                { label: "CALL", val: "+880 1326153447", icon: call },
                {
                  label: "LOCATION",
                  val: "Rajshahi, Bangladesh",
                  icon: location,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-5 border-[1px] border-[#3B82F6] rounded-[8px] backdrop-blur-sm flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12  border-[1px] border-[#3B82F6] rounded-[8px]">
                    <Image src={item.icon} alt={item.label} />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-[16px] text-[#FFFFFF] tracking-[3px] uppercase font-bold">
                      {item.label}
                    </h4>
                    <p className="font-rajdhani text-[#B9B9B9] text-[16px] font-medium tracking-wide">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form (Glass Effect) */}
          <div
            className="bg-white/5 backdrop-blur-md p-7  rounded-[16px] "
            data-aos="fade-left"
          >
            <form className="space-y-8">
              {/* Name Input */}
              <div className="relative group">
                <label className="absolute -top-3.5 left-5 bg-[#0D0D0D] px-2 font-orbitron text-[15px] text-[#FFFFFF] tracking-widest uppercase z-10 transition-colors group-focus-within:text-[#FFFFFF]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-[1px] border-[#3B82F6] rounded-[8px] p-5 text-white focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all font-rajdhani text-lg placeholder:text-gray-500"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label className="absolute -top-3.5 left-5 bg-[#0D0D0D] px-2 font-orbitron text-[15px] text-[#FFFFFF] tracking-widest uppercase z-10 transition-colors group-focus-within:text-[#FFFFFF]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-[1px] border-[#3B82F6] rounded-[8px] p-5 text-white focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all font-rajdhani text-lg placeholder:text-gray-500"
                />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <label className="absolute -top-3.5 left-5 bg-[#0D0D0D] px-2 font-orbitron text-[15px] text-[#FFFFFF] tracking-widest uppercase z-10 transition-colors group-focus-within:text-[#FFFFFF]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent  border-[1px] border-[#3B82F6] rounded-[8px] p-5 text-white focus:ring-1 focus:ring-[#3B82F6] outline-none transition-all font-rajdhani text-lg resize-none  placeholder:text-gray-500"
                ></textarea>
              </div>

              <div className="relative p-[1px] rounded-[8px] overflow-hidden bg-gradient-to-r from-[#3B82F6] to-[#FFFFFF]">
                <button
                  type="submit"
                  className="w-full py-5 rounded-[8px] text-[#FFFFFF] font-orbitron tracking-[5px] font-medium text-[16px] transition-all uppercase relative z-10"
                  style={{
                    background: `linear-gradient(90deg, #121212 0%, #3B82F6 100%)`,
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
