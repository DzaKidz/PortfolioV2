"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

interface ParallaxProps {
  /** Perpindahan (px) per 1px jarak elemen dari tengah viewport. */
  speed?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  ariaHidden?: boolean;
}

/**
 * Parallax ringan berbasis scroll (rAF-throttled).
 * Elemen bergerak translate3d Y proporsional terhadap posisi viewport.
 */
export default function Parallax({
  speed = 0.12,
  className = "",
  style,
  children,
  ariaHidden = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || speed === 0) return;
    let raf = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -240 || rect.top > vh + 240) return;
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const schedule = () => {
      if (!queued) {
        queued = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
      aria-hidden={ariaHidden || undefined}
    >
      {children}
    </div>
  );
}
