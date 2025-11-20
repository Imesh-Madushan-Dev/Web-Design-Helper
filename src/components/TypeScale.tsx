interface TypeScaleProps {
  size: string;
  label: string;
  weight?: number;
  example?: string;
}

export default function TypeScale({ size, label, weight = 400, example = 'The quick brown fox jumps over the lazy dog' }: TypeScaleProps) {
  return (
    <div className="border-b border-foreground/10 py-6 hover:bg-foreground/5 transition-colors px-4 -mx-4 rounded-lg">
      <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
        <span className="text-sm font-medium text-foreground/70">{label}</span>
        <div className="flex gap-4 text-xs font-mono text-foreground/50">
          <span>{size}</span>
          <span>Weight: {weight}</span>
        </div>
      </div>
      <p style={{ fontSize: size, fontWeight: weight }} className="text-foreground">
        {example}
      </p>
    </div>
  );
}
