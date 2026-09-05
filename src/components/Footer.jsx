import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black border-t border-white/5 text-[#86868B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-mono">
                <span>RW</span>
              </div>
              <h3 className="text-base font-bold text-white font-sans">
                Raghavendra Waggar
              </h3>
            </div>
            <p className="text-xs text-[#86868B]">
              AI & Data Science | AI/ML | Software Engineering | Builder
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Raghavendra1204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#86868B] hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#86868B] hover:text-[#0A84FF] hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:raghavendrawaggarjee@gmail.com"
              className="p-2 text-[#86868B] hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-[#86868B] hover:text-white hover:bg-white/10 rounded-full transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Apple Footer Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#86868B] gap-3">
          <p>© {new Date().getFullYear()} Raghavendra Waggar. Engineered with React, Vite & Tailwind CSS.</p>
          <p>
            Hosted statically on{' '}
            <a
              href="https://Raghavendra1204.github.io"
              className="text-[#A1A1A6] hover:text-white transition-colors"
            >
              GitHub Pages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
