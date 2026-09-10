import React from "react";
import { ProjectItem } from "../data/work";

interface ProjectDeviceDisplayProps {
  project: ProjectItem;
  isReversed?: boolean;
}

export default function ProjectDeviceDisplay({ project, isReversed }: ProjectDeviceDisplayProps) {
  const { deviceType, accentColor } = project;

  return (
    <div className="group relative w-full max-w-xl mx-auto lg:max-w-none flex items-center justify-center py-2 sm:py-4">
      {/* Themed Ambient Radial Glow (borderless — image sits directly on the page) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 65%)`,
        }}
      />

        {/* Subtle Watermark Network Nodes matching reference but translucent */}
        <div
          className={`absolute pointer-events-none opacity-10 select-none ${
            isReversed ? "top-2 right-2 sm:top-5 sm:right-5" : "top-2 left-2 sm:top-5 sm:left-5"
          }`}
        >
          <svg
            className="w-36 h-36 sm:w-56 sm:h-56 text-white"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="8" strokeOpacity="0.5" />
            <circle cx="100" cy="100" r="48" fill="currentColor" fillOpacity="0.25" />
            <line x1="100" y1="15" x2="165" y2="45" stroke="currentColor" strokeWidth="6" strokeOpacity="0.6" />
            <line x1="165" y1="45" x2="185" y2="105" stroke="currentColor" strokeWidth="6" strokeOpacity="0.6" />
            <line x1="185" y1="105" x2="160" y2="165" stroke="currentColor" strokeWidth="6" strokeOpacity="0.6" />
            <line x1="100" y1="185" x2="35" y2="155" stroke="currentColor" strokeWidth="6" strokeOpacity="0.6" />
            <line x1="35" y1="155" x2="15" y2="95" stroke="currentColor" strokeWidth="6" strokeOpacity="0.6" />
            <circle cx="100" cy="15" r="10" fill="currentColor" />
            <circle cx="165" cy="45" r="10" fill="currentColor" />
            <circle cx="185" cy="105" r="10" fill="currentColor" />
            <circle cx="160" cy="165" r="10" fill="currentColor" />
            <circle cx="100" cy="185" r="10" fill="currentColor" />
            <circle cx="35" cy="155" r="10" fill="currentColor" />
            <circle cx="15" cy="95" r="10" fill="currentColor" />
          </svg>
        </div>

        {/* ========================================================
            CASE 1: WEB APPLICATION (Laptop Display)
        ======================================================== */}
        {deviceType === "web" && (
          <div className="relative w-full sm:w-[92%] z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.015]">
            <LaptopFrame project={project} />
          </div>
        )}

        {/* ========================================================
            CASE 2: MOBILE APPLICATION (Mobile Phone Display)
        ======================================================== */}
        {deviceType === "mobile" && (
          <div className="relative z-10 flex items-center justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.02]">
            <PhoneFrame project={project} size="large" />
          </div>
        )}

        {/* ========================================================
            CASE 3: BOTH WEB & MOBILE (Laptop + Phone Dual Display)
        ======================================================== */}
        {deviceType === "both" && (
          <div className="relative w-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-[1.015]">
            {/* Main Laptop Mockup (Centered) */}
            <div className="relative w-[86%] sm:w-[82%] -translate-x-2 sm:-translate-x-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
              <LaptopFrame project={project} />
            </div>

            {/* Overlapping Phone Mockup (Front Corner — shape preserved, scaled down for balance) */}
            <div className="absolute right-1 sm:right-4 bottom-1.5 sm:bottom-4 z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] origin-bottom-right rotate-1 sm:rotate-2 scale-[0.72] sm:scale-[0.82] md:scale-[0.88] hover:rotate-0 transition-transform duration-300">
              <PhoneFrame project={project} size="compact" />
            </div>
          </div>
        )}
    </div>
  );
}

// -------------------------------------------------------------
// Laptop/MacBook Chassis Subcomponent
// -------------------------------------------------------------
function LaptopFrame({ project }: { project: ProjectItem }) {
  return (
    <div className="w-full flex flex-col">
      {/* Laptop Screen Bezel */}
      <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-t-lg sm:rounded-t-xl border-[4px] sm:border-[7px] border-slate-900 overflow-hidden shadow-inner flex flex-col">
        {/* Top Webcam Dot */}
        <div className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-800 border border-slate-700 z-30" />

        {/* Project Screen Content */}
        <div className="relative w-full h-full bg-slate-900 flex flex-col select-none overflow-hidden">
          {project.id === "custom-name-domain" ? (
            /* Custom Name Domain Exact Screen */
            <div className="w-full h-full bg-white text-slate-900 flex flex-col font-sans">
              <div className="w-full h-5 sm:h-8 bg-white border-b border-slate-200 px-2 sm:px-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-sm bg-orange-500 flex items-center justify-center text-[6px] sm:text-[8px] text-white font-black">
                    C
                  </div>
                  <span className="text-[7px] sm:text-[10px] font-bold text-slate-800">Custom Name Domain</span>
                </div>
                <div className="hidden sm:flex items-center gap-2.5 text-[8px] text-slate-600 font-medium">
                  <span>Home</span>
                  <span>Pricing</span>
                  <span>FAQ</span>
                  <span>Access Mailbox</span>
                </div>
                <div className="px-1.5 sm:px-2 py-0.5 rounded bg-[#0284c7] text-white text-[6px] sm:text-[8px] font-bold">
                  Get Started
                </div>
              </div>

              <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-50/50 to-white flex-grow">
                <h4 className="text-[9px] sm:text-base font-black text-slate-900 tracking-tight leading-snug">
                  Take Control of Your <span className="text-amber-500">Name Online</span>
                </h4>
                <p className="text-[6px] sm:text-[9px] text-slate-500 max-w-xs mt-0.5 sm:mt-1 leading-tight line-clamp-2">
                  Are you using your company email for personal use? Be professional with your custom domain.
                </p>

                <div className="mt-1.5 sm:mt-3 w-full max-w-xs flex items-center rounded border border-slate-300 overflow-hidden shadow-sm bg-white">
                  <div className="px-1.5 py-0.5 text-[6px] sm:text-[9px] text-slate-400 flex-grow text-left truncate">
                    Ex: johnnyguy123@yahoo.com VS john@domain.com
                  </div>
                  <div className="px-1.5 sm:px-2.5 py-0.5 bg-amber-500 text-white text-[6px] sm:text-[8px] font-bold shrink-0">
                    Search
                  </div>
                </div>

                <div className="mt-1.5 sm:mt-2.5 w-full flex items-center justify-between px-1 sm:px-2 text-left">
                  <div className="text-[6px] sm:text-[8px] font-bold text-slate-700 leading-tight">
                    <p>Create Your Domain.</p>
                    <p className="text-sky-600">Grow Your Brand.</p>
                    <p>Protect Your Name.</p>
                  </div>
                  <div className="relative w-14 sm:w-24 h-7 sm:h-10 rounded bg-slate-200 overflow-hidden shadow border border-slate-300 flex items-center justify-center">
                    <img src={project.heroImage} alt="Video thumbnail" className="w-full h-full object-cover" />
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#0284c7] flex items-center justify-center text-white text-[6px] sm:text-[8px]">
                      ▶
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : project.id === "luca-ai" ? (
            /* LUCA.ai Exact Screen */
            <div className="w-full h-full bg-[#0d0a21] text-white flex flex-col font-sans">
              <div className="w-full h-5 sm:h-8 bg-[#0d0a21]/90 border-b border-purple-900/40 px-2 sm:px-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] sm:text-[10px] font-black tracking-wider text-amber-400 bg-purple-900/60 px-1 py-0.5 rounded">
                    LUCA
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2.5 text-[8px] text-purple-200/80 font-medium">
                  <span>Who We Are</span>
                  <span>Features</span>
                  <span>The Science</span>
                  <span>Contact</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[6px] sm:text-[8px] text-purple-300">Sign In</span>
                  <div className="px-1.5 sm:px-2 py-0.5 rounded bg-purple-600 text-white text-[6px] sm:text-[8px] font-bold">
                    Trial
                  </div>
                </div>
              </div>

              <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center relative flex-grow overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25)_0%,transparent_70%)]" />

                <div className="px-1.5 py-0.5 rounded-full bg-purple-800/40 border border-purple-500/30 text-[6px] sm:text-[7px] text-purple-300 uppercase tracking-widest font-mono mb-0.5">
                  The Technology
                </div>

                <h4 className="text-[8px] sm:text-sm font-extrabold text-white tracking-tight leading-snug z-10 max-w-xs">
                  Intelligent Reading Science Inside <span className="text-purple-400">LUCALabs</span>
                </h4>

                <div className="my-1 sm:my-1.5 flex items-center justify-center gap-1.5 z-10">
                  <div className="w-5 sm:w-8 h-5 sm:h-8 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-500 flex items-center justify-center shadow-md shadow-purple-600/40">
                    <span className="material-symbols-outlined text-white text-[10px] sm:text-sm">mic</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-0.5 sm:w-1 h-2 sm:h-4 bg-purple-400 rounded-full animate-pulse" />
                    <div className="w-0.5 sm:w-1 h-3 sm:h-6 bg-purple-300 rounded-full animate-pulse delay-75" />
                    <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-150" />
                  </div>
                </div>

                <p className="text-[6px] sm:text-[8px] text-purple-200/70 max-w-xs leading-tight z-10 line-clamp-2">
                  Most reading solutions listen at word level. LUCA listens at phoneme level.
                </p>

                <div className="mt-1 sm:mt-2 flex items-center gap-1.5 z-10">
                  <div className="px-1.5 py-0.5 rounded bg-purple-600 text-white text-[6px] sm:text-[7px] font-bold">
                    Inside Tech
                  </div>
                  <div className="px-1.5 py-0.5 rounded border border-purple-400/40 text-purple-200 text-[6px] sm:text-[7px] font-medium">
                    Evidence
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* General Web Screen for Other Projects */
            <div className="w-full h-full relative flex flex-col bg-slate-950 font-sans">
              <div className="w-full h-5 sm:h-6 bg-slate-900/90 border-b border-slate-800 px-2 sm:px-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 text-[7px] sm:text-[8px] text-slate-400 font-mono truncate max-w-[100px] sm:max-w-[150px]">
                    {project.liveUrl.replace("https://", "")}
                  </span>
                </div>
                <div className="px-1 py-0.5 rounded bg-slate-800 text-[6px] sm:text-[7px] text-slate-300 font-mono">
                  SSL Active
                </div>
              </div>

              <div className="relative w-full flex-grow overflow-hidden">
                <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-2 sm:p-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] sm:text-xs font-bold text-white tracking-tight leading-tight">
                        {project.brandName}
                      </p>
                      <p className="text-[7px] sm:text-[9px] text-slate-300 font-medium line-clamp-1">
                        {project.title}
                      </p>
                    </div>
                    <div className="px-1.5 sm:px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-right">
                      <p className="text-[6px] sm:text-[7px] font-mono uppercase text-slate-400">{project.metricsLabel}</p>
                      <p className="text-[8px] sm:text-xs font-bold font-mono" style={{ color: project.accentColor }}>
                        {project.metrics}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MacBook Aluminum Base */}
      <div className="relative w-[110%] -ml-[5%] h-2.5 sm:h-3.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-b-lg sm:rounded-b-xl shadow-2xl flex items-start justify-center">
        <div className="w-10 sm:w-14 h-0.5 sm:h-1 bg-slate-700/80 rounded-b-sm" />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Smartphone Chassis Subcomponent (Proper hardware UI — notch,
// camera lens, speaker, side buttons, home indicator)
// -------------------------------------------------------------
function PhoneFrame({
  project,
  size,
}: {
  project: ProjectItem;
  size: "large" | "compact";
}) {
  const isCompact = size === "compact";
  const displayImage = project.mobileImage || project.heroImage;
  const sideBtn = "absolute w-[3px] rounded-full bg-gradient-to-b from-slate-400 via-slate-600 to-slate-400";

  return (
    <div
      className={`relative shrink-0 ${
        isCompact ? "w-20 sm:w-28 md:w-34" : "w-36 sm:w-48 md:w-56"
      } aspect-[9/18]`}
    >
      {/* Side Hardware Buttons — Power (right), Mute + Volume (left) */}
      <div
        className={`${sideBtn} -right-[3px] top-[21%] ${
          isCompact ? "h-7 sm:h-10" : "h-12 sm:h-16"
        }`}
      />
      <div
        className={`${sideBtn} -left-[3px] top-[16%] ${
          isCompact ? "h-4 sm:h-6" : "h-7 sm:h-10"
        }`}
      />
      <div
        className={`${sideBtn} -left-[3px] top-[25%] ${
          isCompact ? "h-6 sm:h-8" : "h-10 sm:h-14"
        }`}
      />
      <div
        className={`${sideBtn} -left-[3px] top-[36%] ${
          isCompact ? "h-6 sm:h-8" : "h-10 sm:h-14"
        }`}
      />

      {/* Phone Body — black chassis with metallic edge ring */}
      <div className="relative w-full h-full rounded-[1.7rem] sm:rounded-[2.4rem] bg-slate-950 border-2 sm:border-[3px] border-slate-700/70 shadow-[0_20px_45px_rgba(0,0,0,0.85),inset_0_0_0_1.5px_rgba(255,255,255,0.07)] overflow-hidden flex flex-col select-none">
        {/* Top Notch Bar — camera lens + speaker slit */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-[54%] h-[3.2%] min-h-[13px] sm:min-h-[19px] bg-slate-950 rounded-b-lg sm:rounded-b-xl border-x-2 border-b-2 border-slate-800/80 flex items-center justify-center gap-1.5 sm:gap-2">
          {/* Camera Lens */}
          <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-800 ring-1 ring-slate-600/50">
            <div className="absolute inset-[30%] rounded-full bg-blue-900/70" />
            <div className="absolute top-[12%] left-[18%] w-[28%] h-[28%] rounded-full bg-slate-400/50" />
          </div>
          {/* Speaker Slit */}
          <div
            className={`rounded-full bg-slate-800 ${
              isCompact ? "w-5 sm:w-7 h-[2px]" : "w-8 sm:w-12 h-[2px] sm:h-[3px]"
            }`}
          />
        </div>

        {/* Screen — image fills the bezel edge-to-edge */}
        <div className="relative w-full h-full overflow-hidden bg-slate-900">
          <img
            src={displayImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Mobile UI App Glass Card Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-1.5 sm:p-3">
            <p className="text-[7px] sm:text-[10px] font-bold text-white tracking-tight leading-tight">
              {project.brandName}
            </p>
            <p className="text-[5px] sm:text-[8px] text-slate-300 font-medium line-clamp-1">
              Mobile Experience
            </p>
            <div
              className="mt-1 py-0.5 sm:py-1 px-1.5 rounded-md text-[5px] sm:text-[7px] font-bold text-white text-center shadow"
              style={{ backgroundColor: project.accentColor }}
            >
              Launch App
            </div>
          </div>

          {/* Screen glare (subtle diagonal sheen) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
        </div>

        {/* Bottom Home Indicator — floating */}
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-30 w-8 sm:w-14 h-[2.5px] sm:h-1 rounded-full bg-white/80 shadow" />
      </div>
    </div>
  );
}
