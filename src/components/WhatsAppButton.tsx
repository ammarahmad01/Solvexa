"use client";

import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923288521417"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Solvexa on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
    >
      {/* Subtle pulse wave */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-0" />

      {/* Official WhatsApp SVG Vector Icon */}
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.777.979-.953 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.894-.797-1.497-1.782-1.673-2.083-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.517-.176-.009-.377-.01-.578-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.379.198 1.9-.12.58-.354 1.78-1.45 2.03-2.078.25-.628.25-1.165.176-1.278-.075-.113-.276-.188-.577-.339zm-5.457 7.425c-1.895 0-3.665-.51-5.197-1.398l-.372-.221-3.864 1.013 1.031-3.766-.242-.386a10.457 10.457 0 0 1-1.604-5.592c0-5.789 4.71-10.499 10.501-10.499 2.804 0 5.44 1.092 7.421 3.074a10.435 10.435 0 0 1 3.075 7.425c0 5.79-4.71 10.5-10.501 10.5zm9.053-19.553C18.647.833 15.44 0 12.015 0 5.39 0 0 5.39 0 12.015c0 2.112.551 4.175 1.6 5.992L0 24l6.168-1.618a11.96 11.96 0 0 0 5.847 1.508h.005c6.623 0 12.015-5.391 12.015-12.015 0-3.21-.125-6.225-3.042-9.143z" />
      </svg>

      {/* Floating tooltip on hover */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-surface-container-highest/95 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-outline-variant/30 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
