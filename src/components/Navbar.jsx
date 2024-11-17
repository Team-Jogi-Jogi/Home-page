import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 px-[5%] py-4 ${
      scrolled ? 'bg-[var(--background-color)]/95 backdrop-blur' : 'bg-[var(--background-color)]/80'
    }`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold">
          STREAM<span className="text-[var(--secondary-color)]">VIBE</span>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-[var(--primary-color)] transition-all duration-300">Home</a>
          <a href="#about" className="px-4 py-2 rounded-lg hover:bg-[var(--primary-color)] transition-all duration-300">About</a>
          <a href="#streams" className="px-4 py-2 rounded-lg hover:bg-[var(--primary-color)] transition-all duration-300">Streams</a>
          <a href="#contact" className="px-4 py-2 rounded-lg hover:bg-[var(--primary-color)] transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;