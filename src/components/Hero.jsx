import React, { useState } from 'react';

const TufHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <svg className="h-10 w-10" viewBox="0 0 100 100">
                <path
                  fill="#B8860B" // Darker, more industrial yellow
                  d="M50,0 L93.3,25 L93.3,75 L50,100 L6.7,75 L6.7,25 Z"
                />
                <path
                  fill="black"
                  d="M50,20 L80,40 L80,60 L50,80 L20,60 L20,40 Z"
                />
              </svg>
              <span className="font-extrabold text-2xl tracking-tighter text-zinc-100">TUF™</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-zinc-400 hover:text-[#B8860B] font-medium tracking-wide">ABOUT</a>
              <a href="#community" className="text-zinc-400 hover:text-[#B8860B] font-medium tracking-wide">COMMUNITY</a>
              <a href="#join" className="px-6 py-2 bg-[#B8860B] text-black font-bold tracking-wider hover:bg-[#8B6914] transition-all">
                JOIN NOW
              </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
              <div className="px-4 py-2 space-y-1">
                <a href="#about" className="block py-3 text-zinc-400 font-medium tracking-wide">ABOUT</a>
                <a href="#community" className="block py-3 text-zinc-400 font-medium tracking-wide">COMMUNITY</a>
                <a href="#join" className="block py-3 text-[#B8860B] font-bold tracking-wide">JOIN NOW</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col items-start">
            <h1 className="text-[8rem] md:text-[12rem] font-black text-zinc-100 leading-none tracking-tighter">
              THE<br />
              UNCALLED<br />
              <span className="text-[#B8860B]">FAMILY™</span>
            </h1>
            
            <div className="mt-8 max-w-2xl">
              <p className="text-zinc-400 text-xl tracking-wide leading-relaxed">
                A revolutionary Web3 community forging the future of digital culture and innovation.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <button className="px-8 py-4 bg-[#B8860B] text-black font-bold text-lg tracking-wider hover:bg-[#8B6914] transition-all">
                JOIN THE FAMILY
              </button>
              <button className="px-8 py-4 border-2 border-zinc-700 text-zinc-100 font-bold text-lg tracking-wider hover:border-[#B8860B] transition-all">
                LEARN MORE
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#B8860B]/10 blur-3xl"></div>
            <div className="absolute right-48 top-48 w-6 h-6 text-[#B8860B]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 0 15.6 8.4 24 12 15.6 15.6 12 24 8.4 15.6 0 12 8.4 8.4"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TufHero;