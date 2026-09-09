"use client";

import type { ReactNode, MouseEvent } from "react";

interface ScrollToServiceButtonProps {
  targetId: string;
  ariaLabel: string;
  className: string;
  children: ReactNode;
}

export default function ScrollToServiceButton({
  targetId,
  ariaLabel,
  className,
  children,
}: ScrollToServiceButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", `#${targetId}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <a href={`#${targetId}`} aria-label={ariaLabel} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
