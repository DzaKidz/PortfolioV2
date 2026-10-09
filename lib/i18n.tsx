"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

interface ExpItem {
  date: string;
  title: string;
  org: string;
  desc: string;
}

export interface Dict {
  nav: {
    home: string;
    work: string;
    about: string;
    contact: string;
    hire: string;
    menu: string;
    langLabel: string;
  };
  home: {
    hello: string;
    titleA: string;
    titleB: string;
    skySub: string;
    hint: string;
    rotating: string[];
    deckRole: (w: string) => string;
    deckOpen: string;
    deckCta: string;
    marquee: string[];
    bioLead1: string;
    bioRest1: string;
    bioP2a: string;
    bioLead2: string;
    bioP2b: string;
    bioCta: string;
    workA: string;
    workNote: string;
    openCase: string;
    practiceA: string;
    practiceB: string;
    practiceNote: string;
    tri: Array<{ index: string; title: string; desc: string }>;
    playNote: string;
    play: Array<{ title: string; desc: string }>;
    bandTitle: string;
    bandText: string;
    bandCta: string;
    stats: string[];
    ctaKicker: string;
    ctaA: string;
    ctaB: string;
    ctaText: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  portfolio: {
    kicker: string;
    titleA: string;
    titleB: string;
    desc: string;
    filters: string[];
    collabText: string;
    collabA: string;
    collabB: string;
    collabCta: string;
    seeDetail: string;
    detail: string;
    preview: string;
    aboutProject: string;
    tools: string;
    live: string;
    repo: string;
    close: string;
    expand: string;
    galleryLabel: string;
  };
  about: {
    kicker: string;
    titleA: string;
    desc: string;
    profile: string;
    profileTitle: string;
    bio: string[];
    toolsLabel: string;
    toolsTitle: string;
    softLabel: string;
    softTitle: string;
    soft: string[];
    expLabel: string;
    expTitle: string;
    eduLabel: string;
    eduTitle: string;
    location: string;
    status: string;
    statusValue: string;
    sendCta: string;
    downloadCta: string;
    experiences: ExpItem[];
    educations: ExpItem[];
  };
  contact: {
    kicker: string;
    titleA: string;
    titleB: string;
    desc: string;
    infoTitle: string;
    infoTextA: string;
    infoTextB: string;
    findMe: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePh: string;
    emailLabel: string;
    emailPh: string;
    subjectLabel: string;
    subjectPh: string;
    messageLabel: string;
    messagePh: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    successNote: string;
    errName: string;
    errEmail: string;
    errSubject: string;
    errMessage: string;
    faqTitle: string;
    faq: Array<{ q: string; a: string }>;
  };
  footer: {
    desc: string;
    nav: string;
    social: string;
  };
}

const id: Dict = {
  nav: {
    home: "Beranda",
    work: "Karya",
    about: "Tentang",
    contact: "Kontak",
    hire: "Hire Me",
    menu: "Buka menu",
    langLabel: "Pilih bahasa",
  },
  home: {
    hello: " Halo — Saya Dzaky ",
    titleA: "Visuals",
    titleB: "pulse",
    skySub: "Folio © 2026 · Jawa Tengah, ID · Design · Motion · Code",
    hint: "Psst — matahari bisa digeser",
    rotating: [
      "brand identities",
      "motion systems",
      "video edits",
      "web interfaces",
    ],
    deckRole: (w) => `I make ${w} people remember.`,
    deckOpen: "● Open for projects",
    deckCta: "Work with me →",
    marquee: [
      "Design",
      "Motion",
      "Video",
      "Code",
      "Jakarta — ID",
      "Open for projects",
    ],
    bioLead1: "Enam tahun rasa ingin tahu",
    bioRest1:
      " melintasi desain grafis, motion dan video — dari poster dan identitas brand sampai bumper, reels dan grading sinematik.",
    bioP2a: "Lalu saya belajar satu hal lagi: ",
    bioLead2: "menyelesaikannya di browser",
    bioP2b:
      ". Setiap karya di bawah ini hadir sebagai antarmuka web yang hidup, bukan sekadar file export.",
    bioCta: "Kenali saya →",
    workA: "Selected",
    workNote:
      "A short shelf of favourites — branding, motion and frontend. The full archive lives on the portfolio page.",
    openCase: "Open case →",
    practiceA: "A designer",
    practiceB: "who codes",
    practiceNote:
      "Three habits, one workflow — from first sketch to shipped page.",
    tri: [
      {
        index: "01 — Design",
        title: "Still frames with intent",
        desc: "Posters, brand kits and layouts built on grid discipline — type, colour and composition decided before anything moves.",
      },
      {
        index: "02 — Details",
        title: "Motion is the message",
        desc: "Bumpers, kinetic type and graded reels: pacing, easing and sound treated as design materials, not decoration.",
      },
      {
        index: "03 — Code",
        title: "Finish it in the browser",
        desc: "The work doesn't stop at export — interfaces prototyped and shipped as responsive, interactive web pages.",
      },
    ],
    playNote:
      "Small ongoing experiments in type, grading and interaction — where client work borrows its tricks from.",
    play: [
      {
        title: "Kinetic type studies",
        desc: "Rhythm & easing drills for title cards.",
      },
      {
        title: "Poster grid generator",
        desc: "12-column experiments, duotone palettes.",
      },
      {
        title: "Grade & grain lab",
        desc: "Teal-orange stills, film grain overlays.",
      },
      {
        title: "Micro-interaction shelf",
        desc: "Buttons, toggles & loaders in the browser.",
      },
    ],
    bandTitle: "From stills to systems — one pair of hands.",
    bandText:
      "I trained in multimedia and kept going: branding and editorial design first, then motion and editing, then the frontend needed to present it all properly. Clients get a single collaborator across the whole arc.",
    bandCta: "More about me →",
    stats: ["Visual projects", "Practice", "Clients & brands"],
    ctaKicker: "Got a story to tell?",
    ctaA: "Grow it",
    ctaB: "together.",
    ctaText:
      "A poster, a bumper, a launch film or the page it all lives on — bring the brief, I'll bring the rest.",
    ctaPrimary: "Work with me →",
    ctaGhost: "Browse the archive",
  },
  portfolio: {
    kicker: "Portofolio Kreatif",
    titleA: "Galeri",
    titleB: "Karya & Eksplorasi",
    desc: "Kumpulan hasil karya terpilih dalam bidang Desain Grafis, Motion Design, Video Editing, dan Frontend Web.",
    filters: [
      "Semua",
      "Desain Grafis",
      "Motion Design",
      "Video Editing",
      "Frontend Web",
    ],
    collabText: "Punya ide kreatif atau kebutuhan produksi visual?",
    collabA: "Mari",
    collabB: "Kolaborasikan Karya",
    collabCta: "Mulai Diskusi →",
    seeDetail: "Lihat Detail",
    detail: "Detail",
    preview: "Preview →",
    aboutProject: "Tentang Proyek",
    tools: "Tools & Software",
    live: "Live Preview",
    repo: "GitHub Repo",
    close: "Tutup",
    expand: "Lihat Lengkap",
    galleryLabel: "Galeri",
  },
  about: {
    kicker: "Tentang Saya",
    titleA: "Kenali",
    desc: "Visual creator yang berfokus pada Desain Grafis, Motion Graphics, Video Editing, serta implementasi Frontend Web.",
    profile: "Profil Profesional",
    profileTitle: "Halo, saya Ahmad Dzaky",
    bio: [
      "Saya adalah seorang Graphic Designer, Motion Designer, dan Video Editor dengan antusiasme mendalam pada penceritaan visual dan komunikasi kreatif. Untuk sisi teknis, saya berfokus pada pengembangan Frontend Web untuk menyajikan visual dan interaksi secara nyata di peramban.",
      "Bagi saya, perpaduan antara desain visual yang kuat, animasi gerak yang ritmis, dan editing video yang berjiwa adalah kunci untuk menciptakan kesan yang mendalam bagi audiens. Kemampuan frontend membantu saya menjembatani visi desain grafis menjadi prototipe web yang responsif dan interaktif.",
      "Saya berpengalaman menangani branding visual, motion graphics untuk kampanye media sosial, video editing komersial, hingga perancangan landing page kreatif. Terbuka untuk proyek freelance, kolaborasi kreatif agensi/brand, maupun peran visual spesialis.",
    ],
    toolsLabel: "Tools & Software",
    toolsTitle: "Perangkat Kreatif & Frontend",
    softLabel: "Kekuatan & Karakter",
    softTitle: "Keahlian Non-Teknis",
    soft: [
      " Visual Storytelling",
      " Pacing & Video Rhythm",
      " Sense of Color & Typography",
      " Kolaborasi Tim Kreatif",
      " Problem Solving Visual",
      " Ketepatan Deadline",
      " Adaptasi Cepat Terhadap Trend",
    ],
    expLabel: "Pengalaman",
    expTitle: "Riwayat Karier Visual",
    eduLabel: "Pendidikan",
    eduTitle: "Riwayat Pendidikan",
    location: "📍 Lokasi",
    status: "💼 Status",
    statusValue: "Open for Creative Projects",
    sendCta: "Kirim Pesan",
    downloadCta: "Unduh Portofolio PDF",
    experiences: [
      {
        date: "Jan 2024 — Sekarang",
        title: "Motion Designer & Video Editor",
        org: "Studio Kreatif Visual",
        desc: "Memproduksi animasi promosi produk (2D & 3D), editing video promosi komersial untuk brand, serta merancang aset visual grafis media sosial dengan engagement tinggi.",
      },
      {
        date: "Jun 2023 — Des 2023",
        title: "Graphic Designer & Frontend Enthusiast (Freelance)",
        org: "Berbagai Klien & Brand UMKM",
        desc: "Mengerjakan pembuatan identitas visual (logo & brand kit), poster pameran, video teaser promosi, serta mengembangkan website portofolio interaktif berbasis HTML/CSS/JS dan React.",
      },
      {
        date: "Feb 2023 — Mei 2023",
        title: "Creative Visual Intern",
        org: "Media Digital Kreatif",
        desc: "Membantu perancangan aset grafis harian, pembuatan motion bumper logo, dan editing konten video pendek (Reels/TikTok) untuk kebutuhan promosi digital.",
      },
    ],
    educations: [
      {
        date: "2022 — 2025",
        title: "Jurusan Multimedia",
        org: "MAN 1 Karanganyar",
        desc: "Fokus pada multimedia, komunikasi visual, dan rekayasa antarmuka web. Aktif di divisi Desain Grafis & Multimedia organisasi kampus.",
      },
      {
        date: "2025 — NOW",
        title: "S1 Sistem Informasi",
        org: "Universitas Bina Sarana Informatika",
        desc: "Fokus pada multimedia, komunikasi visual, dan rekayasa antarmuka web. Aktif di divisi Desain Grafis & Multimedia organisasi kampus.",
      },
    ],
  },
  contact: {
    kicker: "Kontak & Kolaborasi",
    titleA: "Mari",
    titleB: "Terhubung",
    desc: "Punya proyek desain grafis, kebutuhan animasi gerak, editing video, atau website frontend? Saya siap berkolaborasi.",
    infoTitle: "Hubungi Langsung",
    infoTextA:
      "Saya terbuka untuk mendiskusikan brief proyek kreatif baru, kolaborasi agensi/brand, maupun tawaran kerja. Respons biasanya dalam ",
    infoTextB: "24 jam",
    findMe: "Temukan Saya Di",
    formTitle: "Kirim Pesan",
    formSub: "Isi formulir di bawah dan saya akan menghubungi Anda secepatnya.",
    nameLabel: "Nama Lengkap",
    namePh: "Nama Anda / Brand",
    emailLabel: "Alamat Email",
    emailPh: "email@example.com",
    subjectLabel: "Subjek / Jenis Kebutuhan",
    subjectPh: "Proyek Motion Graphics / Desain / Web...",
    messageLabel: "Detail Pesan / Kebutuhan",
    messagePh:
      "Halo Ahmad, kami membutuhkan jasa desain / motion / video / frontend web untuk...",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    successTitle: "Pesan Terkirim!",
    successText:
      "Terima kasih sudah menghubungi. Saya akan segera membalas pesan Anda dalam waktu dekat.",
    successNote: "Form akan direset otomatis...",
    errName: "Nama minimal 2 karakter.",
    errEmail: "Masukkan alamat email yang valid.",
    errSubject: "Subjek minimal 3 karakter.",
    errMessage: "Pesan minimal 10 karakter.",
    faqTitle: "Pertanyaan Umum",
    faq: [
      {
        q: "⏱️ Berapa estimasi waktu pengerjaan?",
        a: "Tergantung ruang lingkup. Desain grafis / poster 2–4 hari, video editing / motion reels 4–7 hari, dan web frontend 1–2 minggu.",
      },
      {
        q: "🎨 Bagaimana proses revisi karya?",
        a: "Saya menyediakan proses bertahap: eksplorasi konsep/moodboard, draft pertama, hingga 2-3 kali putaran revisi untuk hasil terbaik.",
      },
      {
        q: "📁 Format file akhir apa saja yang diberikan?",
        a: "File siap pakai (MP4 4K/FHD, PNG/JPG/SVG, PDF) serta source file (AI, PSD, AE, PR, atau repository kode Frontend) sesuai kesepakatan.",
      },
    ],
  },
  footer: {
    desc: "Graphic Designer, Motion Designer & Video Editor yang juga mengeksplorasi antarmuka Frontend Web modern.",
    nav: "Navigasi",
    social: "Sosial Media",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    work: "Work",
    about: "About",
    contact: "Contact",
    hire: "Hire Me",
    menu: "Open menu",
    langLabel: "Choose language",
  },
  home: {
    hello: " Hello — I'm Dzaky ",
    titleA: "Visuals",
    titleB: "pulse",
    skySub: "Folio © 2026 · Jakarta, ID · Design · Motion · Code",
    hint: "Psst — the sun is draggable",
    rotating: [
      "brand identities",
      "motion systems",
      "video edits",
      "web interfaces",
    ],
    deckRole: (w) => `I make ${w} people remember.`,
    deckOpen: "● Open for projects",
    deckCta: "Work with me →",
    marquee: [
      "Design",
      "Motion",
      "Video",
      "Code",
      "Jakarta — ID",
      "Open for projects",
    ],
    bioLead1: "Six years of curiosity",
    bioRest1:
      " across graphic design, motion and video — from posters and brand identities to bumpers, reels and cinematic grading.",
    bioP2a: "Then I learned one more thing: ",
    bioLead2: "finish it in the browser",
    bioP2b:
      ". Everything below arrives as a living web interface, not just an exported file.",
    bioCta: "More about me →",
    workA: "Selected",
    workNote:
      "A short shelf of favourites — branding, motion and frontend. The full archive lives on the portfolio page.",
    openCase: "Open case →",
    practiceA: "A designer",
    practiceB: "who codes",
    practiceNote:
      "Three habits, one workflow — from first sketch to shipped page.",
    tri: [
      {
        index: "01 — Design",
        title: "Still frames with intent",
        desc: "Posters, brand kits and layouts built on grid discipline — type, colour and composition decided before anything moves.",
      },
      {
        index: "02 — Details",
        title: "Motion is the message",
        desc: "Bumpers, kinetic type and graded reels: pacing, easing and sound treated as design materials, not decoration.",
      },
      {
        index: "03 — Code",
        title: "Finish it in the browser",
        desc: "The work doesn't stop at export — interfaces prototyped and shipped as responsive, interactive web pages.",
      },
    ],
    playNote:
      "Small ongoing experiments in type, grading and interaction — where client work borrows its tricks from.",
    play: [
      {
        title: "Kinetic type studies",
        desc: "Rhythm & easing drills for title cards.",
      },
      {
        title: "Poster grid generator",
        desc: "12-column experiments, duotone palettes.",
      },
      {
        title: "Grade & grain lab",
        desc: "Teal-orange stills, film grain overlays.",
      },
      {
        title: "Micro-interaction shelf",
        desc: "Buttons, toggles & loaders in the browser.",
      },
    ],
    bandTitle: "From stills to systems — one pair of hands.",
    bandText:
      "I trained in multimedia and kept going: branding and editorial design first, then motion and editing, then the frontend needed to present it all properly. Clients get a single collaborator across the whole arc.",
    bandCta: "More about me →",
    stats: ["Visual projects", "Practice", "Clients & brands"],
    ctaKicker: "Got a story to tell?",
    ctaA: "Grow it",
    ctaB: "together.",
    ctaText:
      "A poster, a bumper, a launch film or the page it all lives on — bring the brief, I'll bring the rest.",
    ctaPrimary: "Work with me →",
    ctaGhost: "Browse the archive",
  },
  portfolio: {
    kicker: "Creative Portfolio",
    titleA: "Gallery of",
    titleB: "Work & Exploration",
    desc: "A curated set of selected works in Graphic Design, Motion Design, Video Editing and Frontend Web.",
    filters: ["All", "Graphic Design", "Motion Design", "Video Editing", "Frontend Web"],
    collabText: "Have a creative idea or a visual production need?",
    collabA: "Let's",
    collabB: "Collaborate",
    collabCta: "Start a discussion →",
    seeDetail: "View Detail",
    detail: "Detail",
    preview: "Preview →",
    aboutProject: "About the Project",
    tools: "Tools & Software",
    live: "Live Preview",
    repo: "GitHub Repo",
    close: "Close",
    expand: "View Full",
    galleryLabel: "Gallery",
  },
  about: {
    kicker: "About Me",
    titleA: "Meet",
    desc: "A visual creator focused on Graphic Design, Motion Graphics, Video Editing and Frontend Web implementation.",
    profile: "Professional Profile",
    profileTitle: "Hi, I'm Ahmad Dzaky",
    bio: [
      "I'm a Graphic Designer, Motion Designer and Video Editor with a deep enthusiasm for visual storytelling and creative communication. On the technical side, I focus on Frontend Web development to present visuals and interactions live in the browser.",
      "To me, the blend of strong visual design, rhythmic motion and soulful video editing is the key to leaving a lasting impression. Frontend skills help me bridge graphic design vision into responsive, interactive web prototypes.",
      "I'm experienced in visual branding, motion graphics for social campaigns, commercial video editing and creative landing pages. Open to freelance projects, agency/brand collaboration and specialist visual roles.",
    ],
    toolsLabel: "Tools & Software",
    toolsTitle: "Creative & Frontend Toolkit",
    softLabel: "Strengths & Character",
    softTitle: "Non-Technical Skills",
    soft: [
      " Visual Storytelling",
      " Pacing & Video Rhythm",
      " Sense of Color & Typography",
      " Creative Team Collaboration",
      " Visual Problem Solving",
      " Deadline Reliability",
      " Fast Trend Adaptation",
    ],
    expLabel: "Experience",
    expTitle: "Visual Career History",
    eduLabel: "Education",
    eduTitle: "Education History",
    location: "📍 Location",
    status: "💼 Status",
    statusValue: "Open for Creative Projects",
    sendCta: "Send Message",
    downloadCta: "Download Portfolio PDF",
    experiences: [
      {
        date: "Jan 2024 — Present",
        title: "Motion Designer & Video Editor",
        org: "Visual Creative Studio",
        desc: "Producing product animations (2D & 3D), commercial promo edits for brands, and high-engagement social media graphic assets.",
      },
      {
        date: "Jun 2023 — Dec 2023",
        title: "Graphic Designer & Frontend Enthusiast (Freelance)",
        org: "Various SME Clients & Brands",
        desc: "Visual identity work (logos & brand kits), exhibition posters, promo video teasers, and interactive portfolio websites built with HTML/CSS/JS and React.",
      },
      {
        date: "Feb 2023 — May 2023",
        title: "Creative Visual Intern",
        org: "Creative Digital Media",
        desc: "Daily graphic assets, logo motion bumpers, and short-form video edits (Reels/TikTok) for digital promotion.",
      },
    ],
    educations: [
      {
        date: "2022 — 2025",
        title: "Multimedia Major",
        org: "MAN 1 Karanganyar",
        desc: "Focused on multimedia, visual communication and web interface engineering. Active in the campus Graphic Design & Multimedia division.",
      },
      {
        date: "2025 — NOW",
        title: "BSc Information Systems",
        org: "Universitas Bina Sarana Informatika",
        desc: "Focused on multimedia, visual communication and web interface engineering. Active in the campus Graphic Design & Multimedia division.",
      },
    ],
  },
  contact: {
    kicker: "Contact & Collaboration",
    titleA: "Let's",
    titleB: "Connect",
    desc: "Have a graphic design project, motion graphics need, video edit or frontend website in mind? I'm ready to collaborate.",
    infoTitle: "Reach Me Directly",
    infoTextA:
      "I'm open to discussing new creative project briefs, agency/brand collaboration or job offers. I usually respond within ",
    infoTextB: "24 hours",
    findMe: "Find Me On",
    formTitle: "Send a Message",
    formSub: "Fill in the form below and I'll get back to you shortly.",
    nameLabel: "Full Name",
    namePh: "Your Name / Brand",
    emailLabel: "Email Address",
    emailPh: "email@example.com",
    subjectLabel: "Subject / Type of Need",
    subjectPh: "Motion Graphics / Design / Web project...",
    messageLabel: "Message Details",
    messagePh:
      "Hi Ahmad, we need design / motion / video / frontend web work for...",
    send: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successText:
      "Thanks for reaching out. I'll reply to your message very soon.",
    successNote: "Form will reset automatically...",
    errName: "Name needs at least 2 characters.",
    errEmail: "Please enter a valid email address.",
    errSubject: "Subject needs at least 3 characters.",
    errMessage: "Message needs at least 10 characters.",
    faqTitle: "Frequently Asked",
    faq: [
      {
        q: "⏱️ How long does a project take?",
        a: "Depends on scope. Graphic design / posters 2–4 days, video editing / motion reels 4–7 days, and frontend web 1–2 weeks.",
      },
      {
        q: "🎨 How do revisions work?",
        a: "A staged process: concept/moodboard exploration, first draft, then 2–3 revision rounds for the best result.",
      },
      {
        q: "📁 What final files do I receive?",
        a: "Ready-to-use files (MP4 4K/FHD, PNG/JPG/SVG, PDF) plus source files (AI, PSD, AE, PR, or the Frontend code repository) as agreed.",
      },
    ],
  },
  footer: {
    desc: "Graphic Designer, Motion Designer & Video Editor also exploring modern Frontend Web interfaces.",
    nav: "Navigation",
    social: "Social Media",
  },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue>({
  lang: "id",
  setLang: () => {},
  t: id,
});

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "id";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "id" || stored === "en") return stored;
    } catch {
      /* abaikan */
    }
    return "id";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* abaikan */
    }
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: lang === "id" ? id : en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
