import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';

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
    { name: 'Interests', href: '#hobbies' },
    { name: 'GitHub', href: '#github' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-4 sm:px-6 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'ios-glass-elevated shadow-2xl shadow-black/80 border border-white/15'
            : 'ios-glass border border-white/10 shadow-lg shadow-black/40'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Apple Monogram Brand */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-sans font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white text-xs font-mono">
              <span>RW</span>
            </div>
            <span className="text-sm font-medium tracking-tight">
              raghavendra<span className="text-[#0A84FF]">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links (iOS Segmented Style) */}
          <div className="hidden md:flex items-center gap-5 text-[13px] font-medium text-[#86868B]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://github.com/Raghavendra1204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-[#86868B] hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-[#86868B] hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A84FF] text-white text-xs font-medium hover:bg-[#0071E3] shadow-sm shadow-blue-500/20 transition-all"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#86868B] hover:text-white rounded-full"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-[#86868B] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href="https://github.com/Raghavendra1204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868B] hover:text-white p-1"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/raghavendra-waggar-40b20a2b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868B] hover:text-white p-1"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A84FF] text-white text-xs font-medium"
              >
                <FileText className="w-3 h-3" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
