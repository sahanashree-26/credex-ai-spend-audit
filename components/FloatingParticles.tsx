"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {

    const generatedParticles = Array.from(
      { length: 25 },
      (_, index) => ({
        id: index,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })
    );

    setParticles(generatedParticles);

  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20 animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

    </div>
  );
}