import Link from 'next/link';

export default function CarCard({ car }) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-600 transition-all duration-500 group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
          {car.year} Model
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white mb-1">
            {car.make} {car.model}
          </h3>
          <p className="text-blue-500 font-bold text-lg tracking-tight">
            ${car.price.toLocaleString()}
          </p>
        </div>
        
        {/* Restored the two buttons side-by-side */}
        <div className="flex gap-3">
          <Link 
            href={`/cars/${car.id}`} 
            className="flex-1 text-center py-4 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition"
          >
            View Details
          </Link>
          <Link 
            href="/about" 
            className="flex-1 text-center py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-blue-900/20"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}