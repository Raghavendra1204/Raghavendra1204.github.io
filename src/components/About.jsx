import React, { useState } from 'react';
import { Compass, Hammer, Cpu, Terminal, GraduationCap, Code2, Database } from 'lucide-react';

export default function About({ onNavigate }) {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="about" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Top Section: Raghavendra Waggar Identity + Avatar Card */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3">
              Raghavendra Waggar
            </h1>
            
            <p className="text-xl sm:text-2xl font-medium text-[#A1A1A6] leading-snug mb-4">
              AI & Data Science student who enjoys{' '}
              <span className="text-white">building things, experimenting, & understanding systems.</span>
            </p>

            <p className="text-base text-[#86868B] leading-relaxed max-w-2xl">
              Undergraduate in Artificial Intelligence & Data Science at USAR, GGSIPU in New Delhi. Exploring software beneath the abstractions—from AI architectures and APIs to backend workflows and distributed data.
            </p>
          </div>

          {/* Profile Picture Frame (iOS Squircle Card) */}
          <div className="relative shrink-0 self-start md:self-center flex flex-col items-center">
            <div className="w-32 h-36 sm:w-40 sm:h-48 rounded-3xl p-1 ios-glass-elevated border border-white/15 shadow-2xl relative overflow-hidden">
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

            {/* Caption in Apple System Pill */}
            <div className="mt-2.5 px-3 py-1 rounded-full ios-pill text-[11px] text-[#86868B] text-center shadow-sm">
              <span className="text-[#0A84FF] mr-1">“</span>
              <span>most professional picture yet far</span>
              <span className="text-[#0A84FF] ml-1">”</span>
            </div>
          </div>
        </div>

        {/* Developer Mindset Box (iOS Terminal Card) */}
        <div className="mb-12 max-w-3xl rounded-2xl ios-glass border border-white/10 p-4 text-xs sm:text-sm shadow-inner">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/5 text-[#86868B] text-[11px] font-mono">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
            <span className="ml-1.5 text-[#86868B]">mindset.sh</span>
          </div>
          <p className="text-[#F5F5F7] font-medium leading-relaxed font-mono text-xs sm:text-sm">
            &ldquo;I like taking an idea, breaking it down, writing the code, breaking the code again, figuring out what went wrong, and eventually turning it into something that works.&rdquo;
          </p>
        </div>

        {/* Section Divider & Header */}
        <div className="mb-8 pt-4 border-t border-white/5">
          <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
            Engineering Background & Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How I think, experiment, and build.
          </h2>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-5 text-[#A1A1A6] text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-4">
              <p className="text-white font-medium text-base sm:text-lg leading-snug">
                Hi, I'm Raghavendra.
              </p>
              <p>
                I'm an Artificial Intelligence and Data Science student who enjoys building things, experimenting with technology, and understanding how systems work under the hood.
              </p>
              <p>
                I learn best by actually building. Rather than just studying how something works in theory, I prefer taking an idea, breaking it down, writing the code, breaking the code again, figuring out what went wrong, and eventually turning it into something reliable.
              </p>
              <p>
                A lot of my learning comes from that process. Every project gives me something new to understand—whether it's a technology I've never used before, an edge-case problem I couldn't solve initially, or simply a cleaner architecture for building it.
              </p>
              <p className="text-[#F5F5F7]">
                I care about building practical systems rather than only working with high-level endpoints or theoretical abstractions. I'm still learning, still experimenting, and still building—and honestly, that's the part I enjoy the most.
              </p>
            </div>

            {/* Academic Context Card */}
            <div className="p-5 rounded-2xl ios-glass border border-white/10 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF] shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#86868B] leading-relaxed">
                <span className="text-white font-medium block text-xs sm:text-sm mb-0.5">
                  Academic Foundation
                </span>
                <p>
                  B.Tech in Artificial Intelligence & Data Science at <span className="text-[#F5F5F7]">University School of Automation & Robotics (USAR), GGSIPU EDC</span>, New Delhi. Coursework covers data structures & algorithms, systems architecture, machine learning foundations, and database systems.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Scannable Bento Blocks */}
          <div className="lg:col-span-5 space-y-4">
            {/* Core Interests */}
            <div className="p-5 rounded-3xl ios-glass border border-white/10">
              <div className="flex items-center gap-2 text-white font-medium text-xs sm:text-sm mb-3">
                <Cpu className="w-4 h-4 text-[#0A84FF]" />
                <span>Primary Technical Focus</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Data Engineering',
                  'LLMs & GenAI',
                  'Software Engineering',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full ios-pill text-[11px] font-mono text-[#F5F5F7]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems Outside The Box */}
            <div className="p-5 rounded-3xl ios-glass border border-white/10">
              <div className="flex items-center gap-2 text-white font-medium text-xs sm:text-sm mb-3">
                <Compass className="w-4 h-4 text-[#0A84FF]" />
                <span>Outside Conventional AI/ML</span>
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed mb-3">
                I actively step outside isolated notebooks to understand the infrastructure that makes AI practical in production:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Backend Engineering',
                  'MLOps',
                  'Cloud Computing',
                  'System Design',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full ios-pill text-[11px] font-mono text-[#A1A1A6]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* How I Build Card */}
            <div className="p-5 rounded-3xl ios-glass border border-white/10">
              <div className="flex items-center gap-2 text-white font-medium text-xs sm:text-sm mb-2.5">
                <Hammer className="w-4 h-4 text-[#0A84FF]" />
                <span>The Engineering Loop</span>
              </div>
              <ul className="space-y-2 text-xs text-[#86868B] leading-relaxed font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span>Deconstruct the problem statement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span>Build prototypes & break edge cases</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span>Diagnose failures via logs & inspect why</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span>Refine into a functional, reliable solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
