import React from 'react';
import { Instagram, Send, ArrowUp, Globe } from 'lucide-react';
// Path check kar lena: agar public folder mein hai toh '/thewolf.png' bhi chalega
import WolfLogoImg from '../../public/thewolf.png'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Tarachand Branding */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-rose-600 text-white w-9 h-9 flex items-center justify-center rounded-lg font-black text-lg shadow-lg shadow-rose-600/20">
                T
              </div>
              <span className="font-bold text-xl tracking-tighter text-white uppercase">Tarachand</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional Video Editor & Designer specializing in cinematic OTT content and high-impact visuals.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] opacity-40">Navigation</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-rose-500 text-sm transition-colors uppercase tracking-tighter font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col items-md-end gap-6">
             <div className="flex gap-4">
              <a href="https://www.instagram.com/itsme.tc_/" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-rose-600 transition-all text-slate-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.fiverr.com/s/YRqjNE4" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-rose-600 transition-all text-slate-300">
                <Send size={18} />
              </a>
              <button onClick={scrollToTop} className="p-2.5 bg-slate-900 rounded-full hover:bg-rose-600 transition-all text-white group">
                <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE: THE WOLF AGENCY SECTION */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2025 Tarachand Choudhary
          </div>

          {/* Minimal Agency Line */}
          <a 
            href="https://rameshsingad.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-rose-600/30 transition-all"
          >
            <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold group-hover:text-slate-200 transition-colors">Powered by</span>
            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
              <img src={WolfLogoImg} alt="Wolf Logo" className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all" />
              <span className="text-white font-black text-[11px] tracking-tighter group-hover:text-rose-500 transition-colors uppercase">The Wolf Freelance Group</span>
            </div>
            <Globe size={12} className="text-slate-500 group-hover:text-rose-500 transition-colors" />
          </a>

          {/* Developer Link */}
          <div className="text-slate-400 text-[11px] font-medium">
            Developed by <a href="https://rameshsingad.com/" target="_blank" className="text-white hover:text-rose-500 transition-colors font-bold border-b border-rose-600/50 pb-0.5">Ramesh Singad</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;