import React, { useState, useEffect } from 'react';
import TechIcon from './TechIcon';
import ProjectMockup from './ProjectMockup';
import {
  X,
  ExternalLink,
  Github,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  UserCheck,
  TrendingUp,
  Compass
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const currentScreenshot = project.screenshots?.[activeScreenshotIdx] || project.screenshots?.[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col ios-glass-elevated border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 border-b border-white/10 flex items-start justify-between gap-4 shrink-0 bg-black/40">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {/* 8. Project Status Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-white border border-white/10">
                <span className={`w-2 h-2 rounded-full ${
                  project.status?.includes('Deployed')
                    ? 'bg-[#30D158]'
                    : project.status?.includes('Internal')
                    ? 'bg-[#0A84FF]'
                    : 'bg-[#FF9F0A]'
                }`} />
                <span>{project.status}</span>
              </span>
              <span className="text-xs text-[#86868B] font-mono">• {project.category}</span>
            </div>

            {/* 1. Project Name prominently at the top */}
            <h1 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#A1A1A6] mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#86868B] hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* 2. Short Description */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* 3. Project Screenshots Showcase */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider">
                  Project Screenshots ({project.screenshots.length})
                </span>

                {/* Screenshot Tab Selector */}
                {project.screenshots.length > 1 && (
                  <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/10">
                    {project.screenshots.map((s, idx) => (
                      <button
                        key={s.id || idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          activeScreenshotIdx === idx
                            ? 'bg-white/20 text-white shadow-sm font-semibold'
                            : 'text-[#86868B] hover:text-white'
                        }`}
                      >
                        {s.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Active Screenshot Render */}
              <div className="space-y-2">
                <ProjectMockup
                  type={currentScreenshot.mockupType}
                  title={`${project.title} — ${currentScreenshot.title}`}
                />
                <p className="text-xs text-[#86868B] italic text-center px-2">
                  {currentScreenshot.caption}
                </p>
              </div>
            </div>
          )}

          {/* 4. Problem & 9. Outcome Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 4. Problem */}
            <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF453A] uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Addressed</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 9. Outcome / Result */}
            <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#30D158] uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Outcome & Result</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* 5. Key Features */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block">
              Key Features
            </span>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E5EA]">
                  <CheckCircle2 className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. My Role / Contribution */}
          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F7] uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>My Role & Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
              {project.myRole}
            </p>
          </div>

          {/* 6. Tech Stack with Icons */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider block">
              Technologies & Languages Used
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full ios-pill text-[#F5F5F7] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <TechIcon name={t} className="w-3.5 h-3.5 shrink-0" />
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 13. Future Improvements (Optional) */}
          {project.futureImprovements && (
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-[#86868B]">
              <Compass className="w-4 h-4 text-[#FF9F0A] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Future Roadmap: </span>
                <span>{project.futureImprovements}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions: 10. Live Demo, 11. GitHub, 12. Project Report */}
        <div className="px-6 py-4 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {/* 11. GitHub Button */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full ios-glass border border-white/10 hover:bg-white/10 text-white text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {/* 12. Project Report Button */}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full ios-glass border border-white/10 hover:bg-white/10 text-white text-xs font-medium transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span>Project Report</span>
              </a>
            )}
          </div>

          {/* 10. Prominent Live Demo Button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0A84FF] text-white text-xs font-semibold hover:bg-[#0071E3] transition-colors shadow-lg shadow-blue-500/25 ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors ml-auto"
            >
              Close Window
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
