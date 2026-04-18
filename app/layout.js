import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Apex Velocity | Premium Car Showroom',
  description: 'Experience luxury and performance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}