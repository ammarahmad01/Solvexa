import React from "react";

interface ProjectBrandLogoProps {
  type: string;
  brandName: string;
}

export default function ProjectBrandLogo({ type, brandName }: ProjectBrandLogoProps) {
  switch (type) {
    case "custom-name-domain":
      return (
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 6L48 16.5V37.5L30 48L12 37.5V16.5L30 6Z"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M18 20L30 13L42 20"
              stroke="#f97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 40L30 47L18 40"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M48 24L52 28L48 32" fill="#0284c7" />
            <path d="M12 36L8 32L12 28" fill="#f97316" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight text-slate-100 uppercase leading-none font-sans">
              Custom Name
            </span>
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-widest leading-none mt-1">
              Domain
            </span>
          </div>
        </div>
      );

    case "luca":
      return (
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center px-4 py-1.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 shadow-[0_4px_14px_rgba(245,158,11,0.4)] border-2 border-white/40 transform -rotate-1">
            <span className="text-2xl font-black tracking-wider text-white font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              LUCA
            </span>
            <span className="text-[10px] font-extrabold text-white/90 ml-1 uppercase tracking-wider">
              .ai
            </span>
          </div>
        </div>
      );

    case "aetheria":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <span className="material-symbols-outlined text-white text-2xl">neurology</span>
          </div>
          <span className="text-lg font-black tracking-wider text-white">AETHERIA</span>
        </div>
      );

    case "apex":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <span className="material-symbols-outlined text-white text-2xl">change_history</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white uppercase">Apex Horizon</span>
        </div>
      );

    case "vaultpay":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="material-symbols-outlined text-white text-2xl">account_balance</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Vault<span className="text-emerald-400">Pay</span></span>
        </div>
      );

    case "healthpulse":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-blue-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
            <span className="material-symbols-outlined text-white text-2xl">monitor_heart</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Health<span className="text-rose-400">Pulse</span></span>
        </div>
      );

    case "quantedge":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="material-symbols-outlined text-white text-2xl">candlestick_chart</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Quant<span className="text-cyan-400">Edge</span></span>
        </div>
      );

    case "omnicart":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <span className="material-symbols-outlined text-white text-2xl">shopping_cart</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Omni<span className="text-violet-400">Cart</span></span>
        </div>
      );

    case "novapulse":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
          </div>
          <span className="text-lg font-black tracking-widest text-white uppercase">Nova Pulse</span>
        </div>
      );

    case "cloudforge":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-700 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <span className="material-symbols-outlined text-white text-2xl">cloud_sync</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Cloud<span className="text-sky-400">Forge</span></span>
        </div>
      );

    case "edusphere":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined text-white text-2xl">school</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Edu<span className="text-blue-400">Sphere</span></span>
        </div>
      );

    case "urbanride":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
            <span className="material-symbols-outlined text-white text-2xl">electric_scooter</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Urban<span className="text-emerald-400">Ride</span></span>
        </div>
      );

    case "solvcore":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <span className="material-symbols-outlined text-white text-2xl">database</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Solv<span className="text-cyan-400">Core</span></span>
        </div>
      );

    case "lumina":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
            <span className="material-symbols-outlined text-white text-2xl">diamond</span>
          </div>
          <span className="text-lg font-black tracking-widest text-white uppercase">Lumina</span>
        </div>
      );

    case "soundwave":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="material-symbols-outlined text-white text-2xl">graphic_eq</span>
          </div>
          <span className="text-lg font-black tracking-tight text-white">Sound<span className="text-indigo-400">Wave</span></span>
        </div>
      );

    default:
      return (
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0284c7] flex items-center justify-center text-white font-bold">
            {brandName.charAt(0)}
          </div>
          <span className="text-lg font-bold text-white">{brandName}</span>
        </div>
      );
  }
}
