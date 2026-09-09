"use client";

import Animations from "./Animations";

export default function BackgroundEffects() {
  return (
    <>
      <Animations />
      {/* Ambient background glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary-container/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-surface-container-highest/30 blur-[180px] rounded-full"></div>
      </div>
      {/* Dynamic WebGL Shader Canvas */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-70" style={{ display: "block" }}>
        <canvas id="shader-canvas-ANIMATION_5" style={{ display: "block", width: "100%", height: "100%" }}></canvas>
      </div>
    </>
  );
}
