import React from 'react';
import { User, CheckCircle, Video, Camera } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '100+' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-rose-500/20 relative z-10 bg-slate-800 flex items-center justify-center">
              <img
                src={"/tarachand.jpg"}
                alt="Tarachand Choudhary"
                className="w-full object-cover" // Isse photo box mein fit ho jayegi
              />
              {/* <User size={150} className="text-slate-700" /> */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-rose-500 font-bold text-xl">Tarachand Choudhary</p>
                <p className="text-slate-400 text-sm italic">"Bringing stories to life through cinematic frames."</p>
              </div>
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-rose-600 rounded-3xl -z-0"></div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-2">About the Editor</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Mastering the Art of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Visual Storytelling</span></h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Based in Jodhpur, I am a professional <span className="text-white font-semibold">Video Editor & Graphic Designer</span> specialized in high-end OTT content and viral YouTube productions.
                My most notable work includes working as an editor and colorist for the <span className="text-white font-semibold">STAGE App's Desi Panchayat</span>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] text-rose-500 uppercase font-bold tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-rose-500" size={20} /> Professional Color Grading & Sound Design
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-rose-500" size={20} /> High-CTR Thumbnail Design Specialist
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-rose-500" size={20} /> Expert in Adobe Creative Suite (Premiere, AE, PS)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;