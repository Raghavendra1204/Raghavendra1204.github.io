import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, FileText, Terminal, Code2, Cpu, Database, Camera, Sparkles } from 'lucide-react';

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Availability & Photography Quick Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to Software & AI Engineering Roles & Internships</span>
          </div>
          <a
            href="#hobbies"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>View Photographic Clicks</span>
          </a>
        </div>

        {/* Hero Top: Profile Header with Avatar Container */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-3 font-sans">
              Raghavendra Waggar
            </h1>
            
            <p className="text-xl sm:text-2xl font-semibold text-zinc-300 max-w-2xl">
              AI & Data Science Student building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                AI-powered software systems.
              </span>
            </p>
          </div>

          {/* Profile Picture / Avatar Frame */}
          <div className="relative shrink-0 self-start md:self-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-b from-zinc-700 to-zinc-900 border border-zinc-700/80 shadow-2xl relative group overflow-hidden">
              {!avatarError ? (
                <img
                  src="/photos/avatar.jpg"
                  alt="Raghavendra Waggar"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-zinc-950 flex flex-col items-center justify-center text-zinc-400 font-mono">
                  <span className="text-2xl font-bold text-emerald-400 tracking-wider">RW</span>
                  <span className="text-[10px] text-zinc-500 uppercase mt-0.5">Builder</span>
                </div>
              )}
              {/* Online Indicator */}
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-md"></div>
            </div>
          </div>
        </div>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
          Undergraduate at <span className="text-zinc-200 font-medium">USAR, GGSIPU</span>. 
          I like building real-world products at the intersection of AI, software engineering, 
          backend infrastructure, and distributed data systems.
        </p>

        {/* Developer Mindset Terminal Box */}
        <div className="mb-10 max-w-2xl bg-zinc-950/80 rounded-xl border border-zinc-800/80 p-4 font-mono text-xs sm:text-sm text-zinc-300 shadow-inner">
          <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-zinc-800/60 text-zinc-500">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
            <span className="text-[11px] tracking-wider ml-1 text-zinc-400">raghavendra@terminal:~$ cat mindset.txt</span>
          </div>
          <p className="text-emerald-400 font-medium leading-relaxed">
            &ldquo;I like understanding how things work, building them myself, breaking them, and figuring out why they broke.&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-md shadow-emerald-950/30"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Raghavendra1204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-zinc-100 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-zinc-100 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-zinc-100 transition-all"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Fact-Based Technical Highlights (Zero Fake Numbers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-zinc-800/80">
          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-1">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Stack</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">Python, C/C++, FastAPI</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-1">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>Specialization</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">AI Agents & ML Systems</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-1">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>Architecture</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">PostgreSQL, Celery, Redis</p>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-1">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Education</span>
            </div>
            <p className="text-sm font-semibold text-zinc-200">B.Tech AI & DS, USAR</p>
          </div>
        </div>
      </div>
    </section>
  );
}
