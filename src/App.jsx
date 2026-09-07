import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ProjectDetailPage from './components/ProjectDetailPage';
import Experience from './components/Experience';
import HobbiesAndPhotography from './components/HobbiesAndPhotography';
import GitHubActivity from './components/GitHubActivity';
import ResumeSection from './components/ResumeSection';
import SectionLoader from './components/SectionLoader';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { ChevronRight, ArrowLeft, Layers } from 'lucide-react';

const VIEW_TITLES = {
  about: { label: 'About & Philosophy', tag: 'Identity, Mindset & Engineering Philosophy' },
  skills: { label: 'Technical Stack', tag: 'Languages, Frameworks & ML' },
  projects: { label: 'Featured Projects', tag: 'List of Projects (4)' },
  'project-detail': { label: 'Project Details', tag: 'Full Architecture, Tour & Reports' },
  experience: { label: 'Hackathons & Sprints', tag: 'Competitive Builds & Results' },
  hobbies: { label: 'Visual Journal & Interests', tag: 'Photography & Creative Pursuits' },
  github: { label: 'Open Source Repositories', tag: 'Live GitHub Activity' },
  resume: { label: 'Curriculum Vitae', tag: 'Credentials & Resume' },
};

export default function App() {
  const [activeView, setActiveView] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingTag, setLoadingTag] = useState('');

  // Handle URL hash on initial load or popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('project/')) {
        const projId = hash.replace('project/', '');
        const found = projects.find((p) => p.id === projId || p.id === 'jaansathi' && projId === 'jansathi');
        if (found) {
          setSelectedProject(found);
          setActiveView('project-detail');
          return;
        }
      }

      if (hash && VIEW_TITLES[hash]) {
        setActiveView(hash);
      } else {
        setActiveView('about');
      }
    };

    handleHash();
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const handleNavigate = (targetView) => {
    if (targetView === activeView && targetView !== 'projects') return;

    setLoadingTag(VIEW_TITLES[targetView]?.label || 'Section');
    setLoading(true);

    setTimeout(() => {
      setActiveView(targetView);
      if (targetView === 'about') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState(null, '', `#${targetView}`);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false);
    }, 200);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setLoadingTag(project.title);
    setLoading(true);

    setTimeout(() => {
      setActiveView('project-detail');
      window.history.pushState(null, '', `#project/${project.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false);
    }, 200);
  };

  const renderActiveWindow = () => {
    if (loading) {
      return <SectionLoader tag={loadingTag} />;
    }

    switch (activeView) {
      case 'skills':
        return <TechStack />;
      case 'projects':
        return <Projects onSelectProject={handleSelectProject} />;
      case 'project-detail':
        return (
          <ProjectDetailPage
            project={selectedProject || projects[0]}
            onBack={() => handleNavigate('projects')}
          />
        );
      case 'experience':
        return <Experience />;
      case 'hobbies':
        return <HobbiesAndPhotography />;
      case 'github':
        return <GitHubActivity />;
      case 'resume':
        return <ResumeSection />;
      case 'about':
      default:
        return <About onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] flex flex-col relative selection:bg-[#0A84FF]/25 selection:text-white">
      {/* User's Custom Starry Artwork Background Layers */}
      <div className="stars-bg-canvas" />
      <div className="stars-bg-overlay" />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          activeView={activeView === 'project-detail' ? 'projects' : activeView}
          onNavigate={handleNavigate}
        />

        <main className="flex-grow pt-4">
          {/* Sub-view Breadcrumb Header when viewing non-About sections */}
          {activeView !== 'about' && !loading && (
            <div className="pt-28 pb-2 max-w-6xl mx-auto px-4 sm:px-8 window-fade">
              <div className="flex items-center justify-between gap-4 p-3 rounded-2xl ios-glass border border-white/10 shadow-lg shadow-black/40">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    onClick={() => handleNavigate('about')}
                    className="inline-flex items-center gap-1.5 text-[#86868B] hover:text-white transition-colors group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    <span>About (Home)</span>
                  </button>

                  {activeView === 'project-detail' ? (
                    <>
                      <ChevronRight className="w-3 h-3 text-[#86868B]" />
                      <button
                        onClick={() => handleNavigate('projects')}
                        className="text-[#86868B] hover:text-white transition-colors"
                      >
                        Projects
                      </button>
                      <ChevronRight className="w-3 h-3 text-[#86868B]" />
                      <span className="text-[#0A84FF] font-medium tracking-wider">
                        {selectedProject?.title || 'Project Detail'}
                      </span>
                    </>
                  ) : (
                    <>
                      <ChevronRight className="w-3 h-3 text-[#86868B]" />
                      <span className="text-[#0A84FF] font-medium uppercase tracking-wider">
                        {VIEW_TITLES[activeView]?.label}
                      </span>
                    </>
                  )}
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#86868B] font-mono">
                  <Layers className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span>
                    {activeView === 'project-detail'
                      ? selectedProject?.subtitle || 'Case Study'
                      : VIEW_TITLES[activeView]?.tag}
                  </span>
                </div>
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
