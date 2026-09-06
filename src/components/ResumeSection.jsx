import React, { useState } from 'react';
import { FileText, Download, ExternalLink, MapPin, Mail, Info } from 'lucide-react';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
             Curriculum Vitae
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Resume & credentials.
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B] mt-1">
            Verified academic profile and project portfolio for engineering leads and recruiters.
          </p>
        </div>

        {/* Resume Apple Bento Card */}
        <div className="p-6 md:p-8 rounded-3xl ios-glass border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-pill text-[#0A84FF] font-mono text-xs mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Raghavendra_Waggar_Resume.pdf</span>
              </div>
              <h3 className="text-xl font-bold text-white">Raghavendra Waggar</h3>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                B.Tech in Artificial Intelligence & Data Science | USAR, GGSIPU (2024–Present)
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#86868B] mt-2.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#86868B]" />
                  New Delhi, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#86868B]" />
                  raghavendrawaggarjee@gmail.com
                </span>
              </div>
            </div>

            {/* Action Buttons (iOS Style) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="/resume/Raghavendra_Waggar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A84FF] text-white font-medium text-xs sm:text-sm hover:bg-[#0071E3] transition-all shadow-md shadow-blue-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>

              <a
                href="/resume/Raghavendra_Waggar_Resume.pdf"
                download="Raghavendra_Waggar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full ios-glass border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-full ios-glass border border-white/10 text-[#86868B] hover:text-white text-xs font-mono transition-all"
              >
                <span>{showPreview ? 'Hide Highlights' : 'Quick Summary'}</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Section */}
          {showPreview && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#86868B] animate-fade-in">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <span className="text-[11px] font-mono text-[#0A84FF] uppercase tracking-wider block mb-1.5 font-medium">
                  Education & Foundation
                </span>
                <p className="text-white font-medium mb-0.5">USAR, GGSIPU EDC</p>
                <p className="text-[#86868B] mb-1.5">B.Tech AI & Data Science (2024–Present)</p>
                <p className="text-[11px] text-[#86868B] leading-relaxed">
                  Army Public School, Dhaula Kuan (Class XII: 81%, Class X: 87%)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <span className="text-[11px] font-mono text-[#0A84FF] uppercase tracking-wider block mb-1.5 font-medium">
                  Technical Core
                </span>
                <p className="text-[#A1A1A6] leading-relaxed">
                  Python, C, C++, FastAPI, Next.js, Redis, Celery, PostgreSQL, Google Gemini API, Leaflet.js, Multi-Agent Architecture.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                <span className="text-[11px] font-mono text-[#0A84FF] uppercase tracking-wider block mb-1.5 font-medium">
                  Competitive Milestones
                </span>
                <p className="text-[#A1A1A6] leading-relaxed">
                  Smart India Hackathon (SIH 2026 Internal Selection), Adobe Hackathon (Round 2), Vibe2Ship Hackathon (JanSathi deployed live).
                </p>
              </div>
            </div>
          )}

          {/* Note */}
          <div className="mt-6 flex items-start gap-2 p-3 rounded-2xl bg-black/30 border border-white/5 text-xs text-[#86868B]">
            <Info className="w-3.5 h-3.5 text-[#86868B] shrink-0 mt-0.5" />
            <p>
              Recruiters: Click above to view or download the direct PDF. Source file is served directly via GitHub Pages static hosting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
