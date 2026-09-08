"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = ""
}: AnimatedCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const obj = { val: from };

            animate(obj, {
              val: to,
              duration: duration,
              ease: "outExpo",
              onUpdate: () => {
                if (spanRef.current) {
                  const formatted = decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toString();
                  spanRef.current.textContent = `${prefix}${formatted}${suffix}`;
                }
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, suffix, prefix, decimals]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}{to}{suffix}
    </span>
  );
}
