import React from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Network,
  Share2,
  Sparkles,
  Volume2,
  KeyRound,
  Workflow,
  Radio,
  Binary,
  Database,
  Globe
} from 'lucide-react';

export default function TechIcon({ name = '', className = 'w-4 h-4' }) {
  const norm = name.toLowerCase().trim();

  // 1. Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C6.9 2 7.2 4.1 7.2 4.1l.01 2.2h4.8v.7H5.2S2 6.6 2 11.6s2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.7s2.7.1 2.7-2.6V4.6S17 2 11.9 2zm-1.3 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c5 0 4.7-2.1 4.7-2.1l-.01-2.2H12v-.7h6.8s3.2.4 3.2-4.6-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8h-4.7s-2.7-.1-2.7 2.6v4.1S7 22 12.1 22zm1.3-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // 2. C++
  if (norm.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"
          fill="#00599C"
          fillOpacity="0.25"
          stroke="#00599C"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fill="#659AD2"
          fontSize="9"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
        >
          C++
        </text>
      </svg>
    );
  }

  // 3. C (without C++)
  if (norm === 'c' || norm.startsWith('c ') || norm.includes('systems fundamentals')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"
          fill="#A8B9CC"
          fillOpacity="0.2"
          stroke="#A8B9CC"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="15.5"
          textAnchor="middle"
          fill="#A8B9CC"
          fontSize="10"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
        >
          C
        </text>
      </svg>
    );
  }

  // 4. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#F7DF1E" />
        <path
          d="M7.5 17.5l2-1.2c.4.8.8 1.4 1.7 1.4.9 0 1.5-.4 1.5-1.3v-5.2h2.5v5.2c0 2.2-1.3 3.3-3.6 3.3-2 0-3.3-1-4.1-2.2zm9.1-1.3l2-1.2c.6 1 1.4 1.6 2.5 1.6 1 0 1.7-.5 1.7-1.3 0-.8-.6-1.1-1.8-1.6l-.8-.3c-2.3-1-3.4-2.1-3.4-4.1 0-2.3 1.8-4.1 4.5-4.1 2 0 3.4.8 4.2 2.3l-1.9 1.2c-.4-.8-1-1.3-1.9-1.3-.9 0-1.5.5-1.5 1.2 0 .7.5 1 1.7 1.5l.8.3c2.5 1.1 3.7 2.2 3.7 4.2 0 2.6-2 4.2-4.9 4.2-2.7 0-4.4-1.3-4.9-2.7z"
          fill="#000000"
          transform="translate(-4, -1) scale(0.9)"
        />
      </svg>
    );
  }

  // 5. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#3178C6" />
        <path
          d="M5 9h7v2.2H9.7v7.6H7.3v-7.6H5V9zm8 3.5h3.8c.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.8 0 .8-.2 1.4-.7 1.8-.5.4-1.2.7-2.1.7h-1.6v2.4h-1.8V12.5zm1.8 1.8v1.8h1.6c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.6-.4-.8-1.1-.8h-1.6z"
          fill="#FFFFFF"
          transform="translate(1, -0.5) scale(0.9)"
        />
      </svg>
    );
  }

  // 6. SQL
  if (norm === 'sql' || norm.includes('sql') && !norm.includes('sqlite') && !norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // 7. PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13.2 2.6a1 1 0 0 0-1.4 0L7.5 7a7.5 7.5 0 1 0 10.6 0l-4.9-4.4zm-.7 3l3.3 3a5.5 5.5 0 1 1-7.8 0l3.3-3a1 1 0 0 1 1.2 0z"
          fill="#EE4C2C"
        />
        <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
      </svg>
    );
  }

  // 8. React
  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // 9. Next.js
  if (norm.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
        <path
          d="M8.5 7.5v9h2.3V10.7l6.2 7.3a11 11 0 0 0 1.5-1.5l-7.7-9H8.5zm6.2 0v5.3l2.3 2.7V7.5h-2.3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 10. FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path d="M12.5 4L7 13.5h5.5l-1 6.5 7-10.5h-6l1-5.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 11. Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z"
          fill="#5FA04E"
          fillOpacity="0.2"
          stroke="#5FA04E"
          strokeWidth="1.5"
        />
        <path
          d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9V9.4l5-2.9z"
          fill="#5FA04E"
        />
      </svg>
    );
  }

  // 12. Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-1.7 1.2.4 2 1.3 3 2.3 1.5 1.5 3.2 3.4 7 3.4 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 1.7-1.2-.4-2-1.3-3-2.3-1.5-1.5-3.2-3.4-7-3.4zM5 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-1.7 1.2.4 2 1.3 3 2.3 1.5 1.5 3.2 3.4 7 3.4 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 1.7-1.2-.4-2-1.3-3-2.3-1.5-1.5-3.2-3.4-7-3.4z"
          fill="#38BDF8"
          transform="translate(-1, 0) scale(0.9)"
        />
      </svg>
    );
  }

  // 13. Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22.5 11c-.5-.4-1.4-.4-1.9-.3-.3-.9-1-1.6-1.9-1.9-.1 0-.3-.1-.4-.1-.1-.7-.6-2-1.9-2.7-.4-.2-.8-.3-1.2-.3-.2 0-.3.1-.3.3v1.8c-.5.4-1.1 1-1.4 1.7H2.8C2.4 9.5 2 9.9 2 10.4v4.2c0 3.2 2.6 5.8 5.8 5.8 4.2 0 7.8-2.6 8.7-6.5.6.1 1.9.2 2.9-.6 1.4-1 1.6-2.5 1.6-2.6-.1 0-.8.3-1.5.3H22.5zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2H7V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm-3-3h2v2h-2V5z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // 14. PostgreSQL
  if (norm.includes('postgre') || norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1-.1-.7-.1-1.8.1-2.6.2-.7 1.4-4.8 1.4-4.8s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.8 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.3 3.7-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.5 2.6-5.5 5.3 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4 0 .2-.2.2-.3.1-2.1-1-3.4-4.1-3.4-6.6 0-5.4 3.9-10.4 11.3-10.4 6 0 10.6 4.3 10.6 10 0 5.9-3.7 10.7-8.9 10.7-1.7 0-3.4-.9-4-2l-1.1 4.1c-.4 1.5-1.5 3.3-2.2 4.5C9.4 23.7 10.7 24 12 24c6.6 0 12-5.4 12-12S18.6 2 12 2z"
          fill="#336791"
        />
      </svg>
    );
  }

  // 15. Redis
  if (norm.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zm0 8l-10-5v4l10 5 10-5V5l-10 5zm0 6l-10-5v4l10 5 10-5v-4l-10 5z"
          fill="#DC382D"
        />
      </svg>
    );
  }

  // 16. Firebase / Firestore
  if (norm.includes('firebase') || norm.includes('firestore')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4.2 18.2L6.8 2.3a.6.6 0 0 1 1.1-.2l3.4 6.4-7.1 9.7zm9.6-7.8l-2.4-4.6a.6.6 0 0 0-1.1 0L3.1 19.1l8.5 4.8a.9.9 0 0 0 .8 0l8.5-4.8-7.1-8.7z"
          fill="#FFA000"
        />
        <path
          d="M20.9 18.2l-3.3-10a.6.6 0 0 0-1.1-.1l-2.7 5.1 7.1 5z"
          fill="#F57C00"
        />
      </svg>
    );
  }

  // 17. Supabase
  if (norm.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13.4 2.1c-.8-.9-2.2-.4-2.3.8L10 12.3h10.4c1.3 0 2 1.5 1.2 2.5L10.6 21.9c-.8.9-2.2.4-2.3-.8L9.4 11.7H-1c-1.3 0-2-1.5-1.2-2.5L8.8 1.4"
          fill="#3ECF8E"
          transform="translate(2, 0) scale(0.9)"
        />
      </svg>
    );
  }

  // 18. SQLite
  if (norm.includes('sqlite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.5 2 2 3.5 2 5.3v13.4C2 20.5 6.5 22 12 22s10-1.5 10-3.3V5.3C22 3.5 17.5 2 12 2zm0 2.5c4.7 0 8 1.2 8 1.8s-3.3 1.8-8 1.8-8-1.2-8-1.8 3.3-1.8 8-1.8z"
          fill="#003B57"
          stroke="#00A2E8"
          strokeWidth="1.2"
        />
        <path d="M7 10v4l5 2 5-2v-4" stroke="#00A2E8" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  // 19. Git & GitHub
  if (norm.includes('git') || norm.includes('github')) {
    if (norm.includes('action')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#2088FF" fillOpacity="0.2" stroke="#2088FF" strokeWidth="1.5" />
          <path d="M9 8l7 4-7 4V8z" fill="#2088FF" />
        </svg>
      );
    }
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.9L13.1 2.4a1.7 1.7 0 0 0-2.4 0L8.3 4.8l3 3a2 2 0 0 1 2.5 2.5l2.9 2.9a2 2 0 1 1-1.2 1.2l-2.7-2.7v4.7a2 2 0 1 1-1.7 0V11.6a2 2 0 0 1-1.1-2.6L7.1 6.1 2.4 10.8a1.7 1.7 0 0 0 0 2.4l8.5 8.5a1.7 1.7 0 0 0 2.4 0l8.3-8.4a1.7 1.7 0 0 0 0-2.4z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // 20. Vercel & Cloud CDN
  if (norm.includes('vercel') || norm.includes('cdn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 20H2L12 2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 21. VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M17.5 2.2L6.8 11.2l4.8 3.7 5.9-4.8V2.2zM6.8 11.2L2.5 8l-1.1.9v6.2l1.1.9 4.3-3.2 4.8 3.7L17.5 22v-7.9L6.8 11.2z"
          fill="#007ACC"
        />
      </svg>
    );
  }

  // 22. Google Gemini API
  if (norm.includes('gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 7.52 7.52 12 2 12c5.48 0 9.96 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4E82EE" />
            <stop offset="0.5" stopColor="#9B72CF" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 23. Leaflet.js
  if (norm.includes('leaflet')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M19 3C10 3 5 11 5 19c3-1 6-2 9-5 3.5-3.5 5-7.5 5-11z"
          fill="#199900"
        />
        <path d="M5 19c4-5 9-9 14-14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 24. Celery
  if (norm.includes('celery')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#37814A" fillOpacity="0.25" stroke="#37814A" strokeWidth="1.5" />
        <path d="M7 16c2-4 5-7 8-9m-5 9c1.5-2 3.5-3.5 5-5" stroke="#37814A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 25. Scikit-learn & NumPy
  if (norm.includes('scikit') || norm.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="5" fill="#3499CD" />
        <circle cx="16" cy="16" r="5" fill="#F89939" />
        <path d="M8 8l8 8" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    );
  }

  // 26. JWT
  if (norm.includes('jwt')) {
    return <KeyRound className={`${className} text-[#D63AFF]`} />;
  }

  // 27. HTML / CSS
  if (norm.includes('html') || norm.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 16.5L12 21.5l6.2-2L20 3H4z" fill="#E34F26" fillOpacity="0.2" stroke="#E34F26" strokeWidth="1.5" />
        <text x="12" y="14.5" textAnchor="middle" fill="#E34F26" fontSize="7" fontWeight="bold">HTML</text>
      </svg>
    );
  }

  // 28. Google TTS
  if (norm.includes('tts') || norm.includes('speech')) {
    return <Volume2 className={`${className} text-[#4285F4]`} />;
  }

  // 29. AI Agents / Multi-Agent Workflows
  if (norm.includes('agent') || norm.includes('workflow')) {
    return <Workflow className={`${className} text-[#A855F7]`} />;
  }

  // 30. Deep Learning / CNNs
  if (norm.includes('deep learning') || norm.includes('cnn') || norm.includes('neural')) {
    return <Layers className={`${className} text-[#EC4899]`} />;
  }

  // 31. Clustering Algorithms
  if (norm.includes('cluster') || norm.includes('k-means')) {
    return <Share2 className={`${className} text-[#10B981]`} />;
  }

  // 32. Machine Learning
  if (norm.includes('machine learning')) {
    return <Cpu className={`${className} text-[#6366F1]`} />;
  }

  // 33. REST APIs / APIs
  if (norm.includes('api') || norm.includes('rest')) {
    return <Radio className={`${className} text-[#0A84FF]`} />;
  }

  // 34. Structured Output
  if (norm.includes('structured output')) {
    return <Binary className={`${className} text-[#F59E0B]`} />;
  }

  // Default fallback
  return <Code className={`${className} text-[#86868B]`} />;
}
