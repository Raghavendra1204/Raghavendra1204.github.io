import React from 'react';
import { hackathons } from '../data/hackathons';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              04 // Engineering Sprints
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hackathons & competitive builds.
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Real problem-solving under real pressure—deconstructing complex problem statements into functional architectures.
            </p>
          </div>
          <div className="text-xs font-mono text-[#86868B] ios-pill px-3 py-1 rounded-full self-start md:self-auto">
            Reporting: <span className="text-white">Zero exaggeration</span>
          </div>
        </div>

        {/* Timeline Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hackathons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[#86868B]">{item.track}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full ios-pill text-[#0A84FF]">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-0.5">{item.title}</h3>
                <p className="text-xs font-mono text-[#86868B] mb-3">Role: {item.role}</p>

                <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-[#86868B] block mb-2 font-medium">
                  Key Technical Takeaways:
                </span>
                <ul className="space-y-1.5">
                  {item.learnings.map((learning, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2 text-xs text-[#86868B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
