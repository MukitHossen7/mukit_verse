// "use client";
// import Image from "next/image";
// import contact from "../images/contact.png";

// // components/Contact.tsx
// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-[#121212] relative">
//       <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full">
//         {/* Big Text Background Effect */}
//         <div className="absolute top-10 left-0 w-full overflow-hidden leading-none select-none pointer-events-none mx-auto">
//           <Image src={contact} alt="contact" />
//         </div>

//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
//           {/* Info */}
//           <div data-aos="fade-right">
//             <div className="mb-8">
//               <span className="text-4xl">📨</span>
//             </div>
//             <h3 className="font-orbitron text-3xl font-bold mb-4">
//               GET IN TOUCH
//             </h3>
//             <p className="font-rajdhani text-gray-400 mb-8 text-lg">
//               “Have an idea, a dream, or just curiosity? Let’s turn it into
//               something beautiful together.”
//             </p>

//             <div className="space-y-4">
//               <div className="p-4 border border-blue-900/50 rounded bg-blue-900/10 flex items-center gap-4">
//                 <div className="bg-blue-600/20 p-2 rounded">📧</div>
//                 <div>
//                   <h4 className="font-orbitron text-sm text-gray-300">EMAIL</h4>
//                   <p className="font-rajdhani text-white">hello@apon.dev</p>
//                 </div>
//               </div>
//               {/* Add Call and Location similarly */}
//             </div>
//           </div>

//           {/* Form */}
//           <div
//             className="bg-[#0B1120]/80 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
//             data-aos="fade-left"
//           >
//             <form className="space-y-6">
//               <div className="flex flex-col gap-2">
//                 <label className="font-rajdhani text-gray-400">Name</label>
//                 <input
//                   type="text"
//                   className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="font-rajdhani text-gray-400">Email</label>
//                 <input
//                   type="email"
//                   className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label className="font-rajdhani text-gray-400">Message</label>
//                 <textarea
//                   rows={4}
//                   className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-500 rounded text-white font-orbitron tracking-widest hover:shadow-lg transition-all"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import contactImg from "../images/contact.png";
// import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="bg-[#121212] relative overflow-hidden flex items-center min-h-screen"
//     >
//       {/* Big CONTACT Image Background (আপনার প্রোভাইড করা ইমেজ) */}
//       <div className="absolute top-5 left-0 w-full flex justify-center select-none pointer-events-none z-0">
//         <Image
//           src={contactImg}
//           alt="Contact Background"
//           className="w-[80%] object-contain"
//           priority
//         />
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full relative z-10 mt-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left Side: Info */}
//           <div data-aos="fade-right" className="mt-16">
//             {/* 3D Envelope Icon (Image placeholder) */}

//             <h3 className="font-orbitron text-4xl md:text-[50px] font-bold mb-4  text-white leading-tight">
//               GET IN TOUCH
//             </h3>
//             <p className="font-rajdhani text-gray-400 mb-10 text-xl italic max-w-md">
//               “Have an idea, a dream, or just curiosity? Let’s turn it into
//               something beautiful together.”
//             </p>

//             <div className="space-y-4 max-w-md">
//               {/* Email Card */}
//               <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
//                 <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center shadow-inner">
//                   <HiMail className="text-[#3B82F6] text-2xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
//                     EMAIL
//                   </h4>
//                   <p className="font-rajdhani text-white text-lg">
//                     hello@apon.dev
//                   </p>
//                 </div>
//               </div>

//               {/* Call Card */}
//               <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
//                 <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center">
//                   <HiPhone className="text-[#3B82F6] text-2xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
//                     CALL
//                   </h4>
//                   <p className="font-rajdhani text-white text-lg">
//                     +880 17XX-XXXX
//                   </p>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
//                 <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center">
//                   <HiLocationMarker className="text-[#3B82F6] text-2xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
//                     LOCATION
//                   </h4>
//                   <p className="font-rajdhani text-white text-lg">
//                     Dhaka, Bangladesh
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Contact Form (As per Image) */}
//           <div
//             className="bg-[#111827]/40 p-8 md:p-10 rounded-[24px] border border-white/5 backdrop-blur-xl shadow-2xl"
//             data-aos="fade-left"
//           >
//             <form className="space-y-8">
//               {/* Name Input */}
//               <div className="relative">
//                 <label className="absolute -top-3 left-5 bg-[#121212] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <label className="absolute -top-3 left-5 bg-[#121212] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg"
//                 />
//               </div>

//               {/* Message Input */}
//               <div className="relative">
//                 <label className="absolute -top-3 left-5 bg-[#121212] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
//                   Message
//                 </label>
//                 <textarea
//                   rows={6}
//                   className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg resize-none"
//                 ></textarea>
//               </div>

//               {/* Specific Gradient Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-5 rounded-xl text-white font-orbitron tracking-[4px] font-bold text-sm transition-all shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[#3B82F6]/40 uppercase"
//                 style={{
//                   background: `linear-gradient(to right, #121212 0%, #151C25 25%, #151C25 75%, #3B82F6 100%)`,
//                 }}
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import contactImg from "../images/contact.png";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#121212] relative overflow-hidden flex items-center min-h-screen"
    >
      {/* Big CONTACT Image - Fixed at Top (পেছনের ইমেজ স্থির রাখার জন্য) */}
      <div className="absolute top-10 left-0 w-full flex justify-center select-none pointer-events-none z-0">
        <Image
          src={contactImg}
          alt="Contact Background"
          className="w-[90%] md:w-[80%] object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full relative z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Info */}
          <div data-aos="fade-right" className="mt-16">
            <h3 className="font-orbitron text-4xl md:text-[50px] font-bold mb-4 text-white leading-tight">
              GET IN TOUCH
            </h3>
            <p className="font-rajdhani text-gray-400 mb-10 text-xl italic max-w-md">
              “Have an idea, a dream, or just curiosity? Let’s turn it into
              something beautiful together.”
            </p>

            <div className="space-y-4 max-w-md">
              {/* Email Card */}
              <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
                <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center shadow-inner">
                  <HiMail className="text-[#3B82F6] text-2xl" />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
                    EMAIL
                  </h4>
                  <p className="font-rajdhani text-white text-lg">
                    hello@apon.dev
                  </p>
                </div>
              </div>

              {/* Call Card */}
              <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
                <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center">
                  <HiPhone className="text-[#3B82F6] text-2xl" />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
                    CALL
                  </h4>
                  <p className="font-rajdhani text-white text-lg">
                    +880 17XX-XXXX
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 border border-[#3B82F6]/30 rounded-xl bg-[#0B1120]/40 flex items-center gap-5">
                <div className="w-12 h-12 bg-[#0B1120] border border-[#3B82F6]/40 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="text-[#3B82F6] text-2xl" />
                </div>
                <div>
                  <h4 className="font-orbitron text-[10px] text-gray-500 tracking-widest uppercase">
                    LOCATION
                  </h4>
                  <p className="font-rajdhani text-white text-lg">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Glass Effect Updated) */}
          <div
            // bg-white/[0.03] এবং backdrop-blur-2xl ব্যবহার করা হয়েছে স্বচ্ছ কাঁচের মত ইফেক্ট দিতে
            className="bg-white/[0.02] backdrop-blur-2xl p-8 md:p-10 rounded-[24px] border border-white/10 shadow-2xl relative"
            data-aos="fade-left"
          >
            <form className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <label className="absolute -top-3 left-5 bg-[#1a1a1a] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="absolute -top-3 left-5 bg-[#1a1a1a] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label className="absolute -top-3 left-5 bg-[#1a1a1a] px-2 font-orbitron text-[11px] text-gray-400 tracking-widest uppercase z-10">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-transparent border border-[#3B82F6]/30 rounded-xl p-4 text-white focus:border-[#3B82F6] outline-none transition-all font-rajdhani text-lg resize-none"
                ></textarea>
              </div>

              {/* Specific Gradient Submit Button */}
              <button
                type="submit"
                className="w-full py-5 rounded-xl text-white font-orbitron tracking-[4px] font-bold text-sm transition-all shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[#3B82F6]/40 uppercase"
                style={{
                  background: `linear-gradient(to right, #121212 0%, #151C25 25%, #151C25 75%, #3B82F6 100%)`,
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
