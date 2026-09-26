"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Parallax from "@/components/Parallax";
import Tilt from "@/components/Tilt";

const TOOLS = [
  { icon: "🎨", name: "Illustrator" },
  { icon: "🖼️", name: "Photoshop" },
  { icon: "🎬", name: "After Effects" },
  { icon: "🎞️", name: "Premiere Pro" },
  { icon: "🌈", name: "DaVinci Resolve" },
  { icon: "🧊", name: "Blender 3D" },
  { icon: "📐", name: "Figma" },
  { icon: "🌐", name: "HTML5 / CSS3" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "⚛️", name: "React" },
  { icon: "⚡", name: "Tailwind CSS" },
  { icon: "🔀", name: "Git" },
];

const SOFT_CLS = [
  "badge-accent",
  "badge-primary",
  "badge-teal",
  "badge-green",
  "badge-primary",
  "badge-accent",
  "badge-teal",
];

export default function AboutPage() {
  const { t } = useLanguage();
  useReveal();

  return (
    <main>
      <PageHero
        kicker={t.about.kicker}
        labelledBy="about-page-title"
        art="sun"
        title={
          <>
            {t.about.titleA} <span className="gradient-text">Ahmad Dzaky</span>
          </>
        }
        desc={t.about.desc}
      />

      <section
        className="section section-flush"
        aria-label="Profil dan informasi"
      >
        <div className="container">
          <div className="about-grid">
            <aside className="about-avatar-col reveal">
              <Parallax speed={0.05}>
                <Tilt max={7}>
                  <div className="about-avatar-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/avatar.jpg"
                  alt="Ahmad Dzaky"
                  onError={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#EEE8D2,#F4CD44)";
                  }}
                />
                <div className="about-avatar-glow" aria-hidden="true"></div>
                <div className="about-info-badge">
                  <p>{t.about.location}</p>
                  <strong>Jakarta, Indonesia</strong>
                  <p className="mt-2">{t.about.status}</p>
                  <strong className="text-green">
                    {t.about.statusValue}
                  </strong>
                </div>
              </div>
                </Tilt>
              </Parallax>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-block"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                  {t.about.sendCta}
                </Link>
                <a
                  href="#"
                  className="btn btn-ghost btn-block mt-4"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.about.downloadCta}
                </a>
              </div>
            </aside>

            <div className="about-text-col">
              <div className="reveal mb-8">
                <span className="section-label">{t.about.profile}</span>
                <h2 className="section-headTitle mb-4">
                  {t.about.profileTitle}
                </h2>
                {t.about.bio.map((p, i) => (
                  <p className="about-intro" key={i}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="divider"></div>

              <div className="reveal mb-8">
                <span className="section-label">{t.about.toolsLabel}</span>
                <h2 className="section-headTitle mb-6">
                  {t.about.toolsTitle}
                </h2>
                <div className="skills-grid tilt-stage">
                  {TOOLS.map((t) => (
                    <Tilt key={t.name} max={6} scale={1.05}>
                      <div className="skill-card" title={t.name}>
                        <span className="skill-icon">{t.icon}</span>
                        <span className="skill-name">{t.name}</span>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

              <div className="reveal mb-8">
                <span className="section-label">{t.about.softLabel}</span>
                <h2 className="section-headTitle mb-4">
                  {t.about.softTitle}
                </h2>
                <div className="soft-skills-list">
                  {t.about.soft.map((text, i) => (
                    <span
                      key={text}
                      className={`badge badge-lg ${SOFT_CLS[i % SOFT_CLS.length]}`}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              <div className="reveal mb-8">
                <span className="section-label">{t.about.expLabel}</span>
                <h2 className="section-headTitle mb-8">
                  {t.about.expTitle}
                </h2>
                <div className="timeline" role="list">
                  {t.about.experiences.map((e) => (
                    <div className="timeline-item reveal" role="listitem" key={e.title}>
                      <div className="timeline-dot" aria-hidden="true"></div>
                      <p className="timeline-date">{e.date}</p>
                      <h3 className="timeline-title">{e.title}</h3>
                      <p className="timeline-org">
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {e.org}
                      </p>
                      <p className="timeline-desc">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              <div className="reveal">
                <span className="section-label">{t.about.eduLabel}</span>
                <h2 className="section-headTitle mb-8">
                  {t.about.eduTitle}
                </h2>
                <div className="timeline" role="list">
                  {t.about.educations.map((e) => (
                    <div className="timeline-item reveal" role="listitem" key={e.title}>
                      <div className="timeline-dot" aria-hidden="true"></div>
                      <p className="timeline-date">{e.date}</p>
                      <h3 className="timeline-title">{e.title}</h3>
                      <p className="timeline-org">
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        {e.org}
                      </p>
                      <p className="timeline-desc">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
