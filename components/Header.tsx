"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const langSwitch = (id: string) => (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.nav.langLabel}
      id={id}
    >
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-opt${lang === l ? " active" : ""}`}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header id="navbar" className={`navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="nav-inner" aria-label="Navigasi utama">
          <Link href="/" className="nav-logo">
            <span>Ahmad Dzaky</span>
          </Link>

          <ul className="nav-links" role="list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link${isActive(l.href) ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {langSwitch("lang-switch-desktop")}
            <Link href="/contact" className="nav-cta">
              {t.nav.hire}
            </Link>
          </div>

          <button
            id="nav-toggle"
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div
        id="nav-mobile"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link${isActive(l.href) ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            alignItems: "center",
            marginTop: "var(--space-2)",
          }}
        >
          {langSwitch("lang-switch-mobile")}
          <Link
            href="/contact"
            className="btn btn-primary mt-4"
            style={{ justifyContent: "center", flex: 1 }}
            onClick={() => setOpen(false)}
          >
            {t.nav.hire}
          </Link>
        </div>
      </div>
    </>
  );
}
