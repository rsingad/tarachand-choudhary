import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

const Contact = () => {
  // 1. Data store karne ke liye state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  // 2. Form submission logic
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    
    const phoneNumber = "916375566538"; 
    
    // Message format taiyar karna (SEO friendly aur readable)
    const message = `*Tarachand Portfolio Inquiry*%0A` + 
                    `--------------------------%0A` +
                    `*Name:* ${formData.name}%0A` + 
                    `*Email:* ${formData.email}%0A` + 
                    `*Project:* ${formData.project}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // WhatsApp open karna
    window.open(whatsappUrl, '_blank');
  };

  // 3. Input change handle karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: <Phone className="text-rose-500" />, 
      label: "Call / WhatsApp", 
      value: "+91 63755 66538",
      link: "https://wa.me/916375566538" 
    },
    { 
      icon: <Mail className="text-rose-500" />, 
      label: "Email Me", 
      value: "bhaitc4@gmail.com", 
      link: "mailto:bhaitc4@gmail.com" 
    },
    { 
      icon: <MapPin className="text-rose-500" />, 
      label: "Location", 
      value: "Jodhpur, Rajasthan, India",
      link: "#" 
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-rose-500 font-bold tracking-widest uppercase text-sm mb-3 text-white">Get In Touch</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white">Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Extraordinary</span></h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 text-white">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 bg-slate-900/50 p-6 rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:scale-110 transition-transform">{info.icon}</div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{info.label}</p>
                  <p className="text-white font-bold">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:col-span-2 bg-slate-900/50 p-8 md:p-12 rounded-[2rem] border border-slate-800">
            {/* onSubmit event add kiya hai */}
            <form onSubmit={handleWhatsAppSend} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" // Name property zaroori hai
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-500 transition-all text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-500 transition-all text-white" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Project Details</label>
                <textarea 
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Briefly describe your video project..." 
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-500 transition-all text-white"
                ></textarea>
              </div>
              <button 
                type="submit" // Type submit hona chahiye
                className="md:col-span-2 bg-rose-600 hover:bg-rose-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-rose-600/20 uppercase tracking-widest text-sm"
              >
                Send to WhatsApp <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;