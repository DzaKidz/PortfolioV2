import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Atmosphere from "@/components/Atmosphere";
import { LanguageProvider } from "@/lib/i18n";

// DESIGN.md [detected] type tokens — self-hosted via next/font, no
// external font requests. DM Serif Display is OFL-licensed; used here as
// a genre signal (editorial serif display), not copied artwork.
const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-zk-sans",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-zk-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-zk-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Dzaky — Visual Creator & Frontend",
  description:
    "Ahmad Dzaky — Graphic Designer, Motion Designer, Video Editor & Frontend Developer. Portofolio karya visual kreatif dan antarmuka web modern.",
  keywords: [
    "Ahmad Dzaky",
    "portfolio",
    "graphic design",
    "motion design",
    "video editor",
    "frontend developer",
    "Indonesia",
  ],
  authors: [{ name: "Ahmad Dzaky" }],
  openGraph: {
    title: "Ahmad Dzaky — Visual Creator & Frontend",
    description:
      "Portofolio profesional Ahmad Dzaky: Graphic Design, Motion Graphics, Video Editing & Frontend Web.",
    type: "website",
  },
};

// Default theme is the warm paper aesthetic (DESIGN.md [detected]
// background #FFF9F1). Only opt out to dark when the visitor asked for it.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Atmosphere />
        </LanguageProvider>
      </body>
    </html>
  );
}
