import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phoneNumber = "916375566538"; 
  const message = encodeURIComponent("Hi Tarachand, I saw your portfolio and I want to discuss a project with you!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu khulne par scroll lock karne ke liye
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header 
      role="banner" 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 z-[110]">
          <div className="bg-rose-600 text-white w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl shadow-lg shadow-rose-600/30">
            T
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg tracking-tight leading-none text-white">
              TARACHAND <span className="sr-only">Choudhary Video Editor Jodhpur</span>
            </h1>
            <span className="text-[10px] text-rose-500 font-bold tracking-widest uppercase">Professional Designer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-rose-500 transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-rose-600 hover:bg-white hover:text-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            <MessageSquare size={16} />
            HIRE ME
          </a>
        </nav>

        {/* Mobile Toggle Button - Z-index high rakha hai taaki menu ke upar dikhe */}
        <button 
          aria-label="Toggle Menu"
          className="md:hidden text-white focus:outline-none z-[110] p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Fully Responsive Fix */}
      <div className={`fixed inset-0 w-full h-screen bg-slate-950 z-[105] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className="text-3xl font-black text-white hover:text-rose-500 transition-all active:scale-95"
          >
            {link.name}
          </a>
        ))}
        <a 
          href={whatsappUrl}
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl active:scale-95 flex items-center gap-3"
        >
          <MessageSquare size={24} />
          WhatsApp Me
        </a>
      </div>
    </header>
  );
};

export default Header;