import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, GitBranch, Star, BookOpen } from 'lucide-react';

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Raghavendra1204/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('Rate limit or pending profile');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const fallbackRepos = [
    {
      id: 1,
      name: 'jansathi',
      html_url: 'https://github.com/Raghavendra1204/jansathi',
      description: 'Dual-portal civic-tech app bridging residents and municipal administration in real time.',
      language: 'JavaScript / React',
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 2,
      name: 'Hindimate',
      html_url: 'https://github.com/Raghavendra1204/Hindimate',
      description: 'AI language learning platform with Google TTS and Gemini API integration.',
      language: 'Python / React',
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 3,
      name: 'Raghavendra1204',
      html_url: 'https://github.com/Raghavendra1204/Raghavendra1204',
      description: 'Personal GitHub Profile README and developer specification repository.',
      language: 'Markdown',
      stargazers_count: 0,
      forks_count: 0,
    },
  ];

  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section id="github" className="py-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              06 // Open Source
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              GitHub activity & repositories.
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Live data from <span className="text-white font-mono">@Raghavendra1204</span>. Zero fabricated metrics.
            </p>
          </div>
          <a
            href="https://github.com/Raghavendra1204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full ios-glass border border-white/10 text-xs text-white hover:bg-white/10 transition-all self-start md:self-auto"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/Raghavendra1204</span>
            <ExternalLink className="w-3 h-3 text-[#86868B]" />
          </a>
        </div>

        {/* Repositories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {displayRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#0A84FF] transition-colors truncate">
                    <BookOpen className="w-3.5 h-3.5 text-[#86868B] shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#86868B] group-hover:text-white shrink-0" />
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed mb-4 line-clamp-3">
                  {repo.description || 'Public software repository on GitHub.'}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#86868B] pt-3 border-t border-white/5">
                <span className="text-[#0A84FF]">{repo.language || 'Codebase'}</span>
                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
