interface SpacingVisualizerProps {
  size: string;
  label: string;
  pixels: string;
}

export default function SpacingVisualizer({ size, label, pixels }: SpacingVisualizerProps) {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-foreground/10 hover:bg-foreground/5 transition-colors px-4 -mx-4 rounded-lg">
      <div className="w-32 text-sm font-medium text-foreground/70">{label}</div>
      <div className="flex-1 flex items-center gap-4">
        <div 
          className="bg-foreground/20 border-2 border-foreground/40 rounded"
          style={{ width: size, height: '40px' }}
        />
        <div className="text-sm font-mono text-foreground/60">
          {size} <span className="text-foreground/40">({pixels})</span>
        </div>
      </div>
    </div>
  );
}
