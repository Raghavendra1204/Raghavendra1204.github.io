import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import HobbiesAndPhotography from './components/HobbiesAndPhotography';
import GitHubActivity from './components/GitHubActivity';
import ResumeSection from './components/ResumeSection';
import SectionLoader from './components/SectionLoader';
import Footer from './components/Footer';
import { ChevronRight, ArrowLeft, Sparkles, Layers } from 'lucide-react';

const VIEW_TITLES = {
  home: { label: 'Front Overview', tag: 'Identity & Engineering Scope' },
  about: { label: 'About & Philosophy', tag: 'Engineering Philosophy' },
  skills: { label: 'Technical Stack', tag: 'Languages, Frameworks & ML' },
  projects: { label: 'Featured Projects', tag: 'Systems, Civic Tech & AI Platforms' },
  experience: { label: 'Hackathons & Sprints', tag: 'Competitive Builds & Results' },
  hobbies: { label: 'Visual Journal & Interests', tag: 'Photography & Creative Pursuits' },
  github: { label: 'Open Source Repositories', tag: 'Live GitHub Activity' },
  resume: { label: 'Curriculum Vitae', tag: 'Credentials & Resume' },
};

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [loading, setLoading] = useState(false);
  const [loadingTag, setLoadingTag] = useState('');

  // Handle URL hash on initial load or popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && VIEW_TITLES[hash]) {
        setActiveView(hash);
      } else if (!hash) {
        setActiveView('home');
      }
    };

    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const handleNavigate = (targetView) => {
    if (targetView === activeView) return;

    setLoadingTag(VIEW_TITLES[targetView]?.label || 'Section');
    setLoading(true);

    // Smooth window switch transition delay (Apple style micro-loading)
    setTimeout(() => {
      setActiveView(targetView);
      if (targetView === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState(null, '', `#${targetView}`);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false);
    }, 240);
  };

  const renderActiveWindow = () => {
    if (loading) {
      return <SectionLoader tag={loadingTag} />;
    }

    switch (activeView) {
      case 'about':
        return <About />;
      case 'skills':
        return <TechStack />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'hobbies':
        return <HobbiesAndPhotography />;
      case 'github':
        return <GitHubActivity />;
      case 'resume':
        return <ResumeSection />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <HobbiesAndPhotography />
            <GitHubActivity />
            <ResumeSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] flex flex-col relative selection:bg-[#0A84FF]/25 selection:text-white">
      {/* User's Custom Starry Artwork Background Layers */}
      <div className="stars-bg-canvas" />
      <div className="stars-bg-overlay" />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeView={activeView} onNavigate={handleNavigate} />

        <main className="flex-grow pt-4">
          {/* Sub-window Breadcrumb / Active Window Header when viewing individual section */}
          {activeView !== 'home' && !loading && (
            <div className="pt-28 pb-4 max-w-6xl mx-auto px-4 sm:px-8 window-fade">
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl ios-glass border border-white/10 shadow-lg shadow-black/40">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-1.5 text-[#86868B] hover:text-white transition-colors group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    <span>raghavendra.dev</span>
                  </button>
                  <ChevronRight className="w-3 h-3 text-[#86868B]" />
                  <span className="text-[#0A84FF] font-medium uppercase tracking-wider">
                    {VIEW_TITLES[activeView]?.label}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#86868B] font-mono">
                  <Layers className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>{VIEW_TITLES[activeView]?.tag}</span>
                </div>

                <button
                  onClick={() => handleNavigate('home')}
                  className="text-xs font-medium text-[#86868B] hover:text-white px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                >
                  Close Window ✕
                </button>
              </div>
            </div>
          )}

          {/* Dynamic Window Container with Transition Animation */}
          <div key={activeView} className="window-transition">
            {renderActiveWindow()}
          </div>
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

