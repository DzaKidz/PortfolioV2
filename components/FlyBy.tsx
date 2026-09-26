"use client";

import { useEffect, useRef } from "react";
import { Bird, PaperPlane } from "./Doodles";

/**
 * Pesawat kertas & kawanan burung yang terbang menyeberangi layar
 * seiring halaman di-scroll (dipetakan ke progres scroll total).
 * Hanya menyetel satu custom property `--p` (0..1) — perhitungan posisi
 * dilakukan CSS calc() agar rAF tetap murah. Nonaktif saat reduced-motion.
 */
export default function FlyBy() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layer.current;
    if (!el) return;

    let raf = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      el.style.setProperty("--p", p.toFixed(4));
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
      el.style.removeProperty("--p");
    };
  }, []);

  return (
    <div ref={layer} className="flyby-layer" aria-hidden="true">
      <div className="flyby-plane">
        <span className="flyby-wobble">
          <PaperPlane style={{ width: "100%", height: "auto" }} />
        </span>
      </div>

      <div className="flyby-flock">
        <span className="flyby-wobble flyby-wobble-slow">
          <Bird style={{ width: "100%", height: "auto" }} />
        </span>
        <span className="flyby-wobble">
          <Bird style={{ width: "100%", height: "auto" }} />
        </span>
        <span className="flyby-wobble flyby-wobble-late">
          <Bird style={{ width: "100%", height: "auto" }} />
        </span>
      </div>

      <div className="flyby-flock flyby-flock-b">
        <span className="flyby-wobble flyby-wobble-late">
          <Bird style={{ width: "100%", height: "auto" }} />
        </span>
        <span className="flyby-wobble">
          <Bird style={{ width: "100%", height: "auto" }} />
        </span>
      </div>
    </div>
  );
}
