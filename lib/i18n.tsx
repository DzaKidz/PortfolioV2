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
    mainLabel: string;
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
    workB: string;
    workNote: string;
    openCase: string;
    practiceA: string;
    practiceB: string;
    practiceNote: string;
    tri: Array<{ label: string; title: string; desc: string }>;
    playNote: string;
    play: Array<{ title: string; desc: string }>;
    bandTitle: string;
    bandText: string;
    bandCta: string;
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
    filterLabel: string;
    gridLabel: string;
    lightboxLabel: string;
    prevLabel: string;
    nextLabel: string;
    slideLabel: string;
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
    successTitle: string;
    successText: string;
    successNote: string;
    successLink: string;
    successMail: string;
    resetCta: string;
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
    hire: "Ajak kerja sama",
    menu: "Buka menu",
    mainLabel: "Navigasi utama",
    langLabel: "Pilih bahasa",
  },
  home: {
    hello: "Halo, saya Dzaky",
    titleA: "Visuals",
    titleB: "pulse",
    skySub: "Folio © 2026 · Jawa Tengah, ID · Desain · Motion · Kode",
    hint: "Psst, matahari bisa digeser",
    rotating: [
      "identitas brand",
      "sistem motion",
      "edit video",
      "antarmuka web",
    ],
    deckRole: (w) => `Saya bikin ${w} yang diingat orang.`,
    deckOpen: "Terbuka untuk proyek",
    deckCta: "Ajak kerja sama",
    marquee: [
      "Desain",
      "Motion",
      "Video",
      "Kode",
      "Jawa Tengah, ID",
      "Terbuka untuk proyek",
    ],
    bioLead1: "Sejak 2022 saya mengerjakan",
    bioRest1:
      " desain grafis, motion, dan video: poster, identitas brand, bumper, reels, sampai grading sinematik.",
    bioP2a: "Lalu satu hal lagi: ",
    bioLead2: "merapikannya di browser",
    bioP2b:
      ". Karya di bawah ini tampil sebagai antarmuka web, bukan sekadar file export.",
    bioCta: "Kenali saya",
    workA: "Karya",
    workB: "pilihan",
    workNote:
      "Beberapa karya pilihan: branding, motion, dan frontend. Arsip lengkapnya ada di halaman portfolio.",
    openCase: "Lihat kasus",
    practiceA: "Desainer",
    practiceB: "yang ngoding",
    practiceNote:
      "Tiga kebiasaan, satu alur kerja: dari sketsa pertama sampai halaman rilis.",
    tri: [
      {
        label: "Desain",
        title: "Frame yang punya maksud",
        desc: "Poster, brand kit, dan layout yang dibangun di atas grid. Tipe, warna, dan komposisi diputuskan sebelum apa pun bergerak.",
      },
      {
        label: "Detail",
        title: "Motion adalah pesannya",
        desc: "Bumper, kinetic type, dan reel hasil grading: pacing, easing, dan suara diperlakukan sebagai material desain.",
      },
      {
        label: "Kode",
        title: "Selesaikan di browser",
        desc: "Karya tidak berhenti di export. Antarmuka diprototipekan dan dirilis sebagai halaman web yang responsif.",
      },
    ],
    playNote:
      "Eksperimen kecil yang masih jalan di tipe, grading, dan interaksi. Dari sini karya klien meminjam triknya.",
    play: [
      {
        title: "Studi kinetic type",
        desc: "Latihan ritme dan easing untuk title card.",
      },
      {
        title: "Generator grid poster",
        desc: "Eksperimen 12 kolom dan palet duotone.",
      },
      {
        title: "Lab grade dan grain",
        desc: "Still teal-orange dan overlay film grain.",
      },
      {
        title: "Rak micro-interaction",
        desc: "Tombol, toggle, dan loader di browser.",
      },
    ],
    bandTitle: "Dari still ke sistem, dikerjakan satu orang.",
    bandText:
      "Saya mulai dari multimedia: branding dan desain editorial, lalu motion dan editing, lalu frontend untuk menyajikannya. Klien berurusan dengan satu orang di sepanjang proses.",
    bandCta: "Selengkapnya tentang saya",
    ctaKicker: "Punya cerita untuk disampaikan?",
    ctaA: "Kerjakan",
    ctaB: "bersama.",
    ctaText:
      "Poster, bumper, launch film, atau halaman tempat semuanya tampil. Bawa brief-nya, sisanya saya urus.",
    ctaPrimary: "Ajak kerja sama",
    ctaGhost: "Lihat arsip",
  },
  portfolio: {
    kicker: "Portofolio Kreatif",
    titleA: "Galeri",
    titleB: "karya dan eksplorasi",
    desc: "Kumpulan karya terpilih di desain grafis, motion design, video editing, dan frontend web.",
    filters: [
      "Semua",
      "Desain Grafis",
      "Motion Design",
      "Video Editing",
      "Frontend Web",
    ],
    collabText: "Punya ide kreatif atau kebutuhan produksi visual?",
    collabA: "Mari",
    collabB: "kolaborasi",
    collabCta: "Mulai diskusi",
    seeDetail: "Lihat detail",
    detail: "Detail",
    preview: "Pratinjau",
    aboutProject: "Tentang proyek",
    tools: "Tools dan software",
    live: "Live preview",
    repo: "Repo GitHub",
    close: "Tutup",
    expand: "Lihat penuh",
    galleryLabel: "Galeri",
    filterLabel: "Filter karya",
    gridLabel: "Daftar karya",
    lightboxLabel: "Tampilan penuh karya",
    prevLabel: "Gambar sebelumnya",
    nextLabel: "Gambar berikutnya",
    slideLabel: "Slide",
  },
  about: {
    kicker: "Tentang Saya",
    titleA: "Kenali",
    desc: "Visual creator yang berfokus pada desain grafis, motion graphics, video editing, dan implementasi frontend web.",
    profile: "Profil profesional",
    profileTitle: "Halo, saya Ahmad Dzaky",
    bio: [
      "Saya graphic designer, motion designer, dan video editor. Sisi teknis saya ada di frontend web: membuat visual dan interaksi itu benar-benar jalan di browser.",
      "Desain visual yang kuat, motion yang ritmis, dan editing yang punya rasa menentukan kesan yang tertinggal. Kemampuan frontend membuat saya bisa membawa rancangan grafis jadi prototipe web yang responsif.",
      "Saya mengerjakan branding visual, motion graphics untuk kampanye media sosial, editing video komersial, dan landing page kreatif. Terbuka untuk proyek freelance, kolaborasi agensi atau brand, dan peran visual spesialis.",
    ],
    toolsLabel: "Tools dan software",
    toolsTitle: "Perangkat kreatif dan frontend",
    softLabel: "Kekuatan dan karakter",
    softTitle: "Keahlian non-teknis",
    soft: [
      "Storytelling visual",
      "Pacing dan ritme video",
      "Sense of color dan tipografi",
      "Kolaborasi tim kreatif",
      "Problem solving visual",
      "Ketepatan deadline",
      "Adaptasi cepat",
    ],
    expLabel: "Pengalaman",
    expTitle: "Riwayat kerja visual",
    eduLabel: "Pendidikan",
    eduTitle: "Riwayat pendidikan",
    location: "Lokasi",
    status: "Status",
    statusValue: "Terbuka untuk proyek kreatif",
    sendCta: "Kirim pesan",
    downloadCta: "Minta CV lewat email",
    experiences: [
      {
        date: "Jan 2024 - sekarang",
        title: "Motion Designer & Video Editor",
        org: "Studio Kreatif Visual",
        desc: "Memproduksi animasi promosi produk 2D dan 3D, editing video promosi komersial untuk brand, serta aset visual grafis media sosial.",
      },
      {
        date: "Jun 2023 - Des 2023",
        title: "Graphic Designer & Frontend Enthusiast (Freelance)",
        org: "Berbagai klien dan brand UMKM",
        desc: "Identitas visual (logo dan brand kit), poster pameran, video teaser promosi, serta website portofolio interaktif berbasis HTML/CSS/JS dan React.",
      },
      {
        date: "Feb 2023 - Mei 2023",
        title: "Creative Visual Intern",
        org: "Media Digital Kreatif",
        desc: "Aset grafis harian, motion bumper logo, dan editing video pendek (Reels/TikTok) untuk promosi digital.",
      },
    ],
    educations: [
      {
        date: "2022 - 2025",
        title: "Jurusan Multimedia",
        org: "MAN 1 Karanganyar",
        desc: "Fokus pada multimedia dan komunikasi visual. Aktif di divisi desain grafis dan multimedia sekolah.",
      },
      {
        date: "2025 - sekarang",
        title: "S1 Sistem Informasi",
        org: "Universitas Bina Sarana Informatika",
        desc: "Melanjutkan studi di sistem informasi, sementara desain dan multimedia tetap jadi praktik harian.",
      },
    ],
  },
  contact: {
    kicker: "Kontak dan kolaborasi",
    titleA: "Mari",
    titleB: "terhubung",
    desc: "Punya proyek desain grafis, kebutuhan animasi gerak, editing video, atau website frontend? Saya siap berkolaborasi.",
    infoTitle: "Hubungi langsung",
    infoTextA:
      "Saya terbuka untuk brief proyek kreatif baru, kolaborasi agensi atau brand, maupun tawaran kerja. Biasanya saya membalas dalam ",
    infoTextB: "24 jam",
    findMe: "Temukan saya di",
    formTitle: "Kirim pesan",
    formSub:
      "Isi formulir, lalu kirim lewat WhatsApp. Pesan belum terkirim sampai kamu menekan kirim di WhatsApp.",
    nameLabel: "Nama lengkap",
    namePh: "Nama Anda / Brand",
    emailLabel: "Alamat email",
    emailPh: "email@example.com",
    subjectLabel: "Subjek / jenis kebutuhan",
    subjectPh: "Proyek motion graphics / desain / web",
    messageLabel: "Detail pesan / kebutuhan",
    messagePh:
      "Halo Ahmad, kami membutuhkan jasa desain / motion / video / frontend web untuk...",
    send: "Kirim lewat WhatsApp",
    successTitle: "WhatsApp dibuka",
    successText:
      "Pesan sudah disiapkan di WhatsApp. Tekan kirim di sana supaya saya menerimanya.",
    successNote:
      "Tab tidak terbuka? Buka tautannya lewat tombol di bawah.",
    successLink: "Buka WhatsApp",
    successMail: "Kirim lewat email",
    resetCta: "Tulis pesan lain",
    errName: "Nama minimal 2 karakter.",
    errEmail: "Masukkan alamat email yang valid.",
    errSubject: "Subjek minimal 3 karakter.",
    errMessage: "Pesan minimal 10 karakter.",
    faqTitle: "Pertanyaan umum",
    faq: [
      {
        q: "Berapa estimasi waktu pengerjaan?",
        a: "Tergantung ruang lingkup. Desain grafis atau poster 2-4 hari, video editing dan motion reels 4-7 hari, web frontend 1-2 minggu.",
      },
      {
        q: "Bagaimana proses revisi karya?",
        a: "Bertahap: eksplorasi konsep dan moodboard, draft pertama, lalu 2-3 putaran revisi.",
      },
      {
        q: "Format file akhir apa saja yang diberikan?",
        a: "File siap pakai (MP4 4K/FHD, PNG/JPG/SVG, PDF) dan source file (AI, PSD, AE, PR, atau repository kode frontend) sesuai kesepakatan.",
      },
    ],
  },
  footer: {
    desc: "Graphic designer, motion designer, dan video editor yang juga mengerjakan antarmuka frontend web.",
    nav: "Navigasi",
    social: "Sosial media",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    work: "Work",
    about: "About",
    contact: "Contact",
    hire: "Start a project",
    menu: "Open menu",
    mainLabel: "Main navigation",
    langLabel: "Choose language",
  },
  home: {
    hello: "Hi, I'm Dzaky",
    titleA: "Visuals",
    titleB: "pulse",
    skySub: "Folio © 2026 · Central Java, ID · Design · Motion · Code",
    hint: "Psst, the sun is draggable",
    rotating: [
      "brand identities",
      "motion systems",
      "video edits",
      "web interfaces",
    ],
    deckRole: (w) => `I make ${w} people remember.`,
    deckOpen: "Open for projects",
    deckCta: "Start a project",
    marquee: [
      "Design",
      "Motion",
      "Video",
      "Code",
      "Central Java, ID",
      "Open for projects",
    ],
    bioLead1: "Since 2022 I've worked on",
    bioRest1:
      " graphic design, motion and video: posters, brand identities, bumpers, reels and cinematic grading.",
    bioP2a: "Then one more thing: ",
    bioLead2: "finish it in the browser",
    bioP2b:
      ". Everything below is built as a web interface rather than an exported file.",
    bioCta: "More about me",
    workA: "Selected",
    workB: "work",
    workNote:
      "A short shelf of favourites: branding, motion and frontend. The full archive lives on the portfolio page.",
    openCase: "Open case",
    practiceA: "A designer",
    practiceB: "who codes",
    practiceNote:
      "Three habits, one workflow: from first sketch to shipped page.",
    tri: [
      {
        label: "Design",
        title: "Frames with intent",
        desc: "Posters, brand kits and layouts built on grid discipline. Type, colour and composition decided before anything moves.",
      },
      {
        label: "Detail",
        title: "Motion is the message",
        desc: "Bumpers, kinetic type and graded reels: pacing, easing and sound treated as design materials.",
      },
      {
        label: "Code",
        title: "Finish it in the browser",
        desc: "The work doesn't stop at export. Interfaces prototyped and shipped as responsive web pages.",
      },
    ],
    playNote:
      "Small ongoing experiments in type, grading and interaction. Client work borrows its tricks from here.",
    play: [
      {
        title: "Kinetic type studies",
        desc: "Rhythm and easing drills for title cards.",
      },
      {
        title: "Poster grid generator",
        desc: "12-column experiments and duotone palettes.",
      },
      {
        title: "Grade and grain lab",
        desc: "Teal-orange stills and film-grain overlays.",
      },
      {
        title: "Micro-interaction shelf",
        desc: "Buttons, toggles and loaders in the browser.",
      },
    ],
    bandTitle: "From stills to systems, one pair of hands.",
    bandText:
      "I started in multimedia: branding and editorial design, then motion and editing, then the frontend needed to present it. Clients get one collaborator across the whole arc.",
    bandCta: "More about me",
    ctaKicker: "Got a story to tell?",
    ctaA: "Build it",
    ctaB: "together.",
    ctaText:
      "A poster, a bumper, a launch film or the page it all lives on. Bring the brief, I'll bring the rest.",
    ctaPrimary: "Start a project",
    ctaGhost: "Browse the archive",
  },
  portfolio: {
    kicker: "Creative Portfolio",
    titleA: "Gallery of",
    titleB: "work and exploration",
    desc: "A curated set of works in graphic design, motion design, video editing and frontend web.",
    filters: [
      "All",
      "Graphic Design",
      "Motion Design",
      "Video Editing",
      "Frontend Web",
    ],
    collabText: "Have a creative idea or a visual production need?",
    collabA: "Let's",
    collabB: "collaborate",
    collabCta: "Start a discussion",
    seeDetail: "View detail",
    detail: "Detail",
    preview: "Preview",
    aboutProject: "About the project",
    tools: "Tools and software",
    live: "Live preview",
    repo: "GitHub repo",
    close: "Close",
    expand: "View full",
    galleryLabel: "Gallery",
    filterLabel: "Work filter",
    gridLabel: "Work list",
    lightboxLabel: "Full-size view",
    prevLabel: "Previous image",
    nextLabel: "Next image",
    slideLabel: "Slide",
  },
  about: {
    kicker: "About Me",
    titleA: "Meet",
    desc: "A visual creator focused on graphic design, motion graphics, video editing and frontend web implementation.",
    profile: "Professional profile",
    profileTitle: "Hi, I'm Ahmad Dzaky",
    bio: [
      "I'm a graphic designer, motion designer and video editor. The technical side sits in frontend web: making those visuals and interactions actually run in the browser.",
      "Strong visual design, rhythmic motion and editing with feel decide whether the impression sticks. Frontend skills let me carry a graphic direction into a responsive web prototype.",
      "I work on visual branding, motion graphics for social campaigns, commercial video editing and creative landing pages. Open to freelance projects, agency or brand collaboration, and specialist visual roles.",
    ],
    toolsLabel: "Tools and software",
    toolsTitle: "Creative and frontend toolkit",
    softLabel: "Strengths and character",
    softTitle: "Non-technical skills",
    soft: [
      "Visual storytelling",
      "Pacing and video rhythm",
      "Sense of color and typography",
      "Creative team collaboration",
      "Visual problem solving",
      "Deadline reliability",
      "Fast adaptation",
    ],
    expLabel: "Experience",
    expTitle: "Visual work history",
    eduLabel: "Education",
    eduTitle: "Education history",
    location: "Location",
    status: "Status",
    statusValue: "Open for creative projects",
    sendCta: "Send a message",
    downloadCta: "Request CV by email",
    experiences: [
      {
        date: "Jan 2024 - present",
        title: "Motion Designer & Video Editor",
        org: "Visual Creative Studio",
        desc: "Producing 2D and 3D product animations, commercial promo edits for brands, and social media graphic assets.",
      },
      {
        date: "Jun 2023 - Dec 2023",
        title: "Graphic Designer & Frontend Enthusiast (Freelance)",
        org: "Various SME clients and brands",
        desc: "Visual identity work (logos and brand kits), exhibition posters, promo video teasers, and interactive portfolio sites built with HTML/CSS/JS and React.",
      },
      {
        date: "Feb 2023 - May 2023",
        title: "Creative Visual Intern",
        org: "Creative Digital Media",
        desc: "Daily graphic assets, logo motion bumpers, and short-form video edits (Reels/TikTok) for digital promotion.",
      },
    ],
    educations: [
      {
        date: "2022 - 2025",
        title: "Multimedia Major",
        org: "MAN 1 Karanganyar",
        desc: "Focused on multimedia and visual communication. Active in the school's graphic design and multimedia division.",
      },
      {
        date: "2025 - present",
        title: "BSc Information Systems",
        org: "Universitas Bina Sarana Informatika",
        desc: "Continuing in information systems while design and multimedia remain daily practice.",
      },
    ],
  },
  contact: {
    kicker: "Contact and collaboration",
    titleA: "Let's",
    titleB: "connect",
    desc: "Have a graphic design project, a motion graphics need, a video edit or a frontend site in mind? I'm ready to collaborate.",
    infoTitle: "Reach me directly",
    infoTextA:
      "I'm open to new creative briefs, agency or brand collaboration, and job offers. I usually reply within ",
    infoTextB: "24 hours",
    findMe: "Find me on",
    formTitle: "Send a message",
    formSub:
      "Fill in the form, then send it through WhatsApp. Nothing is sent until you press send in WhatsApp.",
    nameLabel: "Full name",
    namePh: "Your name / brand",
    emailLabel: "Email address",
    emailPh: "email@example.com",
    subjectLabel: "Subject / type of need",
    subjectPh: "Motion graphics / design / web project",
    messageLabel: "Message details",
    messagePh:
      "Hi Ahmad, we need design / motion / video / frontend web work for...",
    send: "Send via WhatsApp",
    successTitle: "WhatsApp opened",
    successText:
      "The message is ready in WhatsApp. Press send there so I receive it.",
    successNote: "Tab didn't open? Use the buttons below.",
    successLink: "Open WhatsApp",
    successMail: "Send via email",
    resetCta: "Write another message",
    errName: "Name needs at least 2 characters.",
    errEmail: "Please enter a valid email address.",
    errSubject: "Subject needs at least 3 characters.",
    errMessage: "Message needs at least 10 characters.",
    faqTitle: "Frequently asked",
    faq: [
      {
        q: "How long does a project take?",
        a: "Depends on scope. Graphic design or posters 2-4 days, video editing and motion reels 4-7 days, frontend web 1-2 weeks.",
      },
      {
        q: "How do revisions work?",
        a: "In stages: concept and moodboard exploration, first draft, then 2-3 revision rounds.",
      },
      {
        q: "What final files do I receive?",
        a: "Ready-to-use files (MP4 4K/FHD, PNG/JPG/SVG, PDF) and source files (AI, PSD, AE, PR, or the frontend code repository) as agreed.",
      },
    ],
  },
  footer: {
    desc: "Graphic designer, motion designer and video editor also working on frontend web interfaces.",
    nav: "Navigation",
    social: "Social media",
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

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    /* localStorage can be blocked; fall through to default */
  }
  return "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "id";
    return readStoredLang();
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage can be blocked; the UI still switches for this session */
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
