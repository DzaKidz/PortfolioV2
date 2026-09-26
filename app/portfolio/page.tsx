"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  PROJECTS,
  badgeClassFor,
  isVideoThumb,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Tilt from "@/components/Tilt";

type Filter = "all" | ProjectCategory;

const FILTER_IDS: Filter[] = ["all", "graphic", "motion", "video", "frontend"];

function ThumbMedia({
  project,
  zoomable = false,
  onZoom,
}: {
  project: Project;
  zoomable?: boolean;
  onZoom?: () => void;
}) {
  if (isVideoThumb(project.thumb)) {
    return (
      <video
        src={project.thumb}
        muted
        loop
        autoPlay
        playsInline
      />
    );
  }
  return (
    <img
      src={project.thumb}
      alt={project.title}
      loading="lazy"
      onClick={zoomable ? onZoom : undefined}
      onError={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(135deg,#EEE8D2,#F4CD44)";
      }}
    />
  );
}

export default function PortfolioPage() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  useReveal([filter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setActive(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active || lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active, lightbox]);

  return (
    <main>
      <PageHero
        kicker={t.portfolio.kicker}
        labelledBy="portfolio-page-title"
        art="spark"
        title={
          <>
            {t.portfolio.titleA}{" "}
            <span className="gradient-text">{t.portfolio.titleB}</span>
          </>
        }
        desc={t.portfolio.desc}
      />

      <section
        className="section section-flush"
        aria-label="Filter karya"
      >
        <div className="container">
          <div
            className="filter-bar reveal"
            role="group"
            aria-label="Filter kategori karya"
          >
            {FILTER_IDS.map((id, i) => (
              <button
                key={id}
                className={`filter-btn${filter === id ? " active" : ""}`}
                data-filter={id}
                onClick={() => setFilter(id)}
              >
                {t.portfolio.filters[i]}
              </button>
            ))}
          </div>

          <div
            className="portfolio-grid tilt-stage"
            id="portfolio-grid"
            aria-live="polite"
            aria-label="Daftar karya"
          >
            {filtered.map((p, idx) => (
              <Tilt key={p.id} max={6}>
                <div
                  className="portfolio-item reveal visible"
                  style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
                  data-category={p.category}
                >
                <article className="project-card">
                  <div className="project-thumb">
                    <ThumbMedia project={p} />
                    <div className="project-thumb-overlay">
                      <button
                        className="btn btn-primary btn-sm open-modal"
                        onClick={() => setActive(p)}
                      >
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {t.portfolio.seeDetail}
                      </button>
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-category-badge">
                      <span className={`badge ${badgeClassFor(p.category)}`}>
                        {isEn ? p.categoryLabelEn : p.categoryLabel}
                      </span>
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">
                      {isEn ? p.descEn : p.desc}
                    </p>
                    <div className="project-tags">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="badge badge-muted">
                          {t}
                        </span>
                      ))}
                      {p.tags.length > 3 && (
                        <span className="badge badge-muted">
                          +{p.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="project-actions">
                      <button
                        className="btn btn-ghost btn-sm open-modal"
                        onClick={() => setActive(p)}
                      >
                        {t.portfolio.detail}
                      </button>
                      {p.live && (
                        <a
                          href={p.live}
                          className="btn btn-outline btn-sm"
                          target="_blank"
                          rel="noopener"
                        >
                          {t.portfolio.preview}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-flush"
        aria-labelledby="collab-heading"
      >
        <div className="container">
          <Tilt max={4}>
          <div className="text-center reveal">
            <p className="section-desc mb-4">
              {t.portfolio.collabText}
            </p>
            <h2 className="section-title mb-6" id="collab-heading">
              {t.portfolio.collabA}{" "}
              <span className="gradient-text">{t.portfolio.collabB}</span>!
            </h2>
            <Link
              href="/contact"
              className="btn btn-primary"
              id="cta-kolaborasi"
            >
              {t.portfolio.collabCta}
            </Link>
          </div>
          </Tilt>
        </div>
      </section>

      {/* MODAL DETAIL */}
      <div
        id="modal-overlay"
        className={`modal-overlay${active ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
      >
        <div id="modal" className="modal">
          {active && (
            <div className="modal-wrapper">
              <button
                className="modal-close"
                aria-label="Tutup modal"
                onClick={() => setActive(null)}
              >
                ✕
              </button>
              <div className="modal-thumb">
                <ThumbMedia
                  project={active}
                  zoomable
                  onZoom={() => !isVideoThumb(active.thumb) && setLightbox(active)}
                />
                {!isVideoThumb(active.thumb) && (
                  <button
                    type="button"
                    className="modal-thumb-expand"
                    onClick={() => setLightbox(active)}
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                    </svg>
                    {t.portfolio.expand}
                  </button>
                )}
              </div>
              <div className="modal-body">
                <div className="modal-meta">
                  <span className={`badge ${badgeClassFor(active.category)}`}>
                    {isEn ? active.categoryLabelEn : active.categoryLabel}
                  </span>
                  <span className="badge badge-muted">{active.year}</span>
                  <span className="badge badge-muted">📋 {active.role}</span>
                </div>
                <h2 className="modal-title" id="modal-title">
                  {active.title}
                </h2>
                <span className="modal-section-label">{t.portfolio.aboutProject}</span>
                <p className="modal-desc">
                  {isEn ? active.longDescEn : active.longDesc}
                </p>
                <span className="modal-section-label">{t.portfolio.tools}</span>
                <div className="modal-tech">
                  {active.tags.map((t) => (
                    <span key={t} className="badge badge-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="modal-actions">
                  {active.live && (
                    <a
                      href={active.live}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t.portfolio.live}
                    </a>
                  )}
                  {active.repo && (
                    <a
                      href={active.repo}
                      className="btn btn-ghost btn-sm"
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      {t.portfolio.repo}
                    </a>
                  )}
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setActive(null)}
                  >
                    {t.portfolio.close}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX */}
      <div
        id="lightbox-overlay"
        className={`lightbox-overlay${lightbox ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Tampilan penuh karya"
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightbox(null);
        }}
      >
        {lightbox && !isVideoThumb(lightbox.thumb) && (
          <figure id="lightbox-figure" className="lightbox-figure">
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Tutup tampilan penuh"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="lightbox-img" src={lightbox.thumb} alt={lightbox.title} />
            <figcaption id="lightbox-caption" className="lightbox-caption">
              {lightbox.title}
            </figcaption>
          </figure>
        )}
      </div>
    </main>
  );
}
