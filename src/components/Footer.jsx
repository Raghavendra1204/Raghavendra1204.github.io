import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070a] border-t border-zinc-800/80 text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400">
                <Terminal className="w-3 h-3" />
              </div>
              <h3 className="text-base font-bold text-zinc-100 font-sans">
                Raghavendra Waggar
              </h3>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              AI & Data Science | AI/ML | Software Engineering | Builder
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Raghavendra1204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:raghavendrawaggarjee@gmail.com"
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Technical Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-3">
          <p>© {new Date().getFullYear()} Raghavendra Waggar. Built with React, Vite & Tailwind CSS.</p>
          <p>
            Hosted statically on{' '}
            <a
              href="https://Raghavendra1204.github.io"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              GitHub Pages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
