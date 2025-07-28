const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      {/* Horizontal lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            top: `${12.5 * (i + 1)}%`,
            left: 0,
            right: 0,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{
            left: `${8.33 * (i + 1)}%`,
            top: 0,
            bottom: 0,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
      
      {/* Circuit nodes */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-neon"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Data flow particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyber-orange rounded-full animate-data-flow"
          style={{
            top: `${12.5 * (i + 1)}%`,
            animationDelay: `${i * 0.8}s`
          }}
        />
      ))}
    </div>
  );
};

export default CircuitPattern;