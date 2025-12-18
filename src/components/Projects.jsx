import React from 'react';
import { ExternalLink, Play, Youtube } from 'lucide-react';

const Projects = () => {
  const videoProjects = [
    { id: "32qOT6aISlU", title: "Cinematic Edit 01" },
    { id: "HUDBygr4GWs", title: "YouTube Collaboration" },
    { id: "Qi-Fhwj2-lQ", title: "Visual Storytelling" },
    { id: "cjttZy_s_BE", title: "Creative Designer Work" },
    { id: "-P2a8TwsgXg", title: "Thumbnail & Edit" },
    { id: "-KPu0yzEJCc", title: "Dynamic Motion" },
    { id: "2yzOXNboR7I", title: "Professional Grade" },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black mb-4 tracking-tight">FEATURED <span className="text-rose-500">WORKS</span></h2>
            <p className="text-slate-400 max-w-md text-lg">High-quality video editing and color grading for OTT and YouTube creators.</p>
          </div>
          <div className="flex items-center gap-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 px-6 py-2 rounded-full font-bold">
            <Youtube size={20} /> OTT & YouTube Content
          </div>
        </div>

        {/* Main Highlight: Desi Panchayat */}
        <div className="relative group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 mb-12">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src="https://img.youtube.com/vi/XAAIq5ih64Y/maxresdefault.jpg" 
                alt="Desi Panchayat with Amit Nain - STAGE App" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://youtu.be/XAAIq5ih64Y" target="_blank" className="bg-rose-600 p-4 rounded-full scale-75 group-hover:scale-100 transition-transform">
                  <Play fill="white" size={32} />
                </a>
              </div>
            </div>
            <div className="p-8 lg:p-12 space-y-6">
              <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">OTT Production</span>
              <h3 className="text-3xl font-bold">Desi Panchayat with Amit Nain</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Working as <span className="text-white">Editor & Colourist</span> for the STAGE App. This show is a comedy podcast 
                style production with funny characters, similar to "The Kapil Sharma Show".
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-800 px-4 py-1 rounded-md text-sm border border-slate-700">Adobe Premiere Pro</span>
                <span className="bg-slate-800 px-4 py-1 rounded-md text-sm border border-slate-700">After Effects</span>
              </div>
              <a 
                href="https://youtu.be/XAAIq5ih64Y" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-rose-500 font-bold hover:gap-4 transition-all"
              >
                WATCH FULL EPISODE <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map((video) => (
            <div key={video.id} className="group relative rounded-2xl overflow-hidden border border-slate-800">
              <img 
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                alt="Tarachand Portfolio Video" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-center">
                <span className="text-xs font-bold text-slate-300 tracking-wider">PROJECT</span>
                <a href={`https://youtu.be/${video.id}`} target="_blank" className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-rose-600 transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;