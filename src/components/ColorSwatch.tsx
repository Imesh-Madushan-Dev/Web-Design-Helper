'use client';

import { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb?: string;
  usage?: string;
}

export default function ColorSwatch({ name, hex, rgb, usage }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="group relative">
      <button
        onClick={() => copyToClipboard(hex)}
        className="w-full text-left transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div 
          className="h-32 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 mb-3 border border-foreground/10"
          style={{ backgroundColor: hex }}
        />
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm font-mono text-foreground/70">{hex}</p>
          {rgb && <p className="text-xs font-mono text-foreground/50">{rgb}</p>}
          {usage && <p className="text-xs text-foreground/60 mt-2">{usage}</p>}
        </div>
        
        {copied && (
          <div className="absolute top-2 right-2 bg-foreground text-background px-3 py-1 rounded-md text-xs font-medium shadow-lg">
            Copied!
          </div>
        )}
      </button>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-foreground/50 mt-2">
        Click to copy
      </div>
    </div>
  );
}
