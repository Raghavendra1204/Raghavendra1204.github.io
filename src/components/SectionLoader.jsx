import React from 'react';
import { Loader2 } from 'lucide-react';

export default function SectionLoader({ tag = 'Loading Section' }) {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-8 window-fade">
      {/* Loading Header */}
      <div className="mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-pill text-xs text-[#0A84FF] mb-4">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0A84FF]" />
          <span className="font-mono">{tag}...</span>
        </div>
        <div className="h-9 w-3/4 bg-white/10 rounded-2xl animate-pulse mb-3" />
        <div className="h-4 w-full bg-white/5 rounded-xl animate-pulse mb-2" />
        <div className="h-4 w-2/3 bg-white/5 rounded-xl animate-pulse" />
      </div>

      {/* Bento Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="p-6 rounded-3xl ios-glass border border-white/5 flex flex-col justify-between h-48 animate-pulse"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-20 bg-white/10 rounded-full" />
                <div className="h-4 w-12 bg-[#0A84FF]/20 rounded-full" />
              </div>
              <div className="h-5 w-3/4 bg-white/10 rounded-lg mb-2.5" />
              <div className="h-3 w-full bg-white/5 rounded mb-1.5" />
              <div className="h-3 w-4/5 bg-white/5 rounded" />
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="h-3 w-24 bg-white/5 rounded" />
              <div className="h-3 w-16 bg-[#0A84FF]/20 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
