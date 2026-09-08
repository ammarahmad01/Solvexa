import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export default function TechLogo({ name, className = "w-6 h-6" }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case "next.js":
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 180 180" fill="currentColor">
          <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next-g1)" />
            <rect fill="url(#next-g2)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient id="next-g1" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next-g2" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "react":
    case "react native":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "typescript":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect fill="#3178C6" height="128" rx="16" width="128" />
          <path d="M88.94 100.83c-1.4 2.1-3.4 3.7-5.9 4.7-2.6 1.1-5.6 1.6-9.1 1.6-4.4 0-8.3-.9-11.7-2.7-3.4-1.8-6.1-4.4-8-7.8s-2.9-7.4-2.9-12c0-4.6 1-8.7 3-12.2 2-3.5 4.8-6.2 8.3-8.1 3.5-1.9 7.5-2.9 12-2.9 3.5 0 6.6.6 9.3 1.7s4.9 2.8 6.6 5l-7.7 6.4c-2.1-2.6-4.9-3.9-8.3-3.9-2.7 0-5.1.7-7.1 2.1s-3.6 3.4-4.6 5.9-1.6 5.5-1.6 8.7c0 3.3.5 6.3 1.6 8.9 1.1 2.6 2.7 4.5 4.8 5.8 2.1 1.3 4.6 2 7.6 2 3.8 0 7-1.4 9.6-4.2l7.7 6.9zM36.14 52.33h32.7v10.9h-10.4v43.9h-12v-43.9h-10.3v-10.9z" fill="#FFF" />
        </svg>
      );

    case "python":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M63.5 8c-28.5 0-26.7 12.3-26.7 12.3l.03 12.8h27.1v3.8H26.3S8 34.8 8 63.3c0 28.6 16 27.6 16 27.6h9.5v-13.3s-.5-16 15.7-16h27s15.2.2 15.2-14.7V22.7S93.2 8 63.5 8zm-14.7 8.3c2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9z" fill="#3776AB" />
          <path d="M64.5 120c28.5 0 26.7-12.3 26.7-12.3l-.03-12.8H64.1v-3.8h37.6s18.3 2.1 18.3-26.4c0-28.6-16-27.6-16-27.6h-9.5v13.3s.5 16-15.7 16h-27s-15.2-.2-15.2 14.7v24.2s-1.8 14.7 27.9 14.7zm14.7-8.3c-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9 0 2.7-2.2 4.9-4.9 4.9z" fill="#FFD43B" />
        </svg>
      );

    case "node.js":
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 8l54 31.2v62.4L64 122.8 10 99.6V37.2L64 8z" fill="#339933" />
          <path d="M64 24.3l40.1 23.2v46.3L64 117 23.9 93.8V47.5L64 24.3z" fill="#FFF" />
          <path d="M64 40.5l26.2 15.1v30.2L64 100.9l-26.2-15.1V55.6L64 40.5z" fill="#339933" />
        </svg>
      );

    case "flutter":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M78.6 8L16.4 70.2l19.4 19.4L117.4 8H78.6z" fill="#42A5F5" />
          <path d="M78.6 63.8L43.8 98.6l19.4 19.4 19.4-19.4 34.8-34.8H78.6z" fill="#0D47A1" />
          <path d="M63.2 118l19.4-19.4 19.4 19.4-19.4 19.4L63.2 118z" fill="#42A5F5" />
        </svg>
      );

    case "figma":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M44 8h40a20 20 0 0 1 0 40H64V8H44a20 20 0 0 0 0 40h20V8z" fill="#F24E1E" />
          <path d="M44 48a20 20 0 0 1 20-20v40H44a20 20 0 0 1 0-40z" fill="#A259FF" />
          <path d="M44 88a20 20 0 0 1 20-20v40a20 20 0 0 1-20-20z" fill="#0ACF83" />
          <circle cx="84" cy="68" r="20" fill="#1ABCFE" />
          <path d="M84 8a20 20 0 0 1 0 40H64V8h20z" fill="#FF7262" />
        </svg>
      );

    case "docker":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M123.6 57.5c-2.4-1.8-7.7-2.7-12.8-1.5-1.5-7.7-6.9-13.8-14.8-17.7-1.1-.5-2.3-.9-3.5-1.2l-2.4 4.5c.9.3 1.8.6 2.6 1 6.1 3 10.3 7.8 11.5 13.9-3.7-1-7.8-.5-11.4 1.3-4.9 2.5-8.2 6.9-9.3 12.4H3.8c-1.3 4.2-1.9 8.7-1.9 13.3 0 28.5 23.3 40.5 53.4 40.5 35.8 0 62.4-18.7 67.2-46.7 5.1-.3 9.4-2.8 11.6-6.6 2.4-4.2 1.3-9.5-2.1-13.2h-8.4z" fill="#2496ED" />
          <rect fill="#2496ED" height="11.4" width="11.4" x="38.7" y="44" />
          <rect fill="#2496ED" height="11.4" width="11.4" x="52.4" y="44" />
          <rect fill="#2496ED" height="11.4" width="11.4" x="66" y="44" />
          <rect fill="#2496ED" height="11.4" width="11.4" x="52.4" y="30.3" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8zm24.6 92.4c-4.3 1.3-9.2 1.8-14.5 1.8-16.7 0-28.7-7.2-34.4-20.7-3.8-9-3.3-21.7 1.4-33.1 5.4-13.1 15.6-22.3 27.2-24.8 2.7-.6 5.4-.8 8.1-.8 11.2 0 20.8 4.6 25.8 12.3 4.1 6.3 5 14.5 2.5 22.8-2.6 8.5-8.5 15.9-16.4 20.3-6.6 3.7-14.5 5.5-22.9 5.2-1.7-.1-3.3-.3-4.8-.7 1.9 4.8 5.7 8.2 10.9 9.8 4.2 1.3 9.2 1.4 14.6.2l2.5 7.9z" fill="#4169E1" />
        </svg>
      );

    case "aws":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M67.8 82.3c-14.8 0-26.6-5.8-35.8-15.3-1.4-1.4-1.2-3.3.4-4.5 1.5-1.1 3.4-.9 4.8.5 8.1 8.3 18.5 13.4 30.6 13.4 10.2 0 19.8-3.4 27.8-9.8 1.4-1.1 3.4-1 4.7.4 1.3 1.4 1.2 3.4-.2 4.6-9 7.3-20.1 10.7-32.3 10.7z" fill="#FF9900" />
          <path d="M102.3 70.8c-1.3-1.6-4.5-.6-6.6-.1-2.2.5-3.3 1.9-3.5 3.3-.2 1.4.8 2.6 2.3 2.6 1.7 0 4.7-.6 6.8-1.5 1.8-.8 2.1-3 1-4.3z" fill="#FF9900" />
        </svg>
      );

    case "three.js":
    case "webgl":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="currentColor">
          <path d="M64 8L10 101.6h108L64 8zm0 29.8l38.2 65.8H25.8L64 37.8z" />
        </svg>
      );

    case "google":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      );

    case "facebook":
    case "meta":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="24" fill="#1877F2"/>
          <path fill="#FFF" d="M29.5 24.5h-4v14h-6v-14h-3v-5h3v-3.5c0-4 2.5-6.5 6.5-6.5h4v5h-2.5c-1.5 0-2 .5-2 2V19.5h4.5l-.5 5z"/>
        </svg>
      );

    case "instagram":
    case "insta":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <defs>
            <radialGradient id="ig-g1" cx="20%" cy="100%" r="150%">
              <stop offset="0%" stopColor="#ffd600"/>
              <stop offset="25%" stopColor="#ff7a00"/>
              <stop offset="50%" stopColor="#ff0169"/>
              <stop offset="75%" stopColor="#d300c5"/>
              <stop offset="100%" stopColor="#7638fa"/>
            </radialGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#ig-g1)"/>
          <circle cx="24" cy="24" r="8.5" fill="none" stroke="#FFF" strokeWidth="3"/>
          <rect x="9" y="9" width="30" height="30" rx="8" fill="none" stroke="#FFF" strokeWidth="3"/>
          <circle cx="34" cy="14" r="2" fill="#FFF"/>
        </svg>
      );

    case "microsoft":
      return (
        <svg className={className} viewBox="0 0 48 48">
          <rect x="4" y="4" width="18" height="18" fill="#F25022"/>
          <rect x="26" y="4" width="18" height="18" fill="#7FBA00"/>
          <rect x="4" y="26" width="18" height="18" fill="#00A4EF"/>
          <rect x="26" y="26" width="18" height="18" fill="#FFB900"/>
        </svg>
      );

    case "openai":
    case "gpt":
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="#0A0A0A" stroke="#10A37F" strokeWidth="1.5"/>
          <path d="M24 10a7.5 7.5 0 0 1 6.5 3.8l-1.3.8a6 6 0 0 0-5.2-3.1 6 6 0 0 0-5.2 3.1l-1.3-.8A7.5 7.5 0 0 1 24 10zm11.3 7a7.5 7.5 0 0 1 0 7.5l-1.3-.8a6 6 0 0 0 0-6l1.3-.7zm-2.8 13.5a7.5 7.5 0 0 1-6.5 3.8l-1.3-.8a6 6 0 0 0 5.2-3.1 6 6 0 0 0-5.2-3.1l1.3-.8a7.5 7.5 0 0 1 6.5 4zm-17 0a7.5 7.5 0 0 1-6.5-3.8l1.3-.8a6 6 0 0 0 5.2 3.1 6 6 0 0 0 5.2-3.1l1.3.8a7.5 7.5 0 0 1-6.5 3.8zm-2.8-13.5a7.5 7.5 0 0 1 0-7.5l1.3.8a6 6 0 0 0 0 6l-1.3.7z" fill="#10A37F"/>
          <circle cx="24" cy="24" r="4" fill="#10A37F"/>
        </svg>
      );

    case "antigravity":
    case "agy":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id="agy-g" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6807ba"/>
              <stop offset="0.5" stopColor="#d4af37"/>
              <stop offset="1" stopColor="#f2ca50"/>
            </linearGradient>
          </defs>
          <path d="M24 4L42 40H6L24 4Z" stroke="url(#agy-g)" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M24 16L34 36H14L24 16Z" fill="url(#agy-g)" opacity="0.85"/>
          <circle cx="24" cy="27" r="2.5" fill="#FFF"/>
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded-lg bg-surface-container-highest flex items-center justify-center text-primary font-mono text-[10px] font-bold border border-primary/30`}>
          {name.slice(0, 3).toUpperCase()}
        </div>
      );
  }
}
