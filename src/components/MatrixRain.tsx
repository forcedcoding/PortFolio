import { useEffect, useState } from "react";

const MatrixRain = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    const dropArray = Array.from({ length: 20 }, () => Math.random() * 100);
    setDrops(dropArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drops.map((delay, index) => (
        <div
          key={index}
          className="absolute text-cyber-green text-xs font-mono opacity-30 animate-matrix-rain"
          style={{
            left: `${(index * 5) % 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="block">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;