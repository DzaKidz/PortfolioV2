"use client";

import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/lib/i18n";
import SceneDivider from "./SceneDivider";

export default function Footer() {
  const { theme, toggleTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <>
    <SceneDivider variant="hills" fill="var(--clr-surface-2)" />
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <span>Ahmad Dzaky</span>
            </Link>
            <p className="footer-desc">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <p className="footer-heading">{t.footer.nav}</p>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/" className="footer-link">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  {t.nav.work}
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">{t.footer.social}</p>
            <ul className="footer-links" role="list">
              <li>
                <a
                  href="https://linkedin.com/in/ahmadzaky"
                  target="_blank"
                  rel="noopener"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ahmadzaky"
                  target="_blank"
                  rel="noopener"
                  className="footer-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/ahmadzaky"
                  target="_blank"
                  rel="noopener"
                  className="footer-link"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ahmadzaky"
                  target="_blank"
                  rel="noopener"
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Ahmad Dzaky</p>
          <div className="theme-toggle-wrap">
            <span className="theme-toggle-label">Tema</span>
            <button
              type="button"
              className="theme-toggle"
              id="theme-toggle"
              role="switch"
              aria-checked={theme === "dark"}
              aria-label="Ganti tampilan terang / gelap"
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setTheme("dark");
                if (e.key === "ArrowRight") setTheme("light");
              }}
            >
              <span className="theme-toggle-icons" aria-hidden="true">
                <svg
                  className="icon-sun"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <svg
                  className="icon-moon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </span>
              <span className="theme-toggle-thumb"></span>
            </button>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/DzaKidz"
              className="social-link"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ahmadzaky"
              className="social-link"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/ahmadzaky"
              className="social-link"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
