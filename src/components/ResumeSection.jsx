import React, { useState } from 'react';
import { FileText, Download, ExternalLink, GraduationCap, CheckCircle, Mail, MapPin, Info } from 'lucide-react';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 06</span>
          <span>Curriculum Vitae & Credentials</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              Resume & qualifications.
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Optimized for technical recruiters, engineering managers, and team leads.
            </p>
          </div>
        </div>

        {/* Resume Preview Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Raghavendra_Waggar_Resume.pdf</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Raghavendra Waggar</h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                B.Tech in Artificial Intelligence & Data Science | USAR, GGSIPU (2024–Present)
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-2.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  New Delhi, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  raghavendrawaggarjee@gmail.com
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume/Raghavendra_Waggar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-md shadow-emerald-950/40"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume/Raghavendra_Waggar_Resume.pdf"
                download="Raghavendra_Waggar_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm border border-zinc-700 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-mono text-xs border border-zinc-800 transition-all"
              >
                <span>{showPreview ? 'Hide Highlights' : 'Quick Summary'}</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Accordion */}
          {showPreview && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-400 animate-fade-in">
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-semibold">
                  Education & Foundation
                </span>
                <p className="text-zinc-200 font-medium mb-1">USAR, GGSIPU EDC</p>
                <p className="text-zinc-400 mb-2">B.Tech AI & Data Science (2024–Present)</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Army Public School, Dhaula Kuan (Class XII: 81%, Class X: 87%)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block mb-2 font-semibold">
                  Key Technical Competencies
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  Python, C, C++, FastAPI, Next.js, Redis, Celery, PostgreSQL, Google Gemini API, Leaflet.js, Multi-Agent Architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-2 font-semibold">
                  Competitive Milestones
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  Smart India Hackathon (SIH 2026 Internal Rounds Cleared), Adobe Hackathon (Round 2), Vibe2Ship Hackathon (JanSathi deployed live).
                </p>
              </div>
            </div>
          )}

          {/* Note on PDF file placement */}
          <div className="mt-6 flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-500">
            <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
            <p>
              Recruiters: You can view or download the latest PDF. If you have exported a fresh resume, place your <code className="text-zinc-300 font-mono">Raghavendra_Waggar_Resume.pdf</code> directly into the <code className="text-emerald-400 font-mono">portfolio/public/resume/</code> folder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
