// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#050A18] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Big Text Background Effect */}
        <div className="absolute top-10 left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
          <h2 className="text-[15vw] font-orbitron font-bold text-white/5 text-center">
            CONTACT
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {/* Info */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <span className="text-4xl">📨</span>
            </div>
            <h3 className="font-orbitron text-3xl font-bold mb-4">
              GET IN TOUCH
            </h3>
            <p className="font-rajdhani text-gray-400 mb-8 text-lg">
              “Have an idea, a dream, or just curiosity? Let’s turn it into
              something beautiful together.”
            </p>

            <div className="space-y-4">
              <div className="p-4 border border-blue-900/50 rounded bg-blue-900/10 flex items-center gap-4">
                <div className="bg-blue-600/20 p-2 rounded">📧</div>
                <div>
                  <h4 className="font-orbitron text-sm text-gray-300">EMAIL</h4>
                  <p className="font-rajdhani text-white">hello@apon.dev</p>
                </div>
              </div>
              {/* Add Call and Location similarly */}
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-[#0B1120]/80 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
            data-aos="fade-left"
          >
            <form className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-gray-400">Name</label>
                <input
                  type="text"
                  className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-gray-400">Email</label>
                <input
                  type="email"
                  className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="bg-transparent border border-white/20 rounded p-3 text-white focus:border-blue-500 outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-500 rounded text-white font-orbitron tracking-widest hover:shadow-lg transition-all"
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
