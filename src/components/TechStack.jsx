import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import TechIcon from './TechIcon';
import { Terminal, Code, Cpu, Server, Layout, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  Languages: Code,
  'AI & Machine Learning': Cpu,
  'Backend Engineering': Server,
  'Frontend Development': Layout,
  'Databases & Storage': Database,
  'DevOps & Tooling': Wrench,
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === activeTab);

  return (
    <section id="skills" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technologies & Languages I Work With.
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Organized horizontally by engineering domain, paired with systems context and active toolchains.
            </p>
          </div>

          <div className="text-xs font-mono text-[#86868B] ios-pill px-3 py-1 rounded-full self-start md:self-auto">
            Framing: <span className="text-white">Active Toolset</span>
          </div>
        </div>

        {/* iOS Segmented Control Tab Bar */}
        <div className="p-1 rounded-full ios-glass border border-white/10 flex flex-wrap items-center gap-1 mb-8">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'All'
                ? 'bg-white/15 text-white shadow-sm'
                : 'text-[#86868B] hover:text-white'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === cat.name
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-[#86868B] hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Horizontal Category Shelves */}
        <div className="space-y-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="p-6 rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Horizontal Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF] border border-white/10 shadow-sm shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                        <span className="text-[10px] font-mono text-[#86868B] px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                          {category.skills.length} technologies
                        </span>
                      </div>
                      <p className="text-xs text-[#86868B] mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horizontal Flow of Technologies with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-black/40 hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all flex items-start gap-3.5 group min-h-[72px]"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                        <TechIcon name={skill.name} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-xs font-semibold text-[#F5F5F7] tracking-tight leading-snug">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#86868B] leading-snug group-hover:text-[#A1A1A6] transition-colors mt-0.5">
                          {skill.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
