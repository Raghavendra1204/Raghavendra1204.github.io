import React from 'react';
import { Layers, Bug, Lightbulb, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header (Apple Style) */}
        <div className="mb-8">
          <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
            01 // Engineering Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Building systems from first principles.
          </h2>
        </div>

        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4 text-[#A1A1A6] text-sm sm:text-base leading-relaxed">
            <p>
              I am an undergraduate student pursuing my B.Tech in{' '}
              <span className="text-white font-medium">Artificial Intelligence and Data Science</span> at the{' '}
              <span className="text-white font-medium">
                University School of Automation & Robotics (USAR), GGSIPU EDC
              </span>{' '}
              in New Delhi.
            </p>
            
            <p>
              Rather than studying machine learning models in a vacuum or simply invoking high-level endpoints, 
              I focus on the engineering required to make AI functional, reliable, and usable in production software. 
              That means understanding what sits beneath the abstraction layer: database indexing, memory management, 
              asynchronous job processing with Celery and Redis, and state management in complex web clients.
            </p>

            <p>
              I learn primarily through hands-on experimentation. I like designing prototypes, purposefully stress-testing 
              or breaking them, and working through stack traces and network logs to diagnose why something failed. 
              Whether it's building a dual-portal civic tech application for municipal issue tracking or engineering 
              an institutional placement system with multi-rule eligibility filtering, I care about whether the software 
              solves an actual operational friction point.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl ios-glass border border-white/10 text-xs text-[#86868B] leading-relaxed">
                <div className="flex items-center gap-2 text-white font-medium mb-1.5">
                  <GraduationCap className="w-4 h-4 text-[#0A84FF]" />
                  <span>Formal Academic Background</span>
                </div>
                <p>
                  B.Tech in AI & Data Science (2024–Present) at USAR, GGSIPU. Relevant coursework includes Data Structures & Algorithms (C/C++), Database Management Systems (SQL), Operating Systems, Machine Learning Foundations, and Probability & Statistics for Data Science.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Approach (Apple Bento Cards) */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl ios-glass border border-white/10">
              <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF] mb-2.5">
                <Bug className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Underneath Abstractions</h3>
              <p className="text-xs text-[#86868B] leading-relaxed">
                Digging into how memory is allocated, how connections pool in PostgreSQL, and how async event loops handle concurrent I/O.
              </p>
            </div>

            <div className="p-4 rounded-2xl ios-glass border border-white/10">
              <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF] mb-2.5">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">AI + Software Plumbing</h3>
              <p className="text-xs text-[#86868B] leading-relaxed">
                Treating models as system components that require deterministic inputs, structured JSON validation, and error boundaries.
              </p>
            </div>

            <div className="p-4 rounded-2xl ios-glass border border-white/10">
              <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF] mb-2.5">
                <Lightbulb className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Practical Product Value</h3>
              <p className="text-xs text-[#86868B] leading-relaxed">
                Prioritizing real user utility—verifying civic reports, automating placement drives, and generating structured executive reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
