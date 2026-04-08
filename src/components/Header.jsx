import React from 'react';
import heroImage from '../assets/hero.png';

const Header = () => {
  return (
    <header className="relative flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-slate-950 overflow-hidden">
      {/* Efek Cahaya Latar (Glow) */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      
      <div className="z-10 max-w-2xl text-center md:text-left">
        {/* Judul dengan Efek Neon */}
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white">
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">Neon</span>
          Weather
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-slate-400 font-medium tracking-wide">
          Your vibrant window to the world's weather.
        </p>
        
        {/* Tombol dekoratif agar lebih keren */}
        <button className="mt-8 px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all">
          Check Weather
        </button>
      </div>

      {/* Gambar Hero dengan Floating Animation */}
      <div className="mt-12 md:mt-0 z-10">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-72 md:w-[450px] drop-shadow-[0_0_50px_rgba(34,211,238,0.2)] animate-bounce [animation-duration:3s]" 
        />
      </div>
    </header>
  );
};

export default Header;