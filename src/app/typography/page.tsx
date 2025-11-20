'use client';

import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import { fonts, fontCategories } from "@/app/data/fonts";

export default function Typography() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically load Google Fonts
  useEffect(() => {
    const fontFamilies = fonts.map(font => font.name.replace(/ /g, '+'));
    const googleFontsUrl = `https://fonts.googleapis.com/css2?${fontFamilies.map(family => `family=${family}:wght@400;700`).join('&')}&display=swap`;

    const link = document.createElement('link');
    link.href = googleFontsUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const filteredFonts = fonts.filter(font => {
    const matchesSearch = font.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || font.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Creative Fonts</h1>
            <p className="text-lg text-foreground/70">
              Browse and discover beautiful fonts for your web projects
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search fonts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border-2 border-foreground/20 rounded-lg focus:border-foreground focus:outline-none transition-colors bg-white/50 text-foreground"
              />
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {fontCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-foreground text-background'
                      : 'bg-white/50 text-foreground/70 hover:bg-foreground/10 border border-foreground/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-sm text-foreground/60">
            Showing {filteredFonts.length} {filteredFonts.length === 1 ? 'font' : 'fonts'}
          </div>

          {/* Font Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFonts.map((font) => (
              <a
                key={font.name}
                href={font.googleFont}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/50 rounded-xl p-6 shadow-sm border border-foreground/10 hover:shadow-lg group cursor-pointer"
              >
                {/* Font Preview */}
                <div 
                  className="mb-4"
                  style={{ fontFamily: font.fontFamily }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Aa Bb Cc
                  </p>
                  <p className="text-base text-foreground/70">
                    The quick brown fox
                  </p>
                </div>

                {/* Font Info */}
                <div className="pt-4 border-t border-foreground/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {font.name}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70 font-medium">
                      {font.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/40 font-mono truncate">
                      {font.fontFamily.split(',')[0]}
                    </span>
                    <span className="text-xs text-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap ml-2">
                      View →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* No Results */}
          {filteredFonts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No fonts found matching your search</p>
            </div>
          )}

          {/* How to Use */}
          <div className="mt-12 bg-white/50 rounded-xl p-6 shadow-sm border border-foreground/10">
            <h3 className="text-lg font-bold text-foreground mb-3">How to Use</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p><span className="font-semibold text-foreground">1.</span> Click any font to open Google Fonts</p>
              <p><span className="font-semibold text-foreground">2.</span> Copy the import link or embed code</p>
              <p><span className="font-semibold text-foreground">3.</span> Use the font-family name in your CSS</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
