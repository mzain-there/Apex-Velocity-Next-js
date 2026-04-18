export default function HeroCarousel() {
  return (
    <div className="relative h-[85vh] bg-slate-900 flex items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Hero" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter mb-6">UNLEASH<br/><span className="text-blue-500">SPEED</span></h1>
        <p className="text-white text-xl max-w-xl mx-auto font-light mb-8">Curating the world's most prestigious automotive masterpieces.</p>
        <a href="#models" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">View Inventory</a>
      </div>
    </div>
  );
}