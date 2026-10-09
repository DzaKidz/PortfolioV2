export type ProjectCategory = "graphic" | "motion" | "video" | "frontend";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  categoryLabelEn: string;
  desc: string;
  descEn: string;
  longDesc: string;
  longDescEn: string;
  tags: string[];
  role: string;
  year: string;
  thumb: string;
  /** Additional images for carousel. When length >= 2, modal renders ProjectCarousel. */
  gallery?: string[];
  live: string | null;
  repo: string | null;
}

export const badgeClassFor = (category: ProjectCategory): string => {
  switch (category) {
    case "graphic":
      return "badge-accent";
    case "motion":
      return "badge-primary";
    case "video":
      return "badge-teal";
    case "frontend":
      return "badge-green";
    default:
      return "badge-muted";
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Poster Mental Health",
    category: "graphic",
    categoryLabel: "Desain Grafis",
    categoryLabelEn: "Graphic Design",
    desc: "Perancangan identitas visual lengkap mencakup logo, tipografi, panduan warna, packaging kopi, dan materi promosi.",
    descEn:
      "A complete visual identity covering logo, typography, color guides, coffee packaging and promo materials.",
    longDesc:
      'Lumin Coffee adalah proyek branding menyeluruh yang menggabungkan estetika modern dan hangat. Mulai dari konsep logo geometris, palet warna tanah yang elegan, sistem tipografi brand, hingga desain packaging biji kopi premium dan merchandise.',
    longDescEn:
      "Lumin Coffee is an end-to-end branding project blending a modern, warm aesthetic — from a geometric logo concept and elegant earthy palette to a brand type system, premium coffee-bean packaging and merchandise.",
    tags: ["Adobe Illustrator", "Photoshop", "Poster Design"],
    role: "Lead Graphic Designer",
    year: "2026",
    thumb: "/images/Poster Mental Health.jpg",
    gallery: [
      "/images/Poster Mental Health.jpg",
      "/images/avatar.jpg",
      "/images/avatar2.jpg",
    ],
    live: "#",
    repo: null,
  },
  {
    id: 2,
    title: "Motion Design - Bumper Incerfest",
    category: "motion",
    categoryLabel: "Motion Design",
    categoryLabelEn: "Motion Design",
    desc: "Animasi promosi produk 3D dengan dynamic camera movement, kinetic typography, dan audio visual synchronization.",
    descEn:
      "3D product promo animation with dynamic camera movement, kinetic typography and audiovisual sync.",
    longDesc:
      'Proyek motion graphic promosi untuk produk wireless earbuds fiktif "Aero". Menggunakan teknik 3D motion, visualisasi ledakan komponen (exploded view), pencahayaan futuristik, dan transisi ritmis yang memikat mata calon konsumen.',
    longDescEn:
      'A motion-graphics promo for the fictional "Aero" wireless earbuds — 3D motion techniques, exploded component views, futuristic lighting and rhythmic transitions that hook potential customers.',
    tags: ["After Effects", "Cinema 4D / Blender", "Motion Graphics", "Sound Design"],
    role: "Motion Designer",
    year: "2026",
    thumb: "/images/Bumper Incerfest.webm",
    live: "#",
    repo: null,
  },
  {
    id: 3,
    title: "Cinematic Commercial Reel — Urban Horizon",
    category: "video",
    categoryLabel: "Video Editing",
    categoryLabelEn: "Video Editing",
    desc: "Editing video promosi gaya hidup urban dengan color grading sinematik, fast-paced rhythm, dan visual effects halus.",
    descEn:
      "Urban-lifestyle promo edit with cinematic color grading, fast-paced rhythm and subtle visual effects.",
    longDesc:
      "Video promosi komersial dengan alur narasi cepat dan emosional. Menggunakan perpaduan color grading khusus (teal & orange filmic), sound design atmosferik, beat-synced cutting, dan tipografi judul dinamis untuk kampanye digital.",
    longDescEn:
      "A fast, emotional commercial narrative mixing signature teal-and-orange filmic grading, atmospheric sound design, beat-synced cutting and dynamic title typography for digital campaigns.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "Sound FX"],
    role: "Video Editor & Colorist",
    year: "2024",
    thumb: "/images/Poster Mental Health.jpg",
    live: "#",
    repo: null,
  },
  {
    id: 4,
    title: "DevCraft Studio — Interactive Frontend UI",
    category: "frontend",
    categoryLabel: "Frontend Web",
    categoryLabelEn: "Frontend Web",
    desc: "Website portofolio interaktif berbasis React & Tailwind CSS dengan animasi micro-interaction dan dark-mode premium.",
    descEn:
      "An interactive React & Tailwind portfolio site with micro-interaction animations and premium dark mode.",
    longDesc:
      "Landing page modern dan ultra-responsif yang dibangun khusus untuk menampilkan karya visual. Dilengkapi dengan smooth scrolling, parallax orbs, sistem komponen modular, dan performa tinggi (100% score pada Core Web Vitals).",
    longDescEn:
      "A modern, ultra-responsive landing page built to showcase visual work — smooth scrolling, parallax orbs, a modular component system and top performance (100% Core Web Vitals scores).",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    role: "Frontend Developer",
    year: "2024",
    thumb: "/images/avatar.jpg",
    live: "#",
    repo: "https://github.com/ahmadzaky",
  },
  {
    id: 5,
    title: "Social Media Campaign & Kinetic Promo",
    category: "motion",
    categoryLabel: "Motion Design",
    categoryLabelEn: "Motion Design",
    desc: "Paket konten video reels dan poster kinetik animasi untuk kampanye peluncuran produk digital di Instagram & TikTok.",
    descEn:
      "Reels and kinetic-poster animation packs for a digital product launch across Instagram & TikTok.",
    longDesc:
      "Serangkaian aset motion graphics vertikal (9:16) dan feed interaktif berkecepatan tinggi. Dirancang untuk meningkatkan engagement dan retention rate audiens media sosial melalui tipografi kinetik, motion blur dinamis, dan efek transisi seamless.",
    longDescEn:
      "A series of vertical (9:16) motion-graphics assets and high-tempo interactive feed posts — kinetic typography, dynamic motion blur and seamless transitions engineered for engagement and retention.",
    tags: ["After Effects", "Illustrator", "Kinetic Typography", "Social Media"],
    role: "Motion Designer",
    year: "2023",
    thumb: "/images/avatar.jpg",
    live: "#",
    repo: null,
  },
  {
    id: 6,
    title: "Exhibition Poster Series & Event Teaser",
    category: "graphic",
    categoryLabel: "Desain Grafis",
    categoryLabelEn: "Graphic Design",
    desc: "Eksplorasi tipografi eksperimental dan serial poster festival seni rupa kontemporer dengan layout berani.",
    descEn:
      "Experimental typography and a bold contemporary art-festival poster series.",
    longDesc:
      "Koleksi poster serial untuk pameran seni digital. Menggabungkan unsur swiss style typography, distorsi grafis presisi, palet warna duotone berkarakter, serta komposisi visual yang menonjolkan pesan artistik.",
    longDescEn:
      "A serial poster collection for a digital art exhibition — Swiss-style typography, precise graphic distortion, a characterful duotone palette and compositions that carry the artistic message.",
    tags: ["Adobe Photoshop", "Illustrator", "Editorial Design", "Typography"],
    role: "Graphic Designer",
    year: "2023",
    thumb: "/images/Poster Mental Health.jpg",
    gallery: [
      "/images/Poster Mental Health.jpg",
      "/images/avatar.jpg",
      "/images/avatar2.jpg",
    ],
    live: "#",
    repo: null,
  },
];

export const isVideoThumb = (src: string) =>
  /\.(webm|mp4|mov)$/i.test(src);
