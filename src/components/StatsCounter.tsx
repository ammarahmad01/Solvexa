"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function StatsCounter() {
  const stats = [
    { from: 0, to: 50, suffix: "+", label: "Projects Delivered", desc: "Enterprise web, mobile & AI solutions" },
    { from: 0, to: 10, suffix: "+", label: "Global Clients", desc: "Founders, scale-ups & enterprises" },
    { from: 80, to: 99.8, suffix: "%", decimals: 1, label: "On-Time Velocity", desc: "Guaranteed agile milestone releases" },
    { from: 1.0, to: 4.9, suffix: "/5", decimals: 1, label: "Client Satisfaction", desc: "Consistent verified 5-star ratings" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-2 sm:py-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xl border border-outline-variant/25 shadow-xl">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center px-2 py-2.5 rounded-xl hover:bg-surface-container-high/30 transition-colors group"
          >
            <div className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 font-mono tracking-tight">
              <AnimatedCounter
                from={stat.from}
                to={stat.to}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                duration={1800}
              />
            </div>
            <span className="font-headline-sm text-xs sm:text-sm font-bold text-white mt-1">
              {stat.label}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant/80 mt-0.5 max-w-[180px] leading-tight">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
