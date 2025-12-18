import React from 'react';
import { Instagram, Send, Youtube, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-rose-600 text-white w-8 h-8 flex items-center justify-center rounded font-black text-lg">T</div>
              <span className="font-bold text-xl tracking-tighter text-white">TARACHAND</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional Video Editor & Thumbnail Designer specializing in cinematic OTT content. Based in Jodhpur, India.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/itsme.tc_/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-rose-600 transition-all text-slate-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://www.fiverr.com/s/YRqjNE4" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-rose-600 transition-all text-slate-400 hover:text-white">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-rose-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-rose-500 transition">About</a></li>
              <li><a href="#projects" className="hover:text-rose-500 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-rose-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Credits & Agency (The Wolf Freelance Group) */}
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800/50 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <Code2 size={14} className="text-rose-500" /> Digital Partner
              </h3>
              <p className="text-white font-black text-lg mb-1 leading-tight">THE WOLF FREELANCE GROUP</p>
              <p className="text-slate-500 text-xs mb-6 tracking-wide">Premium Web Solutions & Design</p>
            </div>
            
            <a 
              href="https://rameshsingad.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-500 font-bold text-sm hover:underline flex items-center gap-2"
            >
              Meet the Developer <Send size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-medium">
            © 2025 Tarachand Choudhary • All Rights Reserved
          </div>

          {/* Developer Credit Line */}
          <div className="text-slate-400 text-sm font-medium">
            Developed with ❤️ by <a href="https://rameshsingad.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-500 transition-colors font-bold underline underline-offset-4">Ramesh Singad</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            Back to top 
            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-rose-600 group-hover:-translate-y-1 transition-all text-white">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;