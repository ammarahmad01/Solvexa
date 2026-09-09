import React from "react";
import Link from "next/link";
import { workData } from "../../data/work";
import ProjectBrandLogo from "../../components/ProjectBrandLogo";
import ProjectDeviceDisplay from "../../components/ProjectDeviceDisplay";
import TechLogo from "../../components/TechLogos";
import ContactCtaSection from "../../components/ContactCtaSection";
import ClientLoveSection from "../../components/ClientLoveSection";

export const metadata = {
  title: "Work & Portfolio — Production Case Studies | Solvexa",
  description:
    "Explore our complete portfolio of 15 production-grade SaaS platforms, AI ecosystems, mobile apps, enterprise terminals, and digital solutions built by Solvexa.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* ========================================================
          HERO SECTION (Enriched Content, Professional & Clean, NO BADGES)
      ======================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center overflow-hidden">
        {/* Subtle Ambient Backglow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Our Work —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Built for Scale, Precision &amp; Impact
            </span>
          </h1>

          <p className="font-body-lg text-sm sm:text-base lg:text-xl text-on-surface-variant mt-4 sm:mt-5 max-w-3xl leading-relaxed">
            Solvexa designs and engineers mission-critical web applications, high-concurrency SaaS platforms, mobile ecosystems, and autonomous AI infrastructure for high-growth startups and global enterprises.
          </p>

          <p className="text-xs sm:text-sm lg:text-base text-on-surface-variant/80 mt-2.5 max-w-2xl leading-relaxed">
            From zero-to-one product architecture to hyper-scale cloud deployments, every solution is engineered for sub-second response times, bank-grade resilience, and intuitive user delight.
          </p>

          {/* Key Metrics / Highlights Row (Enriched Hero Content, NO BADGES) */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-outline-variant/20 text-left">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary font-mono">15+</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">Production Releases</p>
              <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">SaaS, Mobile &amp; AI platforms</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary font-mono">99.99%</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">Uptime SLA Architecture</p>
              <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Hardened cloud microservices</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-cyan-400 font-mono">&lt;100ms</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">Telemetry Latency</p>
              <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Real-time WebSocket sync</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 border border-outline-variant/25 backdrop-blur-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-400 font-mono">100%</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-1">Custom Codebases</p>
              <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">Zero cookie-cutter templates</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15 PROJECT SECTIONS (Reduced Gaps, Tight & Fluid Flow)
      ======================================================== */}
      <div className="w-full flex flex-col">
        {workData.map((project, index) => {
          const isMockupLeft = index % 2 === 0;

          return (
            <section
              key={project.id}
              id={project.id}
              className={`relative w-full py-8 sm:py-10 lg:py-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop border-t border-outline-variant/15 ${
                index % 2 === 1 ? "bg-surface-container-lowest/25" : "bg-transparent"
              }`}
            >
              {/* Subtle Themed Section Backglow */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[400px] h-[280px] rounded-full blur-[130px] pointer-events-none opacity-15 -z-10 ${
                  isMockupLeft ? "left-6" : "right-6"
                }`}
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                {/* Left Column: Mockup if isMockupLeft, Info if not */}
                {isMockupLeft ? (
                  <>
                    {/* Device Display (Left) */}
                    <div className="lg:col-span-6 order-1">
                      <ProjectDeviceDisplay project={project} isReversed={false} />
                    </div>

                    {/* Content Column (Right) */}
                    <div className="lg:col-span-6 order-2 flex flex-col items-start gap-3.5 sm:gap-5">
                      {/* Brand Logo */}
                      <ProjectBrandLogo
                        type={project.brandLogoType}
                        brandName={project.brandName}
                      />

                      {/* Heading with Brand Highlight themed according to app */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                        <span style={{ color: project.accentColor }}>
                          {project.brandName} {project.brandSeparator}{" "}
                        </span>
                        <span>{project.title}</span>
                      </h2>

                      {/* Detailed Narrative Paragraph */}
                      <p className="text-slate-300 text-xs sm:text-sm lg:text-[16px] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Icons (Authentic vector marks, clean glass chips, NO BADGES) */}
                      <div className="w-full flex flex-col gap-1.5 pt-0.5">
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                          Technologies &amp; Architecture:
                        </p>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 hover:border-outline-variant/60 transition-all text-[11px] sm:text-xs font-medium text-slate-200"
                            >
                              <TechLogo name={tech} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="w-full sm:w-auto flex items-center gap-2.5 sm:gap-4 pt-1 flex-wrap">
                        {/* Explore More Button themed to app */}
                        <Link
                          href={`/work/${project.slug}`}
                          className="w-full sm:w-auto text-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                          style={{
                            backgroundColor: project.accentColor,
                            boxShadow: `0 8px 20px -4px ${project.themeGlow}`,
                          }}
                        >
                          Explore More
                        </Link>

                        {/* Visit Live Site Button */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-white border border-outline-variant/40 hover:border-outline-variant/70 font-bold text-xs sm:text-sm md:text-base transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow hover:-translate-y-0.5"
                        >
                          <span className="material-symbols-outlined text-sm sm:text-base">language</span>
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content Column (Left) */}
                    <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start gap-3.5 sm:gap-5">
                      {/* Brand Logo */}
                      <ProjectBrandLogo
                        type={project.brandLogoType}
                        brandName={project.brandName}
                      />

                      {/* Heading with Brand Highlight themed according to app */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                        <span style={{ color: project.accentColor }}>
                          {project.brandName} {project.brandSeparator}{" "}
                        </span>
                        <span>{project.title}</span>
                      </h2>

                      {/* Detailed Narrative Paragraph */}
                      <p className="text-slate-300 text-xs sm:text-sm lg:text-[16px] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Icons (Authentic vector marks, clean glass chips, NO BADGES) */}
                      <div className="w-full flex flex-col gap-1.5 pt-0.5">
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
                          Technologies &amp; Architecture:
                        </p>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 hover:border-outline-variant/60 transition-all text-[11px] sm:text-xs font-medium text-slate-200"
                            >
                              <TechLogo name={tech} className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="w-full sm:w-auto flex items-center gap-2.5 sm:gap-4 pt-1 flex-wrap">
                        {/* Explore More Button themed to app */}
                        <Link
                          href={`/work/${project.slug}`}
                          className="w-full sm:w-auto text-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                          style={{
                            backgroundColor: project.accentColor,
                            boxShadow: `0 8px 20px -4px ${project.themeGlow}`,
                          }}
                        >
                          Explore More
                        </Link>

                        {/* Visit Live Site Button */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-white border border-outline-variant/40 hover:border-outline-variant/70 font-bold text-xs sm:text-sm md:text-base transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow hover:-translate-y-0.5"
                        >
                          <span className="material-symbols-outlined text-sm sm:text-base">language</span>
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                    </div>

                    {/* Device Display (Right) */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                      <ProjectDeviceDisplay project={project} isReversed={true} />
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Client Love Testimonials */}
      <ClientLoveSection />

      {/* Bottom Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
