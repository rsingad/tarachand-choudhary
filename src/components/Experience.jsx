import React from 'react';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
    const skills = ["Video Editor", "Graphic Designer", "Thumbnail Designer"];
    const tools = [
        { name: "Adobe Premiere Pro", level: "95%" },
        { name: "After Effects", level: "85%" },
        { name: "Photoshop", level: "90%" }
    ];

    return (
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Briefcase className="text-rose-500" /> Work History
                    </h2>
                    <div className="border-l-2 border-slate-800 ml-3 space-y-10">
                        <div className="relative pl-8 border-l-2 border-rose-500/30">
                            <div className="absolute w-4 h-4 bg-rose-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#e11d48]"></div>
                            <h3 className="text-2xl font-black text-white">Lead Video Editor & Colourist</h3>
                            <p className="text-rose-500 font-bold mb-3 italic">STAGE OTT App • Desi Panchayat (Series)</p>
                            <p className="text-slate-400 leading-relaxed">
                                Specialized in comedy timing and cinematic color grading for high-budget OTT productions. Managed end-to-end post-production workflow for viral episodes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Award className="text-rose-500" /> Skills & Toolkit
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {skills.map(s => <span key={s} className="bg-slate-700 px-4 py-1 rounded-full text-sm">{s}</span>)}
                    </div>
                    <div className="space-y-6">
                        {tools.map(t => (
                            <div key={t.name}>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span>{t.name}</span>
                                    <span className="text-rose-500">{t.level}</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1 rounded-full">
                                    <div className="bg-rose-500 h-full rounded-full" style={{ width: t.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;