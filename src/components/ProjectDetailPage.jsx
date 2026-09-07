import React, { useState, useEffect } from 'react';
import TechIcon from './TechIcon';
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
  Download
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

export default function ProjectDetailPage({ project, onBack }) {
  const [activePdfTab, setActivePdfTab] = useState('report');
  const [selectedImage, setSelectedImage] = useState(null);
  const [screenshotFilter, setScreenshotFilter] = useState('All');

  // Scroll to top upon opening page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  if (!project) return null;

  const isJanSathi = project.id === 'jaansathi' || project.id === 'jansathi' || project.title.toLowerCase().includes('jansathi');

  const filteredScreenshots =
    screenshotFilter === 'All'
      ? JANSATHI_SCREENSHOTS
      : JANSATHI_SCREENSHOTS.filter((s) => s.category.includes(screenshotFilter));

  const screenshotCategories = ['All', 'Officer Operations', 'GIS & Mapping', 'AI Agents Hub', 'Citizen Portal', 'Analytics'];

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

      {/* 1. ABOUT SECTION — USER PROVIDED CONTENT (FIRST THING TO SEE) */}
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
      ) : (
        /* Fallback About for other projects */
        <section className="p-6 sm:p-8 rounded-3xl ios-glass border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">About {project.title}</h2>
          <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed">
            {project.description}
          </p>
        </section>
      )}

      {/* 2. MY ROLE & CONTRIBUTION — EXPLICITLY RECOGNIZING RAGHAVENDRA AS SOLE ARCHITECT & DEVELOPER */}
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
            Sole Architect & Full-Stack Engineer
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed">
          {isJanSathi
            ? 'JanSathi was conceived, architected, designed, and engineered entirely end-to-end by me (Raghavendra Waggar). Every single component across the frontend interfaces, backend services, GIS mapping systems, AI agent workflows, and database models was developed by me.'
            : project.myRole}
        </p>

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

      {/* 3. ACTUAL SCREENSHOTS GALLERY FROM USER PROVIDED DIRECTORY */}
      {isJanSathi && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
                Visual Inspection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Actual Project Screenshots ({JANSATHI_SCREENSHOTS.length})
              </h2>
              <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                Captured directly from the deployed JanSathi application, showcasing officer telemetry, AI hubs, and citizen forms.
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
        </section>
      )}

      {/* 4. IN-BUILT PDF VIEWER SECTION (AS REQUESTED: VIEWED ON WEBSITE WITHOUT EXTERNAL FILE) */}
      {isJanSathi && (
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
                Read the official Project Build Report and AI-generated Municipal Operations PDF directly inside the website.
              </p>
            </div>

            {/* Tab Selector for Both PDFs */}
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
          </div>

          {/* In-Built PDF Frame Container */}
          <div className="rounded-3xl ios-glass border border-white/15 overflow-hidden shadow-2xl bg-[#141416]">
            <div className="bg-[#1C1C1E] px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-white">
                  {activePdfTab === 'report'
                    ? 'Jansathi_Project_Report.pdf — Authored by Raghavendra Waggar'
                    : 'Daily_City_Operations_Report_JS-OP-67260.pdf — Gemini AI Engine Export'}
                </span>
              </div>

              <a
                href={
                  activePdfTab === 'report'
                    ? '/projects/jansathi/Jansathi_Project_Report.pdf'
                    : '/projects/jansathi/daily_city_operations_sample.pdf'
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
                  activePdfTab === 'report'
                    ? '/projects/jansathi/Jansathi_Project_Report.pdf#toolbar=1&navpanes=0'
                    : '/projects/jansathi/daily_city_operations_sample.pdf#toolbar=1&navpanes=0'
                }
                title="JanSathi Embedded PDF Document"
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
