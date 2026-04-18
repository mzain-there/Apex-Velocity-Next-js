"use client";
import { useState } from 'react';
import { carData } from '../data/cars';
import CarCard from './CarCard';

export default function CarGallery() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carData.filter((car) =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="models" className="py-24 px-6 bg-slate-950 text-white rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search on the Right */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-slate-800 pb-10">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">
              Our <span className="text-blue-500">Fleet</span>
            </h2>
            <p className="text-slate-500 mt-2 font-medium tracking-wide">SEARCH AND DISCOVER PERFECTION</p>
          </div>

          {/* Search Bar positioned on the right */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search e.g. 'Ferrari'..."
              className="w-full bg-slate-900 border border-slate-700 p-4 pl-12 rounded-full outline-none focus:ring-2 ring-blue-600 transition text-white placeholder:text-slate-500 text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-5 top-4 opacity-40">🔍</span>
          </div>
        </div>

        {/* Grid Display */}
        {filteredCars.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500 font-bold uppercase tracking-widest">No matching vehicles found.</p>
          </div>
        )}
      </div>
    </section>
  );
}