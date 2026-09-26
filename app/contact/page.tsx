"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import Tilt from "@/components/Tilt";

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const { t } = useLanguage();
  useReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const clearError = (key: keyof Errors) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (!name.trim() || name.trim().length < 2)
      nextErrors.name = t.contact.errName;
    if (!email.trim() || !EMAIL_REGEX.test(email.trim()))
      nextErrors.email = t.contact.errEmail;
    if (!subject.trim() || subject.trim().length < 3)
      nextErrors.subject = t.contact.errSubject;
    if (!message.trim() || message.trim().length < 10)
      nextErrors.message = t.contact.errMessage;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSent(false);
    }, 6000);
  };

  return (
    <main>
      <PageHero
        kicker={t.contact.kicker}
        labelledBy="contact-page-title"
        art="plane"
        title={
          <>
            {t.contact.titleA}{" "}
            <span className="gradient-text">{t.contact.titleB}</span>
          </>
        }
        desc={t.contact.desc}
      />

      <section
        className="section section-flush"
        aria-label="Informasi kontak dan formulir"
      >
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2 className="section-headTitle mb-4">{t.contact.infoTitle}</h2>
              <p>
                {t.contact.infoTextA}
                <strong className="text-ink">{t.contact.infoTextB}</strong>
                .
              </p>

              <div className="quick-contacts">
                <a
                  href="https://wa.me/6285643155260"
                  className="quick-contact-btn"
                  id="btn-whatsapp"
                  target="_blank"
                  rel="noopener"
                  aria-label="Chat WhatsApp"
                >
                  <span
                    className="quick-contact-icon quick-contact-icon--wa"
                    aria-hidden="true"
                  >
                    💬
                  </span>
                  <span className="info">
                    <span className="label">WhatsApp</span>
                    <span className="value">+62 856 4315 5260</span>
                  </span>
                </a>

                <a
                  href="https://t.me/dzakyms"
                  className="quick-contact-btn"
                  id="btn-telegram"
                  target="_blank"
                  rel="noopener"
                  aria-label="Chat Telegram"
                >
                  <span
                    className="quick-contact-icon quick-contact-icon--tg"
                    aria-hidden="true"
                  >
                    ✈️
                  </span>
                  <span className="info">
                    <span className="label">Telegram</span>
                    <span className="value">@dzakyms</span>
                  </span>
                </a>

                <a
                  href="mailto:ahmaddzakyms@gmail.com"
                  className="quick-contact-btn"
                  id="btn-email"
                  aria-label="Kirim email"
                >
                  <span
                    className="quick-contact-icon quick-contact-icon--mail"
                    aria-hidden="true"
                  >
                    📧
                  </span>
                  <span className="info">
                    <span className="label">Email</span>
                    <span className="value">ahmaddzakyms@gmail.com</span>
                  </span>
                </a>
              </div>

              <h3 className="section-label mb-4">{t.contact.findMe}</h3>
              <div className="social-links">
                <a
                  href="https://github.com/DzaKidz"
                  className="social-link"
                  target="_blank"
                  rel="noopener"
                  id="social-github"
                  aria-label="GitHub profile"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/ahmadzaky"
                  className="social-link"
                  target="_blank"
                  rel="noopener"
                  id="social-linkedin"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://dribbble.com/ahmadzaky"
                  className="social-link"
                  target="_blank"
                  rel="noopener"
                  id="social-dribbble"
                  aria-label="Dribbble"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.39 1.73 1.35 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.006-.806zm-9.982-2.38c.247-.396 3.28-5.176 8.59-6.87.022-.008.042-.016.064-.023-.23-.51-.476-1.017-.73-1.518-5.69 1.68-11.21 1.607-11.69 1.6l-.002.28c0 2.51.942 4.8 2.48 6.53zm-2.304-8.526c.485.006 5.33.014 10.665-1.348a68.898 68.898 0 00-3.557-5.63c-3.083 1.453-5.247 4.348-5.86 7.636l.752-.658zm9.42-9.04c.17.25 1.99 2.97 3.58 5.76 3.41-1.28 4.85-3.22 5.01-3.47C20.16 2.79 16.27.93 12.24.93zm8.235 5.68c-.19.27-1.8 2.35-5.35 3.81.22.46.44.93.63 1.4.07.18.14.36.21.53 3.38-.425 6.74.26 7.08.33-.02-2.2-.7-4.24-1.86-5.92l-.71-.15z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dzakyms_"
                  className="social-link"
                  target="_blank"
                  rel="noopener"
                  id="social-instagram"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="contact-form-wrap">
                {!sent ? (
                  <>
                    <h2 className="form-title">{t.contact.formTitle}</h2>
                    <p className="form-sub">{t.contact.formSub}</p>

                    <form
                      id="contact-form"
                      noValidate
                      aria-label="Formulir kontak"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          {t.contact.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={`form-input${errors.name ? " error" : ""}`}
                          placeholder={t.contact.namePh}
                          autoComplete="name"
                          required
                          aria-required="true"
                          aria-describedby="name-error"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            clearError("name");
                          }}
                        />
                        <span
                          className={`form-error${errors.name ? " visible" : ""}`}
                          id="name-error"
                          role="alert"
                        >
                          {errors.name ?? ""}
                        </span>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          {t.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-input${errors.email ? " error" : ""}`}
                          placeholder={t.contact.emailPh}
                          autoComplete="email"
                          required
                          aria-required="true"
                          aria-describedby="email-error"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            clearError("email");
                          }}
                        />
                        <span
                          className={`form-error${errors.email ? " visible" : ""}`}
                          id="email-error"
                          role="alert"
                        >
                          {errors.email ?? ""}
                        </span>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="subject">
                          {t.contact.subjectLabel}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className={`form-input${errors.subject ? " error" : ""}`}
                          placeholder={t.contact.subjectPh}
                          required
                          aria-required="true"
                          aria-describedby="subject-error"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                            clearError("subject");
                          }}
                        />
                        <span
                          className={`form-error${errors.subject ? " visible" : ""}`}
                          id="subject-error"
                          role="alert"
                        >
                          {errors.subject ?? ""}
                        </span>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="message">
                          {t.contact.messageLabel}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className={`form-textarea${errors.message ? " error" : ""}`}
                          placeholder={t.contact.messagePh}
                          required
                          aria-required="true"
                          aria-describedby="message-error"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            clearError("message");
                          }}
                        ></textarea>
                        <span
                          className={`form-error${errors.message ? " visible" : ""}`}
                          id="message-error"
                          role="alert"
                        >
                          {errors.message ?? ""}
                        </span>
                      </div>

                      <button
                        type="submit"
                        id="send-btn"
                        className="btn btn-primary form-submit"
                        disabled={sending}
                        style={sending ? { opacity: 0.75 } : undefined}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                        {sending ? t.contact.sending : t.contact.send}
                      </button>
                    </form>
                  </>
                ) : (
                  <div
                    id="form-success"
                    className="form-success visible"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="success-icon" aria-hidden="true">
                      ✄
                    </div>
                    <h3>{t.contact.successTitle}</h3>
                    <p>
                      {t.contact.successText}
                    </p>
                    <p className="form-note">{t.contact.successNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-flush"
        aria-labelledby="faq-heading"
      >
        <div className="container">
          <div className="glass-card faq-card reveal">
            <h2 className="section-headTitle mb-6" id="faq-heading">
              {t.contact.faqTitle}
            </h2>
            <div className="faq-grid">
              <div className="reveal">
                <h3 className="faq-q">
                  {t.contact.faq[0].q}
                </h3>
                <p className="faq-a">
                  {t.contact.faq[0].a}
                </p>
              </div>
              <div className="reveal reveal-delay-1">
                <h3 className="faq-q">
                  {t.contact.faq[1].q}
                </h3>
                <p className="faq-a">
                  {t.contact.faq[1].a}
                </p>
              </div>
              <div className="reveal reveal-delay-2">
                <h3 className="faq-q">
                  {t.contact.faq[2].q}
                </h3>
                <p className="faq-a">
                  {t.contact.faq[2].a}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
