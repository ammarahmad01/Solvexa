"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-container via-primary to-secondary transition-all duration-100 ease-out shadow-[0_0_12px_rgba(242,202,80,0.8),0_0_4px_rgba(219,184,255,0.6)]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
