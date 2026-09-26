import type { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

/**
 * Doodle SVG orisinal (digambar untuk proyek ini, bukan aset referensi):
 * matahari, awan, burung camar, pesawat kertas, bintang, garis gelombang.
 */
export function Sun({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <circle cx="48" cy="48" r="22" fill="#F4CD44" stroke="#000" strokeWidth="2.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 48 + Math.cos(a) * 30;
        const y1 = 48 + Math.sin(a) * 30;
        const x2 = 48 + Math.cos(a) * 40;
        const y2 = 48 + Math.sin(a) * 40;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Cloud({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 70"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M25 58 C10 58 6 44 16 36 C20 32 26 31 30 33 C34 20 46 12 58 16 C66 8 82 8 90 18 C102 14 116 20 118 32 C130 34 134 48 126 56 C122 60 30 62 25 58 Z"
        fill="#FFFDF8"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Bird({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 48 20"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M2 14 Q12 2 24 12 Q36 2 46 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlane({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M6 32 L58 8 L38 56 L30 38 Z"
        fill="#F4CD44"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M30 38 L58 8"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M24 2 C25.5 16 32 22.5 46 24 C32 25.5 25.5 32 24 46 C22.5 32 16 25.5 2 24 C16 22.5 22.5 16 24 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
      preserveAspectRatio="none"
    >
      <path
        d="M2 14 C18 4 30 4 44 14 C58 24 70 24 84 14 C96 6 106 6 118 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Moon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <mask id="dz-moon-cut">
          <rect width="96" height="96" fill="white" />
          <circle cx="62" cy="36" r="20" fill="black" />
        </mask>
      </defs>
      <circle
        cx="48"
        cy="48"
        r="24"
        fill="#FFF6DE"
        stroke="#000"
        strokeWidth="2.5"
        mask="url(#dz-moon-cut)"
      />
      <circle cx="40" cy="56" r="3" fill="#E8B400" opacity="0.7" />
      <circle cx="48" cy="64" r="2" fill="#E8B400" opacity="0.7" />
    </svg>
  );
}

export function Planet({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <ellipse
        cx="60"
        cy="45"
        rx="52"
        ry="14"
        fill="none"
        stroke="#F4CD44"
        strokeWidth="4"
        transform="rotate(-18 60 45)"
      />
      <circle cx="60" cy="45" r="24" fill="#F4CD44" stroke="#000" strokeWidth="2.5" />
      <path
        d="M42 38 C50 32 68 32 78 40"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function StarField({ className = "", style }: DoodleProps) {
  // Radius sengaja kecil: SVG ini di-slice sehingga satuan user ≈ 10px di layar.
  // Sumbu Y dikunci di pita 30–75 agar tidak terpotong `slice` di layar lebar.
  const stars: Array<[number, number, number, number]> = [
    [7, 31, 0.2, 0], [19, 45, 0.26, 1], [31, 33, 0.16, 2], [43, 49, 0.3, 0],
    [55, 31, 0.18, 1], [67, 43, 0.24, 2], [79, 34, 0.15, 0], [91, 47, 0.28, 1],
    [103, 32, 0.2, 2], [115, 46, 0.22, 0], [126, 35, 0.17, 1],
    [12, 61, 0.27, 2], [25, 73, 0.19, 0], [37, 59, 0.15, 1], [49, 74, 0.31, 2],
    [61, 63, 0.21, 0], [73, 75, 0.17, 1], [85, 60, 0.29, 2], [97, 73, 0.16, 0],
    [109, 62, 0.25, 1], [121, 74, 0.2, 2],
    [16, 39, 0.38, 1], [46, 67, 0.42, 0], [76, 38, 0.36, 2], [106, 69, 0.4, 1],
    [34, 71, 0.13, 0], [64, 36, 0.13, 2], [94, 71, 0.14, 0],
    [124, 53, 0.32, 1], [4, 51, 0.22, 2], [58, 53, 0.16, 1], [88, 53, 0.19, 0],
  ];
  return (
    <svg
      viewBox="0 0 132 104"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
      preserveAspectRatio="xMidYMid slice"
    >
      {stars.map(([cx, cy, r, g], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="#FFFDF8"
          className={r >= 0.28 ? `sky-star-g${g}` : "sky-star"}
        />
      ))}
    </svg>
  );
}

export function Balloon({ className = "", style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 110"
      className={className}
      style={style}
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M40 4 C58 4 70 18 70 34 C70 50 54 62 40 62 C26 62 10 50 10 34 C10 18 22 4 40 4 Z"
        fill="#F4CD44"
        stroke="#000"
        strokeWidth="2.5"
      />
      <path
        d="M40 4 C48 18 48 48 40 62 M40 4 C32 18 32 48 40 62"
        fill="none"
        stroke="#000"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path d="M28 56 L52 56 L48 62 L32 62 Z" fill="#000" />
      <line x1="32" y1="62" x2="30" y2="76" stroke="#000" strokeWidth="1.6" />
      <line x1="48" y1="62" x2="50" y2="76" stroke="#000" strokeWidth="1.6" />
      <rect x="24" y="76" width="32" height="14" rx="3" fill="#FFFDF8" stroke="#000" strokeWidth="2.5" />
    </svg>
  );
}
