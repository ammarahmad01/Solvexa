"use client";

import { useState, useRef } from "react";
import { techTabsData } from "../data/techStack";
import { animate } from "animejs";

export default function TechStackSection() {
  const [activeTabId, setActiveTabId] = useState("web");
  const gridRef = useRef<HTMLDivElement>(null);
  const activeTab = techTabsData.find((t) => t.id === activeTabId) || techTabsData[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTabId) return;
    setActiveTabId(tabId);

    if (gridRef.current) {
      animate(gridRef.current, {
        opacity: [0.3, 1],
        translateY: [8, 0],
        duration: 300,
        ease: "outQuad"
      });
    }
  };

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-14 sm:py-20 overflow-hidden bg-surface-container-lowest/60 border-t border-outline-variant/20" id="tech-stack">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 items-center">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            Our Technology Stack
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
            Enterprise-grade frameworks, modern languages, and cutting-edge AI architectures powering Solvexa digital solutions.
          </p>
        </div>

        {/* Navigation Bar - Fixed overflow & horizontal scrolling so Web Development is never cut */}
        <div className="w-full border-b border-outline-variant/20 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-4 sm:gap-7 md:gap-9 px-4 sm:px-6 w-max mx-auto min-w-full justify-start lg:justify-center">
            {techTabsData.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative shrink-0 pb-3 pt-2 text-sm sm:text-base md:text-lg font-bold tracking-tight transition-all duration-300 cursor-pointer whitespace-nowrap px-1 ${
                    isActive
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span>{tab.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Logos Grid - Consistent top alignment across all tabs */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto w-full pt-2 content-start items-start justify-items-center"
        >
          {activeTab.tools.map((tool, idx) => (
            <div
              key={`${activeTabId}-${idx}`}
              className="flex flex-col items-center justify-center group cursor-pointer w-24 sm:w-28 transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Squircle Card Container with Transparent/Subtle Glass Background */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 group-hover:border-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-[0_12px_30px_-8px_rgba(212,175,55,0.25)] transition-all duration-300 p-4">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Tool Label */}
              <span className="mt-2.5 text-xs sm:text-sm font-semibold text-on-surface group-hover:text-primary transition-colors text-center truncate max-w-full">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
