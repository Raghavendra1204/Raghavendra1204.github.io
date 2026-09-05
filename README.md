# Raghavendra Waggar — Personal Developer Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/Raghavendra1204/Raghavendra1204.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Raghavendra1204/Raghavendra1204.github.io/actions/workflows/deploy.yml)

A high-performance, dark-first developer portfolio engineered with **React**, **Vite**, and **Tailwind CSS**, designed for automatic deployment to **GitHub Pages** at:

🌐 **[https://Raghavendra1204.github.io](https://Raghavendra1204.github.io)**

---

## ⚡ Architectural Highlights

- **Aesthetic**: Technical, minimal, dark-first design with high contrast, monospace accents, and zero distracting gimmicks.
- **Content Integrity**: 100% verified facts. No fabricated metrics, client numbers, or artificial years of experience.
- **Projects**:
  - **JanSathi**: AI-enabled civic engagement platform (Citizen + Officer portals, GPS issue reporting, Gemini API, Leaflet.js).
  - **TNP / TPC Platform**: Institutional placement management with automated eligibility filtering (FastAPI, Redis, Celery, PostgreSQL).
  - **Autonomous AI Agents Dashboard**: Specialized decision support multi-agent architecture.
  - **HindiMate**: Interactive language learning app built for SkillsBuild India.
- **Hackathons**: Honest accounts of Smart India Hackathon 2026 (Internal Rounds Cleared), Adobe Hackathon (Round 2), and Vibe2Ship Hackathon.
- **Resume System**: Pre-configured route for PDF viewing and direct downloads with graceful fallback.
- **GitHub API Integration**: Real-time repository showcase fetched directly from GitHub's public API.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 GitHub Pages Automated Deployment

This repository includes a GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Every time you push changes to the `main` branch, GitHub Actions will:
1. Check out your code.
2. Install dependencies with `npm ci`.
3. Run `npm run build` to generate static assets in `./dist`.
4. Deploy the `./dist` bundle to GitHub Pages at `https://Raghavendra1204.github.io`.
