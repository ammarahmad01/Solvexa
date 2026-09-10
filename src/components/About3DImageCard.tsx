"use client";

import React, { useRef, useState } from "react";

interface About3DImageCardProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function About3DImageCard({
  src,
  alt,
  className = "",
  containerClassName = "",
}: About3DImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Calculate 3D tilt angles (up to ±14 degrees)
  const tiltX = isHovered ? -coords.y * 14 : 0;
  const tiltY = isHovered ? coords.x * 16 : 0;
  const glareX = (coords.x + 0.5) * 100;
  const glareY = (coords.y + 0.5) * 100;

  return (
    <div
      className={`relative w-full flex items-center justify-center [perspective:1200px] ${containerClassName}`}
    >
      {/* Dynamic Ambient Glow Behind Card */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/25 via-secondary/15 to-transparent blur-2xl transition-all duration-700"
        style={{
          opacity: isHovered ? 0.8 : 0.35,
          transform: `translate3d(${tiltY * 0.9}px, ${-tiltX * 0.9}px, 0)`,
        }}
      />

      {/* 3D Transform Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`
            : "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.3s ease"
            : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.65s ease",
          transformStyle: "preserve-3d",
        }}
        className={`group relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-outline-variant/30 bg-surface-container-lowest shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.1)] hover:border-primary/60 hover:shadow-[0_30px_80px_-20px_rgba(242,202,80,0.25),0_0_40px_rgba(212,175,55,0.18)] cursor-pointer select-none ${
          !isHovered ? "about-3d-idle" : ""
        }`}
      >
        {/* Crystal Clear Main Image (no dark tinting or overlay) */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-[380px] sm:h-[440px] lg:h-[490px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] ${className}`}
          loading="lazy"
        />

        {/* Dynamic Specular Sheen following mouse */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 420px at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), rgba(242,202,80,0.1) 35%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
