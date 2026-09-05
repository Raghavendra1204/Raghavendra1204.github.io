import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, GitBranch, Star, BookOpen, AlertCircle } from 'lucide-react';

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch real public repository metadata from GitHub API
    fetch('https://api.github.com/users/Raghavendra1204/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Public API rate limit reached or user profile pending');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        // Fallback gracefully without fabricating numbers
        setError(err.message);
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
    <section id="github" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]/60 backdrop-blur-[1px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 05</span>
          <span>Open Source & Public Repositories</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              GitHub activity & repositories.
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Live data from <span className="text-emerald-400 font-mono">@Raghavendra1204</span>. No fabricated metrics or inflated numbers.
            </p>
          </div>
          <a
            href="https://github.com/Raghavendra1204"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-all self-start md:self-auto"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/Raghavendra1204</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors font-mono truncate">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 shrink-0" />
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {repo.description || 'Public software repository on GitHub.'}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-3 border-t border-zinc-800/60">
                <span className="text-emerald-400/90">{repo.language || 'Codebase'}</span>
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
