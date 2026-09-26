"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

interface BoopProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  label?: string;
  /** Dipanggil pada tiap klik, di samping animasi boop. */
  onClick?: () => void;
}

/**
 * Pembungkus interaksi klik: setiap klik memutar ulang animasi
 * "boop" (lompatan + goyangan). Untuk awan, burung, sparkle, dll.
 * Murni dekoratif — pointer-events & fokus tetap milik anak bila ada.
 */
export default function Boop({
  children,
  className = "",
  style,
  label,
  onClick,
}: BoopProps) {
  const [nonce, setNonce] = useState(0);

  return (
    <span
      className={`boop ${className}`}
      role="button"
      tabIndex={0}
      aria-label={label ?? "Elemen dekoratif interaktif, klik untuk animasi"}
      onClick={() => {
        setNonce((n) => n + 1);
        onClick?.();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setNonce((n) => n + 1);
          onClick?.();
        }
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
