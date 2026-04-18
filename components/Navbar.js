import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="text-2xl font-black italic tracking-tighter">
        APEX<span className="text-blue-600">VELOCITY</span>
      </div>
      <div className="hidden md:flex space-x-10 font-bold uppercase text-xs tracking-widest">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        <Link href="#models" className="hover:text-blue-600 transition">Models</Link>
      </div>
    </nav>
  );
}