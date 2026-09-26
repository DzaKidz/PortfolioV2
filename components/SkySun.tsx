"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "./Doodles";

const DRAG_TOGGLE_PX = 48;

/**
 * Matahari yang bisa digeser & diklik untuk mengganti tema.
 * - Klik (tanpa geser): toggle tema.
 * - Geser > 48px lalu lepas: toggle tema, matahari kembali ke orbit
 *   dengan animasi pegas.
 * - Keyboard: Enter/Space toggle (role switch + aria-checked).
 * Visual mengikuti tema: matahari di siang hari, bulan di malam hari.
 */
export default function SkySun({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [snapping, setSnapping] = useState(false);
  const start = useRef({ x: 0, y: 0, ox: 0, oy: 0, moved: 0 });
  const node = useRef<HTMLDivElement>(null);
  const isNight = theme === "dark";

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, ox: 0, oy: 0, moved: 0 };
    setSnapping(false);
    setDragging(true);
    setOffset({ x: 0, y: 0 });
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - start.current.x;
      const dy = e.clientY - start.current.y;
      // Batasi area gerak agar tetap di dalam panel langit.
      const cx = Math.max(-140, Math.min(140, dx));
      const cy = Math.max(-90, Math.min(90, dy));
      start.current.moved = Math.max(
        start.current.moved,
        Math.hypot(dx, dy)
      );
      setOffset({ x: cx, y: cy });
    },
    [dragging]
  );

  const endDrag = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      setDragging(false);
      const wasDrag = start.current.moved > DRAG_TOGGLE_PX;
      const wasTap = start.current.moved < 8;
      setSnapping(true);
      setOffset({ x: 0, y: 0 });
      if (wasDrag || wasTap) {
        // Tunggu snap-back terlihat dulu sebelum ganti langit.
        window.setTimeout(toggleTheme, wasDrag ? 180 : 0);
      }
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    },
    [dragging, toggleTheme]
  );

  useEffect(() => {
    if (!snapping) return;
    const id = window.setTimeout(() => setSnapping(false), 450);
    return () => window.clearTimeout(id);
  }, [snapping]);

  return (
    <div
      ref={node}
      role="switch"
      tabIndex={0}
      aria-checked={isNight}
      aria-label={
        isNight
          ? "Langit malam. Aktifkan untuk kembali ke siang hari."
          : "Matahari. Geser atau aktifkan untuk ke malam hari."
      }
      title="Geser matahari untuk ganti siang / malam"
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: snapping
          ? "transform 0.45s cubic-bezier(0.2, 1.4, 0.3, 1)"
          : undefined,
        cursor: dragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      <span
        key={isNight ? "moon" : "sun"}
        className="skysun-swap"
        style={{ display: "block" }}
      >
        <span className="doodle-float" style={{ display: "block" }}>
          {isNight ? (
            <Moon style={{ width: "100%", height: "auto" }} />
          ) : (
            <Sun style={{ width: "100%", height: "auto" }} />
          )}
        </span>
      </span>
    </div>
  );
}
