"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PROJECTS, isVideoThumb } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";
import Parallax from "@/components/Parallax";
import Boop from "@/components/Boop";
import SkySun from "@/components/SkySun";
import {
  Balloon,
  Bird,
  Cloud,
  PaperPlane,
  Planet,
  Sparkle,
  StarField,
} from "@/components/Doodles";
import styles from "./home.module.css";

function useRotatingWord() {
  const { t } = useLanguage();
  const words = t.home.rotating;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2200
    );
    return () => clearInterval(id);
  }, [words]);
  return words[index % words.length];
}

const PLAY_STYLE = [
  { glyph: "Aa", tone: "" },
  { glyph: "▦", tone: "sand" },
  { glyph: "◐", tone: "accent" },
  { glyph: "✳", tone: "ink" },
];

const FEATURED = [PROJECTS[0], PROJECTS[1], PROJECTS[3]];

export default function Home() {
  const word = useRotatingWord();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  useReveal();

  return (
    <main>
      {/* ============ SKY HERO — panel langit + deck bar ============ */}
      <div className={styles.skyWrap}>
        <section className={styles.sky} aria-label="Perkenalan">
          <div className={styles.skyStars} aria-hidden="true">
            <StarField />
          </div>
          <SkySun className={styles.skySun} />
          <Parallax speed={0.14} className={`${styles.skyCloud} ${styles.skyCloudA}`}>
            <Boop style={{ width: "100%" }} label="Awan — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf1}`}>
                <Cloud style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={-0.06} className={`${styles.skyCloud} ${styles.skyCloudB}`}>
            <Boop style={{ width: "100%" }} label="Awan — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf2}`}>
                <Cloud style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={0.2} className={`${styles.skyCloud} ${styles.skyCloudC}`}>
            <Boop style={{ width: "100%" }} label="Awan — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf3}`}>
                <Cloud style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={-0.16} className={`${styles.skyBirds} ${styles.skyBirdsA}`}>
            <Boop style={{ width: "100%" }} label="Burung — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf2}`}>
                <Bird style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={0.08} className={`${styles.skyBirds} ${styles.skyBirdsB}`}>
            <Boop style={{ width: "100%" }} label="Burung — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf4}`}>
                <Bird style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={0.1} className={styles.skyBalloon}>
            <Boop style={{ width: "100%" }} label="Balon udara — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf5}`}>
                <Balloon style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>
          <Parallax speed={-0.04} className={styles.skyPlanet}>
            <Boop style={{ width: "100%" }} label="Planet — klik untuk animasi">
              <span className={`${styles.skyFloat} ${styles.sf4}`}>
                <Planet style={{ width: "100%", height: "auto" }} />
              </span>
            </Boop>
          </Parallax>

          <div className={styles.skyHillsBack} aria-hidden="true">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,62 C240,22 480,26 720,56 C960,86 1200,80 1440,46 L1440,120 L0,120 Z"
                fill="#9DC0DC"
              >
                <animate
                  attributeName="d"
                  dur="17s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                  values="M0,62 C240,22 480,26 720,56 C960,86 1200,80 1440,46 L1440,120 L0,120 Z;M0,44 C240,62 480,84 720,66 C960,42 1200,24 1440,60 L1440,120 L0,120 Z;M0,62 C240,22 480,26 720,56 C960,86 1200,80 1440,46 L1440,120 L0,120 Z"
                />
              </path>
            </svg>
          </div>
          <div className={styles.skyHills} aria-hidden="true">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,86 C260,54 520,50 760,76 C1000,102 1220,96 1440,70 L1440,120 L0,120 Z"
                fill="#3D6B8F"
              >
                <animate
                  attributeName="d"
                  dur="11s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;0.5;1"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                  values="M0,86 C260,54 520,50 760,76 C1000,102 1220,96 1440,70 L1440,120 L0,120 Z;M0,66 C260,96 520,88 760,56 C1000,40 1220,66 1440,98 L1440,120 L0,120 Z;M0,86 C260,54 520,50 760,76 C1000,102 1220,96 1440,70 L1440,120 L0,120 Z"
                />
              </path>
            </svg>
          </div>
          <div className={styles.skyGrain} aria-hidden="true" />
          <div className={styles.skySheen} aria-hidden="true" />

          <div className={styles.skyInner}>
            <p className={`${styles.skyKicker} reveal`}>
              {t.home.hello}
            </p>
            <h1 className={`${styles.skyTitle} reveal reveal-delay-1`}>
              {t.home.titleA}
              <br />
              with a <em>{t.home.titleB}</em>
            </h1>
            <p className={`${styles.skySub} reveal reveal-delay-2`}>
              {t.home.skySub}
            </p>
            <p className={`${styles.skyHint} reveal reveal-delay-3`}>
              {t.home.hint}
            </p>
          </div>
        </section>

        <div className={styles.deckWrap}>
          <div className={`${styles.deckBar} reveal reveal-delay-2`}>
            <p className={styles.deckText} aria-live="polite">
              <strong>Ahmad Dzaky</strong> — {t.home.deckRole(word)}
              <span className="text-green"> {t.home.deckOpen}</span>
            </p>
            <Link
              href="/contact"
              className={`self-center btn btn-primary btn-sm ${styles.deckCta}`}
            >
              {t.home.deckCta}
            </Link>
          </div>
        </div>

      <div className={styles.skyCover}>

      {/* ============ BIO + FLIGHT PATH ============ */}
      <section className={styles.bioSection} aria-label="Tentang singkat">
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={`${styles.bioCopy} reveal`}>
              <p>
                <strong>{t.home.bioLead1}</strong>
                {t.home.bioRest1}
              </p>
              <p>
                {t.home.bioP2a}
                <strong>{t.home.bioLead2}</strong>
                {t.home.bioP2b}
              </p>
              <p>
                <Link
                  href="/about"
                  className="btn btn-ghost mt-6"
                >
                  {t.home.bioCta}
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.flightWrap} aria-hidden="true">
            <svg
              className={styles.flightSvg}
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
            >
              <path
                d="M-10,95 C180,95 220,20 400,30 C580,40 600,100 780,90 C880,85 940,60 1010,45"
                fill="none"
                stroke="var(--clr-text)"
                strokeWidth="2"
                strokeDasharray="7 9"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            <Parallax speed={-0.05} className={styles.flightPlane}>
              <span className="doodle-float" style={{ display: "block" }}>
                <PaperPlane style={{ width: "100%", height: "auto" }} />
              </span>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <span key={copy} style={{ display: "contents" }}>
              {t.home.marquee.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item} <span>✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ============ SELECTED WORK ============ */}
      <section
        className={styles.block}
        id="selected-work"
        aria-labelledby="work-heading"
      >
        <div className="container">
          <div className={styles.headRow}>
            <h2 className={`${styles.headTitle} reveal`} id="work-heading">
              {t.home.workA}
              <br />
              work<span style={{ color: "var(--clr-accent-2)" }}>.</span>
            </h2>
            <p className={`${styles.headNote} reveal reveal-delay-1`}>
              {t.home.workNote}
            </p>
          </div>

          <div className={styles.workGrid}>
            {FEATURED.map((p, i) => (
              <article
                key={p.id}
                className={`${styles.workCard} reveal reveal-delay-${i + 1}`}
              >
                <div className={styles.thumb}>
                  {isVideoThumb(p.thumb) ? (
                    <video
                      src={p.thumb}
                      muted
                      loop
                      autoPlay
                      playsInline
                      aria-label={p.title}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.thumb} alt={p.title} loading="lazy" />
                  )}
                </div>
                <div className={styles.workBody}>
                  <div className={styles.workMeta}>
                    <span>{isEn ? p.categoryLabelEn : p.categoryLabel}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className={styles.workTitle}>{p.title}</h3>
                  <p className={styles.workDesc}>
                    {isEn ? p.descEn : p.desc}
                  </p>
                  <Link href="/portfolio" className={styles.workLink}>
                    {t.home.openCase}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRIPTYCH — designer-who-codes posture ============ */}
      <section className={styles.block} aria-labelledby="practice-heading">
        <div className="container">
          <div className={styles.headRow}>
            <h2 className={`${styles.headTitle} reveal`} id="practice-heading">
              {t.home.practiceA}
              <br />
              {t.home.practiceB}<span style={{ color: "var(--clr-accent-2)" }}>.</span>
            </h2>
            <p className={`${styles.headNote} reveal reveal-delay-1`}>
              {t.home.practiceNote}
            </p>
          </div>

          <div className={styles.triGrid}>
            {t.home.tri.map((card, i) => (
              <div
                key={card.title}
                className={
                  `${styles.triCard}` +
                  (i === 1 ? ` ${styles.triCardAccent}` : "") +
                  ` reveal${i > 0 ? ` reveal-delay-${i}` : ""}`
                }
              >
                <span className={styles.triIndex}>{card.index}</span>
                <h3 className={styles.triTitle}>{card.title}</h3>
                <p className={styles.triText}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLAYGROUND ============ */}
      <section className={styles.block} aria-labelledby="playground-heading">
        <div className="container">
          <div className={styles.headRow}>
            <h2 className={`${styles.headTitle} reveal`} id="playground-heading">
              Playground<span style={{ color: "var(--clr-accent-2)" }}>.</span>
            </h2>
            <p className={`${styles.headNote} reveal reveal-delay-1`}>
              {t.home.playNote}
            </p>
          </div>

          <div className={styles.playGrid}>
            {t.home.play.map((ex, i) => (
              <div
                key={ex.title}
                className={
                  `${styles.playTile} ` +
                  (PLAY_STYLE[i].tone === "sand"
                    ? styles.playTileSand
                    : PLAY_STYLE[i].tone === "accent"
                      ? styles.playTileAccent
                      : PLAY_STYLE[i].tone === "ink"
                        ? styles.playTileInk
                        : "") +
                  ` reveal reveal-delay-${(i % 3) + 1}`
                }
              >
                <span className={styles.playGlyph} aria-hidden="true">
                  {PLAY_STYLE[i].glyph}
                </span>
                <span className={styles.playIndex}>
                  EXP.0{i + 1}
                </span>
                <h3 className={styles.playTitle}>{ex.title}</h3>
                <p className={styles.playDesc}>{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT BAND ============ */}
      <section className={styles.band} aria-labelledby="about-teaser">
        <div className="container">
          <div className={`${styles.bandGrid} ${styles.block}`}>
            <div>
              <h2 className={`${styles.bandTitle} reveal`} id="about-teaser">
                {t.home.bandTitle}
              </h2>
              <p className={`${styles.bandText} reveal reveal-delay-1`}>
                {t.home.bandText}
              </p>
              <div className="reveal reveal-delay-2">
                <Link href="/about" className="btn btn-ghost">
                  {t.home.bandCta}
                </Link>
              </div>
            </div>
            <div className={`${styles.statRow} reveal reveal-delay-1`}>
              <div>
                <span className={styles.statNum}>35+</span>
                <span className={styles.statLabel}>{t.home.stats[0]}</span>
              </div>
              <div>
                <span className={styles.statNum}>3yr</span>
                <span className={styles.statLabel}>{t.home.stats[1]}</span>
              </div>
              <div>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>{t.home.stats[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA — "Grow together?" posture, original copy ============ */}
      <section className={styles.block} aria-labelledby="cta-heading">
        <div className="container">
          <div className={`${styles.ctaPanel} reveal`}>
            <Parallax speed={-0.08} className={styles.ctaStarA}>
              <Boop label="Bintang — klik untuk animasi">
                <Sparkle style={{ width: 40, height: 40 }} />
              </Boop>
            </Parallax>
            <Parallax speed={0.1} className={styles.ctaStarB}>
              <Boop label="Bintang — klik untuk animasi">
                <Sparkle style={{ width: 26, height: 26 }} />
              </Boop>
            </Parallax>
            <span className={styles.ctaKicker}>{t.home.ctaKicker}</span>
            <h2 className={styles.ctaTitle} id="cta-heading">
              {t.home.ctaA} <em>{t.home.ctaB}</em>
            </h2>
            <p className={styles.ctaText}>
              {t.home.ctaText}
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contact" className="btn btn-primary">
                {t.home.ctaPrimary}
              </Link>
              <Link href="/portfolio" className={styles.ctaGhost}>
                {t.home.ctaGhost}
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    </main>
  );
}
