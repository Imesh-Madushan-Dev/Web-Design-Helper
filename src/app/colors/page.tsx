'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import ColorSwatch from "@/components/ColorSwatch";
import { colorPalettes, colorCategories } from "@/app/data/colors";

export default function Colors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPalettes = Object.entries(colorPalettes).filter(([key]) => {
    if (selectedCategory === 'All') return true;
    return key.toLowerCase() === selectedCategory.toLowerCase();
  });

  const searchFilteredPalettes = filteredPalettes.map(([key, palette]) => {
    const filteredColors = palette.colors.filter((color: any) =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return [key, { ...palette, colors: filteredColors }] as const;
  }).filter(([, palette]) => palette.colors.length > 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Color Palettes</h1>
            <p className="text-lg text-foreground/70">
              Organized color collections for your design projects. Click any color to copy.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search colors..."
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
              {colorCategories.map((category) => (
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

          {/* Main Content with Sidebar */}
          <div className="flex gap-8">
            {/* Color Palettes - Main Content */}
            <div className="flex-1 space-y-12">
              {searchFilteredPalettes.length > 0 ? (
                searchFilteredPalettes.map(([key, palette]) => (
                  <section key={key} id={key}>
                    <h2 className="text-2xl font-bold text-foreground mb-6">{palette.name}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {palette.colors.map((color) => (
                        <ColorSwatch key={color.hex} {...color} />
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-foreground/60">No colors found matching your search</p>
                </div>
              )}
            </div>

            {/* Right Sidebar Navigation - Desktop Only */}
            <aside className="hidden lg:block w-48 flex-shrink-0">
              <div className="sticky top-24 bg-white/50 rounded-xl p-4 border border-foreground/10">
                <h3 className="text-sm font-bold text-foreground mb-3">On This Page</h3>
                <nav className="space-y-2">
                  {Object.entries(colorPalettes).map(([key, palette]) => (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className="block w-full text-left text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-2 py-1 rounded transition-colors"
                    >
                      {palette.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
