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
    <section id="hobbies" className="py-20 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono text-[#0A84FF] uppercase tracking-wider block mb-1">
              05 // Visual Dispatches & Life
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Beyond the code.
            </h2>
            <p className="text-xs sm:text-sm text-[#86868B] mt-1">
              Hobbies, curiosity, and photographic snapshots from my lens.
            </p>
          </div>
          <div className="text-xs font-mono text-[#86868B] ios-pill px-3 py-1 rounded-full self-start md:self-auto">
            <span>Visual Journal</span>
          </div>
        </div>

        {/* 📸 Photographic Clicks Showcase (iOS Photos Grid) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#0A84FF]" />
              <h3 className="text-base font-bold text-white">Photographic Clicks</h3>
            </div>
            <span className="text-xs text-[#86868B]">
              Tap any photo to view story & resolution
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {photoGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden ios-glass border border-white/10 hover:border-white/25 transition-all cursor-pointer flex flex-col shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                {/* Photo Thumbnail Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[#F5F5F7]">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[11px] text-[#A1A1A6]">
                    <MapPin className="w-3 h-3 text-[#0A84FF]" />
                    <span className="truncate max-w-[120px]">{item.location}</span>
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-3 flex flex-col justify-between flex-grow">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#0A84FF] transition-colors mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#86868B] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Hobbies & Interests Grid (Apple Widget Style) */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4 text-[#0A84FF]" />
            <h3 className="text-base font-bold text-white">Interests & Perspectives</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hobbies.map((hobby) => {
              const IconComp = iconMap[hobby.icon] || Sparkles;
              return (
                <div
                  key={hobby.name}
                  className="p-4 rounded-3xl ios-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center text-[#0A84FF] mb-2.5">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">{hobby.name}</h4>
                    <p className="text-[10px] font-mono text-[#0A84FF] mb-1.5">{hobby.tagline}</p>
                    <p className="text-[11px] text-[#86868B] leading-relaxed line-clamp-3">{hobby.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🖼️ High-Resolution Lightbox Modal (Apple Photo View) */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative w-full max-w-2xl ios-glass-elevated border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Enlarged Photo */}
              <div className="relative max-h-[55vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[55vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Photo Story & Detailed Caption */}
              <div className="p-6 bg-black/60">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#0A84FF] uppercase tracking-wider block">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {selectedPhoto.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full ios-pill text-xs text-[#86868B]">
                    <MapPin className="w-3 h-3 text-[#0A84FF]" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-2.5">
                  <span className="text-[10px] font-mono text-[#86868B] uppercase block mb-1">
                    Caption & Context
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F5F7] leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#86868B]">
                  <Tag className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
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
