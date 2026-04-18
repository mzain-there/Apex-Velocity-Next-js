import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="py-32 px-6 bg-slate-950 text-white rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-blue-500 font-black text-sm uppercase tracking-[0.4em] mb-6">Est. 2026</h2>
          <h1 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Precision <br/> <span className="text-blue-600">Performance</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Apex Velocity is more than a showroom. It is a sanctuary for those who believe that driving is an art form and engineering is its soul.
          </p>
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800" 
              alt="Luxury Car Interior" 
              className="relative rounded-[2.5rem] shadow-2xl object-cover h-[550px] w-full"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">200+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Point Inspection</p>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 text-slate-950">
              The <span className="text-blue-600">Apex</span> Standard
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-loose font-medium">
              Every vehicle in our collection is hand-selected. We don't just look at the engine; we look at the history, the soul, and the future potential of the machine. Our mission is to provide an elite level of service that matches the caliber of the cars we sell.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition">
                <div className="text-3xl">🛡️</div>
                <div>
                    <h4 className="font-black text-slate-950 uppercase tracking-tight mb-1">Guaranteed Authenticity</h4>
                    <p className="text-sm text-slate-500">Full verified documentation and service history for every unit.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition">
                <div className="text-3xl">🏎️</div>
                <div>
                    <h4 className="font-black text-slate-950 uppercase tracking-tight mb-1">Performance Labs</h4>
                    <p className="text-sm text-slate-500">In-house tuning and maintenance by certified master technicians.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP TEAM SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter text-slate-900">
              The <span className="text-blue-600">Curators</span>
            </h2>
            <p className="text-slate-500 mt-4 font-bold tracking-[0.2em] uppercase text-xs">Meet our expert acquisition team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: 'Marcus Sterling', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
              { name: 'Elena Rodriguez', role: 'Head of Acquisition', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400' },
              { name: 'Julian Vance', role: 'Master Technician', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' }
            ].map((person, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] p-4 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden rounded-2xl h-80">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="py-6 px-2">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">{person.name}</h3>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT & FORM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-1 bg-slate-950 rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
            
            {/* Left: Contact Info */}
            <div className="p-12 md:p-20 text-white bg-slate-950">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Inquire <br/> <span className="text-blue-500">Directly</span>
              </h2>
              <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
                Contact our concierge team to discuss your next acquisition or to arrange a private tour of our facility.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    📍
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Showroom HQ</p>
                    <p className="font-bold text-lg">123 Velocity Drive, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Global Line</p>
                    <p className="font-bold text-lg">+971 50 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="p-12 md:p-20 bg-slate-900/50 backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 ring-blue-600 transition placeholder:text-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" placeholder="Email@domain.com" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 ring-blue-600 transition placeholder:text-slate-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Vehicle of Interest</label>
                  <select className="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 ring-blue-600 transition appearance-none cursor-pointer">
                    <option>General Concierge</option>
                    <option>Porsche Collection</option>
                    <option>Electric Luxury</option>
                    <option>Classic Investment</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea rows="4" placeholder="How can we assist you?" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-white outline-none focus:ring-2 ring-blue-600 transition placeholder:text-slate-700 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-white hover:text-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-xl shadow-blue-900/40">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV LINK */}
      <section className="py-20 text-center">
         <Link href="/" className="text-slate-300 hover:text-blue-600 font-black uppercase tracking-[0.5em] text-xs transition-all">
            ← Return to Showroom Inventory
         </Link>
      </section>

    </main>
  );
}