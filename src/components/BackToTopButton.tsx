"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "animejs";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (total > 0) {
        const progress = Math.round((window.scrollY / total) * 100);
        setScrollProgress(progress);
        setVisible(window.scrollY > 350);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (buttonRef.current) {
      animate(buttonRef.current, {
        scale: [1, 0.85, 1.1, 1],
        duration: 400,
        ease: "outElastic(1, .8)"
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-6 sm:bottom-22 sm:right-6 z-50 p-3 rounded-full bg-surface-container-low/90 backdrop-blur-xl border border-primary/40 text-primary hover:text-white hover:bg-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2 cursor-pointer"
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        {/* Circular SVG progress ring */}
        <svg className="w-7 h-7 -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#f2ca50"
            strokeWidth="3"
            strokeDasharray="94.2"
            strokeDashoffset={94.2 - (94.2 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>
        <span className="material-symbols-outlined text-sm absolute text-primary group-hover:text-white transition-colors">
          arrow_upward
        </span>
      </div>
      <span className="text-[11px] font-mono font-bold pr-1 text-on-surface-variant group-hover:text-primary">
        {scrollProgress}%
      </span>
    </button>
  );
}
