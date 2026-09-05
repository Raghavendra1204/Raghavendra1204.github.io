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
    <section id="skills" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              02 // Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technologies I work with.
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Grounded in systems fundamentals, backend architecture, and practical AI systems.
            </p>
          </div>
          
          <div className="text-xs font-mono text-[#86868B] ios-pill px-3 py-1 rounded-full self-start md:self-auto">
            Framing: <span className="text-white">Working with</span>
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
            All ({skillCategories.length})
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

        {/* Apple Bento Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="p-5 rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-[#0A84FF]">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">{category.name}</h3>
                  </div>
                  <p className="text-xs text-[#86868B] mb-4">{category.description}</p>
                </div>

                <div className="space-y-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-start justify-between gap-2"
                    >
                      <span className="text-xs font-medium text-[#F5F5F7]">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-[#86868B] text-right max-w-[60%]">
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
