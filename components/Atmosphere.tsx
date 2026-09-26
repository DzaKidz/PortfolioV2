const MOTES = [
  { left: "8%", top: "18%", size: 5, dur: "9s", delay: "0s" },
  { left: "18%", top: "66%", size: 4, dur: "11s", delay: "-3s" },
  { left: "32%", top: "30%", size: 6, dur: "13s", delay: "-6s" },
  { left: "47%", top: "74%", size: 4, dur: "10s", delay: "-2s" },
  { left: "58%", top: "14%", size: 5, dur: "12s", delay: "-8s" },
  { left: "70%", top: "48%", size: 3, dur: "9s", delay: "-5s" },
  { left: "82%", top: "26%", size: 5, dur: "14s", delay: "-1s" },
  { left: "90%", top: "70%", size: 4, dur: "10s", delay: "-7s" },
];

/**
 * Lapisan atmosfer site-wide: aura cahaya yang melayang pelan,
 * hembusan garis angin, dan debu cahaya. Murni CSS, calm & murah
 * (tanpa JS/scroll listener). Nonaktif saat reduced-motion.
 */
export default function Atmosphere() {
  return (
    <div className="atmos-layer" aria-hidden="true">
      <div className="atmos-aura atmos-aura-a" />
      <div className="atmos-aura atmos-aura-b" />
      <div className="atmos-wind atmos-w1" />
      <div className="atmos-wind atmos-w2" />
      <div className="atmos-wind atmos-w3" />
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="atmos-mote"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animationDuration: m.dur,
            animationDelay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
