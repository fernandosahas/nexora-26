import { eventData } from "@/data/event";
import { CrownIcon } from "./Icons";
import Reveal from "./Reveal";

export default function About() {
  const { heading, paragraphs, pillars } = eventData.about;

  return (
    <section id="about" className="relative px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <CrownIcon className="mx-auto h-8 w-8 text-gold-300/80" />
        <h2 className="mt-5 font-display text-[1.9rem] font-semibold leading-tight tracking-[0.06em] text-gold-gradient sm:text-4xl">
          {heading}
        </h2>
        <div className="mx-auto mt-6 space-y-4 font-serif text-[1.3rem] leading-relaxed text-slate-200 sm:text-2xl">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {pillars.map((pillar) => (
            <li
              key={pillar}
              className="rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-2 font-display text-[0.7rem] uppercase tracking-[0.25em] text-gold-200"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
