import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github, ChevronRight, CheckCircle2, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
            03 // Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Systems, civic tech & AI platforms.
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B] mt-1">
            Real software built with emphasis on backend workflows, database integrity, and autonomous decision support.
          </p>
        </div>

        {/* Project Cards Grid (Apple Squircle Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/40"
            >
              <div className="p-6">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full ios-pill text-[#0A84FF]">
                    {proj.tag}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#0A84FF] transition-colors mb-0.5">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#86868B] mb-3">{proj.subtitle}</p>

                <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {proj.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#86868B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#86868B] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3.5 bg-black/40 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-medium text-[#0A84FF] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Architecture Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2.5">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#86868B] hover:text-white transition-colors p-1"
                      aria-label={`${proj.title} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#0A84FF] hover:underline"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Sheet for Deep-Dive Architecture Inspection (Apple Sheet Style) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
            <div className="relative w-full max-w-2xl ios-glass-elevated border border-white/15 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-[#86868B] hover:text-white p-1.5 rounded-full bg-white/10"
                aria-label="Close Project Details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#86868B]">{selectedProject.subtitle}</p>
              </div>

              <div className="p-3.5 bg-black/50 rounded-2xl border border-white/5 mb-5 font-mono">
                <span className="text-[10px] text-[#86868B] uppercase block mb-1">
                  System Architecture
                </span>
                <p className="text-xs text-[#0A84FF]">{selectedProject.architecture}</p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                  Implementation Highlights
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1A6]">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full ios-pill text-[#F5F5F7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full ios-glass border border-white/10 text-white text-xs font-medium hover:bg-white/10"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A84FF] text-white text-xs font-medium hover:bg-[#0071E3]"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
