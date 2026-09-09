import React, { useState, useEffect } from 'react';
import TechIcon from './TechIcon';
import ProjectMockup from './ProjectMockup';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  MapPin,
  Building2,
  Users,
  ShieldCheck,
  Bot,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  Compass,
  Download,
  BookOpen,
  Volume2,
  Award,
  Zap,
  Code,
  Server,
  Globe,
  Database,
  Search,
  Sliders,
  Briefcase,
  GraduationCap,
  Lock,
  Cpu,
  BarChart3,
  Filter,
  ShieldAlert
} from 'lucide-react';

const JANSATHI_SCREENSHOTS = [
  {
    id: 'cmd-center',
    category: 'Officer Operations',
    title: 'Municipal Command Center & Geographic Filter',
    file: '/projects/jansathi/screenshot_01_command_center.png',
    description:
      'The administrative command console for municipal officials (featuring Officer Raghavendra). Includes geographic drill-down filtering across State, District, City, Sector, and Ward, coupled with real-time incident counters (Total, Pending Dispatch, In Progress, Resolved) and system health telemetry.',
  },
  {
    id: 'gis-heatmap',
    category: 'GIS & Mapping',
    title: 'Interactive Leaflet GIS Heatmap & AI Dispatch Planner',
    file: '/projects/jansathi/screenshot_02_gis_heatmap.png',
    description:
      'Spatial mapping overlay using Leaflet.js mapping coordinates of active citizen complaints across city bounds. Synchronized with the Incident Triage Agent and Recommended Action Planner (e.g. recommending dispatch focus on Ward 17 to merge duplicate complaints and save estimated work hours).',
  },
  {
    id: 'incident-queue',
    category: 'Officer Operations',
    title: 'Real-Time Incident Triage & Severity Queue',
    file: '/projects/jansathi/screenshot_04_incident_queue.png',
    description:
      'Live triage table indexing all reported civic emergencies with automated priority scores (up to 99/100), uploaded proof photos, citizen reporter credentials, assigned municipal divisions (Roads & Safety, Sanitation), and instant status toggling.',
  },
  {
    id: 'agents-hub',
    category: 'AI Agents Hub',
    title: 'Autonomous Multi-Agent Coordination Dashboard',
    file: '/projects/jansathi/screenshot_05_autonomous_agents.png',
    description:
      'Dedicated operations hub orchestrating 10 specialized background municipal agents: Duplicate Classifier, Resource Planner Agent, Predictive Risk Analyzer, Priority Queue Escalator, Citizen Sentiment & Spam Filter, and Executive PDF Generator.',
  },
  {
    id: 'ai-insights',
    category: 'AI Intelligence',
    title: 'City Operations AI Executive Intelligence Briefing',
    file: '/projects/jansathi/screenshot_08_ai_insights.png',
    description:
      'Natural-language operational briefing compiled in real time by Gemini AI. Evaluates overall resolution velocity, pinpoints unassigned department bottlenecks, synthesizes regional hazard risks, and formulates prioritized top-3 action directives for municipal directors.',
  },
  {
    id: 'pdf-generator',
    category: 'Automation & Reports',
    title: 'Executive PDF Report Generation Suite',
    file: '/projects/jansathi/screenshot_09_executive_reports.png',
    description:
      'Automated export console capable of generating 9 distinct municipal reports on demand: Daily City Operations, Critical Incident Briefs, Department Performance, Ward Zone Reports, Predictive Risk Forecasts, AI Executive Briefs, Budget Cost Analyses, Resource Utilization, and Smart City Health Indexes.',
  },
  {
    id: 'portal-login',
    category: 'Citizen & Officer Auth',
    title: 'Dual-Role Identity Portal Authentication',
    file: '/projects/jansathi/screenshot_10_portal_login.png',
    description:
      'Secure identity gateway implementing Role-Based Access Control (RBAC) powered by Firebase Auth, cleanly bifurcating Citizen Volunteer accounts from Government Officer administrative credentials.',
  },
  {
    id: 'neighborhood-feed',
    category: 'Citizen Portal',
    title: 'Community Neighborhood Feed & Live Submissions',
    file: '/projects/jansathi/screenshot_11_neighborhood_feed.png',
    description:
      'Public civic feed allowing citizens to inspect nearby infrastructure complaints with photographic evidence (e.g. water pipeline ruptures), upvote issues, monitor municipal response status, and compete on the weekly community XP leaderboard.',
  },
  {
    id: 'report-issue',
    category: 'Citizen Portal',
    title: 'Issue Reporting Form with Live Gemini AI Preview',
    file: '/projects/jansathi/screenshot_13_report_issue.png',
    description:
      'Friction-free single-page reporting workflow allowing citizens to input details, drag an interactive GPS location pin, upload photo proof, and observe instant Gemini AI triage estimating category, urgency score, and earned XP reward.',
  },
  {
    id: 'citizen-profile',
    category: 'Gamification & Trust',
    title: 'Citizen Guild Profile, Trust Score & XP Rewards',
    file: '/projects/jansathi/screenshot_12_citizen_profile.png',
    description:
      'Gamified profile dashboard tracking citizen reputation level, guild XP milestones, account trust score (98/100 Healthy), verified civic missions completed, and community badges.',
  },
  {
    id: 'citizen-verification',
    category: 'Verification Desk',
    title: 'Municipal Citizen Document Verification Queue',
    file: '/projects/jansathi/screenshot_03_citizen_verification.png',
    description:
      'Administrative desk allowing municipal staff to review citizen identity proofs (Aadhar card, PAN card) with secure status review, approval actions, and verified badge granting.',
  },
  {
    id: 'ai-assistant',
    category: 'Citizen AI',
    title: 'JanSathi AI 24/7 Conversational Civic Assistant',
    file: '/projects/jansathi/screenshot_14_ai_assistant.png',
    description:
      'Floating conversational assistant powered by Google Gemini API providing step-by-step guidance to citizens on filing reports, checking ticket status, and understanding local civic procedures.',
  },
  {
    id: 'analytics-dept',
    category: 'Analytics',
    title: 'Departmental Participation & Engagement Telemetry',
    file: '/projects/jansathi/screenshot_06_analytics_departments.png',
    description:
      'Cross-departmental performance metrics tracking citizen post volume, public comments, and engagement indicators across Roads & Bridges, Water, Electricity, Sanitation, Health, and Police departments.',
  },
  {
    id: 'ward-stats',
    category: 'Analytics',
    title: 'Regional Ward Statistics & Critical Overload Tracking',
    file: '/projects/jansathi/screenshot_07_ward_statistics.png',
    description:
      'Granular regional monitoring detailing report distribution, pending action loads, active tickets, and critical overload warnings across talukas and municipal wards.',
  },
];

const HINDIMATE_SCREENSHOTS = [
  {
    id: 'hindimate-dashboard',
    category: 'Learning Dashboard',
    title: 'Student Learning Dashboard & Daily Streak Tracker',
    file: '/projects/hindimate/screenshot_01_dashboard.png',
    description:
      'Personalized student dashboard tracking active 7-day streaks, 450 total earned XP, mastered vocabulary count, and daily Hindi learning goals. Features the dynamic "Word of the Day" (नमस्ते - Hello / Greetings) and instant prompt launcher to VaaniAI.'
  },
  {
    id: 'hindimate-curriculum',
    category: 'Curriculum & Modules',
    title: 'Modular Structured Curriculum & Interactive Quiz Nodes',
    file: '/projects/hindimate/screenshot_02_curriculum.png',
    description:
      'Comprehensive 5-tier modular curriculum covering Devanagari Script (11 modules), Essential Greetings (3 modules), Numbers & Time (2 modules), Vocabulary Builder (2 modules), and Grammar Mastery (2 modules). Each module pairs lessons with interactive XP quizzes.'
  },
  {
    id: 'hindimate-study-material',
    category: 'Study Resources & Audio',
    title: '26-Chapter MPPSC Hindi Textbook & Audio Reader',
    file: '/projects/hindimate/screenshot_03_study_material.png',
    description:
      'Digital Hindi literature repository featuring 26 full chapters from Drishti IAS DLP. Equipped with browser-native Web Speech API audio narration, real-time font scaling, and contextual "Ask Gemini" query triggers.'
  },
  {
    id: 'hindimate-vaaniai-chat',
    category: 'VaaniAI Coach',
    title: 'VaaniAI Trilingual Conversational Workspace',
    file: '/projects/hindimate/screenshot_04_vaaniai_chat.png',
    description:
      'Intelligent personal Hindi coach powered by Google Gemini API tiered models. Provides real-time pedagogical responses across Devanagari Hindi, Romanized Hinglish, and English with audio pronunciation playback and grammatical breakdowns.'
  }
];

export default function ProjectDetailPage({ project, onBack }) {
  const [activePdfTab, setActivePdfTab] = useState('report');
  const [selectedImage, setSelectedImage] = useState(null);
  const [screenshotFilter, setScreenshotFilter] = useState('All');
  const [activeTnpBlueprint, setActiveTnpBlueprint] = useState('architecture');

  // Scroll to top upon opening page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setScreenshotFilter('All');
    setActiveTnpBlueprint('architecture');
  }, [project]);

  if (!project) return null;

  const isJanSathi = project.id === 'jaansathi' || project.id === 'jansathi' || project.title.toLowerCase().includes('jansathi');
  const isHindiMate = project.id === 'hindi-mate' || project.title.toLowerCase().includes('hindimate');
  const isTnp = project.id === 'tnp-platform' || project.id === 'tnp' || project.title.toLowerCase().includes('tnp');

  const activeScreenshots = isJanSathi ? JANSATHI_SCREENSHOTS : isHindiMate ? HINDIMATE_SCREENSHOTS : [];
  const screenshotCategories = isJanSathi
    ? ['All', 'Officer Operations', 'GIS & Mapping', 'AI Agents Hub', 'Citizen Portal', 'Analytics']
    : isHindiMate
    ? ['All', 'Learning Dashboard', 'Curriculum & Modules', 'Study Resources & Audio', 'VaaniAI Coach']
    : ['All'];

  const filteredScreenshots =
    screenshotFilter === 'All'
      ? activeScreenshots
      : activeScreenshots.filter((s) => s.category.includes(screenshotFilter));

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
      
      {/* Top Breadcrumb & Quick Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl ios-glass border border-white/10 shadow-lg">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to List of Projects</span>
        </button>

        <div className="flex items-center gap-2.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full ios-glass border border-white/10 hover:bg-white/10 text-white text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0A84FF] text-white text-xs font-semibold hover:bg-[#0071E3] transition-all shadow-md shadow-blue-500/25"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Project Header Banner */}
      <div className="p-6 sm:p-10 rounded-3xl ios-glass border border-white/10 relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
            <span>{project.status || 'Deployed & Live'}</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#86868B]">
            • Conceived & Engineered by Raghavendra Waggar
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3">
          {isJanSathi ? 'JanSathi' : project.title}
        </h1>

        <p className="text-lg sm:text-2xl text-[#A1A1A6] font-medium max-w-4xl leading-relaxed mb-6">
          {project.subtitle}
        </p>

        {/* Tech Stack Pills with Brand Icons */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
          <span className="text-xs font-mono text-[#86868B] mr-1">Active Toolchain:</span>
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-black/40 text-[#F5F5F7] border border-white/10"
            >
              <TechIcon name={t} className="w-3.5 h-3.5 shrink-0" />
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 1. ABOUT SECTION — USER PROVIDED CONTENT */}
      {isJanSathi ? (
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                About JanSathi
              </h2>
            </div>
            <span className="text-xs font-mono text-[#86868B] px-3 py-1 rounded-full ios-pill">
              Civic Platform Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Subsection 1: Empowering Citizens */}
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Users className="w-5 h-5 text-[#0A84FF]" />
                <h3>Empowering Citizens</h3>
              </div>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                JanSathi gives citizens a simple way to report <strong className="text-white">civic issues and constructive discrepancies</strong> in their surroundings.
              </p>
              <div className="text-xs text-[#86868B] space-y-1.5 pt-1">
                <p className="text-white font-medium">A citizen can raise a complaint by creating a structured report containing:</p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[#A1A1A6]">
                  <li>A short description of the issue</li>
                  <li>A photograph as evidence</li>
                  <li>The location where the issue was observed</li>
                  <li>Relevant details needed to understand the problem</li>
                </ul>
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed pt-2 border-t border-white/5">
                Citizens can also choose to share reported issues on the <strong className="text-white">community home feed</strong>, allowing other citizens to discuss them, comment, and vote. This creates a community-driven layer where public engagement can help indicate how significant or widespread an issue is.
              </p>
            </div>

            {/* Subsection 2: AI-Powered Issue Assessment */}
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Sparkles className="w-5 h-5 text-[#BF5AF2]" />
                <h3>AI-Powered Issue Assessment</h3>
              </div>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                JanSathi combines <strong className="text-white">community engagement with AI-based assessment</strong> to determine the potential severity and urgency of reported problems.
              </p>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                The AI engine analyses reported issues and assigns appropriate <strong className="text-white">severity and urgency tags</strong>, helping distinguish routine problems from issues that may require immediate attention.
              </p>
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-xs text-[#A1A1A6] font-mono">
                Community activity such as votes, comments, and engagement can provide an additional signal about the importance of an issue.
              </div>
            </div>

            {/* Subsection 3: Connecting Citizens With Authorities */}
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Building2 className="w-5 h-5 text-[#30D158]" />
                <h3>Connecting Citizens With Authorities</h3>
              </div>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                Once an issue has been identified and assessed, it can be forwarded to the <strong className="text-white">appropriate officer or authority</strong> responsible for that area or type of problem.
              </p>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Instead of simply receiving a complaint, the officer gets a structured view of the issue along with relevant information that can help them understand and prioritize it.
              </p>
            </div>

            {/* Subsection 4: Intelligent Officer Dashboard */}
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-[#FF9F0A]" />
                <h3>Intelligent Officer Dashboard</h3>
              </div>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                JanSathi provides officers with tools to manage and prioritize civic issues more effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E5E5EA]">
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                  <span>Severity-based prioritization</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                  <span>Zone-wise issue sorting</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                  <span>Resource planning</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                  <span>Issue tracking and management</span>
                </div>
              </div>
              <p className="text-xs text-[#86868B] leading-relaxed pt-1">
                The goal is to help officers focus their attention and resources where they are needed most.
              </p>
            </div>

            {/* Subsection 5: Predictive Problem Detection */}
            <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Compass className="w-5 h-5 text-[#FF453A]" />
                <h3>Predictive Problem Detection</h3>
              </div>
              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                JanSathi also explores a more proactive approach to civic management. By analysing <strong className="text-white">historical problem patterns and previously reported issues</strong>, the system can help identify areas or types of problems that may require attention before they become significant recurring issues.
              </p>
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-xs text-[#E5E5EA]">
                This shifts the platform from simply <strong className="text-[#FF9F0A]">reacting to complaints</strong> toward helping authorities <strong className="text-[#30D158]">anticipate and prepare for potential problems</strong>.
              </div>
            </div>

            {/* Subsection 6: The Complete Loop */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1824] to-[#12141a] border border-[#0A84FF]/30 space-y-4 md:col-span-2 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  The Complete Loop
                </h3>
                <span className="text-[11px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-3 py-1 rounded-full border border-[#0A84FF]/20">
                  Continuous Feedback Cycle
                </span>
              </div>

              <p className="text-sm text-[#A1A1A6] leading-relaxed">
                At its core, JanSathi creates a continuous civic feedback loop:
              </p>

              {/* Loop Flow Visualizer */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#0A84FF] block">STEP 1</span>
                  <div className="text-xs font-semibold text-white mt-1">Citizen reports a problem</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#0A84FF] block">STEP 2</span>
                  <div className="text-xs font-semibold text-white mt-1">Community validates & engages</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#0A84FF] block">STEP 3</span>
                  <div className="text-xs font-semibold text-white mt-1">AI assesses severity</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#0A84FF] block">STEP 4</span>
                  <div className="text-xs font-semibold text-white mt-1">Issue reaches authority</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#0A84FF] block">STEP 5</span>
                  <div className="text-xs font-semibold text-white mt-1">Officer prioritizes & acts</div>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[10px] font-mono text-[#30D158] block">STEP 6</span>
                  <div className="text-xs font-semibold text-[#30D158] mt-1">Data insights for future</div>
                </div>
              </div>

              <p className="text-xs text-[#86868B] leading-relaxed pt-2">
                The objective is to make civic issue reporting more accessible for citizens while giving authorities better information and intelligent tools to respond effectively.
              </p>
            </div>
          </div>
        </section>
      ) : isHindiMate ? (
        <>
          {/* 1. ABOUT SECTION — REFINED & HUMANIZED */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#FF9F0A] uppercase tracking-wider block mb-1">
                  IBM SkillsBuild Internship Program • Capstone Project
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  About HindiMate
                </h2>
              </div>
              <span className="text-xs font-mono text-[#86868B] px-3 py-1 rounded-full ios-pill">
                Interactive Hindi Learning Platform
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Overview / Introduction Card */}
              <div className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4 md:col-span-2 shadow-xl">
                <div className="flex items-center gap-2.5 text-[#FF9F0A]">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider">Platform Philosophy</span>
                </div>
                <p className="text-base sm:text-lg text-[#F5F5F7] leading-relaxed font-normal">
                  <strong className="text-white font-semibold">HindiMate</strong> is a web-based Hindi language learning platform designed to provide a structured, personalized, and deeply engaging learning experience. Built as a collaborative capstone under the <strong className="text-white font-semibold">IBM SkillsBuild Internship Program</strong>, the platform bridges the gap between static textbook memorization and natural language acquisition.
                </p>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Rather than treating Hindi as isolated lists of words, HindiMate brings together <strong className="text-white">interactive modular lessons</strong>, <strong className="text-white">gamified assessments</strong>, <strong className="text-white">AI-assisted tutoring</strong>, <strong className="text-white">browser-native voice synthesis</strong>, and <strong className="text-white">OCR textbook ingestion</strong> into a single cohesive, cloud-deployed application.
                </p>
              </div>

              {/* Subsection 1: Modular Course Curriculum */}
              <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Layers className="w-5 h-5 text-[#0A84FF]" />
                  <h3>Modular Course Curriculum</h3>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  The core learning experience is organized around progressive modular courses, guiding learners from absolute fundamentals through practical fluency:
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  {[
                    { name: 'Devanagari Script', count: '11 Modules', desc: 'Vowels (स्वर), Consonants (व्यंजन), and Matras with interactive stroke visualization.' },
                    { name: 'Essential Greetings & Conversations', count: '3 Modules', desc: 'Practical phrases, polite registers, and everyday interactions.' },
                    { name: 'Numbers, Time & Currency', count: '2 Modules', desc: 'Hindi numerical systems, reading clock times, and Indian currency math.' },
                    { name: 'Vocabulary Building', count: '2 Modules', desc: 'Thematic word banks for family relationships, food, travel, and nature.' },
                    { name: 'Grammar Mastery', count: '2 Modules', desc: 'Sentence structures, gender concord, verb tenses, and case markers.' }
                  ].map((mod, i) => (
                    <div key={i} className="p-2.5 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{mod.name}</span>
                          <span className="text-[10px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-0.5 rounded-full">{mod.count}</span>
                        </div>
                        <p className="text-[#86868B] text-[11px] mt-0.5">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#86868B] pt-1">
                  Each module contains bite-sized lessons followed by quizzes, rewarding learners with XP as they complete activities.
                </p>
              </div>

              {/* Subsection 2: Gamification & Learner Telemetry */}
              <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Award className="w-5 h-5 text-[#FF9F0A]" />
                  <h3>Gamification & Learner Telemetry</h3>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Consistent practice is essential for script and tonal acquisition. HindiMate keeps learners motivated through transparent metrics and daily feedback loops:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#E5E5EA]">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-[#FF9F0A]">DAILY STREAKS</div>
                    <div className="text-white font-semibold text-sm">7-Day Fire Streak</div>
                    <p className="text-[11px] text-[#86868B]">Encourages habit-forming daily practice sessions.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-[#30D158]">XP ACCUMULATION</div>
                    <div className="text-white font-semibold text-sm">Experience Points (XP)</div>
                    <p className="text-[11px] text-[#86868B]">Earned per completed lesson, quiz, and speech test.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-[#0A84FF]">VOCABULARY MASTERY</div>
                    <div className="text-white font-semibold text-sm">Mastered Words Counter</div>
                    <p className="text-[11px] text-[#86868B]">Tracks active retained vocabulary over time.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-[#BF5AF2]">DAILY PROMPTS</div>
                    <div className="text-white font-semibold text-sm">Word of the Day</div>
                    <p className="text-[11px] text-[#86868B]">Curated daily term with pronunciation and usage examples.</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-xs text-[#86868B]">
                  Quick sentence practice widgets allow students to drill spontaneous translation in seconds directly from their home dashboard.
                </div>
              </div>

              {/* Subsection 3: VaaniAI — Intelligent Personal Coach */}
              <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Sparkles className="w-5 h-5 text-[#BF5AF2]" />
                  <h3>VaaniAI — Personal Hindi Coach</h3>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  A key pillar of the platform is <strong className="text-white">VaaniAI</strong>, an interactive AI assistant acting as a personal Hindi coach and conversation partner.
                </p>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                  <div className="text-white font-semibold flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-[#BF5AF2]" />
                    <span>Tiered Google Gemini Architecture</span>
                  </div>
                  <p className="text-[#A1A1A6] leading-relaxed">
                    Configured with cascading failover across <strong className="text-white">Gemini 1.5 Flash</strong>, <strong className="text-white">Gemini 2.0</strong>, and <strong className="text-white">Gemini 2.5 Flash</strong> to guarantee low latency and uninterrupted uptime.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-[#BF5AF2]/10 text-[#BF5AF2] text-[10px] font-mono">Hindi (Devanagari)</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#BF5AF2]/10 text-[#BF5AF2] text-[10px] font-mono">Romanized Hinglish</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#BF5AF2]/10 text-[#BF5AF2] text-[10px] font-mono">English Explanations</span>
                  </div>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  Integrated with the <strong className="text-white">Web Speech API</strong> for native browser speech-to-text (STT) and text-to-speech (TTS), allowing learners to speak their questions aloud and listen to correct pronunciation without costly 3rd-party voice lock-in.
                </p>
              </div>

              {/* Subsection 4: OCR Grammar Workflow & Study Library */}
              <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <FileText className="w-5 h-5 text-[#30D158]" />
                  <h3>OCR Grammar Ingestion & 26-Chapter Library</h3>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  To bypass the bottleneck of manually re-typing physical educational materials, HindiMate introduces an <strong className="text-white">OCR-based grammar learning pipeline</strong>.
                </p>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                  <p className="text-[#A1A1A6] leading-relaxed">
                    Existing grammar books and standardized exam curriculum available in PDF format (such as the <strong className="text-white">26 chapters from Drishti IAS DLP</strong>) are extracted using OCR and converted into responsive digital lessons.
                  </p>
                  <div className="flex items-center gap-2 text-[#30D158] font-mono text-[11px] pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Textbook PDF &rarr; OCR Extraction &rarr; Interactive Lessons & TTS Audio</span>
                  </div>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed">
                  Learners can read chapters directly on the platform, adjust typography on the fly, trigger audio read-alouds, or query VaaniAI to explain difficult Sanskritized Hindi phrases.
                </p>
              </div>
            </div>
          </section>

          {/* 1B. CONCISE TECH STACK FRAMING */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                  System Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Tech Stack Architecture
                </h2>
              </div>
              <span className="text-xs font-mono text-[#30D158] bg-[#30D158]/10 px-3 py-1 rounded-full border border-[#30D158]/20">
                4 Distinct Layers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Layer 1: Frontend */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-0.5 rounded-full">LAYER 01</span>
                    <Code className="w-4 h-4 text-[#0A84FF]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Frontend & UI</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Modern Single Page Application built for instant interactivity, smooth animations, and responsive layout.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>React</span><span className="text-[#86868B]">19 SPA</span></div>
                  <div className="flex items-center justify-between"><span>Vite</span><span className="text-[#86868B]">6.4</span></div>
                  <div className="flex items-center justify-between"><span>Tailwind CSS</span><span className="text-[#86868B]">3.4</span></div>
                  <div className="flex items-center justify-between"><span>Framer Motion</span><span className="text-[#86868B]">11</span></div>
                  <div className="flex items-center justify-between"><span>React Router</span><span className="text-[#86868B]">DOM 7</span></div>
                </div>
              </div>

              {/* Layer 2: AI & Voice */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#BF5AF2] bg-[#BF5AF2]/10 px-2 py-0.5 rounded-full">LAYER 02</span>
                    <Sparkles className="w-4 h-4 text-[#BF5AF2]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">AI & Voice Engine</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Tiered LLM cognitive engine combined with browser-native speech synthesis for zero-cost audio streaming.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>Google Gemini API</span><span className="text-[#86868B]">Flash 1.5</span></div>
                  <div className="flex items-center justify-between"><span>Failover Tier</span><span className="text-[#86868B]">Gemini 2.0 / 2.5</span></div>
                  <div className="flex items-center justify-between"><span>Web Speech API</span><span className="text-[#86868B]">Browser STT</span></div>
                  <div className="flex items-center justify-between"><span>Speech Synthesis</span><span className="text-[#86868B]">Native TTS</span></div>
                  <div className="flex items-center justify-between"><span>Vendor Lock-in</span><span className="text-[#30D158]">Zero Cost</span></div>
                </div>
              </div>

              {/* Layer 3: Infrastructure */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#FF9F0A] bg-[#FF9F0A]/10 px-2 py-0.5 rounded-full">LAYER 03</span>
                    <Server className="w-4 h-4 text-[#FF9F0A]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Cloud Infrastructure</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Lightweight containerized microservice deployed live to Amazon Web Services in the Mumbai region.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>Container</span><span className="text-[#86868B]">Docker</span></div>
                  <div className="flex items-center justify-between"><span>Web Server</span><span className="text-[#86868B]">Nginx Alpine</span></div>
                  <div className="flex items-center justify-between"><span>Image Footprint</span><span className="text-[#30D158]">26.3 MB</span></div>
                  <div className="flex items-center justify-between"><span>Cloud Host</span><span className="text-[#86868B]">AWS EC2</span></div>
                  <div className="flex items-center justify-between"><span>AWS Region</span><span className="text-[#86868B]">ap-south-1</span></div>
                </div>
              </div>

              {/* Layer 4: CI/CD & DevOps */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#30D158] bg-[#30D158]/10 px-2 py-0.5 rounded-full">LAYER 04</span>
                    <GitBranch className="w-4 h-4 text-[#30D158]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">CI/CD & DevOps</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Continuous delivery pipeline building, packaging, and deploying releases automatically upon main merge.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>CI/CD Runner</span><span className="text-[#86868B]">GitHub Actions</span></div>
                  <div className="flex items-center justify-between"><span>Registry</span><span className="text-[#86868B]">Docker Hub</span></div>
                  <div className="flex items-center justify-between"><span>VCS</span><span className="text-[#86868B]">Git & GitHub</span></div>
                  <div className="flex items-center justify-between"><span>Deployment</span><span className="text-[#86868B]">EC2 Pull & Run</span></div>
                  <div className="flex items-center justify-between"><span>Pipeline Status</span><span className="text-[#30D158]">Automated</span></div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isTnp ? (
        <>
          {/* 1. ABOUT SECTION — THE 3-MODEL ENGINE SYSTEM & LIFECYCLE */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                  Institutional Placement & Workflow Automation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  About TNP / TPC Platform
                </h2>
              </div>
              <span className="text-xs font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-3 py-1 rounded-full border border-[#0A84FF]/20">
                The 3-Model Engine Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Overview / Introduction Card */}
              <div className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4 md:col-span-2 shadow-xl">
                <div className="flex items-center gap-2.5 text-[#0A84FF]">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider">Placement Lifecycle Automation</span>
                </div>
                <p className="text-base sm:text-lg text-[#F5F5F7] leading-relaxed font-normal">
                  <strong className="text-white font-semibold">TNP</strong> is a workflow-driven Training and Placement Management Platform designed to centralize and automate the complete institutional placement lifecycle. It unifies placement drives, student eligibility filtering, applications, resume banks, job offers, training programs, broadcast notifications, and accreditation reporting into a single deterministic system.
                </p>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  The platform is built directly around the actual operational workflow followed by a university Training and Placement Cell (T&amp;PC). TPOs can configure placement drives, define dynamic multi-criteria eligibility cutoffs, monitor student participation, strictly enforce institutional offer policies, coordinate specialized training programs, and generate NIRF-compliant audit reports. Students receive a dedicated workspace to view eligible opportunities, submit verified resumes, monitor their application status across multi-stage rounds, and receive real-time notifications.
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-[#0A84FF]/20 flex items-start gap-3 text-xs text-[#A1A1A6]">
                  <CheckCircle2 className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Direct Academic Record Integration:</strong> Academic transcripts (CGPA, active/historical backlogs) and attendance logs are seamlessly linked to student accounts, enabling instant, tamper-proof, and fully automated eligibility verification without manual spreadsheet reconciliation.
                  </span>
                </div>
              </div>

              {/* Subsection 1: The 4 Role-Based Workspaces */}
              <div className="p-6 rounded-3xl ios-glass border border-white/10 space-y-3 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <Users className="w-5 h-5 text-[#0A84FF]" />
                    <h3>4 Role-Based Stakeholder Workspaces (RBAC)</h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#86868B]">FastAPI JWT Guarded</span>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  TNP provides role-based interfaces tailored to each participant in the placement ecosystem, ensuring isolated privileges and specialized workflows:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs">
                      <ShieldCheck className="w-4 h-4 text-[#0A84FF] shrink-0" />
                      <span>TPO Officers</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Drive creation, multi-criteria cutoff rule builder, student roster shortlisting, offer policy monitoring, and NIRF export.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs">
                      <GraduationCap className="w-4 h-4 text-[#30D158] shrink-0" />
                      <span>Students</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Verified resume management, real-time eligible drive feed, 1-click applications, multi-round status tracker, and offer acceptance.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs">
                      <Building2 className="w-4 h-4 text-[#FF9F0A] shrink-0" />
                      <span>Corporate Recruiters</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Job description (JD) publishing, semantic candidate talent discovery, assessment result uploads, and digital offer rollout.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs">
                      <BookOpen className="w-4 h-4 text-[#BF5AF2] shrink-0" />
                      <span>Faculty Coordinators</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Departmental student readiness oversight, attendance verification, training program coordination, and performance sign-offs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subsection 2: The Deterministic 3-Model Engine System */}
              <div className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4 md:col-span-2 shadow-xl bg-gradient-to-br from-[#0c1322] to-[#12141c]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5 text-white font-bold text-lg">
                    <Cpu className="w-5 h-5 text-[#0A84FF]" />
                    <h3>The Deterministic 3-Model Engine System</h3>
                  </div>
                  <span className="text-xs font-mono text-[#30D158] bg-[#30D158]/10 px-3 py-1 rounded-full border border-[#30D158]/20">
                    High-Reliability Core Architecture
                  </span>
                </div>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Instead of relying on opaque, unverified automation, TNP is architected around three high-speed deterministic engines that evaluate rules mathematically against verified institutional data:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  {/* Engine 1 */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-0.5 rounded-full">ENGINE 01</span>
                        <Filter className="w-4 h-4 text-[#0A84FF]" />
                      </div>
                      <h4 className="text-sm font-bold text-white">Eligibility Engine</h4>
                      <p className="text-xs text-[#A1A1A6] leading-relaxed mt-1">
                        Dynamic multi-criteria cutoff evaluator executing in milliseconds. Validates candidates against CGPA cutoffs, active/historical backlogs, approved branches/departments, graduation batch, and institutional attendance thresholds.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-[#86868B] space-y-1">
                      <div className="text-white font-semibold">Rule Evaluation:</div>
                      <div>• CGPA ≥ threshold (e.g. 7.50)</div>
                      <div>• Active Backlogs == 0</div>
                      <div>• Verified Attendance ≥ 75%</div>
                    </div>
                  </div>

                  {/* Engine 2 */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#FF9F0A] bg-[#FF9F0A]/10 px-2 py-0.5 rounded-full">ENGINE 02</span>
                        <ShieldAlert className="w-4 h-4 text-[#FF9F0A]" />
                      </div>
                      <h4 className="text-sm font-bold text-white">Institutional Policy Engine</h4>
                      <p className="text-xs text-[#A1A1A6] leading-relaxed mt-1">
                        Automated institutional rule validator eliminating manual disputes. Strictly enforces the <strong className="text-white">One-Offer-One-Student</strong> policy, freezes standard rights post-placement, and manages Dream &amp; Super-Dream exceptions (e.g. CTC &ge; 2× current offer) to prevent offer hoarding.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-[#86868B] space-y-1">
                      <div className="text-white font-semibold">Policy Gates:</div>
                      <div>• Offer Hoarding Lock: ACTIVE</div>
                      <div>• Dream Offer: CTC &gt; 2× Base</div>
                      <div>• Student Dispute Rate: 0%</div>
                    </div>
                  </div>

                  {/* Engine 3 */}
                  <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#30D158] bg-[#30D158]/10 px-2 py-0.5 rounded-full">ENGINE 03</span>
                        <Layers className="w-4 h-4 text-[#30D158]" />
                      </div>
                      <h4 className="text-sm font-bold text-white">Placement Workflow Engine</h4>
                      <p className="text-xs text-[#A1A1A6] leading-relaxed mt-1">
                        Deterministic state machine orchestrating the complete placement drive lifecycle from inception to final offer sign-off with verifiable audit trails.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-[#86868B] space-y-1">
                      <div className="text-white font-semibold">5-Stage State Machine:</div>
                      <div>1. Announcement → 2. Registration</div>
                      <div>3. Online Tests → 4. Interviews</div>
                      <div>5. Rollout &amp; Student Acceptance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subsection 3: Smart Vector Semantic Search via PostgreSQL + pgvector */}
              <div className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4 md:col-span-2 shadow-xl bg-gradient-to-br from-[#0c1824] to-[#12141a]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5 text-[#38BDF8]">
                    <Search className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-white">
                      Smart Student-to-Job Matching via PostgreSQL + pgvector
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                    Vector Semantic Search
                  </span>
                </div>

                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Traditional university portals rely on brittle keyword lookups (e.g. matching exact string "Python"). TNP introduces high-dimensional <strong className="text-white">vector semantic search powered natively by PostgreSQL with the pgvector extension</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="text-white font-semibold text-xs flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                      <span>Profile &amp; Resume Vectorization</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      Student profiles, completed coursework, verified technical skills, and extracted resume summaries are converted into dense vector embeddings stored directly inside PostgreSQL using <code className="text-[#38BDF8]">pgvector</code> columns.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                    <div className="text-white font-semibold text-xs flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#30D158]" />
                      <span>Cosine Similarity Job Matching</span>
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      When recruiters post unstructured Job Descriptions (JDs), the system computes cosine similarity vector distance directly in SQL queries (<code className="text-[#30D158]">&lt;=&gt; cosine distance</code>), instantly ranking qualified students and alerting candidates to specific skill gaps.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/50 border border-[#38BDF8]/20 text-xs font-mono text-[#A1A1A6] flex items-center justify-between flex-wrap gap-2">
                  <span>SELECT student_id, 1 - (embedding &lt;=&gt; :jd_vector) AS match_score FROM student_embeddings ORDER BY match_score DESC;</span>
                  <span className="text-[#30D158] font-bold">~14ms Query Latency</span>
                </div>
              </div>
            </div>
          </section>

          {/* 1B. CONCISE TECH STACK FRAMING (4 LAYERS) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                  System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Tech Stack Architecture
                </h2>
              </div>
              <span className="text-xs font-mono text-[#30D158] bg-[#30D158]/10 px-3 py-1 rounded-full border border-[#30D158]/20">
                4 Tier Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Layer 1: Frontend & UI */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-2 py-0.5 rounded-full">LAYER 01</span>
                    <Code className="w-4 h-4 text-[#0A84FF]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Frontend &amp; UI</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Modern full-stack App Router client with responsive role-based views for TPOs, Students, Recruiters, and Faculty.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>Next.js</span><span className="text-[#86868B]">14 App Router</span></div>
                  <div className="flex items-center justify-between"><span>React</span><span className="text-[#86868B]">18 Core</span></div>
                  <div className="flex items-center justify-between"><span>Tailwind CSS</span><span className="text-[#86868B]">3.4</span></div>
                  <div className="flex items-center justify-between"><span>TypeScript</span><span className="text-[#86868B]">Strict Types</span></div>
                  <div className="flex items-center justify-between"><span>Role Dashboards</span><span className="text-[#30D158]">4 Portals</span></div>
                </div>
              </div>

              {/* Layer 2: API & Engines */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">LAYER 02</span>
                    <Server className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">API &amp; 3 Engines</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    High-performance Python ASGI backend hosting the deterministic 3-Engine pipeline, JWT auth, and rate limiting.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>FastAPI</span><span className="text-[#86868B]">ASGI Gateway</span></div>
                  <div className="flex items-center justify-between"><span>3-Engine Core</span><span className="text-[#86868B]">Deterministic</span></div>
                  <div className="flex items-center justify-between"><span>Auth &amp; RBAC</span><span className="text-[#86868B]">OAuth2 / JWT</span></div>
                  <div className="flex items-center justify-between"><span>Rate Limiting</span><span className="text-[#86868B]">SlowAPI</span></div>
                  <div className="flex items-center justify-between"><span>Data Contract</span><span className="text-[#30D158]">Pydantic v2</span></div>
                </div>
              </div>

              {/* Layer 3: Database & Vector Search */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded-full">LAYER 03</span>
                    <Database className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Database &amp; Vector</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Enterprise relational schema combined with vector embeddings for semantic job matching and ACID transactions.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>PostgreSQL</span><span className="text-[#86868B]">15 Relational</span></div>
                  <div className="flex items-center justify-between"><span>pgvector</span><span className="text-[#38BDF8]">Cosine Sim</span></div>
                  <div className="flex items-center justify-between"><span>ORM Layer</span><span className="text-[#86868B]">SQLAlchemy 2</span></div>
                  <div className="flex items-center justify-between"><span>Migrations</span><span className="text-[#86868B]">Alembic</span></div>
                  <div className="flex items-center justify-between"><span>File Storage</span><span className="text-[#30D158]">S3 / Local</span></div>
                </div>
              </div>

              {/* Layer 4: Async Processing */}
              <div className="p-5 rounded-3xl ios-glass border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#FF9F0A] bg-[#FF9F0A]/10 px-2 py-0.5 rounded-full">LAYER 04</span>
                    <Zap className="w-4 h-4 text-[#FF9F0A]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">Async &amp; Queue</h3>
                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    Distributed background worker pipeline decoupling heavy resume parsing and email notifications from API requests.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs font-mono text-[#F5F5F7]">
                  <div className="flex items-center justify-between"><span>Redis</span><span className="text-[#86868B]">Broker &amp; Cache</span></div>
                  <div className="flex items-center justify-between"><span>Celery</span><span className="text-[#86868B]">Worker Pool</span></div>
                  <div className="flex items-center justify-between"><span>Embedding Jobs</span><span className="text-[#86868B]">Async Celery</span></div>
                  <div className="flex items-center justify-between"><span>Email Alerts</span><span className="text-[#86868B]">Background Queue</span></div>
                  <div className="flex items-center justify-between"><span>System Uptime</span><span className="text-[#30D158]">Resilient</span></div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Fallback About for other projects */
        <section className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">About {project.title}</h2>
          <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed">
            {project.description}
          </p>
        </section>
      )}

      {/* 2. MY ROLE & CONTRIBUTION */}
      <section className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              Engineering Contribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              My Role & What I Built
            </h2>
          </div>
          <span className="text-xs font-mono text-[#30D158] bg-[#30D158]/10 px-3 py-1 rounded-full border border-[#30D158]/20">
            {isJanSathi
              ? 'Sole Architect & Full-Stack Engineer'
              : isHindiMate
              ? 'System Architecture, Docker, AWS & Voice'
              : isTnp
              ? 'Lead Backend Architect & Schema Designer'
              : 'Lead Engineer'}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed">
          {isJanSathi
            ? 'JanSathi was conceived, architected, designed, and engineered entirely end-to-end by me (Raghavendra Waggar). Every single component across the frontend interfaces, backend services, GIS mapping systems, AI agent workflows, and database models was developed by me.'
            : isHindiMate
            ? 'HindiMate was developed collaboratively by a team of seven members under the IBM SkillsBuild Internship Program. My primary contribution was building the efficient workflow by creating the technical architecture connecting frontend and backend, containerizing the project into Docker, and deploying it on AWS EC2 with Nginx.'
            : isTnp
            ? 'As Lead Backend Architect, I spearheaded the core system engineering for the TNP Platform: designing the normalized PostgreSQL relational database schema, implementing the deterministic 3-Model Engine System (Eligibility Engine, Institutional Policy Engine, and Placement Workflow Engine), and integrating PostgreSQL + pgvector for semantic candidate matching.'
            : project.myRole}
        </p>

        {isTnp && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
              I designed the foundational backend architecture, established the normalized relational database schema in PostgreSQL with pgvector semantic search, engineered the deterministic 3-Engine pipeline, and built the FastAPI REST gateway with JWT role-based access control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {[
                {
                  title: 'PostgreSQL Relational Schema Design',
                  detail: 'Architected the normalized 9-entity database schema in PostgreSQL (Users, Students, Companies, Faculty, Drives, Applications, Offers, Programs, Enrollments) with strict foreign key cascading and atomic constraints.',
                },
                {
                  title: 'The Deterministic 3-Model Engine System',
                  detail: 'Engineered the three business logic evaluation engines in Python: multi-criteria eligibility filtering, institutional policy enforcement (One-Offer & Dream rules), and the drive lifecycle state machine.',
                },
                {
                  title: 'pgvector Semantic Search & Matcher',
                  detail: 'Integrated the PostgreSQL pgvector extension, embedding generation pipeline, and cosine similarity queries (<=> distance) to match candidate resumes and skill profiles against unstructured corporate Job Descriptions.',
                },
                {
                  title: 'FastAPI RBAC & JWT Middleware',
                  detail: 'Built the secure API gateway with OAuth2/JWT role-based access control, route guards distinguishing TPO, Recruiter, Faculty, and Student privileges, and SlowAPI rate limiting.',
                },
                {
                  title: 'Celery & Redis Background Pipeline',
                  detail: 'Configured Redis message broker and Celery asynchronous task workers for offloading bulk resume text extraction, embedding computation, and real-time student broadcast notifications.',
                },
                {
                  title: 'Academic Verification & Audit Trail',
                  detail: 'Implemented automated synchronization with institutional student databases (CGPA, backlogs, verified attendance), eliminating fraudulent applicant submissions and manual spreadsheet audit loops.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0c1824] to-[#12141a] border border-[#0A84FF]/25 space-y-3 mt-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0A84FF]" />
                The Engineering Takeaway
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E5EA] leading-relaxed">
                TNP exemplifies <strong className="text-white">high-integrity institutional workflow automation</strong>. Rather than building an unverified black box, the platform grounds institutional trust in a deterministic <strong className="text-white">3-Model Engine System</strong> backed by a robust PostgreSQL relational foundation. Integrating <strong className="text-white">pgvector semantic search</strong> elevates the system from standard administrative screening into an intelligent, AI-assisted recruitment powerhouse.
              </p>
            </div>
          </div>
        )}

        {isHindiMate && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
              I designed the technical architecture bridging React client modules with AI inference and OCR services, containerized the full stack into Docker with Nginx, and managed the production cloud deployment on AWS EC2.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {[
                {
                  title: 'Technical Architecture & Pipeline',
                  detail: 'Formulated the end-to-end technical architecture connecting the React frontend, Gemini API failover services, OCR workflows, and client state into an efficient workflow.',
                },
                {
                  title: 'Docker Containerization',
                  detail: 'Containerized the complete application stack with Docker multi-stage builds on Nginx Alpine, achieving an ultra-light 26.3MB production image footprint.',
                },
                {
                  title: 'AWS EC2 & Nginx Deployment',
                  detail: 'Configured and launched the production cloud instance on AWS EC2 (Mumbai region ap-south-1), configuring Nginx reverse proxy serving live at http://13.204.64.226.',
                },
                {
                  title: 'Web Speech API Voice Integration',
                  detail: 'Integrated browser-native speech synthesis and voice recognition, providing real-time Devanagari pronunciation with zero external vendor dependencies.',
                },
                {
                  title: 'OCR Grammar Ingestion Pipeline',
                  detail: 'Contributed to the Optical Character Recognition pipeline converting physical Hindi grammar PDF books into structured digital exercises.',
                },
                {
                  title: 'Team Git Workflow & Version Control',
                  detail: 'Coordinated repository branching, version control standards, and feature integration across all seven teammates on the project.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9F0A] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1c1812] to-[#121214] border border-[#FF9F0A]/25 space-y-3 mt-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF9F0A]" />
                The Engineering Takeaway
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E5EA] leading-relaxed">
                HindiMate united <strong className="text-white">language acquisition, modern frontend development, AI orchestration, OCR, text-to-speech, Docker containerization, and AWS cloud deployment</strong>. What made the experience particularly valuable was establishing the technical framework that connected every layer—turning independent code contributions into a reliable, containerized production web application.
              </p>
            </div>
          </div>
        )}

        {isJanSathi && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {[
              {
                title: 'Dual-Portal Architecture',
                detail: 'Engineered both the Citizen Volunteer Portal and the Municipal Officer Operations Console with role-based routing.',
              },
              {
                title: 'GIS Incident Heatmaps',
                detail: 'Integrated Leaflet.js interactive maps with custom severity color pins, coordinate capture, and spatial cluster detection.',
              },
              {
                title: '10-Agent AI Pipeline',
                detail: 'Configured Gemini API prompt contracts for automated triage, duplicate classification, and resource planning.',
              },
              {
                title: 'Firebase Auth & Firestore',
                detail: 'Designed real-time cloud data streams, security rules, and authenticated user role management.',
              },
              {
                title: 'Executive PDF Generator',
                detail: 'Built the print export engine generating standardized daily municipal operations briefs and city telemetry.',
              },
              {
                title: '24/7 Citizen AI Bot',
                detail: 'Implemented the conversational floating assistant with multilingual translation (EN, HI, MR, TA).',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 2B. TECHNICAL ARCHITECTURE BLUEPRINT (FOR HINDIMATE) */}
      {isHindiMate && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#FF9F0A] uppercase tracking-wider block mb-1">
                System Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Technical Architecture & Workflow
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                Architectural blueprint connecting frontend React SPA, State/Router layer, Gemini API tiered failover, and Docker/Nginx on AWS EC2.
              </p>
            </div>

            <button
              onClick={() =>
                setSelectedImage({
                  title: 'HindiMate Technical Architecture Blueprint',
                  category: 'System Blueprint',
                  file: '/projects/hindimate/architecture.png',
                  description:
                    'Detailed full-system architecture detailing the Presentation Layer, State & Routing Layer, Cognitive Engine with tiered Gemini API fallback, and the AWS EC2 / Docker containerized infrastructure.'
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Enlarge Blueprint</span>
            </button>
          </div>

          {/* Architecture Diagram Frame */}
          <div className="rounded-3xl ios-glass border border-white/15 overflow-hidden shadow-2xl bg-black/60">
            <div className="p-4 bg-black/50 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-[#F5F5F7]">HindiMate_Technical_Architecture.png</span>
              </div>
              <span className="text-[11px] font-mono text-[#FF9F0A] bg-[#FF9F0A]/10 px-2.5 py-0.5 rounded-full border border-[#FF9F0A]/20">
                System Specification
              </span>
            </div>

            <div
              onClick={() =>
                setSelectedImage({
                  title: 'HindiMate Technical Architecture Blueprint',
                  category: 'System Blueprint',
                  file: '/projects/hindimate/architecture.png',
                  description:
                    'Detailed full-system architecture detailing the Presentation Layer, State & Routing Layer, Cognitive Engine with tiered Gemini API fallback, and the AWS EC2 / Docker containerized infrastructure.'
                })
              }
              className="p-4 sm:p-6 cursor-pointer relative flex items-center justify-center bg-black/40 group/arch"
            >
              <img
                src="/projects/hindimate/architecture.png"
                alt="HindiMate Technical Architecture Blueprint"
                className="max-h-[520px] w-auto object-contain rounded-2xl border border-white/10 transition-transform group-hover/arch:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/arch:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to Inspect Full Blueprint</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2B. TECHNICAL ARCHITECTURE & ER SCHEMA BLUEPRINTS (FOR TNP) */}
      {isTnp && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                System Blueprints &amp; Relational Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Technical Architecture &amp; Database Schema
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                Official blueprints detailing the multi-tier API gateway, 3-Engine Core, pgvector semantic search, and the 9-entity relational database schema.
              </p>
            </div>

            {/* Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/10 shrink-0">
              <button
                onClick={() => setActiveTnpBlueprint('architecture')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTnpBlueprint === 'architecture'
                    ? 'bg-[#0A84FF] text-white shadow-md shadow-blue-500/25'
                    : 'text-[#86868B] hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </button>
              <button
                onClick={() => setActiveTnpBlueprint('er_schema')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTnpBlueprint === 'er_schema'
                    ? 'bg-[#0A84FF] text-white shadow-md shadow-blue-500/25'
                    : 'text-[#86868B] hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>ER Database Schema</span>
              </button>
            </div>
          </div>

          {/* Architecture / ER Schema Frame */}
          <div className="rounded-3xl ios-glass border border-white/15 overflow-hidden shadow-2xl bg-black/60">
            <div className="p-4 bg-black/50 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-[#F5F5F7]">
                  {activeTnpBlueprint === 'architecture' ? 'TNP_System_Architecture_Blueprint.svg' : 'TNP_Relational_Database_ER_Schema.svg'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#0A84FF] bg-[#0A84FF]/10 px-2.5 py-0.5 rounded-full border border-[#0A84FF]/20">
                  {activeTnpBlueprint === 'architecture' ? 'Multi-Tier Pipeline & Engines' : 'PostgreSQL Normalized Relational Model'}
                </span>
                <button
                  onClick={() =>
                    setSelectedImage(
                      activeTnpBlueprint === 'architecture'
                        ? {
                            title: 'TNP Full-Stack Technical Architecture Blueprint',
                            category: 'System Architecture Blueprint',
                            file: '/projects/tnp/architecture.svg',
                            description:
                              'Comprehensive multi-tier system architecture detailing Browser Client Tier, Next.js Frontend Tier, FastAPI API Gateway with JWT & Rate Limiting, the 3-Model Engine Core, Celery & Redis Async Tier, PostgreSQL + pgvector Data Tier, and AI Vector Embeddings.'
                          }
                        : {
                            title: 'TNP Relational Database Entity-Relationship (ER) Schema',
                            category: 'Database Schema Blueprint',
                            file: '/projects/tnp/er_schema.svg',
                            description:
                              'Normalized 9-entity relational schema in PostgreSQL detailing USERS, STUDENTS, COMPANIES, FACULTY, DRIVES, APPLICATIONS, OFFERS, TRAINING_PROGRAMS, and TRAINING_ENROLLMENTS with strict foreign keys and policy constraints.'
                          }
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                setSelectedImage(
                  activeTnpBlueprint === 'architecture'
                    ? {
                        title: 'TNP Full-Stack Technical Architecture Blueprint',
                        category: 'System Architecture Blueprint',
                        file: '/projects/tnp/architecture.svg',
                        description:
                          'Comprehensive multi-tier system architecture detailing Browser Client Tier, Next.js Frontend Tier, FastAPI API Gateway with JWT & Rate Limiting, the 3-Model Engine Core, Celery & Redis Async Tier, PostgreSQL + pgvector Data Tier, and AI Vector Embeddings.'
                      }
                    : {
                        title: 'TNP Relational Database Entity-Relationship (ER) Schema',
                        category: 'Database Schema Blueprint',
                        file: '/projects/tnp/er_schema.svg',
                        description:
                          'Normalized 9-entity relational schema in PostgreSQL detailing USERS, STUDENTS, COMPANIES, FACULTY, DRIVES, APPLICATIONS, OFFERS, TRAINING_PROGRAMS, and TRAINING_ENROLLMENTS with strict foreign keys and policy constraints.'
                      }
                )
              }
              className="p-4 sm:p-8 cursor-pointer relative flex items-center justify-center bg-black/40 group/arch min-h-[420px]"
            >
              <img
                src={activeTnpBlueprint === 'architecture' ? '/projects/tnp/architecture.svg' : '/projects/tnp/er_schema.svg'}
                alt={activeTnpBlueprint === 'architecture' ? 'TNP System Architecture Blueprint' : 'TNP ER Database Schema'}
                className="max-h-[580px] w-auto object-contain rounded-2xl transition-transform group-hover/arch:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/arch:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/20 shadow-xl">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to Inspect Full Blueprint in Lightbox</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2C. INTERACTIVE SYSTEM SIMULATION & MOCKUPS (FOR TNP) */}
      {isTnp && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                Interactive Telemetry &amp; Simulation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live Engine Mockups &amp; Visualizers
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                Simulated interactive modules demonstrating real-time student eligibility filtering, institutional policy enforcement, and NIRF accreditation telemetry.
              </p>
            </div>
            <span className="text-xs font-mono text-[#30D158] bg-[#30D158]/10 px-3 py-1 rounded-full border border-[#30D158]/20 shrink-0">
              Deterministic Logic
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mockup 1: Eligibility Engine */}
            <div className="space-y-3">
              <ProjectMockup type="tnp-filter" title="FastAPI Eligibility Screening Engine" />
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white">Dynamic Cutoff Rule Builder</div>
                <p className="text-[11px] text-[#86868B] leading-relaxed">
                  Evaluates multi-variable student criteria (CGPA cutoff &ge; 8.0, 0 active backlogs, department matching) in under 12ms to generate instant interview rosters.
                </p>
              </div>
            </div>

            {/* Mockup 2: Policy Engine */}
            <div className="space-y-3">
              <ProjectMockup type="tnp-policy" title="Institutional Policy Enforcement Pipeline" />
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white">Anti-Hoarding &amp; Dream Rule Gates</div>
                <p className="text-[11px] text-[#86868B] leading-relaxed">
                  Automates the One-Offer-One-Student rule. Freezes standard student applications upon offer acceptance while permitting Dream offer upgrades (&ge; 2× CTC).
                </p>
              </div>
            </div>

            {/* Mockup 3: NIRF Analytics */}
            <div className="space-y-3">
              <ProjectMockup type="tnp-stats" title="NIRF Accreditation Report Telemetry" />
              <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                <div className="text-xs font-bold text-white">Accreditation Telemetry Export</div>
                <p className="text-[11px] text-[#86868B] leading-relaxed">
                  Aggregates university placement metrics (89.4% placement rate, ₹28 LPA highest, ₹9.2 LPA average CTC) ready for official NIRF institutional submissions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. ACTUAL SCREENSHOTS GALLERY FROM USER PROVIDED DIRECTORY */}
      {(isJanSathi || isHindiMate) && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                Visual Inspection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Actual Project Screenshots ({activeScreenshots.length})
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                {isJanSathi
                  ? 'Captured directly from the deployed JanSathi application, showcasing officer telemetry, AI hubs, and citizen forms.'
                  : 'Captured directly from the deployed HindiMate application on AWS EC2, showcasing student dashboards, modular curriculum, 26-chapter library, and VaaniAI.'}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1 rounded-full bg-black/40 border border-white/10 text-xs">
              {screenshotCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setScreenshotFilter(cat)}
                  className={`px-3 py-1 rounded-full transition-all ${
                    screenshotFilter === cat
                      ? 'bg-white/20 text-white font-semibold shadow-sm'
                      : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScreenshots.map((item, index) => (
              <div
                key={item.id}
                className="p-5 rounded-3xl ios-glass border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-mono text-[#0A84FF] px-2.5 py-0.5 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#86868B]">
                      Fig {index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#0A84FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Screenshot Thumbnail Frame */}
                  <div
                    onClick={() => setSelectedImage(item)}
                    className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 relative cursor-pointer group/img mb-3"
                  >
                    <img
                      src={item.file}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-md border border-white/20">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge Screenshot</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#A1A1A6] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Live Deployment Callout Banner (For HindiMate) */}
          {isHindiMate && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c1810] to-[#121214] border border-[#FF9F0A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xl mt-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#30D158] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#30D158]">
                    Live on AWS EC2 Cloud
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Experience HindiMate Live</h3>
                <p className="text-xs sm:text-sm text-[#86868B]">
                  Containerized with Docker and served with Nginx at <strong className="text-white">http://13.204.64.226</strong>.
                </p>
              </div>

              <a
                href="http://13.204.64.226"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9F0A] hover:bg-[#FFB020] text-black font-semibold text-xs tracking-wide shadow-lg shadow-amber-500/25 shrink-0 transition-all hover:scale-105"
              >
                <span>Launch HindiMate Live</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </section>
      )}

      {/* 4. IN-BUILT PDF VIEWER SECTION (AS REQUESTED: VIEWED ON WEBSITE WITHOUT EXTERNAL FILE) */}
      {(isJanSathi || isHindiMate || isTnp) && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                Embedded Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                In-Built PDF Viewer
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                {isJanSathi
                  ? 'Read the official Project Build Report and AI-generated Municipal Operations PDF directly inside the website.'
                  : isHindiMate
                  ? 'Read the comprehensive 24-page HindiMate Capstone Project Report directly inside the website.'
                  : 'Read the comprehensive TNP Institutional Placement & Training Management Platform Proposal directly inside the website.'}
              </p>
            </div>

            {/* Tab Selector for Both PDFs (JanSathi only) */}
            {isJanSathi && (
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/10">
                <button
                  onClick={() => setActivePdfTab('report')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activePdfTab === 'report'
                      ? 'bg-[#0A84FF] text-white shadow-md shadow-blue-500/25'
                      : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Project Build Report (6 Pages)</span>
                </button>
                <button
                  onClick={() => setActivePdfTab('sample')}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activePdfTab === 'sample'
                      ? 'bg-[#0A84FF] text-white shadow-md shadow-blue-500/25'
                      : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Daily Operations Generated PDF</span>
                </button>
              </div>
            )}
          </div>

          {/* In-Built PDF Frame Container */}
          <div className="rounded-3xl ios-glass border border-white/15 overflow-hidden shadow-2xl bg-[#141416]">
            <div className="bg-[#1C1C1E] px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-white">
                  {isJanSathi
                    ? activePdfTab === 'report'
                      ? 'Jansathi_Project_Report.pdf — Authored by Raghavendra Waggar'
                      : 'Daily_City_Operations_Report_JS-OP-67260.pdf — Gemini AI Engine Export'
                    : isHindiMate
                    ? 'HindiMate_Project_Report.pdf — IBM SkillsBuild Capstone Project Report'
                    : 'TNP_Project_Proposal.pdf — Institutional Placement & Training Management System Proposal'}
                </span>
              </div>

              <a
                href={
                  isJanSathi
                    ? activePdfTab === 'report'
                      ? '/projects/jansathi/Jansathi_Project_Report.pdf'
                      : '/projects/jansathi/daily_city_operations_sample.pdf'
                    : isHindiMate
                    ? '/projects/hindimate/HindiMate_Project_Report.pdf'
                    : '/projects/tnp/tnp_project_proposal.pdf'
                }
                download
                className="inline-flex items-center gap-1 text-xs text-[#0A84FF] hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Copy</span>
              </a>
            </div>

            {/* Embedded Native Viewer */}
            <div className="w-full h-[750px] sm:h-[850px] bg-neutral-900">
              <iframe
                src={
                  isJanSathi
                    ? activePdfTab === 'report'
                      ? '/projects/jansathi/Jansathi_Project_Report.pdf#toolbar=1&navpanes=0'
                      : '/projects/jansathi/daily_city_operations_sample.pdf#toolbar=1&navpanes=0'
                    : isHindiMate
                    ? '/projects/hindimate/HindiMate_Project_Report.pdf#toolbar=1&navpanes=0'
                    : '/projects/tnp/tnp_project_proposal.pdf#toolbar=1&navpanes=0'
                }
                title={
                  isJanSathi
                    ? "JanSathi Embedded PDF Document"
                    : isHindiMate
                    ? "HindiMate Embedded PDF Document"
                    : "TNP Embedded Proposal PDF Document"
                }
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </section>
      )}

      {/* Lightbox / Fullscreen Modal for Clicking on Screenshot */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#1C1C1E] border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#0A84FF] uppercase">{selectedImage.category}</span>
                <h4 className="text-sm sm:text-base font-bold text-white">{selectedImage.title}</h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#86868B] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 overflow-auto flex-1 flex items-center justify-center bg-black">
              <img
                src={selectedImage.file}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="p-3 bg-black/80 border-t border-white/10 text-xs text-[#A1A1A6]">
              {selectedImage.description}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="flex justify-center pt-8 border-t border-white/5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all group shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to All Featured Projects</span>
        </button>
      </div>

    </div>
  );
}
