import React from 'react';
import { Layers, Bug, Lightbulb, Compass, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 01</span>
          <span>Background & Engineering Philosophy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-8 font-sans">
          Building systems from first principles.
        </h2>

        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4 text-zinc-300 text-base leading-relaxed">
            <p>
              I am an undergraduate student pursuing my B.Tech in{' '}
              <span className="text-zinc-100 font-medium">Artificial Intelligence and Data Science</span> at the{' '}
              <span className="text-zinc-100 font-medium">
                University School of Automation & Robotics (USAR), GGSIPU EDC
              </span>{' '}
              in New Delhi.
            </p>
            
            <p>
              Rather than studying machine learning models in a vacuum or merely calling high-level APIs, 
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
              <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-300">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-zinc-200">Formal Academic Background</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  B.Tech in AI & Data Science (2024–Present) at USAR, GGSIPU. Relevant coursework includes Data Structures & Algorithms (C/C++), Database Management Systems (SQL), Operating Systems, Machine Learning Foundations, and Probability & Statistics for Data Science.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Approach */}
          <div className="space-y-3.5">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Bug className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-1">Underneath Abstractions</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Digging into how memory is allocated, how connections pool in PostgreSQL, and how async event loops handle concurrent I/O.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-1">AI + Software Plumbing</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Treating models as system components that require deterministic inputs, structured JSON validation, and error boundaries.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-1">Practical Product Value</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prioritizing real user utility—verifying civic reports, automating placement drives, and generating structured executive reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
