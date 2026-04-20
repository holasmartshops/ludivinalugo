const ZodiacWatermark = ({ className = "" }: { className?: string }) => {
  const symbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 600" className="w-[600px] h-[600px] max-w-[90vw] max-h-[90vw]">
        <circle cx="300" cy="300" r="280" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1" />
        <circle cx="300" cy="300" r="220" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
        <circle cx="300" cy="300" r="160" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
        {symbols.map((s, i) => {
          const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x = 300 + Math.cos(angle) * 250;
          const y = 300 + Math.sin(angle) * 250;
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(var(--secondary))"
              fontSize="22"
              fontFamily="serif"
            >
              {s}
            </text>
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x1 = 300 + Math.cos(angle) * 160;
          const y1 = 300 + Math.sin(angle) * 160;
          const x2 = 300 + Math.cos(angle) * 220;
          const y2 = 300 + Math.sin(angle) * 220;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--secondary))" strokeWidth="0.5" />;
        })}
      </svg>
    </div>
  );
};

export default ZodiacWatermark;
