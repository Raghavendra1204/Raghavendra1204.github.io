import React from 'react';
import { hackathons } from '../data/hackathons';
import { Award, Terminal, CheckCircle2, Flag } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 04</span>
          <span>Competitive Engineering & Hackathons</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              Hackathons & engineering sprints.
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Real problem-solving under real pressure—deconstructing complex problem statements into functional architectures.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            Truth in reporting: <span className="text-emerald-400">Zero exaggeration</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-zinc-400">{item.track}</span>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      item.badgeColor === 'emerald'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : item.badgeColor === 'blue'
                        ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                        : item.badgeColor === 'purple'
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">Role: {item.role}</p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-400 block mb-2 font-semibold">
                  Key Technical Takeaways:
                </span>
                <ul className="space-y-1.5">
                  {item.learnings.map((learning, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
