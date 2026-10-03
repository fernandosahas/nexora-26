import { eventData, venueLine } from "@/data/event";
import { CrownIcon } from "./Icons";

// Deterministic positions so server and client markup always match.
const FOOTER_STARS = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 78}%`,
  size: i % 5 === 0 ? 3 : 2,
  delay: `${((i * 0.37) % 3.4).toFixed(2)}s`,
}));

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden px-5 pb-12 pt-20 text-center">
      {/* subtle celestial animation */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {FOOTER_STARS.map((s, i) => (
          <span
            key={i}
            className="absolute animate-twinkle rounded-full bg-gold-200"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gold-400/[0.07] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>

      <div className="relative">
        <CrownIcon className="mx-auto h-7 w-7 text-gold-300/80" />
        <p className="mt-4 font-display text-2xl font-semibold tracking-[0.08em] text-gold-gradient">
          {eventData.name}
        </p>
        <p className="mt-1 font-display text-[0.7rem] uppercase tracking-[0.5em] text-gold-200/90">
          {eventData.subtitle}
        </p>

        <p className="mt-6 font-serif text-lg italic text-slate-300">{eventData.community}</p>
        <p className="mt-3 text-sm tracking-wide text-slate-400">{venueLine}</p>
        <p className="mt-1 text-sm tracking-wide text-slate-400">{eventData.date}</p>
      </div>
    </footer>
  );
}
