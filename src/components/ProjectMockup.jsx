import React from 'react';
import {
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Send,
  Users,
  Building2,
  ShieldAlert,
  GraduationCap,
  FileSpreadsheet,
  Sliders,
  Filter,
  BarChart3,
  Bot,
  Activity,
  FileText,
  Volume2,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function ProjectMockup({ type, title }) {
  return (
    <div className="w-full bg-[#141416] rounded-2xl border border-white/10 overflow-hidden shadow-2xl select-none font-sans">
      {/* Window Title Bar */}
      <div className="bg-[#1C1C1E] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
        </div>
        <span className="text-[11px] font-mono text-[#86868B] truncate max-w-[200px] sm:max-w-none">
          {title}
        </span>
        <div className="w-12" />
      </div>

      {/* Mockup Canvas */}
      <div className="p-4 sm:p-5 min-h-[220px] text-xs">
        {/* 1. JanSathi - Citizen Report */}
        {type === 'jansathi-report' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
                <span className="font-semibold text-white">Issue #JS-2026-084</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#FF9F0A]/20 text-[#FF9F0A] text-[10px] font-mono border border-[#FF9F0A]/30">
                Under Review
              </span>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-[#FF453A]" />
                <span>Deep Pothole on Main Sector Road</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#86868B]">
                <MapPin className="w-3 h-3 text-[#0A84FF]" />
                <span>Dwarka Sector 14, New Delhi (28.5921° N, 77.0298° E)</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[#86868B]">Severity Score</div>
                <div className="font-bold text-[#FF453A] text-sm mt-0.5">88 / 100</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[#86868B]">Auto Category</div>
                <div className="font-medium text-white text-xs mt-0.5">Roads & Infra</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[#86868B]">Reporter XP</div>
                <div className="font-bold text-[#30D158] text-sm mt-0.5">+100 XP</div>
              </div>
            </div>
          </div>
        )}

        {/* 2. JanSathi - Officer GIS */}
        {type === 'jansathi-gis' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span className="font-semibold text-white">Municipal Command Map</span>
              </div>
              <span className="text-[10px] font-mono text-[#86868B]">Ward 42 • Live Feed</span>
            </div>

            <div className="h-24 rounded-xl bg-gradient-to-br from-[#0c1c2e] to-[#0d131f] border border-white/10 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0A84FF_1px,transparent_1px)] [background-size:12px_12px]" />
              <div className="relative flex flex-col items-center gap-1 z-10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF453A] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF453A]" />
                  </span>
                  <span className="text-white font-medium text-xs">Cluster: 14 Reports Active</span>
                </div>
                <span className="text-[10px] text-[#86868B]">Leaflet.js Dynamic Heatmap Active</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#86868B] px-1">
              <span>Resolution Rate: <strong className="text-white">82%</strong></span>
              <span>Avg Triage Time: <strong className="text-white">4.2 hrs</strong></span>
            </div>
          </div>
        )}

        {/* 3. JanSathi - AI Agents */}
        {type === 'jansathi-agents' && (
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono text-[#0A84FF] uppercase tracking-wider">
              Autonomous Operations Dispatch Hub
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Users className="w-3 h-3 text-[#30D158]" />
                  <span>Welfare Agent</span>
                </div>
                <div className="text-[10px] text-[#86868B]">Resident query routing & SLA alerts</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Building2 className="w-3 h-3 text-[#0A84FF]" />
                  <span>Infra Agent</span>
                </div>
                <div className="text-[10px] text-[#86868B]">Field team load balancing & dispatch</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <ShieldAlert className="w-3 h-3 text-[#FF453A]" />
                  <span>Emergency Agent</span>
                </div>
                <div className="text-[10px] text-[#86868B]">Priority incident escalation protocol</div>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-black/50 border border-white/5 text-[10px] font-mono text-[#86868B] flex items-center justify-between">
              <span>Status: Multi-agent telemetry synchronized</span>
              <span className="text-[#30D158]">CONNECTED</span>
            </div>
          </div>
        )}

        {/* 4. TNP - Filter */}
        {type === 'tnp-filter' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span className="font-semibold text-white">Eligibility Criteria Engine</span>
              </div>
              <span className="text-[10px] font-mono text-[#30D158] bg-[#30D158]/10 px-2 py-0.5 rounded-full border border-[#30D158]/20">
                Drive: Google / Microsoft
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#86868B] block text-[10px]">CGPA Cutoff</span>
                <span className="font-bold text-white text-sm">≥ 8.0</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#86868B] block text-[10px]">Active Backlogs</span>
                <span className="font-bold text-[#30D158] text-sm">0 Allowed</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#86868B] block text-[10px]">Departments</span>
                <span className="font-bold text-white text-sm">CSE, AI, IT</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[#86868B] block text-[10px]">Filtered Pool</span>
                <span className="font-bold text-[#0A84FF] text-sm">142 Students</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#86868B] pt-1">
              <span>FastAPI automated query execution time: <strong className="text-white">12ms</strong></span>
              <span className="text-[#0A84FF] font-medium">Export Roster →</span>
            </div>
          </div>
        )}

        {/* 5. TNP - Policy */}
        {type === 'tnp-policy' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#FF9F0A]" />
                Institutional Placement Rules
              </span>
              <span className="text-[10px] font-mono text-[#86868B]">Enforced via DB Constraints</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">One-Offer-One-Student Rule</div>
                  <div className="text-[10px] text-[#86868B]">Freezes application rights after standard offer acceptance</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#30D158] shrink-0" />
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Dream Offer Exception (≥ 2× CTC)</div>
                  <div className="text-[10px] text-[#86868B]">Allows 1 additional tier-1 upgrade attempt</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#30D158] shrink-0" />
              </div>
            </div>
          </div>
        )}

        {/* 6. TNP - Stats */}
        {type === 'tnp-stats' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#0A84FF]" />
                NIRF Accreditation Report Telemetry
              </span>
              <span className="text-[10px] font-mono text-[#86868B]">Batch 2026</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                <div className="text-[#86868B] text-[10px]">Placement Rate</div>
                <div className="text-lg font-bold text-white mt-0.5">89.4%</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                <div className="text-[#86868B] text-[10px]">Highest Package</div>
                <div className="text-lg font-bold text-[#30D158] mt-0.5">₹ 28 LPA</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                <div className="text-[#86868B] text-[10px]">Average CTC</div>
                <div className="text-lg font-bold text-[#0A84FF] mt-0.5">₹ 9.2 LPA</div>
              </div>
            </div>
          </div>
        )}

        {/* 7. AI Agents - Graph */}
        {type === 'agent-graph' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#BF5AF2]" />
                Deterministic Multi-Agent State Machine
              </span>
              <span className="text-[10px] font-mono text-[#30D158]">Cycle Time: 840ms</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 py-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-white font-mono text-[11px]">
                Input Request
              </div>
              <span className="text-[#86868B]">→</span>
              <div className="px-3 py-1.5 rounded-xl bg-[#0A84FF]/20 border border-[#0A84FF]/40 text-[#0A84FF] font-mono text-[11px]">
                Risk Analyzer
              </div>
              <span className="text-[#86868B]">→</span>
              <div className="px-3 py-1.5 rounded-xl bg-[#BF5AF2]/20 border border-[#BF5AF2]/40 text-[#BF5AF2] font-mono text-[11px]">
                Planner Agent
              </div>
              <span className="text-[#86868B]">→</span>
              <div className="px-3 py-1.5 rounded-xl bg-[#30D158]/20 border border-[#30D158]/40 text-[#30D158] font-mono text-[11px]">
                PDF Brief
              </div>
            </div>

            <div className="p-2 rounded-lg bg-black/50 border border-white/5 text-[10px] text-[#86868B] font-mono">
              Contract: Schema validated via Pydantic model with 0 hallucinated handoffs
            </div>
          </div>
        )}

        {/* 8. AI Agents - Risk */}
        {type === 'agent-risk' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#FF375F]" />
                Predictive Risk Telemetry Analyzer
              </span>
              <span className="text-[10px] font-mono text-[#30D158]">Model: Gemini 2.5</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-white">API Gateway Latency Spike Flagged</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF453A]/20 text-[#FF453A]">
                  Risk: High (94%)
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-white">Database Connection Pool Normal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#30D158]/20 text-[#30D158]">
                  Optimal
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 9. HindiMate - Script */}
        {type === 'hindimate-script' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#30D158]" />
                Interactive Devanagari Phonetics Board
              </span>
              <span className="text-[10px] font-mono text-[#86868B]">Google TTS Active</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 text-center">
              {[
                { char: 'अ', ipa: 'a' },
                { char: 'आ', ipa: 'aa' },
                { char: 'इ', ipa: 'i' },
                { char: 'ई', ipa: 'ee' },
                { char: 'क', ipa: 'ka' },
                { char: 'ख', ipa: 'kha' },
                { char: 'ग', ipa: 'ga' },
                { char: 'घ', ipa: 'gha' }
              ].map((item) => (
                <div
                  key={item.char}
                  className="p-2 rounded-xl bg-black/40 border border-white/5 hover:border-[#0A84FF] transition-colors"
                >
                  <div className="text-base font-bold text-white">{item.char}</div>
                  <div className="text-[10px] text-[#86868B] font-mono">{item.ipa}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#86868B] pt-1">
              <span>Native audio playback generated in real time</span>
              <span className="text-[#30D158] font-mono">24kHz Audio Stream</span>
            </div>
          </div>
        )}

        {/* 10. HindiMate - Chat */}
        {type === 'hindimate-chat' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD60A]" />
                Situational Hindi Conversation Practice
              </span>
              <span className="text-[10px] font-mono text-[#0A84FF]">Gemini Pedagogical Engine</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-right">
                <div className="text-[#86868B] text-[10px]">User Input</div>
                <div className="text-white font-medium">नमस्ते! आप कैसे हैं? (Namaste! How are you?)</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20">
                <div className="text-[#0A84FF] text-[10px] font-medium">HindiMate Tutor</div>
                <div className="text-white font-medium">मैं बिल्कुल ठीक हूँ, धन्यवाद! आप क्या सीखना चाहते हैं?</div>
                <div className="text-[10px] text-[#86868B] mt-1">
                  Grammar breakdown: &quot;मैं&quot; (I) + &quot;ठीक हूँ&quot; (am fine).
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
