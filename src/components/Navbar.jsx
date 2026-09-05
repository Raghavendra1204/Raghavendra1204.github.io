import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, FileText, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#experience' },
    { name: 'GitHub', href: '#github' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-zinc-100 font-mono font-semibold tracking-tight hover:text-emerald-400 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span>
            raghavendra<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Raghavendra1204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/raghavendra-waggar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f] border-b border-zinc-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href="https://github.com/Raghavendra1204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/raghavendra-waggar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
