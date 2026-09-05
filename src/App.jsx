import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import HobbiesAndPhotography from './components/HobbiesAndPhotography';
import GitHubActivity from './components/GitHubActivity';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] flex flex-col relative selection:bg-[#0A84FF]/25 selection:text-white">
      {/* User's Custom Starry Artwork Background Layers */}
      <div className="stars-bg-canvas" />
      <div className="stars-bg-overlay" />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <HobbiesAndPhotography />
          <GitHubActivity />
          <ResumeSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
