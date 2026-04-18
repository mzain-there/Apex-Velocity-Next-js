import HeroCarousel from '../components/HeroCarousel';
import CarGallery from '../components/CarGallery';

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter italic">
            World Class <span className="text-blue-600">Support</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Bespoke Import', desc: 'Hand-picked luxury vehicles delivered to your doorstep.' },
            { title: 'Performance Lab', desc: 'Advanced diagnostics and precision tuning for elite supercars.' },
            { title: 'Global Warranty', desc: 'Comprehensive protection plans accepted at worldwide centers.' }
          ].map((service, i) => (
            <div key={i} className="relative p-10 bg-white rounded-3xl border-2 border-slate-50 hover:border-blue-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <span className="absolute -top-6 left-10 text-8xl font-black text-slate-100 select-none -z-10">0{i+1}</span>
              {/* Higher contrast titles */}
              <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Gallery with Search functionality */}
      <CarGallery />
    </main>
  );
}