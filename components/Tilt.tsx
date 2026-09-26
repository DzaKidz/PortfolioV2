"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

interface TiltProps {
  /** Sudut maksimal (derajat) pada tiap sumbu. */
  max?: number;
  /** Skala saat disentuh pointer. */
  scale?: number;
  /**
   * Jeda geser kartu (px) yang mengikuti arah kedatangan kursor —
   * kursor masuk dari kiri → kartu bergeser ke kiri. 0 = nonaktif.
   */
  shift?: number;
  /**
   * Dorongan tambahan (px) searah laju kursor, melemah sendiri bila
   * kursor berhenti. 0 = nonaktif.
   */
  lead?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const clamp = (v: number, min: number, max: number) =>
  v < min ? min : v > max ? max : v;

/**
 * Efek 3D tilt mengikuti pointer dengan lerp rAF (halus, tanpa library).
 * Induk sebaiknya memakai class `tilt-stage` (perspective).
 * Nonaktif hanya di perangkat tanpa hover (mis. ponsel).
 */
export default function Tilt({
  max = 8,
  scale = 1.02,
  shift = 0,
  lead = 0,
  className = "",
  style,
  children,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;

    // rotasi (deg)
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    // geser statis mengikuti arah kursor (px)
    let gx = 0;
    let gy = 0;
    let cgx = 0;
    let cgy = 0;
    // dorongan laju (px), di-decay tiap frame
    let lx = 0;
    let ly = 0;
    let clx = 0;
    let cly = 0;
    // jejak pointer untuk estimasi laju
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;

    const render = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      cgx += (gx - cgx) * 0.1;
      cgy += (gy - cgy) * 0.1;
      clx += (lx - clx) * 0.22;
      cly += (ly - cly) * 0.22;

      // laju menghilang dengan sendirinya saat kursor diam
      lx += (0 - lx) * 0.14;
      ly += (0 - ly) * 0.14;
      if (Math.abs(lx) < 0.04) lx = 0;
      if (Math.abs(ly) < 0.04) ly = 0;

      const sx = cgx + clx;
      const sy = cgy + cly;
      const settled =
        Math.abs(tx - cx) < 0.02 &&
        Math.abs(ty - cy) < 0.02 &&
        Math.abs(gx - cgx) < 0.05 &&
        Math.abs(gy - cgy) < 0.05 &&
        Math.abs(lx - clx) < 0.05 &&
        Math.abs(ly - cly) < 0.05 &&
        tx === 0 &&
        ty === 0 &&
        gx === 0 &&
        gy === 0 &&
        lx === 0 &&
        ly === 0;

      if (settled) {
        el.style.transform = "";
        raf = 0;
        return;
      }

      const parts: string[] = [];
      if (Math.abs(sx) > 0.02 || Math.abs(sy) > 0.02) {
        parts.push(`translate3d(${sx.toFixed(2)}px, ${sy.toFixed(2)}px, 0)`);
      }
      parts.push(`rotateX(${cx.toFixed(2)}deg)`);
      parts.push(`rotateY(${cy.toFixed(2)}deg)`);
      parts.push(`scale3d(${scale}, ${scale}, 1)`);
      el.style.transform = parts.join(" ");

      raf = requestAnimationFrame(render);
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      tx = -py * max * 2;
      ty = px * max * 2;
      gx = px * 2 * shift;
      gy = py * 2 * shift;

      if (lead > 0) {
        const now = performance.now();
        if (lastT > 0) {
          const dt = clamp(now - lastT, 16, 90);
          const vx = ((e.clientX - lastX) / dt) * 16;
          const vy = ((e.clientY - lastY) / dt) * 16;
          lx = clamp(vx * 0.5, -lead, lead);
          ly = clamp(vy * 0.5, -lead, lead);
        }
        lastX = e.clientX;
        lastY = e.clientY;
        lastT = now;
      }

      kick();
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      gx = 0;
      gy = 0;
      lx = 0;
      ly = 0;
      lastT = 0;
      kick();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [max, scale, shift, lead]);

  return (
    <div ref={ref} className={`tilt ${className}`} style={style}>
      {children}
    </div>
  );
}
