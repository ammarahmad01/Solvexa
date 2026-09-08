"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function HeroLogo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (cardRef.current) {
      // Sensible initial reveal animation
      animate(cardRef.current, {
        opacity: [0, 1],
        scale: [0.94, 1],
        duration: 800,
        ease: "outExpo"
      });
    }
  }, []);

  // Sensible, subtle mouse-following tilt (max 10 degrees)
  const rotateX = -mousePos.y * 14;
  const rotateY = mousePos.x * 16;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center [perspective:1200px] -translate-y-2 sm:-translate-y-3 lg:-translate-y-4"
    >
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 sm:w-88 sm:h-88 bg-gradient-to-tr from-[#6807ba]/25 via-primary/18 to-transparent blur-[85px] rounded-full"></div>
      </div>

      {/* 3D Floating Logo - Sensible Floating Animation, Borderless & Seamless */}
      <div
        ref={cardRef}
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.25s cubic-bezier(0.2, 0, 0.2, 1)",
          transformStyle: "preserve-3d"
        }}
        className="relative w-full flex flex-col items-center justify-center py-4 group animate-pulse [animation-duration:6s]"
      >
        {/* Inner Logo with 3D Depth */}
        <div className="relative z-10 flex flex-col items-center justify-center [transform:translateZ(30px)] w-full">
          <div className="relative w-full flex items-center justify-center px-4">
            <img
              src="/assets/logo.png"
              alt="Solvexa Logo 3D"
              className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] h-auto object-contain filter drop-shadow-[0_12px_30px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform duration-500 select-none"
            />
          </div>

          {/* Subtitle Accent Line: Where Creativity Meets Innovation */}
          <div className="mt-4 sm:mt-5 flex items-center gap-3 [transform:translateZ(18px)]">
            <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-primary/60"></span>
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-primary uppercase font-bold drop-shadow-sm text-center">
              Where Creativity Meets Innovation
            </span>
            <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-primary/60"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
