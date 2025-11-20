'use client';

import { JSX, useState } from 'react';
import Navigation from "@/components/Navigation";
import { designSystems } from "@/app/data/designSystems";

// Component preview renderer based on design system name
const DesignSystemPreview = ({ systemName, textColor }: { systemName: string; textColor: string }) => {
  const previews: { [key: string]: JSX.Element } = {
    "Soft UI / Neuomorphism": (
      <div className="space-y-3">
        <button className="px-6 py-3 rounded-xl bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all font-medium">
          Soft Button
        </button>
        <div className="bg-[#e0e5ec] rounded-2xl p-5 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
          <div className="text-gray-800 font-bold mb-2">Neumorphic Card</div>
          <div className="text-gray-600 text-sm">Soft, embossed appearance</div>
        </div>
      </div>
    ),
    "Glass UI": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-gray-800 font-medium hover:bg-white/30 transition-colors">
            Glass Button
          </button>
          <div className="px-3 py-2 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-gray-700 text-sm font-medium">
            Badge
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
          <div className="text-gray-800 font-bold mb-2">Glass Card</div>
          <div className="text-gray-700 text-sm">Frosted transparency effect</div>
        </div>
      </div>
    ),
    "Corporate Gradient": (
      <div className="space-y-3">
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-colors">
            Primary
          </button>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Secondary
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
          <div className="text-white font-semibold mb-2">Card Title</div>
          <div className="text-white/80 text-sm">Beautiful gradient backgrounds</div>
        </div>
      </div>
    ),
    "Neobrutalism": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-black text-white border-4 border-black font-bold uppercase text-sm shadow-[4px_4px_0_#050] hover:translate-x-1 hover:translate-y-1 transition-transform">
            CLICK
          </button>
          <div className="px-3 py-2 border-4 border-black font-bold text-xs shadow-[3px_3px_0_#000]" style={{ backgroundColor: "#ff00ff" }}>
            TAG
          </div>
        </div>
        <div className="bg-cyan-400 border-4 border-black p-4 shadow-[8px_8px_0_#000]">
          <div className="text-black font-bold mb-1 uppercase text-sm">BRUTAL CARD</div>
          <div className="text-black text-sm font-medium">Raw & Bold Design</div>
        </div>
      </div>
    ),
    "Flat Design": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-white text-blue-600 rounded font-medium">Button</button>
          <button className="px-5 py-2 bg-green-500 text-white rounded font-medium">Success</button>
          <button className="px-5 py-2 bg-red-500 text-white rounded font-medium">Danger</button>
        </div>
        <div className="bg-white rounded p-4">
          <div className="text-gray-900 font-bold mb-1">Simple Card</div>
          <div className="text-gray-600 text-sm">No shadows, pure flat design</div>
        </div>
      </div>
    ),
    "Material Design": (
      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 font-bold">+</div>
          <button className="px-5 py-2 bg-white text-gray-800 rounded shadow-md hover:shadow-lg transition-shadow font-medium">
            Raised Button
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="text-gray-900 font-bold mb-2">Material Card</div>
          <div className="text-gray-600 text-sm">Elevated with shadows</div>
          <div className="mt-3 flex gap-2">
            <button className="text-blue-600 text-sm font-medium">ACTION</button>
            <button className="text-blue-600 text-sm font-medium">LEARN MORE</button>
          </div>
        </div>
      </div>
    ),
    "Retro Web / Web 1.0": (
      <div className="space-y-3" style={{ fontFamily: "Arial, sans-serif" }}>
        <div className="flex gap-2 items-center">
          <div className="inline-block px-3 py-1 border-2 border-black bg-yellow-300">
            <span className="text-black font-bold text-sm">NEW!</span>
          </div>
          <a href="#" className="underline text-blue-800 hover:text-blue-600 font-bold">
            → CLICK HERE
          </a>
        </div>
        <div className="bg-white border-2 border-black p-3" style={{ fontFamily: "Courier New, monospace" }}>
          <div className="text-black font-bold mb-1">Classic Box</div>
          <div className="text-gray-700 text-sm">Welcome to the 90s web!</div>
          <div className="mt-2 bg-cyan-400 border border-black px-2 py-1 inline-block text-xs">
            Counter: 000123
          </div>
        </div>
      </div>
    ),
    "Luxury Minimal": (
      <div className="space-y-4">
        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
          Discover More
        </button>
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl p-5">
          <div className="text-white font-medium mb-2" style={{ fontFamily: "system-ui" }}>Premium Card</div>
          <div className="text-white/80 text-sm">Minimalist luxury design</div>
        </div>
      </div>
    ),
    "Tech Dashboard": (
      <div className="space-y-3" style={{ fontFamily: "monospace" }}>
        <div className="flex gap-2 items-center">
          <div className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded text-[#00ff88] text-sm font-medium">
            STATUS: ACTIVE
          </div>
          <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
          <div className="text-[#00ff88] font-bold mb-2 text-sm">System Monitor</div>
          <div className="flex gap-3 text-xs">
            <div className="text-blue-400">CPU: 45%</div>
            <div className="text-purple-400">RAM: 2.1GB</div>
            <div className="text-green-400">NET: ↑ 1.2MB/s</div>
          </div>
        </div>
      </div>
    ),
    "Magazine Layout": (
      <div className="space-y-3">
        <div className="bg-black text-white px-4 py-2 inline-block text-sm font-bold" style={{ fontFamily: "Georgia, serif" }}>
          FEATURED
        </div>
        <div className="bg-white border-l-4 border-black p-4">
          <div className="text-black font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Editorial Headline
          </div>
          <div className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            "Typography-first design with elegant serif fonts"
          </div>
        </div>
      </div>
    ),
    "Claymorphism": (
      <div className="space-y-3">
        <button className="px-6 py-3 bg-white/30 rounded-3xl text-white font-medium shadow-inner hover:bg-white/40 transition-colors">
          Clay Button
        </button>
        <div className="bg-white/20 rounded-[2rem] p-5 shadow-inner">
          <div className="text-white font-bold mb-2">Puffy Card</div>
          <div className="text-white/90 text-sm">Soft, inflated appearance</div>
        </div>
      </div>
    ),
    "Skeuomorphism": (
      <div className="space-y-3">
        <button className="px-5 py-2 rounded-lg text-white font-medium" style={{ background: "linear-gradient(145deg, #9B8266, #7A6350)", boxShadow: "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
          Textured Button
        </button>
        <div className="rounded-xl p-4" style={{ background: "linear-gradient(145deg, #8B7355, #6B5644)", boxShadow: "0 6px 16px rgba(0,0,0,0.4)" }}>
          <div className="text-white font-bold mb-2">Leather Card</div>
          <div className="text-white/80 text-sm">Realistic material</div>
        </div>
      </div>
    ),
    "Bento UI": (
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white rounded-xl p-3 border border-gray-200">
          <div className="text-gray-900 font-semibold text-xs">Box 1</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-200">
          <div className="text-gray-900 font-semibold text-xs">Box 2</div>
        </div>
        <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-200">
          <div className="text-gray-900 font-bold text-sm">Wide Section</div>
          <div className="text-gray-600 text-xs">Grid-based layout</div>
        </div>
      </div>
    ),
    "Y2K Aesthetic": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 rounded-xl font-bold text-sm" style={{ background: "linear-gradient(145deg, #E2E2E2, #C9D6FF)", color: "#FF00FF", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
            Y2K BTN
          </button>
          <div className="px-3 py-1 rounded-full bg-cyan-400 border-2 border-white text-xs font-bold">
            Status
          </div>
        </div>
        <div className="rounded-2xl p-4" style={{ background: "linear-gradient(145deg, #C9D6FF, #E2E2E2)", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
          <div className="font-bold mb-1" style={{ color: "#FF00FF" }}>Metallic Card</div>
          <div className="text-gray-700 text-sm">Chrome effects</div>
        </div>
      </div>
    ),
    "Cyberpunk": (
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <button className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-400 font-mono text-xs uppercase hover:bg-cyan-500/30 transition-colors">
            Connect
          </button>
          <div className="w-2 h-2 bg-magenta-500 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-gray-900/50 border border-cyan-500/30 rounded p-4" style={{ boxShadow: "0 0 20px rgba(0,255,255,0.1)" }}>
          <div className="text-cyan-400 font-mono font-bold text-sm mb-1">NEON_DATA</div>
          <div className="text-magenta-400 font-mono text-xs">0xDEADBEEF</div>
        </div>
      </div>
    ),
    "Memphis Design": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-black text-yellow-400 font-bold text-xs rounded-none border-4 border-red-500" style={{ transform: "rotate(-2deg)" }}>
            BOLD
          </button>
          <div className="w-12 h-12 rounded-full border-4" style={{ borderColor: "#4ECDC4", background: "#FF6B6B" }}></div>
        </div>
        <div className="bg-yellow-400 border-4 border-black p-3" style={{ transform: "rotate(1deg)" }}>
          <div className="text-black font-bold text-sm">Memphis Card</div>
          <div className="text-black text-xs">Bold & Geometric</div>
        </div>
      </div>
    ),
    "Aurora UI": (
      <div className="space-y-3">
        <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white font-medium hover:bg-white/30 transition-all">
          Ethereal
        </button>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
          <div className="text-white font-bold mb-2">Aurora Card</div>
          <div className="text-white/90 text-sm">Flowing gradients</div>
        </div>
      </div>
    ),
    "Vaporwave": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-pink-500 text-white font-mono text-xs border-2 border-cyan-400">
            V A P O R
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-cyan-400 border-2 border-white"></div>
        </div>
        <div className="bg-gradient-to-r from-pink-500/20 to-cyan-400/20 border border-cyan-400 p-3">
          <div className="text-white font-mono font-bold text-sm">ａｅｓｔｈｅｔｉｃ</div>
          <div className="text-cyan-300 font-mono text-xs">90s nostalgia</div>
        </div>
      </div>
    ),
    "Synthwave": (
      <div className="space-y-3">
        <button className="px-5 py-2 rounded text-white font-bold text-sm" style={{ background: "linear-gradient(145deg, #FE53BB, #09FBD3)", boxShadow: "0 0 20px rgba(254, 83, 187, 0.5)" }}>
          NEON
        </button>
        <div className="border-2 border-pink-500 rounded p-3" style={{ background: "linear-gradient(145deg, #1a1a2e, #16213e)", boxShadow: "0 0 30px rgba(254, 83, 187, 0.3)" }}>
          <div className="text-pink-500 font-bold text-sm mb-1" style={{ textShadow: "0 0 10px rgba(254, 83, 187, 0.8)" }}>RETRO GRID</div>
          <div className="text-cyan-400 text-xs">80s futurism</div>
        </div>
      </div>
    ),
    "Bauhaus": (
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 bg-red-600"></div>
          <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-12 bg-yellow-400" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
        </div>
        <div className="bg-white border-4 border-black p-3">
          <div className="text-black font-bold text-sm uppercase">FORM + FUNCTION</div>
          <div className="text-black text-xs">Geometric simplicity</div>
        </div>
      </div>
    ),
    "Art Deco": (
      <div className="space-y-3">
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold text-sm rounded-none border-2 border-yellow-600">
          LUXURY
        </button>
        <div className="bg-gradient-to-b from-gray-900 to-black border-t-4 border-yellow-500 p-4">
          <div className="text-yellow-500 font-serif font-bold text-sm mb-1">Art Deco</div>
          <div className="text-gray-300 text-xs font-serif">Elegant geometry</div>
        </div>
      </div>
    ),
    "Minimalism": (
      <div className="space-y-4">
        <button className="px-8 py-3 bg-black text-white font-light text-sm hover:bg-gray-900 transition-colors">
          Minimal
        </button>
        <div className="bg-white border border-gray-200 p-6">
          <div className="text-black font-light text-sm">Less is more</div>
        </div>
      </div>
    ),
    "3D Web / 3D UI": (
      <div className="space-y-3">
        <button className="px-5 py-3 rounded-lg text-white font-medium" style={{ background: "linear-gradient(145deg, #2a5298, #1e3c72)", boxShadow: "0 8px 16px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)", transform: "perspective(800px) rotateX(5deg)" }}>
          3D Button
        </button>
        <div className="rounded-xl p-4" style={{ background: "linear-gradient(145deg, #1e3c72, #2a5298)", boxShadow: "0 12px 24px rgba(0,0,0,0.4)", transform: "perspective(800px) rotateX(2deg)" }}>
          <div className="text-white font-bold mb-2">3D Card</div>
          <div className="text-cyan-300 text-sm">Depth & perspective</div>
        </div>
      </div>
    ),
    "Dark Mode Aesthetic": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 bg-gray-800 text-white rounded-lg font-medium border border-gray-700 hover:bg-gray-700 transition-colors">
            Dark Button
          </button>
          <div className="px-3 py-2 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs font-medium">
            Active
          </div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <div className="text-white font-bold mb-2">Dark Card</div>
          <div className="text-gray-400 text-sm">Eye-friendly interface</div>
        </div>
      </div>
    ),
    "Dopamine Design": (
      <div className="space-y-3">
        <div className="flex gap-2">
          <button className="px-5 py-2 rounded-2xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #FF6B9D, #C06C84)" }}>
            Happy!
          </button>
          <button className="px-5 py-2 rounded-2xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #6C5CE7, #FFA502)" }}>
            Joy!
          </button>
        </div>
        <div className="rounded-3xl p-4" style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #6C5CE7 100%)" }}>
          <div className="text-white font-bold mb-2">Vibrant Card</div>
          <div className="text-white/90 text-sm">Energy boosting!</div>
        </div>
      </div>
    ),
  };

  return previews[systemName] || null;
};

export default function DesignSystems() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...designSystems.map(s => s.name)];

  const filteredSystems = designSystems.filter(system => {
    if (selectedCategory === 'All') return true;
    return system.name === selectedCategory;
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Design Systems</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Explore 25 different design aesthetics and styles for modern web design. Each system has its own philosophy, characteristics, and ideal use cases.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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
            Showing {filteredSystems.length} {filteredSystems.length === 1 ? 'system' : 'systems'}
          </div>

          {/* Design Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSystems.map((system) => (
              <div
                key={system.name}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Preview Card */}
                <div
                  className="relative overflow-hidden p-8"
                  style={{
                    background: system.name === "Glass UI"
                      ? `url('/heroo.jpg') center center / cover no-repeat`
                      : system.gradient,
                    minHeight: "380px"
                  }}
                >
                  {/* Special effects overlays */}
                  {system.name === "Neobrutalism" && (
                    <div className="absolute inset-0 border-4 border-black" />
                  )}
                  {system.name === "Soft UI / Neuomorphism" && (
                    <div className="absolute inset-0 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]" />
                  )}
                  {system.name === "Material Design" && (
                    <div className="absolute inset-0 shadow-2xl" />
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Title */}
                    <h3
                      className="text-3xl font-bold mb-6"
                      style={{
                        color: system.textColor,
                        fontFamily: system.name === "Magazine Layout" ? "Georgia, serif" :
                                   system.name === "Retro Web / Web 1.0" ? "Courier New, monospace" :
                                   system.name === "Luxury Minimal" ? "system-ui" : "inherit",
                        textShadow: system.name === "Neobrutalism" ? "0px 0px 0 #000" : "none"
                      }}
                    >
                      {system.name}
                    </h3>

                    {/* Component Previews */}
                    <div className="flex-1">
                      <DesignSystemPreview systemName={system.name} textColor={system.textColor} />
                    </div>
                  </div>
                </div>

                {/* Detailed Information Card */}
                <div className="bg-white p-6 border-t border-gray-200">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {system.description}
                  </p>

                  {/* Characteristics */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Key Characteristics
                    </h4>
                    <ul className="space-y-1">
                      {system.characteristics.map((char, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Case */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Best For
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {system.useCase}
                    </p>
                  </div>

                  {/* Component Specs */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Typography</h5>
                      <p className="text-xs text-gray-500">{system.components.typography}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Border Radius</h5>
                      <p className="text-xs text-gray-500">{system.components.borderRadius}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Spacing</h5>
                      <p className="text-xs text-gray-500">{system.components.spacing}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1">Colors</h5>
                      <div className="flex gap-1">
                        {system.components.colors.slice(0, 3).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-4 h-4 rounded border border-gray-300"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
