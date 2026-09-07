import React, { useState } from 'react';
import { projects } from '../data/projects';
import TechIcon from './TechIcon';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
             Featured Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            List of Projects ({projects.length})
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B] mt-1">
            Click on any project to view screenshots, problem scope, key features, and live deployment details.
          </p>
        </div>

        {/* Project Cards Grid (Apple Squircle Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="rounded-3xl ios-glass border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/40 cursor-pointer hover:shadow-2xl hover:translate-y-[-2px]"
            >
              <div className="p-6">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full ios-pill text-[#0A84FF] border border-white/10">
                    {proj.tag}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#0A84FF] transition-colors mb-0.5">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#86868B] mb-3">{proj.subtitle}</p>

                <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed mb-5">
                  {proj.shortDescription || proj.description}
                </p>

                {/* Highlights / Features */}
                <div className="space-y-1.5 mb-5">
                  {(proj.keyFeatures || proj.highlights).slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#86868B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Horizontal Tech Stack Badges with Technology Icons */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/40 text-[#E5E5EA] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <TechIcon name={t} className="w-3.5 h-3.5 shrink-0" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3.5 bg-black/40 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                  className="text-xs font-medium text-[#0A84FF] group-hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Project Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2.5">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#0A84FF] hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Project Details Window / Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
