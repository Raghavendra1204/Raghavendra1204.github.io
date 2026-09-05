import React, { useState, useEffect } from 'react';
import { X, Play, Volume2, Sparkles, ChevronRight, Check } from 'lucide-react';

export default function BumblebeeWelcome() {
  // animation stages: 'driving' (0-2.5s) -> 'transforming' (2.5-4s) -> 'robot_hi' (4s+)
  const [stage, setStage] = useState('driving');
  const [minimized, setMinimized] = useState(false);
  const [soundEffect, setSoundEffect] = useState(true);

  const runSequence = () => {
    setStage('driving');
    setMinimized(false);

    const t1 = setTimeout(() => {
      setStage('transforming');
    }, 2200);

    const t2 = setTimeout(() => {
      setStage('robot_hi');
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  };

  useEffect(() => {
    // Check if user previously dismissed in this session
    const seen = sessionStorage.getItem('bumblebee_welcomed');
    if (!seen) {
      runSequence();
      sessionStorage.setItem('bumblebee_welcomed', 'true');
    } else {
      setMinimized(true);
    }
  }, []);

  // Floating trigger pill when docked/minimized
  if (minimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
        <button
          onClick={() => runSequence()}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full ios-glass-elevated border border-amber-500/40 text-xs font-mono text-amber-400 hover:text-amber-300 hover:border-amber-400 shadow-xl shadow-black/60 transition-all hover:scale-105"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Summon Bumblebee</span>
          <Play className="w-3 h-3 ml-0.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl ios-glass-elevated border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>
            <span className="text-zinc-300 font-medium">Autobot Telemetry // Bumblebee B-127</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => runSequence()}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 text-[11px] transition-colors"
            >
              Replay ↺
            </button>
            <button
              onClick={() => setMinimized(true)}
              className="p-1 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close Welcome"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Animation Stage Arena */}
        <div className="relative h-56 sm:h-64 w-full rounded-2xl bg-gradient-to-b from-zinc-950 via-zinc-900/60 to-zinc-950 border border-white/5 flex flex-col items-center justify-center overflow-hidden">
          
          {/* Subtle Cybertronian / Road Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
          
          {/* Speed Lines during Driving */}
          {stage === 'driving' && (
            <div className="absolute inset-x-0 bottom-12 flex justify-around opacity-40 animate-pulse">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 1. DRIVING MODE: Camaro speeds in from left to center */}
          {/* ========================================================================= */}
          {stage === 'driving' && (
            <div className="relative flex flex-col items-center transition-all duration-700 animate-slide-in-fast">
              {/* Car Body SVG */}
              <div className="relative w-64 h-24">
                <svg viewBox="0 0 260 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_15px_rgba(251,191,36,0.3)]">
                  {/* Headlight beam */}
                  <polygon points="240,55 260,45 260,65" fill="#FEF08A" opacity="0.8" />
                  <ellipse cx="258" cy="55" rx="10" ry="14" fill="#FEF08A" opacity="0.4" />

                  {/* Sleek Camaro Silhouette (Yellow body) */}
                  <path d="M15 62 L40 62 L55 45 L110 32 L180 32 L225 45 L245 58 L245 68 L15 68 Z" fill="#FBBF24" />
                  
                  {/* Black Racing Stripes */}
                  <polygon points="120,32 145,32 145,68 120,68" fill="#18181B" />
                  <polygon points="160,32 175,32 175,68 160,68" fill="#18181B" />
                  
                  {/* Windshield & Windows */}
                  <polygon points="112,35 175,35 190,47 95,47" fill="#090A0F" stroke="#FBBF24" strokeWidth="1.5" />
                  
                  {/* Rear & Front Wheels */}
                  <circle cx="65" cy="68" r="16" fill="#18181B" stroke="#71717A" strokeWidth="3" />
                  <circle cx="65" cy="68" r="7" fill="#FBBF24" />
                  
                  <circle cx="205" cy="68" r="16" fill="#18181B" stroke="#71717A" strokeWidth="3" />
                  <circle cx="205" cy="68" r="7" fill="#FBBF24" />

                  {/* Wheel Spokes Spinning */}
                  <line x1="65" y1="56" x2="65" y2="80" stroke="#E4E4E7" strokeWidth="1.5" />
                  <line x1="53" y1="68" x2="77" y2="68" stroke="#E4E4E7" strokeWidth="1.5" />
                  <line x1="205" y1="56" x2="205" y2="80" stroke="#E4E4E7" strokeWidth="1.5" />
                  <line x1="193" y1="68" x2="217" y2="68" stroke="#E4E4E7" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Status indicator */}
              <div className="mt-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                <span>Vehicle Mode // Camaro cruising into position...</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 2. TRANSFORMING MODE: Mechanical shifts and shifting plates */}
          {/* ========================================================================= */}
          {stage === 'transforming' && (
            <div className="relative flex flex-col items-center animate-pulse">
              <div className="relative w-44 h-40 flex items-center justify-center">
                <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-bounce">
                  {/* Shifting Chassis Plates */}
                  <rect x="40" y="20" width="80" height="40" rx="8" fill="#FBBF24" stroke="#18181B" strokeWidth="3" />
                  <rect x="55" y="65" width="50" height="50" rx="6" fill="#18181B" stroke="#FBBF24" strokeWidth="2" />
                  
                  {/* Wheels rotating to shoulders */}
                  <circle cx="30" cy="45" r="18" fill="#18181B" stroke="#71717A" strokeWidth="4" />
                  <circle cx="130" cy="45" r="18" fill="#18181B" stroke="#71717A" strokeWidth="4" />

                  {/* Spark & Energy lines */}
                  <line x1="25" y1="80" x2="45" y2="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
                  <line x1="135" y1="80" x2="115" y2="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Autobot Core Glow */}
                  <circle cx="80" cy="85" r="12" fill="#0284C7" className="animate-ping" opacity="0.75" />
                  <polygon points="80,77 87,83 85,91 75,91 73,83" fill="#E0F2FE" />
                </svg>
              </div>

              <div className="mt-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
                <span>Transformation Sequence Engaged... ⚡</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. ROBOT WELCOMES: Bumblebee in Full Form Waving & Saying Hi! */}
          {/* ========================================================================= */}
          {stage === 'robot_hi' && (
            <div className="relative flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                
                {/* Speech Balloon */}
                <div className="absolute -top-12 sm:-top-14 px-4 py-1.5 rounded-2xl bg-[#0A84FF] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30 border border-white/20 animate-bounce">
                  <span>Hi! I'm Bumblebee! 👋 Welcome to Raghavendra's workshop!</span>
                  {/* Speech bubble arrow pointer */}
                  <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-[#0A84FF] rotate-45"></div>
                </div>

                {/* Bumblebee Robot SVG Character */}
                <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 drop-shadow-[0_12px_24px_rgba(251,191,36,0.35)]">
                  {/* Head & Helmet */}
                  <rect x="62" y="16" width="36" height="32" rx="10" fill="#FBBF24" stroke="#18181B" strokeWidth="2.5" />
                  <rect x="70" y="12" width="20" height="8" rx="3" fill="#18181B" />
                  <line x1="80" y1="12" x2="80" y2="28" stroke="#F59E0B" strokeWidth="2" />
                  
                  {/* Glowing Blue Autobot Eyes */}
                  <circle cx="72" cy="30" r="4.5" fill="#38BDF8" className="animate-pulse" />
                  <circle cx="88" cy="30" r="4.5" fill="#38BDF8" className="animate-pulse" />
                  <circle cx="72" cy="30" r="2" fill="#FFFFFF" />
                  <circle cx="88" cy="30" r="2" fill="#FFFFFF" />
                  
                  {/* Mouthplate */}
                  <polygon points="73,38 87,38 84,44 76,44" fill="#27272A" />

                  {/* Torso & Chest Plates (Camaro Hood) */}
                  <polygon points="46,50 114,50 106,94 54,94" fill="#FBBF24" stroke="#18181B" strokeWidth="3" />
                  {/* Black Racing Stripes on Chest */}
                  <polygon points="68,50 78,50 76,94 66,94" fill="#18181B" />
                  <polygon points="84,50 94,50 92,94 82,94" fill="#18181B" />
                  
                  {/* Autobot Crest on Chest Center */}
                  <rect x="75" y="66" width="10" height="12" rx="2" fill="#0284C7" />
                  <circle cx="80" cy="72" r="3" fill="#E0F2FE" />

                  {/* Shoulder Wheels */}
                  <circle cx="34" cy="58" r="14" fill="#18181B" stroke="#71717A" strokeWidth="3" />
                  <circle cx="126" cy="58" r="14" fill="#18181B" stroke="#71717A" strokeWidth="3" />

                  {/* Left Arm (Relaxed) */}
                  <rect x="26" y="74" width="14" height="36" rx="5" fill="#FBBF24" stroke="#18181B" strokeWidth="2" />
                  
                  {/* Right Arm (Raised & Waving!) */}
                  <g className="origin-[126px_58px] -rotate-12">
                    <rect x="122" y="40" width="14" height="28" rx="5" fill="#FBBF24" stroke="#18181B" strokeWidth="2" />
                    {/* Hand waving */}
                    <circle cx="129" cy="32" r="7" fill="#F59E0B" stroke="#18181B" strokeWidth="2" />
                    <line x1="124" y1="28" x2="124" y2="22" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                    <line x1="128" y1="26" x2="128" y2="20" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                    <line x1="132" y1="27" x2="132" y2="21" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Legs */}
                  <rect x="56" y="96" width="18" height="42" rx="6" fill="#27272A" stroke="#18181B" strokeWidth="2" />
                  <rect x="86" y="96" width="18" height="42" rx="6" fill="#27272A" stroke="#18181B" strokeWidth="2" />
                  <rect x="52" y="134" width="24" height="12" rx="4" fill="#FBBF24" />
                  <rect x="84" y="134" width="24" height="12" rx="4" fill="#FBBF24" />
                </svg>
              </div>

              <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Autobot Online // Ready to explore Raghavendra's projects</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions in Clean iOS Style */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-white/10">
          <p className="text-xs text-zinc-400 font-sans">
            AI Engineering, Software Infrastructure, and Systems by <span className="text-white font-medium">Raghavendra Waggar</span>.
          </p>

          <button
            onClick={() => setMinimized(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0A84FF] text-white font-medium text-xs sm:text-sm hover:bg-[#0071E3] transition-all shadow-md shadow-blue-500/20"
          >
            <span>Enter Workshop</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
