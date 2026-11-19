"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

interface BoopProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Called on every click, alongside the boop animation. */
  onClick?: () => void;
}

/**
 * Click-to-replay animation for decorative art. Hidden from assistive tech:
 * a doodled cloud is not a control, so it takes no tab stop.
 */
export default function Boop({
  children,
  className = "",
  style,
  onClick,
}: BoopProps) {
  const [nonce, setNonce] = useState(0);

  return (
    <span
      className={`boop ${className}`}
      aria-hidden="true"
      onClick={() => {
        setNonce((n) => n + 1);
        onClick?.();
      }}
      style={{ display: "inline-block", cursor: "pointer", ...style }}
    >
      <span
        key={nonce}
        className={nonce === 0 ? undefined : "boop-play"}
        style={{ display: "inline-block" }}
      >
        {children}
      </span>
    </span>
  );
}
