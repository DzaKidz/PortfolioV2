"use client";

import { useEffect } from "react";

/**
 * Mengamati semua elemen `.reveal` di dalam scope dan menambahkan
 * class `.visible` saat masuk viewport. Dipanggil ulang setiap
 * `deps` berubah (mis. setelah filter portfolio me-render ulang grid).
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)")
    );
    if (elements.length === 0) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
