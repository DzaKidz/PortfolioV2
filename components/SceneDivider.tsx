import type { CSSProperties } from "react";

interface SceneDividerProps {
  variant?: "clouds" | "hills";
  /** Warna gelombang (bagian bawah = warna section berikutnya). */
  fill?: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

const PATHS: Record<string, string> = {
  // Tepi awan bergelombang — orisinal, digambar untuk proyek ini.
  clouds:
    "M0,72 C90,30 170,30 250,58 C330,86 410,92 490,62 C570,32 650,28 730,56 C810,84 890,90 970,60 C1050,30 1130,28 1210,54 C1290,80 1370,78 1440,52 L1440,120 L0,120 Z",
  // Dua bukit landai — orisinal, digambar untuk proyek ini.
  hills:
    "M0,84 C220,30 420,26 640,66 C860,106 1080,112 1280,74 C1340,62 1390,58 1440,60 L1440,120 L0,120 Z",
};

/**
 * Pembatas section bergelombang (postur terinspirasi referensi,
 * path & gaya digambar orisinal). Lebar penuh, tinggi responsif.
 */
export default function SceneDivider({
  variant = "clouds",
  fill = "var(--clr-bg)",
  className = "",
  style,
  label,
}: SceneDividerProps) {
  return (
    <div
      className={`scene-divider ${className}`}
      style={style}
      role="presentation"
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d={PATHS[variant]} fill={fill} />
      </svg>
    </div>
  );
}
