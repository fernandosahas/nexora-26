import { eventData } from "@/data/event";
import Reveal from "./Reveal";

/** A crown drawn as a constellation: stars joined by fine gold lines. */
function ConstellationCrown() {
  const pts: [number, number][] = [
    [20, 92], // 0 base left
    [34, 38], // 1 left tip
    [66, 66], // 2 left valley
    [100, 20], // 3 centre tip
    [134, 66], // 4 right valley
    [166, 38], // 5 right tip
    [180, 92], // 6 base right
  ];
  const lines: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 0],
  ];
  const tips = new Set([1, 3, 5]);

  return (
    <svg viewBox="0 0 200 120" className="mx-auto h-auto w-full max-w-[19rem]" role="img" aria-label="Crown formed from constellation stars">
      <defs>
        <radialGradient id="starGlow">
          <stop offset="0%" stopColor="#fbf0c8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#e0b95a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lines.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={pts[a][0]}
          y1={pts[a][1]}
          x2={pts[b][0]}
          y2={pts[b][1]}
          stroke="#e0b95a"
          strokeOpacity="0.6"
          strokeWidth="0.8"
        />
      ))}
      {pts.map(([x, y], i) => (
        <g key={i} className="animate-twinkle" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.45}s` }}>
          <circle cx={x} cy={y} r={tips.has(i) ? 9 : 6} fill="url(#starGlow)" opacity="0.7" />
          <circle cx={x} cy={y} r={tips.has(i) ? 2.6 : 1.8} fill="#fbf0c8" />
        </g>
      ))}
      {/* a few loose background stars */}
      {[
        [8, 20],
        [190, 18],
        [52, 12],
        [150, 10],
        [100, 108],
        [14, 62],
        [188, 64],
      ].map(([x, y], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r="0.9" fill="#dfe6ff" className="animate-twinkle" style={{ animationDelay: `${i * 0.6}s` }} />
      ))}
    </svg>
  );
}

export default function ThemeSection() {
  const { theme, themeSection } = eventData;

  return (
    <section id="theme" className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,185,90,0.14),rgba(109,92,224,0.1)_45%,transparent_70%)] blur-2xl" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow">{themeSection.caption}</p>
        <div className="mt-6">
          <ConstellationCrown />
        </div>
        <h2 className="mt-4 font-display text-[clamp(1.9rem,8.5vw,3.6rem)] font-semibold uppercase leading-tight tracking-[0.14em] text-gold-gradient drop-shadow-[0_0_24px_rgba(224,185,90,0.3)]">
          {theme}
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-serif text-[1.35rem] italic leading-relaxed text-slate-200 sm:text-2xl">
          “{themeSection.quote}”
        </p>
      </Reveal>
    </section>
  );
}
