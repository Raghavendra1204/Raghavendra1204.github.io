import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Home } from 'lucide-react';

export default function Navbar({ activeView = 'home', onNavigate }) {
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
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Hackathons', id: 'experience' },
    { name: 'Interests', id: 'hobbies' },
    { name: 'GitHub', id: 'github' },
  ];

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

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
          {/* Apple Monogram Brand -> Navigates to About View */}
          <button
            onClick={(e) => handleLinkClick('about', e)}
            className="flex items-center gap-2 text-white font-sans font-semibold tracking-tight hover:opacity-80 transition-opacity focus:outline-none"
            aria-label="About"
          >
            <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-mono transition-all ${
              activeView === 'about'
                ? 'bg-[#0A84FF] border-[#0A84FF] text-white shadow-md shadow-blue-500/30'
                : 'bg-white/10 border-white/15 text-white'
            }`}>
              <span>RW</span>
            </div>
            <span className="text-sm font-medium tracking-tight">
              raghavendra<span className="text-[#0A84FF]">.dev</span>
            </span>
          </button>

          {/* Desktop Navigation Links (iOS Segmented Style) */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-black/30 border border-white/5 text-[13px] font-medium">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeView === link.id
                    ? 'bg-white/15 text-white shadow-sm font-semibold'
                    : 'text-[#86868B] hover:text-white'
                }`}
              >
                {link.name}
              </button>
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
            <button
              onClick={(e) => handleLinkClick('resume', e)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                activeView === 'resume'
                  ? 'bg-white text-black shadow-md'
                  : 'bg-[#0A84FF] text-white hover:bg-[#0071E3] shadow-sm shadow-blue-500/20'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
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
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-1.5 pb-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`w-full text-left py-1.5 px-2 rounded-xl text-sm transition-colors ${
                  activeView === link.id ? 'bg-white/10 text-white font-medium' : 'text-[#86868B] hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2.5 border-t border-white/10 flex items-center justify-between px-2">
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
              <button
                onClick={(e) => handleLinkClick('resume', e)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A84FF] text-white text-xs font-medium"
              >
                <FileText className="w-3 h-3" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
