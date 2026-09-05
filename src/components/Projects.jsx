import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github, ChevronRight, CheckCircle2, Server, Cpu, MapPin, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 03</span>
          <span>Featured Software Engineering Projects</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              Systems, civic tech & AI platforms.
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Real projects built with focus on backend workflows, database integrity, and autonomous decision support.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-xl bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700 transition-all flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-black/50"
            >
              <div className="p-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      proj.tagColor === 'emerald'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : proj.tagColor === 'blue'
                        ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                        : proj.tagColor === 'purple'
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}
                  >
                    {proj.tag}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-4 font-mono">{proj.subtitle}</p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Meaningful Features */}
                <div className="space-y-2 mb-5">
                  {proj.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3.5 bg-zinc-950/70 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
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
                      className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep-Dive Architecture Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 p-1.5 rounded-lg bg-zinc-800"
                aria-label="Close Project Details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-zinc-100 mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">{selectedProject.subtitle}</p>
              </div>

              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 mb-5">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">
                  System Architecture Contract
                </span>
                <p className="text-xs font-mono text-emerald-400">{selectedProject.architecture}</p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-zinc-200">Implementation Highlights:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-200 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 text-xs font-medium"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 text-xs"
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
