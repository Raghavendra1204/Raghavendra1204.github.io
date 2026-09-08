export const projects = [
  {
    id: "jansathi",
    title: "JanSathi",
    subtitle: "AI-Powered Civic Engagement Platform",
    category: "Civic Tech / Multi-Agent AI",
    tag: "Deployed & Live",
    status: "Deployed & Live",
    tagColor: "emerald",
    featured: true,
    description:
      "Dual-portal civic technology system connecting citizens and local government in real time with GPS issue tracking, Leaflet.js heatmaps, and specialized AI operational agents.",
    shortDescription:
      "A dual-portal civic tech platform connecting Indian residents directly with local municipal bodies through GPS issue reporting, interactive GIS heatmaps, and automated AI triage.",
    problem:
      "Urban governance in India faces fractured reporting channels, administrative silos, and zero accountability. Complaints disappear into manual queues, leaving citizens disengaged and municipal teams without real-time dispatch data.",
    keyFeatures: [
      "Geotagged citizen issue reporting with photo upload and interactive GPS pin placement",
      "Municipal officer GIS heatmap console with 5-tier jurisdiction filtering (State down to Ward)",
      "Google Gemini AI auto-categorization, priority scoring, and duplicate issue detection",
      "Multilingual interface supporting English, Hindi, Marathi, and Tamil with real-time Firestore sync",
      "Gamified civic participation rewards (XP points) and automated PDF incident briefs"
    ],
    tech: ["React", "Firebase", "Google Gemini API", "Leaflet.js", "Tailwind CSS", "Google Cloud CDN"],
    myRole:
      "Conceived, architected, and engineered end-to-end by Raghavendra Waggar — covering the dual-portal frontend, GIS incident heatmaps, 10-agent Gemini AI pipelines, Firebase Auth RBAC, and real-time Firestore synchronization.",
    outcome:
      "Fully deployed and operational at jaansathi-b8ad2.web.app; tested live during the Vibe2Ship Hackathon sprint with complete citizen and officer workflows.",
    liveUrl: "https://jaansathi-b8ad2.web.app",
    githubUrl: "https://github.com/Raghavendra1204/jansathi",
    reportUrl: "/projects/jansathi/Jansathi_Project_Report.pdf",
    futureImprovements:
      "Introduce WhatsApp bot reporting integration and offline-first mobile synchronization for areas with unstable connectivity.",
    screenshots: [
      {
        id: "citizen-portal",
        title: "Citizen Reporting Portal",
        caption: "Geotagged civic issue reporting with interactive map pin and priority scoring",
        mockupType: "jansathi-report"
      },
      {
        id: "officer-gis",
        title: "Municipal GIS Incident Console",
        caption: "Live incident tracking heatmap across city sectors with automated priority triage",
        mockupType: "jansathi-gis"
      },
      {
        id: "ai-triage",
        title: "Autonomous Agent Dispatch Hub",
        caption: "Multi-agent coordination module routing tasks to infrastructure and emergency teams",
        mockupType: "jansathi-agents"
      }
    ]
  },
  {
    id: "tnp-platform",
    title: "TNP / TPC Platform",
    subtitle: "Institutional Placement & Training Automation System",
    category: "Institutional Systems / Workflow Automation",
    tag: "SIH Internal Round",
    status: "SIH Internal Round Selection",
    tagColor: "blue",
    featured: true,
    description:
      "End-to-end recruitment management and policy automation platform built to streamline university placement drives and eligibility filtering.",
    shortDescription:
      "An end-to-end recruitment management system designed to automate university placement drives, eligibility filtering, and institutional policy enforcement.",
    problem:
      "University placement drives suffer from manual spreadsheet screening, missed eligibility criteria (CGPA/backlogs), and policy violations like student offer hoarding that disadvantage peers.",
    keyFeatures: [
      "Automated multi-criteria student screening (CGPA thresholds, active backlogs, department, graduation year)",
      "Strict institutional rule enforcement: One-Offer-One-Student and Dream-Offer policy validation",
      "Centralized student resume bank with verified academic records and application history",
      "Asynchronous background worker pipeline powered by Celery and Redis for peak drive loads",
      "Structured placement analytics and aggregate metrics exported directly for NIRF accreditation"
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "JWT"],
    myRole:
      "Designed the relational database schema in PostgreSQL, built the FastAPI backend services with JWT authentication, and implemented the eligibility filtering engine.",
    outcome:
      "Cleared the university internal screening rounds for Smart India Hackathon (SIH) under the Civic & Institutional Technology track.",
    liveUrl: null,
    githubUrl: "https://github.com/Raghavendra1204",
    reportUrl: null,
    futureImprovements:
      "Add automated resume parsing to extract student skill profiles and match them with incoming company job descriptions.",
    screenshots: [
      {
        id: "eligibility-engine",
        title: "Eligibility Screening Engine",
        caption: "Dynamic multi-criteria cutoff rule builder with instant student roster filtering",
        mockupType: "tnp-filter"
      },
      {
        id: "offer-policy",
        title: "Policy Enforcement Pipeline",
        caption: "Automated One-Offer & Dream-Offer rule validation preventing student offer hoarding",
        mockupType: "tnp-policy"
      },
      {
        id: "nirf-analytics",
        title: "NIRF Placement Analytics",
        caption: "Departmental placement telemetry and company package distribution charts",
        mockupType: "tnp-stats"
      }
    ]
  },
  {
    id: "ai-agents-dashboard",
    title: "Autonomous AI Agents Dashboard",
    subtitle: "Multi-Agent Decision Support & Automation Hub",
    category: "AI Engineering / Autonomous Systems",
    tag: "Architecture & Concept",
    status: "Prototype & Architecture",
    tagColor: "purple",
    featured: true,
    description:
      "Specialized AI agent orchestration dashboard featuring deterministic multi-agent collaboration for operational telemetry and automated reporting.",
    shortDescription:
      "A decision-support dashboard orchestrating deterministic multi-agent collaboration for operational telemetry, anomaly detection, and automated report generation.",
    problem:
      "Single LLM prompts struggle with complex, multi-stage business operations requiring specialized domain validation, verifiable handoffs, and consistent structured output.",
    keyFeatures: [
      "Predictive Risk Analyzer agent analyzing continuous telemetry to identify operational vulnerabilities",
      "Resource Planner Agent modeling system constraints to generate optimal dispatch recommendations",
      "Executive PDF Generator converting validated multi-agent findings into formatted operational summaries",
      "Deterministic state machine and strict schema contracts preventing hallucinated agent handoffs"
    ],
    tech: ["Python", "FastAPI", "Google Gemini API", "Tailwind CSS", "React"],
    myRole:
      "Formulated the multi-agent task decomposition flow, wrote prompt contracts with structured JSON schemas, and built the FastAPI orchestration layer.",
    outcome:
      "Established a reliable multi-agent architecture capable of producing consistent operational reports without human-in-the-loop schema violations.",
    liveUrl: null,
    githubUrl: "https://github.com/Raghavendra1204",
    reportUrl: null,
    futureImprovements:
      "Integrate real-time vector embeddings (RAG) for continuous historical context retrieval across agent cycles.",
    screenshots: [
      {
        id: "agent-telemetry",
        title: "Multi-Agent Orchestration Graph",
        caption: "Real-time state machine visualizing agent communication, validation, and handoffs",
        mockupType: "agent-graph"
      },
      {
        id: "risk-analyzer",
        title: "Predictive Risk Intelligence",
        caption: "Automated telemetry scanner identifying anomalies and flagging high-risk nodes",
        mockupType: "agent-risk"
      }
    ]
  },
  {
    id: "hindi-mate",
    title: "HindiMate",
    subtitle: "Interactive Hindi Learning Platform with VaaniAI & OCR",
    category: "Language Learning / AI & EdTech",
    tag: "Deployed & Live on AWS",
    status: "Deployed & Live on AWS EC2 (IBM SkillsBuild Capstone)",
    tagColor: "amber",
    featured: true,
    description:
      "Interactive Hindi learning platform developed under the IBM SkillsBuild Internship Program by a team of seven members, combining structured lessons, OCR grammar workflows, Gemini AI (VaaniAI), and Web Speech API.",
    shortDescription:
      "An interactive Hindi language acquisition platform combining structured lessons with OCR-extracted grammar resources, Google Gemini AI (VaaniAI), and browser-based speech synthesis.",
    problem:
      "Traditional language learning platforms present static study material with repetitive drills and lack interactive pronunciation feedback and dynamic resource ingestion for non-Latin scripts like Devanagari.",
    keyFeatures: [
      "Step-by-step Hindi curriculum: vowels, consonants, matras, vocabulary, greetings, and grammar",
      "OCR-based learning workflow extracting and structuring existing PDF grammar textbooks into web exercises",
      "Google Gemini API integration (VaaniAI) for adaptive conversational drills and structured pedagogy",
      "Web Speech API providing native browser-based text-to-speech pronunciation for Hindi characters and phrases",
      "Containerized deployment using Docker and Nginx reverse proxy hosted on AWS EC2"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Google Gemini API", "Web Speech API", "OCR", "Docker", "Nginx", "AWS EC2", "React Router"],
    myRole:
      "Developed collaboratively by seven members (Yash, Nischay, Utkarsh, Shaurya, Tenzing, and Raghavendra). My primary contributions focused on system architecture, Docker and version management, AWS deployment, OCR integration, and text-to-speech.",
    outcome:
      "Successfully containerized with Docker, deployed to AWS EC2 (http://13.204.64.226), and evaluated as the final capstone project under the IBM SkillsBuild Internship Program.",
    liveUrl: "http://13.204.64.226",
    githubUrl: "https://github.com/Raghavendra1204/Hindimate",
    reportUrl: "/projects/hindimate/HindiMate_Project_Report.pdf",
    futureImprovements:
      "Introduce speech-to-text pronunciation assessment to evaluate user vocal pitch and accuracy in real time.",
    screenshots: [
      {
        id: "script-grid",
        title: "Devanagari Script & Audio Grid",
        caption: "Interactive phonetics board with Web Speech API native pronunciation playback",
        mockupType: "hindimate-script"
      },
      {
        id: "conversation-drill",
        title: "VaaniAI Conversational Engine",
        caption: "Adaptive Hindi dialogue simulation utilizing Google Gemini API for structured pedagogical feedback",
        mockupType: "hindimate-chat"
      }
    ]
  }
];
