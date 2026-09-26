import type { ReactNode } from "react";
import Parallax from "./Parallax";
import { PaperPlane, Sparkle, Squiggle, Sun } from "./Doodles";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  desc?: string;
  labelledBy: string;
  /** Set doodle pengiring: "sun" | "plane" | "spark" */
  art?: "sun" | "plane" | "spark";
}

/**
 * Hero seragam untuk inner pages: kicker mono, judul serif, doodle
 * melayang dengan parallax berlapis. Server component yang
 * mengomposisikan <Parallax/> (client) — pola komposisi resmi Next.
 */
export default function PageHero({
  kicker,
  title,
  desc,
  labelledBy,
  art = "spark",
}: PageHeroProps) {
  return (
    <section className="pagehero" aria-labelledby={labelledBy}>
      <Parallax
        speed={-0.08}
        className="pagehero-doodle pagehero-doodle-left"
        ariaHidden
      >
        <span className="doodle-float" style={{ display: "block" }}>
          {art === "sun" && <Sun style={{ width: 72, height: 72 }} />}
          {art === "plane" && (
            <PaperPlane style={{ width: 64, height: 64 }} />
          )}
          {art === "spark" && (
            <Sparkle
              style={{ width: 44, height: 44, color: "var(--clr-accent-2)" }}
            />
          )}
        </span>
      </Parallax>

      <Parallax
        speed={0.1}
        className="pagehero-doodle pagehero-doodle-right"
        ariaHidden
      >
        <span
          className="doodle-float"
          style={{ display: "block", animationDelay: "-2.4s" }}
        >
          <Squiggle style={{ width: 110, height: 22, color: "var(--clr-text)" }} />
        </span>
      </Parallax>

      <div className="container pagehero-inner">
        <span className="section-label reveal">{kicker}</span>
        <h1 className="page-hero-title reveal reveal-delay-1" id={labelledBy}>
          {title}
        </h1>
        {desc && (
          <p className="page-hero-desc reveal reveal-delay-2">{desc}</p>
        )}
      </div>
    </section>
  );
}
