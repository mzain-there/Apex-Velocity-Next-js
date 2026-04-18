import { carData } from '../../../data/cars';
import Link from 'next/link';
export default async function CarDetails({ params }) {
  const { id } = await params;
  
  // Find the specific car object using the ID from the URL
  const car = carData.find((c) => c.id === parseInt(id));

  // Safety check if the ID doesn't exist
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">Return to Showroom</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-blue-600 transition mb-10 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> BACK TO INVENTORY
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Large Dynamic Image */}
          <div className="sticky top-32">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src={car.image} 
                alt={car.model} 
                className="w-full h-[600px] object-cover" 
              />
            </div>
          </div>

          {/* Car Specifications Content */}
          <div className="py-4">
            <div className="mb-10">
              <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Elite Collection</h2>
              <h1 className="text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-4">
                {car.make} <br/> <span className="text-blue-600">{car.model}</span>
              </h1>
              <p className="text-4xl font-light text-slate-300 tracking-tight">${car.price.toLocaleString()}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-4 border-t border-slate-100 pt-10">
              <div className="space-y-1">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Engine Type</p>
                <p className="text-xl font-bold text-slate-900">{car.engine}</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Model Year</p>
                <p className="text-xl font-bold text-slate-900">{car.year}</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Mileage</p>
                <p className="text-xl font-bold text-slate-900">{car.mileage} KM</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Fuel System</p>
                <p className="text-xl font-bold text-slate-900">{car.fuelType}</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold mb-2">Purchase Inquiry</h4>
              <p className="text-sm text-slate-500 mb-6 font-light">Interested in this {car.model}? Contact our sales team for a private viewing or custom financing options.</p>
              <Link 
                href="/about" 
                className="block w-full text-center bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition shadow-xl"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}