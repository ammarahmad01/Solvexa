"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import HeroLogo3D from "./HeroLogo3D";
import { animate } from "animejs";

export default function HeroSection() {
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textColRef.current) {
      // Smooth staggered entrance animation using Anime.js
      const elements = Array.from(textColRef.current.children);
      animate(elements, {
        opacity: [0, 1],
        translateY: [18, 0],
        delay: (_target, i) => (i || 0) * 100,
        duration: 700,
        ease: "outExpo"
      });
    }
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center pt-8 sm:pt-12 lg:pt-16 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pb-6 sm:pb-8 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 z-10 relative">
        {/* Left Column: Clean, Compact, Professional Copy */}
        <div
          ref={textColRef}
          className="w-full lg:w-[54%] flex flex-col items-start text-left z-20"
        >
          {/* Main Title */}
          <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] leading-[1.18] font-extrabold tracking-tight text-white mb-3">
            Transform Your Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]">
              Digital Success
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="font-body-lg text-base sm:text-[17px] text-on-surface-variant max-w-xl mb-8 leading-relaxed font-normal">
            Solvexa delivers end-to-end digital solutions designed around your business from high-performance websites and mobile applications to custom software and intelligent AI-powered solutions that automate, optimize, and accelerate growth.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-label-md text-xs sm:text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.5)] active:scale-95 transition-all duration-300 shadow-lg border border-primary-fixed/40 cursor-pointer"
            >
              <span>Get Started</span>
              
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-label-md text-xs sm:text-sm font-semibold text-on-surface bg-surface-container-lowest/50 hover:bg-surface-container-high/80 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Our Work</span>
              <span className="text-primary">↗</span>
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Animated Logo Shifted Higher */}
        <div className="w-full lg:w-[46%] flex items-center justify-center">
          <HeroLogo3D />
        </div>
      </div>
    </section>
  );
}
