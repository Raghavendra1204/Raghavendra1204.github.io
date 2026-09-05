import React, { useState } from 'react';
import { hobbies, photoGallery } from '../data/hobbies';
import {
  Camera,
  Coffee,
  Gauge,
  Music,
  Crown,
  Compass,
  Film,
  Users,
  Maximize2,
  X,
  MapPin,
  Sparkles,
  Tag,
} from 'lucide-react';

const iconMap = {
  Camera,
  Coffee,
  Gauge,
  Music,
  Crown,
  Compass,
  Film,
  Users,
};

export default function HobbiesAndPhotography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="hobbies" className="py-20 border-b border-zinc-800/60 bg-[#090a0f]/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
          <span>// 07</span>
          <span>Interests & Visual Dispatches</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
              Beyond the code.
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Hobbies, curiosity, and photographic snapshots from my lens.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            <span>Visual Journal & Life Interests</span>
          </div>
        </div>

        {/* 📸 Photographic Clicks Showcase */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <h3 className="text-lg font-bold text-zinc-100">Photographic Clicks</h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Click any photo to view full caption & resolution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {photoGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/50 transition-all cursor-pointer flex flex-col shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                {/* Photo Thumbnail Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-sm border border-zinc-700/80 text-zinc-300">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md bg-black/60 backdrop-blur-sm text-zinc-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] font-mono text-zinc-300">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-3.5 flex flex-col justify-between flex-grow">
                  <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-2">
                    {item.caption}
                  </p>
                  <span className="text-[11px] font-mono text-emerald-400/90 inline-flex items-center gap-1">
                    <span>Read story & details</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Hobbies & Interests Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h3 className="text-lg font-bold text-zinc-100">Interests & Perspectives</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby) => {
              const IconComp = iconMap[hobby.icon] || Sparkles;
              return (
                <div
                  key={hobby.name}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-200 mb-0.5">{hobby.name}</h4>
                    <p className="text-[11px] font-mono text-emerald-400 mb-2">{hobby.tagline}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🖼️ High-Resolution Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-zinc-950/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Enlarged Photo Container */}
              <div className="relative max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Photo Story & Detailed Caption */}
              <div className="p-6 bg-zinc-900">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-100 mt-0.5">
                      {selectedPhoto.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800/80 mb-3">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">
                    Caption & Story
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Tag className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{selectedPhoto.technicalNote}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
