import React from "react";

interface SocialIconProps {
  network: "linkedin" | "facebook" | "instagram" | "github" | "twitter" | string;
  className?: string;
}

export default function SocialIcon({ network, className = "h-5 w-5" }: SocialIconProps) {
  const norm = (network || "").toLowerCase().trim();

  if (norm === "linkedin") {
    return (
      <img
        src="/assets/Social%20Icons/linkedin-app-icon.svg"
        alt="LinkedIn"
        className={`${className} object-contain`}
      />
    );
  }

  if (norm === "facebook") {
    return (
      <img
        src="/assets/Social%20Icons/facebook-round-color-icon.svg"
        alt="Facebook"
        className={`${className} object-contain`}
      />
    );
  }

  if (norm === "instagram") {
    return (
      <img
        src="/assets/Social%20Icons/ig-instagram-icon.svg"
        alt="Instagram"
        className={`${className} object-contain`}
      />
    );
  }

  if (norm === "github") {
    return (
      <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.578 0-.286-.011-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.292-1.552 3.299-1.23 3.299-1.23.655 1.653.243 2.873.12 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.806 5.624-5.478 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }

  // Default Twitter / X
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
