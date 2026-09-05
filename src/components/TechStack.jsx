import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
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
    <section id="skills" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 02</span>
          <span>Technical Toolkit & Technologies</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              Technologies I work with.
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Grounded in systems fundamentals, backend architecture, and practical AI applications.
            </p>
          </div>
          
          <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            Framing: <span className="text-emerald-400">Working with / Building with</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'All'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
            }`}
          >
            All Areas ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === cat.name
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid of Categories and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700/70 flex items-center justify-center text-emerald-400">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-200">{category.name}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">{category.description}</p>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex items-start justify-between gap-2"
                    >
                      <span className="text-xs font-medium text-zinc-200 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-zinc-500 text-right leading-tight max-w-[60%]">
                        {skill.context}
                      </span>
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
