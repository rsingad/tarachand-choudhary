import React from 'react';
import { Video, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <p className="text-rose-500 font-bold tracking-[0.4em] uppercase mb-4 text-sm">5+ Years of Experience</p>
      <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter">
        TARACHAND <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">CHOUDHARY</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 italic mb-10 font-light">"Cut. Color. Create."</p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-rose-500 hover:text-white transition-all">View Work</a>
        <a href="https://www.instagram.com/itsme.tc_/" target="_blank" className="border border-slate-700 p-3 rounded-full hover:bg-slate-800 transition"><Instagram /></a>
      </div>
    </section>
  );
};

export default Hero;
