import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, FileText, Code2, Cpu, Database, GraduationCap } from 'lucide-react';

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Status Pill Badge (iOS HIG Style) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full ios-pill text-xs text-[#86868B] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0A84FF]"></span>
          <span>Open to Software & AI Engineering Roles & Internships</span>
        </div>

        {/* Hero Top: Identity & Avatar Card */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-8">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
              Raghavendra Waggar
            </h1>
            
            <p className="text-xl sm:text-2xl font-medium text-[#A1A1A6] leading-snug">
              AI & Data Science Student building{' '}
              <span className="text-white">AI-powered software systems.</span>
            </p>

            <p className="text-base text-[#86868B] leading-relaxed mt-4">
              Undergraduate at <span className="text-[#F5F5F7]">USAR, GGSIPU</span> in New Delhi. 
              Focused on the engineering required to make AI reliable in production: 
              backend architectures, asynchronous queues, and systems beneath the abstractions.
            </p>
          </div>

          {/* Profile Picture Frame (iOS Squircle Card) */}
          <div className="relative shrink-0 self-start md:self-center flex flex-col items-center">
            <div className="w-32 h-36 sm:w-36 sm:h-44 rounded-3xl p-1 ios-glass-elevated border border-white/15 shadow-2xl relative overflow-hidden">
              {!avatarError ? (
                <img
                  src="/photos/avatar.jpg"
                  alt="Raghavendra Waggar"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-[#1C1C1E] flex flex-col items-center justify-center text-[#86868B] font-mono">
                  <span className="text-2xl font-bold text-white tracking-wider">RW</span>
                  <span className="text-[10px] uppercase mt-0.5">Engineer</span>
                </div>
              )}
            </div>

            {/* User-Requested Caption in Apple System Pill */}
            <div className="mt-2.5 px-3 py-1 rounded-full ios-pill text-[11px] text-[#86868B] text-center shadow-sm">
              <span className="text-[#0A84FF] mr-1">“</span>
              <span>most professional picture yet far</span>
              <span className="text-[#0A84FF] ml-1">”</span>
            </div>
          </div>
        </div>

        {/* Developer Mindset Box (iOS Terminal Card) */}
        <div className="mb-10 max-w-2xl rounded-2xl ios-glass border border-white/10 p-4 text-xs sm:text-sm shadow-inner">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/5 text-[#86868B] text-[11px] font-mono">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
            <span className="ml-1.5 text-[#86868B]">mindset.sh</span>
          </div>
          <p className="text-[#F5F5F7] font-medium leading-relaxed font-mono text-xs sm:text-sm">
            &ldquo;I like understanding how things work, building them myself, breaking them, and figuring out why they broke.&rdquo;
          </p>
        </div>

        {/* Apple HIG Segmented CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A84FF] text-white font-medium text-xs sm:text-sm hover:bg-[#0071E3] transition-all shadow-md shadow-blue-500/20"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Raghavendra1204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full ios-glass border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4 text-[#86868B]" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full ios-glass border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4 text-[#0A84FF]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full ios-glass border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
          >
            <FileText className="w-4 h-4 text-[#86868B]" />
            <span>Resume</span>
          </a>
        </div>

        {/* Apple Bento Widget Strip (Zero Fake Numbers, 100% Truth) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl ios-glass border border-white/5">
            <div className="flex items-center gap-1.5 text-[#86868B] text-xs font-mono mb-1">
              <Code2 className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>Core Stack</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">Python, C++, FastAPI</p>
          </div>

          <div className="p-3.5 rounded-2xl ios-glass border border-white/5">
            <div className="flex items-center gap-1.5 text-[#86868B] text-xs font-mono mb-1">
              <Cpu className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>Specialization</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">AI Agents & ML Systems</p>
          </div>

          <div className="p-3.5 rounded-2xl ios-glass border border-white/5">
            <div className="flex items-center gap-1.5 text-[#86868B] text-xs font-mono mb-1">
              <Database className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>Architecture</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">PostgreSQL, Celery, Redis</p>
          </div>

          <div className="p-3.5 rounded-2xl ios-glass border border-white/5">
            <div className="flex items-center gap-1.5 text-[#86868B] text-xs font-mono mb-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span>Education</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">B.Tech AI & DS, USAR</p>
          </div>
        </div>
      </div>
    </section>
  );
}
