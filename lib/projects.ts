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
  /** `null` when no real still exists yet; the card shows a labelled placeholder. */
  thumb: string | null;
  /** Additional images for the modal carousel, when real ones exist. */
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
    desc: "Poster kampanye kesehatan mental dengan hierarki tipografi dan komposisi yang terbaca dari jauh.",
    descEn:
      "A mental-health campaign poster built on type hierarchy and composition that reads from a distance.",
    longDesc:
      "Poster untuk kampanye kesehatan mental. Fokus pada hierarki tipografi, kontras warna, dan komposisi yang tetap terbaca dari jarak jauh.",
    longDescEn:
      "A poster for a mental-health campaign, centred on type hierarchy, colour contrast and a composition that still reads from a distance.",
    tags: ["Adobe Illustrator", "Photoshop", "Poster Design"],
    role: "Lead Graphic Designer",
    year: "2026",
    thumb: "/images/Poster Mental Health-960.jpg",
    live: null,
    repo: null,
  },
  {
    id: 2,
    title: "Motion Design - Bumper Incerfest",
    category: "motion",
    categoryLabel: "Motion Design",
    categoryLabelEn: "Motion Design",
    desc: "Bumper acara Incerfest: animasi 2D dan 3D yang disinkronkan ke audio.",
    descEn:
      "An Incerfest event bumper: 2D and 3D animation synced to the soundtrack.",
    longDesc:
      "Bumper untuk acara Incerfest. Animasi dibangun di After Effects dengan elemen 3D dari Blender, lalu dipotong mengikuti audio.",
    longDescEn:
      "A bumper for the Incerfest event. The animation is built in After Effects with 3D elements from Blender, then cut to the soundtrack.",
    tags: ["After Effects", "Blender", "Motion Graphics", "Sound Design"],
    role: "Motion Designer",
    year: "2026",
    thumb: "/images/Bumper Incerfest-720.webm",
    live: null,
    repo: null,
  },
  {
    id: 3,
    title: "Cinematic Commercial Reel - Urban Horizon",
    category: "video",
    categoryLabel: "Video Editing",
    categoryLabelEn: "Video Editing",
    desc: "Reel komersial bergaya sinematik dengan grading teal-orange dan cut mengikuti beat.",
    descEn:
      "A cinematic commercial reel with teal-orange grading and beat-matched cuts.",
    longDesc:
      "Reel komersial dengan pendekatan naratif cepat: grading teal-orange, sound design atmosferik, dan cut yang mengikuti beat musik.",
    longDescEn:
      "A commercial reel with a fast narrative approach: teal-orange grading, atmospheric sound design and cuts that follow the music.",
    tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "Sound FX"],
    role: "Video Editor & Colorist",
    year: "2024",
    thumb: null,
    live: null,
    repo: null,
  },
  {
    id: 4,
    title: "DevCraft Studio - Interactive Frontend UI",
    category: "frontend",
    categoryLabel: "Frontend Web",
    categoryLabelEn: "Frontend Web",
    desc: "Portofolio interaktif dengan React dan Tailwind CSS: komponen modular dan micro-interaction.",
    descEn:
      "An interactive portfolio built with React and Tailwind CSS: modular components and micro-interactions.",
    longDesc:
      "Landing page responsif untuk menampilkan karya visual. Smooth scrolling, sistem komponen modular, dan micro-interaction, dibangun dengan React, Vite, dan Tailwind CSS.",
    longDescEn:
      "A responsive landing page for showing visual work: smooth scrolling, a modular component system and micro-interactions, built with React, Vite and Tailwind CSS.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    role: "Frontend Developer",
    year: "2024",
    thumb: null,
    live: null,
    repo: null,
  },
  {
    id: 5,
    title: "Social Media Campaign & Kinetic Promo",
    category: "motion",
    categoryLabel: "Motion Design",
    categoryLabelEn: "Motion Design",
    desc: "Paket konten reels dan poster kinetik untuk kampanye peluncuran produk digital.",
    descEn:
      "Reels and kinetic poster packs for a digital product launch campaign.",
    longDesc:
      "Aset motion graphics vertikal 9:16 dan poster kinetik untuk kampanye media sosial, dibangun dari tipografi kinetik, motion blur, dan transisi antar-potongan.",
    longDescEn:
      "Vertical 9:16 motion-graphics assets and kinetic posters for a social campaign, built from kinetic typography, motion blur and transitions between cuts.",
    tags: ["After Effects", "Illustrator", "Kinetic Typography", "Social Media"],
    role: "Motion Designer",
    year: "2023",
    thumb: null,
    live: null,
    repo: null,
  },
  {
    id: 6,
    title: "Exhibition Poster Series & Event Teaser",
    category: "graphic",
    categoryLabel: "Desain Grafis",
    categoryLabelEn: "Graphic Design",
    desc: "Seri poster pameran seni dengan tipografi eksperimental dan palet duotone.",
    descEn:
      "An art-exhibition poster series with experimental typography and a duotone palette.",
    longDesc:
      "Seri poster untuk pameran seni digital: tipografi eksperimental, distorsi grafis, dan palet duotone yang menopang pesan artistiknya.",
    longDescEn:
      "A poster series for a digital art exhibition: experimental typography, graphic distortion and a duotone palette that carries the artistic message.",
    tags: ["Adobe Photoshop", "Illustrator", "Editorial Design", "Typography"],
    role: "Graphic Designer",
    year: "2023",
    thumb: null,
    live: null,
    repo: null,
  },
];

export const isVideoThumb = (src: string | null) =>
  src !== null && /\.(webm|mp4|mov)$/i.test(src);
